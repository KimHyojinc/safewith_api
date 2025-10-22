import { Request, Response } from 'express';
import moment from 'moment';
import { models } from '../../../data-source';
import { dev_mode, verifyPassword } from '../../../middleware/util';

async function Login(req: Request, res: Response) {
    const { id, pw } = req.body;
    
    if(id == '' || id == undefined) {
        return res.status(404).json({ result: false, msg: '필드가 없습니다. id' });
    }
    if(pw == '' || pw == undefined) {
        return res.status(404).json({ result: false, msg: '필드가 없습니다. pw' });
    }
    try {
        const userInstance = await models.tb_user.findOne({
            where: {
                id: String(id),
            }
        });
        console.log('dev_mode', dev_mode);

        if(!userInstance) {
            return res.status(404).json({ result: false, msg: '존재하지 않는 회원 아이디입니다.' });
        } else {
            const userInfo = userInstance.get({ plain: true });

            if(userInfo.is_del == 'Y') {
                return res.status(403).json({ result: false, msg: '이미 탈퇴한 회원입니다.' });
            }

            var isPassword = verifyPassword(String(pw), String(userInfo.pw));
            if(isPassword) {
                // tb_auth 관리자 권한 조회 가능
                if(
                    userInfo.auth_code <= 0 && 
                    userInfo.auth_code != 10 && 
                    userInfo.auth_code != 20 && 
                    userInfo.auth_code != 30 && 
                    userInfo.auth_code != 99) {
                    return res.status(403).json({ result: false, msg: '관리자 코드 권한이 없습니다.' });
                }

                // return res.status(200).json({ result: true, msg: '관리자 코드 권한이 없습니다.', data: userInfo });
                const accountInstance = await models.tb_account.findOne({
                    where: {
                        user_code: userInfo.code,
                    }
                });
                if(accountInstance) {
                    // tb_lib의 AUTH_CODE 참조
                    const accountInfo = accountInstance.get({plain: true});
                    if(accountInfo.auth_code == 46) {
                        
                    }

                } else {
                    return res.status(404).json({ result: false, msg: '존재하지 않는 회원 아이디입니다.' });
                }
                // var auth_code = 
            } else {
                return res.status(403).json({ result: false, msg: '비밀번호가 일치하지 않습니다.' });
            }
        }

    } catch (error) {
        return res.status(500).json({ result: false, msg: error });
    }
}

export default Login;
