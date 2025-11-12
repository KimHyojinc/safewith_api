import { Request, Response } from "express";
import {  queryAccountInfo, queryContractInfoWithTablet, queryBlockedInfo, queryHealthInfoBP, saveHealthInfoBP } from '../../shared/queries';
import moment from 'moment';
import { ResultData } from '../../shared/result';
import { tb_health_bpAttributes } from '../../models/init-models';

// @POST 혈압 데이터 등록
async function RegBp(req: Request, res: Response) {
  const { site_code, account_code, bp_max, bp_min } = req.body;

  try {
    const today = moment().format("YYYY-MM-DD");

    const accInfo = await queryAccountInfo(account_code);
    if (!accInfo) {
      return res.status(404).json(ResultData.error({ message: "근로자 가입정보 없음" }));
    }

    const contractInfo = await queryContractInfoWithTablet(site_code, account_code);
    if (!contractInfo) {
      return res.status(404).json(ResultData.error({ message: "근로자 계약정보 없음", msg_code: -2 }));
    }

    // 차단된 근로자 체크
    const blockedInfo = await queryBlockedInfo(account_code);
    if (blockedInfo && blockedInfo.state === 1) {
      return res.status(403).json(ResultData.error({ message: "차단된 근로자 입니다", msg_code: -3 }));
    }
    
    // 미승인 근로자 체크
    if (contractInfo.is_approval === 0) {
      return res.status(403).json(ResultData.error({ message: "미승인 근로자 입니다", msg_code: -4 }));
    }

    // today's healthInfo 가져오기
    // const hinfoToday = await queryHealthInfoBP(site_code, account_code, now);
    
    const hinfo: tb_health_bpAttributes = {
      code: -1,  // 타입 통과를 위한 임시 방편 -> 그래서 hinfo 통째로 INSERT 넣으면 안 됨
      account_code,
      site_code,
      bp_max,
      bp_min,
      measure_dt: today,
      reg_dt: moment().toDate()
    };

    const isSuccess = await saveHealthInfoBP(hinfo);
    if (!isSuccess) {
      return res.status(500).json(ResultData.error({ message: "혈압 데이터 기록에러", msg_code: -3 }));
    }
    
    return res.status(201).json(ResultData.ok({
      data: accInfo.name,
      name: accInfo.name,
      account_code: accInfo.code,
      sosok: contractInfo.sosok
    }));
  } catch (error) {
    return res.status(500).json({ result: false, msg: error });
  }
}

export default RegBp;
