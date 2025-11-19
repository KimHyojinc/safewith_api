import { Request, Response } from "express";
import { queryHealthListTop } from '../../shared/queries';
import dayjs from 'dayjs';

/**
 * @route POST /api/healthlist -- 미정
 * @param site_code 현장고유코드
 * @param account_code 계정고유코드
 * @summary 건강데이터 리스트
 */
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
