import { Request, Response } from "express";
import { queryAccountInfoWithFace, queryCommuteInfoHistory, queryContractInfoWithTablet, saveHealthInfoAL, updateCommuteInfo } from '../../shared/queries';
import dayjs from 'dayjs';
import { ResultData } from '../../shared/result';
import { convertBase64ToString } from '../../middleware/util';
import { CommuteState } from '../../shared/enums';

/** NOTE: 새로 추가해야하는 안면인식 출결 api 
 * @route POST /api/facecommute
 * @param face 안면인식정보 (base64Template)
 * @param site_code 현장고유코드
 * @summary 출결하기 (안면인식)
 */
async function FaceCommute(req: Request, res: Response) {
  const { face, site_code } = req.body;

  try {
    const today = dayjs().format("YYYY-MM-DD");
    const convertedFace = convertBase64ToString(face);
    const accInfo = await queryAccountInfoWithFace(convertedFace);

    // face 정보가 없는 사람 - 신규직원? face 정보 등록 시키도록 응답 데이터 보내기?
    if (!accInfo) {
      return res.status(404).json(ResultData.error({
        message: "안면인식 등록정보를 찾을 수 없습니다."
      }))
    }

    const commuteInfo = await queryCommuteInfoHistory(site_code, accInfo.code, CommuteState.COMMUTE, today);

    // 출근 정보 있으면 퇴근
    if (commuteInfo) {
      // 퇴근
      commuteInfo.state_code = CommuteState.COMMUTE;
      commuteInfo.out_dt = dayjs().toDate();
      commuteInfo.update_dt = dayjs().toDate();

      //Update
      const isSuccess = await updateCommuteInfo(commuteInfo);

      if (isSuccess) {
        console.log("updated");
      }

      return res.status(201).json(ResultData.ok({
        data: accInfo.name,
        name: accInfo.name,
        account_code: accInfo.code,
        isCommute: false
      }));
    }


    // TODO: 계약, 교육, 혈압, 음주 정보 가져와서 합치고 보내기?
    
    return res.status(200).json({ result: "OK" });
  } catch (error) {
    return res.status(500).json({ result: false, msg: error });
  }
}

export default FaceCommute;
