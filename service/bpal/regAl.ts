import { Request, Response } from "express";
import { queryAccountInfo, queryContractInfoWithTablet, saveHealthInfoAL } from '../../shared/queries';
import dayjs from 'dayjs';
import { ResultData } from '../../shared/result';
import { tb_health_alcoholAttributes } from '../../models/init-models';

/**
 * @route POST /api/alreg
 * @param site_code 현장고유코드
 * @param account_code 계정고유코드
 * @param alcohol 음주측정데이터
 * @summary 음주 측정 데이터 등록
 */
async function RegAl(req: Request, res: Response) {
  const { site_code, account_code, alcohol } = req.body;

  try {
    const today = dayjs().format("YYYY-MM-DD");

    const accInfo = await queryAccountInfo(account_code);
    if (!accInfo) {
      return res.status(404).json(ResultData.error({ message: "근로자 가입정보 없음" }));
    }

    const contractInfo = await queryContractInfoWithTablet(site_code, account_code);
    if (!contractInfo) {
      return res.status(404).json(ResultData.error({ message: "근로자 계약정보 없음", msg_code: -2 }));
    }

    // today's healthInfo 가져오기
    // const hinfoToday = await queryHealthInfoBP(site_code, account_code, now);

    const hinfo: tb_health_alcoholAttributes = {
      code: -1, // 타입 통과를 위한 임시 방편 -> 그래서 hinfo 통째로 INSERT 넣으면 안 됨
      account_code,
      site_code,
      measures: alcohol,
      measure_dt: today,
      reg_dt: dayjs().toDate()
    }

    const isSuccess = await saveHealthInfoAL(hinfo);
    if (!isSuccess) {
      return res.status(500).json(ResultData.error({ message: "음주측정 데이터 기록에러", msg_code: -3 }));
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

export default RegAl;
