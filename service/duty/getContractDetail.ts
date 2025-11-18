import { Request, Response } from "express";
import {  queryAccountInfo, queryContractInfo, queryLibLabel, queryReqDocList } from '../../shared/queries';
import dotenv from 'dotenv';
import { ResultType } from '../../shared/result';
import { verifyToken } from '../../middleware/jwt';
import { PaymentType } from '../../shared/enums';

dotenv.config();

// const COOKIE_NAME = process.env.COOKIE_NAME ?? 'AUTH';

// @POST /api/contract/detail
// 계약정보 조회
async function GetContractDetail(req: Request, res: Response) {
  const { contract_code } = req.body;

  try {
    /*  .NET 코드에는 reg_code 불러오기만하고 안 씀
      const token = req.cookies?.[COOKIE_NAME];
      const regCode = verifyToken(token)['account_code']; // 등록관리자
    */
    
    const contractInfo = await queryContractInfo(contract_code);
    if (!contractInfo) {
      return res.status(404).json({
        result: ResultType.ERROR,
        message: "계약정보가 존재하지 않습니다.",
        msg_code: 21,
        contract_code: 0
      });
    }

    const accountInfo = await queryAccountInfo(contractInfo.account_code);
    
    const bankName = await queryLibLabel('BANK_NAME', contractInfo.bank_code);
    const ptype = contractInfo.payment_code as PaymentType;

    const reqDocInfoList = await queryReqDocList(contractInfo.account_code);

    let license = null, license2 = null, license3 = null;
    if (reqDocInfoList.length) {
      for (let doc of reqDocInfoList) {
        switch (doc.doc_type) {
          case 0:
            license = doc.doc_data;
            break;
          case 1:
            license2 = doc.doc_data;
            break;
          case 2:
            license3 = doc.doc_data;
            break;
        }
      }
    }

    const contractDetailResponse = {
      contract_code: contractInfo.code,
      pno: accountInfo ? (accountInfo.pno1 + '-' + accountInfo.pno2) : contractInfo.pno1,
      family_contact: accountInfo?.family_contact ?? null,
      addr: accountInfo?.addr_doro ?? null,
      addr2: accountInfo?.addr_etc ?? null,
      partner_code: contractInfo.partner_code,
      job_type: contractInfo.job_type,
      period_begin_dt: contractInfo.period_begin_dt,
      period_end_dt: contractInfo.period_end_dt,
      unit_price: contractInfo.unit_price,
      bank_code: contractInfo.bank_code,
      bank_name: bankName,
      bank_num: contractInfo.bank_num,
      payment_type: ptype === PaymentType.DAILY ? 1
        : ptype === PaymentType.WEEKLY ? 2 : 0,
      alcohol: contractInfo.alcohol,
      smoked: contractInfo.smoked,
      blood_code: contractInfo.blood_code,
      is_rh_min: accountInfo?.is_rh_min ?? 0,
      license,
      license2,
      license3
    }
    
    return res.status(200).json(contractDetailResponse);
  } catch (error) {
    return res.status(500).json({ result: false, msg: error });
  }
}

export default GetContractDetail;
