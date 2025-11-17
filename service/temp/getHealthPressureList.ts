import { Request, Response } from "express";
import { queryContractInfoWithTablet, queryBlockedInfo, queryAccountInfoWithMobile, querySiteInfo, queryAccountInfo, queryContractInfo, queryHealthListTop } from '../../shared/queries';
import { ResultData } from '../../shared/result';
import dayjs from 'dayjs';

// @POST /api/healthlist
// 건강데이터 리스트
async function GetHealthPressureList(req: Request, res: Response) {
  const { site_code, account_code } = req.body;

  try {
    const healthInfoItems = await queryHealthListTop(site_code, account_code);

    const responseItems = healthInfoItems?.map((item, idx) => ({
      no: idx + 1,
      bp_max: item.bp_max,
      bp_min: item.bp_min,
      alcohol: item.alcohol,
      oxygen: item.oxygen,
      stress: item.stress,
      time: dayjs(item.reg_dt).format("YYYY/MM/DD HH:mm:ss"),
      comment: ""
    }));

    return res.status(200).json(responseItems);
  } catch (error) {
    return res.status(500).json({ result: false, msg: error });
  }
}

export default GetHealthPressureList;
