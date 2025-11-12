import { Request, Response } from "express";
import { queryContractInfoWithTablet, queryBlockedInfo, queryAccountInfoWithMobile } from '../../shared/queries';
import { ResultData } from '../../shared/result';

// @POST /api/tablet/qrtag 
// 출역 QR코드
async function QrTag(req: Request, res: Response) {
  const { qr, site_code } = req.body;

  try {
    /*
    * 원본 .NET 코드에는 암호화된 QR 체크 로직이 있으나, 주석처리된 부분으로 인해 다 스킵이 되는 로직임
    * 따라서, 본 Node 코드에 옮기지 않음
    */

    // 근로자만 가능 
    const mobile = qr.replaceAll('-', '');

    const accInfo = await queryAccountInfoWithMobile(mobile);

    if (!accInfo) {
      return res.status(404).json(ResultData.error({ message: "QR 태그에 해당하는 모바일 번호가 존재하지 않습니다" }));
    }

    // 계약정보 체크
    const contractInfo = await queryContractInfoWithTablet(site_code, accInfo.code);
    if (!contractInfo) {
      return res.status(404).json(ResultData.error({ message: "근로자 계약정보 없음", msg_code: -1 }));
    }

    // 차단된 근로자 체크
    const blockedInfo = await queryBlockedInfo(accInfo.code);
    if (blockedInfo && blockedInfo.state === 1) {
      return res.status(403).json(ResultData.error({ message: "차단된 근로자 입니다", msg_code: -2 }));
    }

    // 미승인 근로자 체크
    if (contractInfo.is_approval === 0) {
      return res.status(403).json(ResultData.error({ message: "미승인 근로자 입니다", msg_code: -3 }));
    }
  
    return res.status(200).json(ResultData.ok({
      data: accInfo.name,
      name: accInfo.name,
      account_code: accInfo.code,
      sosok: contractInfo.sosok,
      mobile: accInfo.mobile,
      contract_code: contractInfo.code,
      client_code: accInfo.client_code,
      last_site_code: accInfo.last_site_code,
      auth_code: accInfo.auth_code
    }));
  } catch (error) {
    return res.status(500).json({ result: false, msg: error });
  }
}

export default QrTag;
