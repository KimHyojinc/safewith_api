import { Request, Response } from "express";
import { queryContractsWithSiteCode, queryContractsPartners, queryPartnerInfo } from '../../shared/queries';
import dayjs from 'dayjs';
import { calculateAgeFromPno1 } from '../../middleware/util';

// @POST /api/workerinfo
// 근로자 정보 상세2 (계약)
async function GetWorkerInfo(req: Request, res: Response) {
  const { site_code } = req.body;

  try {
    //일반근로자
    //신규근로자
    //질환근로자
    //고령근로자

    const ret: any = {};

    //해당 사이트의 파트너 
    const itemsTotalRaw = await queryContractsWithSiteCode(site_code);

    //승인및 계약유효 날짜
    const itemsTotal = itemsTotalRaw
      ?.filter(k => k.is_approval === 1)
      .filter(k =>
        dayjs(k.period_begin_dt).isAfter(dayjs('1999-01-01')) &&
        dayjs(k.period_begin_dt).isBefore(dayjs('2999-12-31'))
      )
      .filter(k => dayjs(k.period_end_dt).isAfter(dayjs()))
      .map(k => ({
        ...k,
        age: calculateAgeFromPno1(k.pno1)
      }));
    
    const partners = await queryContractsPartners(site_code);

    //해당 근로자가 출근한사이트

    //일반근로자 : 현장에 모든 근로자 인원 
    {
      const itemsCommute = itemsTotal?.filter(k => k.today_commute && k.today_commute >= 1);

      ret.worker_normal = {
        worker_type: "일반근로자",
        count: itemsCommute?.length,
        total: itemsTotal?.length
      };

      const workers = [];

      if (partners && partners.length > 0) {
        for (const pcode of partners) {
          const pinfo = await queryPartnerInfo(pcode);

          if (pinfo) {
            const sosok = {
              name: pinfo.name,
              count: itemsCommute?.filter(k => k.partner_code === pcode).length,
              total: itemsTotal?.filter(k => k.partner_code === pcode).length,
            };

            workers.push(sosok);
          }
        }
      }

      ret.worker_normal.workers = workers;
    }

    //2024.07.08 변경
    //신규등록한 인원 3명
    //신규등록 인원 출근인원 2명 -> 2/3

    //신규근로자 : 신규로 등록한 인원 
    {
      // 날짜 비교를 위한 기준값
      const todayStr = dayjs().format('YYYY-MM-DD'); 

      // 당일 등록된 근로자
      const itemsToday = itemsTotal?.filter(item =>
        dayjs(item.reg_dt).format('YYYY-MM-DD') === todayStr
      );

      // 당일 등록자 중 출근자
      const items = itemsToday?.filter(k => k.today_commute >= 1);

      ret.worker_new = {
        worker_type: "신규근로자",
        count: items?.length,     // 당일 등록회원
        total: itemsToday?.length // 전체회원
      };

      const workers = [];

      if (partners && partners.length > 0) {
        for (const pcode of partners) {
          const pinfo = await queryPartnerInfo(pcode);

          if (pinfo) {
            //전체 근로자 가운데  당일 등록한 협력사 근로자
            const sosok = {
              name: pinfo.name,
              count: itemsToday?.filter(k => k.partner_code === pcode).length,
              total: itemsTotal?.filter(k => k.partner_code === pcode).length,
            };

            workers.push(sosok);
          }
        }
      }

      ret.worker_new.workers = workers;
    }

    //질환근로자 : 건강체크 및 건강 이상유무가 있는 인원 
    {
      const itemsIllness = itemsTotal?.filter(k => k.illness_state === 1);

      //진활 근로자중 금일 출근 근로자 2024.07.08
      const items = itemsIllness?.filter(k => k.today_commute >= 1);

      ret.worker_patient = {
        worker_type: "질환근로자",
        count: items?.length,
        total: itemsIllness?.length
      };

      const workers = [];

      if (partners && partners.length > 0) {
        for (const pcode of partners) {
          const pinfo = await queryPartnerInfo(pcode);

          if (pinfo) {
            //전체근로자 가운데 질환 등록된 협력사 근로자 
            const sosok = {
              name: pinfo.name,
              count: itemsIllness?.filter(k => k.partner_code === pcode).length,
              total: itemsTotal?.filter(k => k.partner_code === pcode).length,
            };

            workers.push(sosok);
          }
        }
      }

      ret.worker_patient.workers = workers;
    }

    //고령근로자 : 만 65세 이상의 근로자
    {
      const maxOlder = 60;

      const itemsOlder = itemsTotal?.filter(k => k.age >= maxOlder);

      //고령 근로자중 금일 출근 근로자 2024.07.08
      const items = itemsOlder?.filter(k => k.today_commute >= 1);

      //65세 이상 60년생
      ret.worker_older = {
        worker_type: "고령근로자",
        count: items?.length,
        total: itemsOlder?.length
      };

      const workers = [];

      if (partners && partners.length > 0) {
        for (const pcode of partners) {
          const pinfo = await queryPartnerInfo(pcode);

          if (pinfo) {
            const sosok = {
              name: pinfo.name,
              count: itemsOlder?.filter(k => k.partner_code === pcode).length,
              total: itemsTotal?.filter(k => k.partner_code === pcode).length,
            };

            workers.push(sosok);
          }
        }
      }

      ret.worker_older.workers = workers;

      
    }

    return res.status(200).json(ret);
  } catch (error) {
    return res.status(500).json({ result: false, msg: error });
  }
}

export default GetWorkerInfo;
