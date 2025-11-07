import { Request, Response } from "express";
import moment from 'moment';
import { changeExtension } from '../../middleware/util';
import { queryLibLabel, queryEduDetail } from '../../shared/queries';
import { EduListItem, EduSchInfo } from '../../shared/edu';

async function GetEduDetail(req: Request, res: Response) {
  const { edu_code } = req.body;

  try {
    const item = await queryEduDetail(edu_code);
    
    if (!item) { 
      return res.status(404).json({ result: false, message: "NOT FOUND" });
    }

    const path = "http://localhost:8091/Uploads/Edu";  // Original C#에서 그대로 가져옴

    const edu_type = await queryLibLabel('EDU_TYPE', (item as EduSchInfo).type_code) ?? "";
    const const_type = await queryLibLabel('CONST_TYPE', (item as EduSchInfo).const_type_code) ?? "";

    const result: EduListItem = {
      no: 1,
      edu_sch_code: 0,
      edu_code: (item as EduSchInfo).code,
      edu_contents_code: 0,
      edu_type,
      const_type,
      subject: (item as EduSchInfo).subject,
      exp_begin: (item as EduSchInfo).exp_begin,
      exp_end: (item as EduSchInfo).exp_end,
      reg_dt: moment((item as EduSchInfo).reg_dt).format("YYYY.MM.DD"),
      movie_url: (item as EduSchInfo).file_path,
      filename: (item as EduSchInfo).file_name,
      thumbnail: `${path}/${changeExtension((item as EduSchInfo).file_name, '.jpg')}`
    }; 

    return res.status(200).json({ ...result });
  } catch (error) {
    return res.status(500).json({ result: false, msg: error });
  }
}

export default GetEduDetail;