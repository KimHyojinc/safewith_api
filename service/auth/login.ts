import { Request, Response, NextFunction } from 'express';
import { models } from '../../data-source';
import { convertBase64ToString, dev_mode, verifyPassword } from '../../middleware/util';
import { generateToken, verifyToken } from '../../middleware/jwt';
import { setAuthCookie } from '../../middleware/auth';
import { ResultData } from '../../shared/result';
import { AdminType } from '../../shared/enums';

// [2025-11-07] NOTE: 혹시 나중에 admin, worker 구분해야하면, jwt payload로 구분
async function Login(req: Request, res: Response) {
    const { id, pw } = req.body;
    
    try {
        const userInstance = await models.tb_user.findOne({
            where: {
                id: String(id),
            }
        });

        if(!userInstance) {
            return res.status(404).json({ result: false, message: '존재하지 않는 회원 아이디입니다.' });
        } 

        // plain: javascript 객체로 변환
        const userInfo = userInstance.get({ plain: true });

        if(userInfo.is_del == 'Y') {
            return res.status(403).json({ result: false, message: '이미 탈퇴한 회원입니다.' });
        }

        const isPassword = verifyPassword(String(convertBase64ToString(pw)), String(userInfo.pw));

        if (!isPassword) {
            return res.status(403).json({ result: false, message: '비밀번호가 일치하지 않습니다.' });
        }

        const accountInstance = await models.tb_account.findOne({
            where: {
                user_code: userInfo.code,
            }
        });

        if(accountInstance) {
            // tb_lib의 AUTH_CODE 참조
            const accountInfo = accountInstance.get({ plain: true });

            if (accountInfo.auth_code === AdminType.NONE) {
                return res.status(403).json({ result: false, message: '관리자 권한이 없음!!' });
            }

            // tb_client 
            const clientInstance = await models.tb_client.findOne({
                where: {
                    code: accountInfo.client_code
                }
            });

            if (!clientInstance) {
                return res.status(403).json({ result: false, message: '관리자 소속없음!!' });
            }

            if (accountInfo.allowed_code === 0) {
                return res.status(403).json({ result: false, message: '관리자 가입 승인안됨' });
            }

            if (accountInfo.state_code === 1) {
                return res.status(403).json({ result: false, message: '관리자 탈퇴 상태' });
            }

            const clientInfo = clientInstance.get({ plain: true });

            // token, cookie
            // NOT_SURE: payload에 AdminType 정보 담기 
            const auth_code =
                accountInfo.auth_code === AdminType.SYSTEM ? AdminType.SYSTEM
                    : accountInfo.auth_code === AdminType.MASTER ? AdminType.MASTER
                        : accountInfo.auth_code === AdminType.TOTAL ? AdminType.TOTAL
                            : accountInfo.auth_code === AdminType.GENERAL ? AdminType.GENERAL
                                : AdminType.NONE;
            const payload = {
                account_code: accountInfo.code,
                auth_code
            };

            const token = generateToken(payload);
            setAuthCookie(res, token);

            const ret = ResultData.ok({
                data: accountInfo.name,
                name: accountInfo.name,
                account_code: accountInfo.code,
                client_code: accountInfo.client_code,
                sosok: clientInfo?.name,
                last_site_code: accountInfo.last_site_code,
                site_code: accountInfo.admin_site_code,
                auth_code: accountInfo.auth_code
            });

            return res.status(200).json({ ...ret });
        } else {
            return res.status(401).json({ result: false, message: '아이디 및 패스워드확인' });
        }

    } catch (error) {
        return res.status(500).json({ result: false, message: error });
    }
}

export default Login;
