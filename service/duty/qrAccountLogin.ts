import { Request, Response } from "express";
import moment from 'moment';
import { queryContractInfoWithTablet, queryBlockedInfo, queryAccountInfoWithMobile, querySiteInfo, queryContractInfoWithSite } from '../../shared/queries';
import { ResultData } from '../../shared/result';
import { ContractType } from '../../shared/enums';

// @POST /api/tablet/qraccount
// QR 계약 체크
async function QrAccountLogin(req: Request, res: Response) {
  const { qr, site_code, contract_type } = req.body;

  try {
    // 근로자만 가능 
    const mobile = qr.replaceAll('-', '');

    // 1: 일용, 2: 용역, 3: 기타
    let ct = ContractType.DAILY;
    if (contract_type === 1) ct = ContractType.DAILY;
    if (contract_type === 2) ct = ContractType.SERVICE;
    if (contract_type === 3) ct = ContractType.ETC;

    const accInfo = await queryAccountInfoWithMobile(mobile);

    if (!accInfo) {
      return res.status(404).json(ResultData.error({ message: "QR 태그에 해당하는 모바일 번호가 존재하지 않습니다" }));
    }

    // 차단된 근로자 체크
    const blockedInfo = await queryBlockedInfo(accInfo.code);
    if (blockedInfo && blockedInfo.state === 1) {
      return res.status(403).json(ResultData.error({ message: "차단된 근로자 입니다", msg_code: -12 }));
    }

    const siteInfo = await querySiteInfo(site_code);

    // 계약정보 체크
    const contractInfo = await queryContractInfoWithTablet(site_code, accInfo.code);
    // if (!contractInfo) {
    //   return res.status(404).json(ResultData.error({ message: "근로자 계약정보 없음", msg_code: -1 }));
    // }
    
    if (contractInfo && contractInfo.contract_type === ct) {
      // .NET에서 그대로 가져온 것임. 이거 뭔 소리? "해당 현장에는 이미 유효한 근로계약이 존재합니다." 라는 뜻인가?
      const msg = "해당 현장에서 만료된 근로계약이 있는경우에 갱신기능 사용이 가능합니다." 
        + "현재 동일한 현장에 유효한 근로계약이 있는경우에는 유효한 계약이 있습니다.";
      
      return res.status(409).json({
        result: "NG",
        message: msg,
        data: {
          contract_code: contractInfo.code,
          contract_range: `${contractInfo.period_begin_dt} ~ ${contractInfo.period_end_dt}`
        }
      });
    }

    // 유효한 계약정보
    const contractInfoB = await queryContractInfoWithSite(site_code, accInfo.code);

    const ret = ResultData.ok({
      data: accInfo.name,
      name: accInfo.name,
      account_code: accInfo.code,
      family_contact: accInfo.family_contact,
      pno1: accInfo.pno1,
      pno2: accInfo.pno2,
      mobile: accInfo.mobile,
      contract_code: contractInfoB?.code ?? 0,
      contract_reg_dt: contractInfoB?.reg_dt ? moment(contractInfoB?.reg_dt).format('YYYY/MM/DD') : null,
      client_code: accInfo.client_code,
      last_site_code: accInfo.last_site_code,
      auth_code: accInfo.auth_code,
      site_name: siteInfo?.name,
      site_code: site_code
    });

    return res.status(200).json({ result: "OK", data: ret});
  } catch (error) {
    return res.status(500).json({ result: false, msg: error });
  }
}

export default QrAccountLogin;
