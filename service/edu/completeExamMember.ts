import { Request, Response } from "express";
import { queryEduExamContentsWithEduCode, queryEduExamInfoWithEduCode } from '../../shared/queries';
import dotenv from 'dotenv';
import { verifyToken } from '../../middleware/jwt';
dotenv.config();

const COOKIE_NAME = process.env.COOKIE_NAME ?? 'auth';

// [미완] @POST 교육 시험 완료
async function CompleteExamMember(req: Request, res: Response) {
  const { edu_code, edu_sch_code, edu_exam_code, account_code, judge_state } = req.body;

  try {
    const token = req.cookies?.[COOKIE_NAME];

    const reg_code = verifyToken(token)['account_code']; // 등록관리자

    // [CONTINUE]: .NET 코드에 body로부터 "edu_exam_judge" 받아오는데, 이게 뭔지.. 

    return res.status(200).json({ 
      result: "OK",
      message: "정상처리",
      reg_code
    });
  } catch (error) {
    return res.status(500).json({ result: false, msg: error });
  }
}

export default CompleteExamMember;