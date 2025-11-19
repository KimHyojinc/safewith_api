import { Request, Response } from "express";
import { queryAccountInfo, updateAccountInfoFace } from '../../shared/queries';
import { ResultData } from '../../shared/result';
import { convertBase64ToString } from '../../middleware/util';

/**
 * @route POST /api/regface
 * @param account_code 계정고유코드
 * @param face 안면인식정보 (base64Template)
 * @summary 얼굴인식 등록
 */
async function RegFace(req: Request, res: Response) {
  const { account_code, face } = req.body;

  try {
    const convertedFace = convertBase64ToString(face);
    //인증된 사용자 account_code
    const accountInfo = await queryAccountInfo(account_code);
    
    if (!accountInfo) {
      return res.status(404).json(ResultData.error({
        message: "존재하지 않는 아이디입니다"
      }));  
    }
    accountInfo.face = convertedFace;

    const isSuccess = await updateAccountInfoFace(accountInfo.code, convertedFace);

    if (!isSuccess) {
      return res.status(409).json(ResultData.error({
        message: "얼굴등록 실패"
      }));
    }

    return res.status(200).json(ResultData.ok());
  } catch (error) {
    return res.status(500).json({ result: false, msg: error });
  }
}

export default RegFace;
