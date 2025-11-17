import { Request, Response } from "express";
import { queryEduSchInfo } from '../../shared/queries';
import { EduSchInfo } from '../../shared/edu';
import { downloadFileAsync } from '../../middleware/util';

// @GET /api/edumovie/:edu_sch_code
// 교육 영상
async function GetEduMovie(req: Request, res: Response) {
  const { edu_sch_code } = req.params;

  try {
    const item = await queryEduSchInfo(Number(edu_sch_code)) as EduSchInfo | null;

    if (!item) { 
      return res.status(404).json({ result: false, message: "NOT FOUND" });
    }

    if (!item.file_name) {
      return res.status(204).json({ result: true, message: "No Content" });
    }

    const fileBytes = await downloadFileAsync(item.file_path);

    return res.status(200)
      .setHeader('Content-Type', 'video/mp4')
      .setHeader('Content-Length', fileBytes.length)
      .send(fileBytes);
  } catch (error) {
    return res.status(500).json({ result: false, msg: error });
  }
}

export default GetEduMovie;