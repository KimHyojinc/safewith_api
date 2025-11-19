import { Request, Response } from "express";
import { queryContracts } from '../../shared/queries';
import { ContractState, ContractType } from '../../shared/enums';

// NOTE: 삭제
// @POST /api/workerlist
// 현장 근로자 리스트 (QR체크용) 교육대상 
async function GetWorkerList(req: Request, res: Response) {
  const { site_code } = req.body;

  try {
    const searchText = "";
    //계약승인된 회원만 리스트업한다.
    //계약승인된 회원 + 교육리스트 
    const contractInfoList = await queryContracts(site_code, ContractState.VALID, ContractType.ALL, "", "", searchText);
    
    
    return res.status(200).json({
      result: "OK",
    });
  } catch (error) {
    return res.status(500).json({ result: false, msg: error });
  }
}

export default GetWorkerList;
