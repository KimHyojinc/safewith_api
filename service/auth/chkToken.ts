import { Request, Response } from 'express';
import { queryProfile } from '../../shared/queries';
import { convertBase64ToString, cryptoHashPassword } from '../../middleware/util';
import { ResultData } from '../../shared/result';
import dayjs from 'dayjs';

/**
 * @route POST /api/chktoken
 * @param userid 유저아이디
 * @param token 토큰 (base64)
 * @summary 토큰 인증
 */
async function ChkToken(req: Request, res: Response) {
    const { userid, token } = req.body;

    try {
        const convertedToken = convertBase64ToString(token);

        // 계정 체크
        const profileInfo = await queryProfile(userid);
        if (!profileInfo) {
            return res.status(404).json(ResultData.error({
                message: "존재하지 않는 아이디입니다"
            }));
        }

        const key = `${userid}${dayjs().format('YYYYMMDDHHmm')}`;
        const hashToken = cryptoHashPassword(key);

        if (hashToken !== convertedToken) {
            return res.status(401).json(ResultData.error({
                message: "토큰 인증실패"
            }));
        }

        return res.status(200).json(ResultData.ok());
    } catch (error) {
        return res.status(500).json({ result: false, msg: error });
    }
}

export default ChkToken;
