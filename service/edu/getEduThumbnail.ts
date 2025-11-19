import { Request, Response } from "express";
import { queryEduContentsWithCode } from '../../shared/queries';

// NOTE: 삭제
// @GET /api/edu/thumbnail/:edu_contents_code
// 교육 콘텐츠 썸네일
async function GetEduThumbnail(req: Request, res: Response) {
  const { edu_contents_code } = req.params;

  try {
    const item = await queryEduContentsWithCode(Number(edu_contents_code));

    if (!item) { 
      return res.status(404).json({ result: false, message: "NOT FOUND" });
    }

    if (!item.thumbnail) {
      return res.status(204).json({ result: true, message: "No Content" });
    }

    const base64Data = item.thumbnail.replace(/^data:image\/\w+;base64,/, "");
    const imageBuffer = Buffer.from(base64Data, 'base64');

    return res.status(200)
      .contentType('image/jpeg')
      .send(imageBuffer);
  } catch (error) {
    return res.status(500).json({ result: false, msg: error });
  }
}

export default GetEduThumbnail;