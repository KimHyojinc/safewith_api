import { Request, Response } from "express";
import { queryEduContentsWithCode } from '../../shared/queries';
import { changeExtension } from '../../middleware/util';

// @POST 교육 콘텐츠
async function GetEduContentsDetail(req: Request, res: Response) {
  const { edu_contents_code } = req.body;

  try {
    const item = await queryEduContentsWithCode(edu_contents_code);

    if (!item) { 
      return res.status(404).json({ result: false, message: "NOT FOUND" });
    }

    const path = "http://localhost:8091/Uploads/Edu";  // Original C#에서 그대로 가져옴

    return res.status(200).json({ 
      edu_contents_code: item.code,
      edu_code: item.edu_code,
      file_name: item.file_name,
      movie_url: item.file_path,
      thumbnail: `${path}/${changeExtension(item.file_name, '.jpg')}`
    });
  } catch (error) {
    return res.status(500).json({ result: false, msg: error });
  }
}

export default GetEduContentsDetail;