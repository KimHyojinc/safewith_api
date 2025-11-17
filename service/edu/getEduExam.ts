import { Request, Response } from "express";
import { queryEduExamContentsWithEduCode, queryEduExamInfoWithEduCode } from '../../shared/queries';

// @POST /api/eduexam
// 교육 시험 문제
async function GetEduExam(req: Request, res: Response) {
  // NOTE: account_code .NET 코드에서도 받기만 하고 안 씀
  const { edu_code, account_code } = req.body;

  try {
    const einfo = await queryEduExamInfoWithEduCode(edu_code);

    if (!einfo) { 
      return res.status(404).json({ result: "NG", message: "시험지 정보 없음!" });
    }

    const items = await queryEduExamContentsWithEduCode(edu_code);

    if (!items) {
      return res.status(404).json({ result: "NG", message: "시험지 문항 정보 없음!" });
    }

    let no = 1;
    const contents = items.map(item => ({
      no: no++,
      code: item.code,
      edu_exam_code: item.edu_exam_code,
      question: item.question,
      answer1: item.answer1,
      answer2: item.answer2,
      answer3: item.answer3,
      answer4: item.answer4,
      answer5: item.answer5,
      correct: item.correct,
    }));

    const data = {
      code: einfo.code,
      edu_code: einfo.edu_code,
      pass_judge: einfo.pass_judge,
      contents
    }

    return res.status(200).json({ 
      result: "OK",
      message: "정상처리",
      data
    });
  } catch (error) {
    return res.status(500).json({ result: false, msg: error });
  }
}

export default GetEduExam;