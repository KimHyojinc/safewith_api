import { Request, Response } from "express";
import { queryContractInfoWithTablet, queryBlockedInfo, queryAccountInfoWithMobile, querySiteInfo } from '../../shared/queries';
import { ResultData } from '../../shared/result';

/**
 * @route POST /api/qrlogin
 * @param qr QR (휴대전화번호)
 * @param site_code 현장고유코드
 * @summary QR 로그인
 */
async function QrLogin(req: Request, res: Response) {
  const { qr, site_code } = req.body;

  try {
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

    const siteInfo = await querySiteInfo(site_code);

    return res.status(200).json(ResultData.ok({
      data: accInfo.name,
      name: accInfo.name,
      account_code: accInfo.code,
      sosok: contractInfo.sosok,
      mobile: accInfo.mobile,
      contract_code: contractInfo.code,
      client_code: accInfo.client_code,
      last_site_code: accInfo.last_site_code,
      auth_code: accInfo.auth_code,
      site_name: siteInfo?.name ?? ''
    }));
  } catch (error) {
    return res.status(500).json({ result: false, msg: error });
  }
}

export default QrLogin;
