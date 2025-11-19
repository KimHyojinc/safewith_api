import { Request, Response } from "express";
import dayjs from 'dayjs';
import { queryContractInfoWithTablet, queryBlockedInfo, queryAccountInfoWithMobile } from '../../shared/queries';
import { ResultData } from '../../shared/result';
import { decrypt } from '../../middleware/util';

/**
 * @route POST /api/qrtag
 * @param qr QR (휴대전화번호)
 * @param site_code 현장고유코드
 * @summary QR 태깅 확인
 */
async function QrTag(req: Request, res: Response) {
  const { qr, site_code } = req.body;

  try {
    // 근로자만 가능 
    const tag = qr.replaceAll('-', '');

    let mobile = tag;

    try {
      if (tag.length >= 14 + 11) {
        const key = 'SafetyPlatform!@#$%^&*()';

        const dec_data = decrypt(tag, key);
        const dec_datas = dec_data.split(new RegExp('#'));

        if (dec_datas != null && dec_datas.length >= 2) {
          // 모바일 번호, 날짜 분리됨
          console.log(`Mobile: ${dec_datas[1]}, Date: ${dec_datas[0]}, site_code:${site_code}`);
        }

        const time = dayjs(dec_datas[0], 'YYYYMMDDHHmmss');
        const sp = dayjs().diff(time, 'second');

        if (Math.abs(sp) > 300) {
          return res.status(400).json(ResultData.error({ message: 'QR테그 유효기간 확인', msg_code: -5 }));
        }

        mobile = dec_datas[1]; // 핸드폰 번호
      }
    } catch (error) {
      return res.json({ result: 'error', message: '서버 에러 발생', code: -1 });
    }

    const accInfo = await queryAccountInfoWithMobile(mobile);

    if (!accInfo) {
      return res.status(404).json(ResultData.error({ message: "QR 태그에 해당하는 모바일 번호가 존재하지 않습니다" }));
    }

    // 계약정보 체크
    const contractInfo = await queryContractInfoWithTablet(site_code, accInfo.code);
    if (!contractInfo) {
      return res.status(404).json(ResultData.error({ message: "근로자 계약정보 없음", msg_code: -1 }));
    }

    // 차단된 근로자 체크
    const blockedInfo = await queryBlockedInfo(accInfo.code);
    if (blockedInfo && blockedInfo.state === 1) {
      return res.status(403).json(ResultData.error({ message: "차단된 근로자 입니다", msg_code: -2 }));
    }

    // 미승인 근로자 체크
    if (contractInfo.is_approval === 0) {
      return res.status(403).json(ResultData.error({ message: "미승인 근로자 입니다", msg_code: -3 }));
    }
  
    return res.status(200).json(ResultData.ok({
      data: accInfo.name,
      name: accInfo.name,
      account_code: accInfo.code,
      sosok: contractInfo.sosok,
      mobile: accInfo.mobile,
      contract_code: contractInfo.code,
      client_code: accInfo.client_code,
      last_site_code: accInfo.last_site_code,
      auth_code: accInfo.auth_code
    }));
  } catch (error) {
    return res.status(500).json({ result: false, msg: error });
  }
}

export default QrTag;
