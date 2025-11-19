import { Request, Response } from 'express';
import { login, queryProfile } from '../../shared/queries';
import { convertBase64ToString, cryptoHashPassword } from '../../middleware/util';
import { ResultData } from '../../shared/result';
import dayjs from 'dayjs';

/**
 * @route POST /api/maketoken
 * @param userid 유저아이디
 * @param pw 비밀번호 (비밀번호를 base64로 인코딩한 값)
 * @summary 토큰 생성
 */
async function MakeToken(req: Request, res: Response) {
    const { userid, pw } = req.body;

    try {
        const password = convertBase64ToString(pw);
        // 계정 체크
        const profileInfo = await queryProfile(userid);
        if (!profileInfo) {
            return res.status(404).json(ResultData.error({
                message: "존재하지 않는 아이디입니다"
            }));
        }

        // 사용자 정보 체크
        const hashPassword = cryptoHashPassword(password);
        const accountInfo = await login(userid, hashPassword);

        console.log(accountInfo);

        if (!accountInfo) {
            return res.status(401).json(ResultData.error({
                message: "사용자 아이디 패스워드 확인!!"
            }));
        }

        const key = `${userid}${dayjs().format('YYYYMMDDHHmm')}`;
        const hashToken = cryptoHashPassword(key);

        return res.status(200).json(ResultData.ok({
            data: hashToken
        }));
    } catch (error) {
        return res.status(500).json({ result: false, msg: error });
    }
}

export default MakeToken;
