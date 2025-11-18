import { Request, Response } from "express";
import dayjs from 'dayjs';
import dotenv from 'dotenv';
import { verifyToken } from '../../middleware/jwt';
import { addEduJudgeContentsInfo, addEduJudgeInfo, queryEduMember, updateEduSchMember } from '../../shared/queries';
dotenv.config();

const COOKIE_NAME = process.env.COOKIE_NAME ?? 'AUTH';

// @POST /api/complete_exam 
// 교육 시험 완료
async function CompleteExamMember(req: Request, res: Response) {
  const { edu_code, edu_sch_code, edu_exam_code, account_code, judge_state, edu_exam_judge } = req.body;

  try {
    const token = req.cookies?.[COOKIE_NAME];

    const registerCode = verifyToken(token)['account_code']; // 등록관리자

    const jitem = {
      code: -1, // 타입 체크 통과를 위한 코드. 따로 의미는 없음
      edu_sch_code,
      edu_exam_code,
      account_code,
      register_code: registerCode,
      reg_dt: dayjs().toDate(),
      updater_code: registerCode,
      update_dt: dayjs().toDate(),
    };

    const eduJudgeCode = await addEduJudgeInfo(jitem);

    if (eduJudgeCode <= 0) {
      return res.status(500).json({ result: "NG", message: "시험 이수정보 등록 실패!" });
    }

    edu_exam_judge.forEach(async (item: {
      edu_exam_contents_code: number;
      edu_exam_code: number;
      answer: number
    }) => {
      const ejcItem = {
        code: -1, // 타입 체크 통과를 위한 코드. 따로 의미는 없음
        edu_judge_code: eduJudgeCode,
        edu_exam_contents_code: item.edu_exam_contents_code,
        answer: item.answer
      };

      const isSuccess = await addEduJudgeContentsInfo(ejcItem);
      if (!isSuccess) {
        return res.status(500).json({ result: "NG", message: "시험 이수 컨텐츠 등록 실패!" }); 
      }
    })

    const eitem = await queryEduMember(edu_sch_code, account_code);
    if (!eitem) {
      return res.status(404).json({ result: "NG", message: "시험 이수 정보가 없습니다" }); 
    }

    console.log(`eitem code -- ${eitem.code}`)

    eitem.judge_state = judge_state;

    eitem.complete_dt = dayjs().toDate();
    const isSuccess = await updateEduSchMember(eitem);

    if (!isSuccess) {
      return res.status(500).json({ result: "NG", message: "시험 이수 정보 업데이트 실패 !!", judge_state: 0 });
    }

    return res.status(200).json({ 
      result: "OK",
      message: "시험 이수 완료",
      judge_state: judge_state
    });
  } catch (error) {
    return res.status(500).json({ result: false, msg: error });
  }
}

export default CompleteExamMember;