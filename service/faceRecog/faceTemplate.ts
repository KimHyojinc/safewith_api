import { Request, Response } from "express";
import { queryContractsSiteCodeWithTablet } from '../../shared/queries';
import { ResultType } from '../../shared/enums';

/**
 * @route POST /api/facetemplate
 * @param site_code 현장고유코드
 * @summary 얼굴인식 템플릿
 */
async function FaceTemplate(req: Request, res: Response) {
  const { site_code } = req.body;

  try {
    const contactInfoItems = await queryContractsSiteCodeWithTablet(site_code);

    const workers: {
      code: number;
      name: string;
      mobile: string;
      face?: string;
    }[] = [];

    if (!contactInfoItems || contactInfoItems.length <= 0) {
      return res.status(404).json({
        result: ResultType.ERROR,
        msg_code: -1,
        message: "템플릿이 존재하지 않습니다.",
        workers
      });
    }

    for (const item of contactInfoItems) {
      const workerFaceItem = {
        code: item.account_code,
        name: item.name,
        mobile: item.mobile,
        face: item.face,
      };

      workers.push(workerFaceItem);
    }

    return res.status(200).json({
      result: ResultType.OK,
      msg_code: 0,
      message: "정상처리되었습니다",
      workers
    });
  } catch (error) {
    return res.status(500).json({ result: false, msg: error });
  }
}

export default FaceTemplate;
