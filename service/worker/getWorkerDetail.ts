import { Request, Response } from "express";
import { queryContractInfoWithTablet, queryBlockedInfo, queryAccountInfoWithMobile, querySiteInfo, queryAccountInfo, queryContractInfo } from '../../shared/queries';
import { ResultData } from '../../shared/result';

// @POST /api/worker/detail
// 근로자 상세정보
async function GetWorkerDetail(req: Request, res: Response) {
  const { site_code, worker_code, contract_code } = req.body;

  try {
    // .NET 코드에서도 null 핸들링 안 해 놨음 -> 일단 동일하게...
    const accountInfo = await queryAccountInfo(worker_code);

    const contractInfo = await queryContractInfo(contract_code);

    const workerDetailResponse = {
      code: accountInfo?.code ?? 0,
      name: accountInfo?.name ?? null,
      id: accountInfo?.id ?? null,
      mobile: accountInfo?.mobile ?? null,
      family_contact: accountInfo?.family_contact ?? "",
      pno1: accountInfo?.pno1 ?? "",
      pno2: accountInfo?.pno2 ?? "",
      pno: accountInfo ? (accountInfo?.pno1 + "-" + accountInfo?.pno2) : "",
      addr_doro: accountInfo?.addr_doro ?? "",
      addr_etc: accountInfo?.addr_etc ?? "",
      addr: accountInfo ? (accountInfo.addr_doro ?? "") + (accountInfo.addr_etc ?? "") : "",
      blood_code: accountInfo?.blood_code ?? 0,
      is_rh_min: accountInfo?.is_rh_min ?? 0,
      alcohol: contractInfo?.alcohol ?? "",
      smoked: contractInfo?.smoked ?? "",
      illness: contractInfo?.illness ?? "",
      job_type: contractInfo?.job_type ?? 0,
      contract_type: 0,   // .NET 에서 할당 안 함. -> C# int default value는 0
      const_type_code: 0,   // .NET 에서 할당 안 함. -> C# int default value는 0
      unit_price: contractInfo?.unit_price ?? 0,
      payment_code: contractInfo?.payment_code ?? 0,
      bank_code: contractInfo?.bank_code ?? 0,
      bank_num: contractInfo?.bank_num ?? "",
      period_begin_dt: contractInfo?.period_begin_dt ?? "",
      period_end_dt: contractInfo?.period_end_dt ?? "",
      partner_code: contractInfo?.partner_code ?? 0
    };

    return res.status(200).json({
      result: "OK",
      detail: workerDetailResponse
    });
  } catch (error) {
    return res.status(500).json({ result: false, msg: error });
  }
}

export default GetWorkerDetail;
