import { Request, Response } from "express";
import { saveCompleteMemberInfo } from '../../shared/queries';
import dayjs from "dayjs";

// @POST /api/completeedu
// 교육 시험 완료
async function CompleteEduMember(req: Request, res: Response) {
  const { edu_sch_code, account_code } = req.body;

  try {
    const eitem = {
      code: -1, // 타입 체크 통과를 위한 코드. 따로 의미는 없음
      edu_sch_code,
      account_code,
      is_complete: 1,
      complete_dt: dayjs().toDate() 
    }

    const isSuccess = await saveCompleteMemberInfo(eitem);

    if (!isSuccess) {
      // status code 뭐로 해야?
      return res.status(409).json({
        result: "Error",
        message: "교육완료 명단 등록 실패",
        msg_code: -1
      })
    }

    return res.status(201).json({ 
      result: "OK",
      message: "정상처리되었습니다",
      msg_code: 0
    });
  } catch (error) {
    return res.status(500).json({ result: false, msg: error });
  }
}

export default CompleteEduMember;