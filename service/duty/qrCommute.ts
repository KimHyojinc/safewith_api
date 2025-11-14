import { Request, Response } from "express";
import dayjs from "dayjs";
import moment from 'moment';
import { queryContractInfoWithTablet, queryBlockedInfo, queryAccountInfoWithMobile, queryCommuteInfoHistory, updateCommuteInfo, querySiteConfig, queryHealthListBpTop, queryHealthListBpByDate, queryHealthListAlTop, queryHealthListAlByDate, queryEduMemberWithSite, saveCommuteInfo, queryTBMList, queryTBMState, addTBMState } from '../../shared/queries';
import { ResultData } from '../../shared/result';
import { decrypt } from '../../middleware/util';
import { CommuteState } from '../../shared/enums';
import { tb_site_config, tb_site_configAttributes } from '../../models/tb_site_config';

// @POST /api/qrcommute 
// 출결하기
async function QrCommute(req: Request, res: Response) {
  const { qr, site_code } = req.body;

  try {
    const tag = qr.replaceAll('-', '');

    // 근로자만 가능
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
          return res.status(400).json(ResultData.error({ message: 'QR테그 유효기간 확인', msg_code: -7 }));
        }

        mobile = dec_datas[1]; // 핸드폰 번호
      }
    } catch (error) {
      return res.json({ result: 'error', message: '서버 에러 발생', code: -1 });
    }
    
    const today = dayjs().format("YYYY-MM-DD");
    const accInfo = await queryAccountInfoWithMobile(mobile);
    const csType = CommuteState.COMMUTE;
    const commuteInfo = await queryCommuteInfoHistory(site_code, accInfo?.code, csType, today);

    if (commuteInfo) {
      // 퇴근
      commuteInfo.state_code = csType;
      commuteInfo.out_dt = dayjs().toDate();
      commuteInfo.update_dt = dayjs().toDate();

      //Update
      // .NET에 성공여부 체크 없음
      const isSuccess = await updateCommuteInfo(commuteInfo);

      return res.status(201).json(ResultData.ok({
        data: accInfo?.name ?? null,
        name: accInfo?.name ?? null,
        account_code: accInfo?.code ?? 0,
        isCommute: false
      }));
    }

    if (!accInfo) {
      return res.status(404).json(ResultData.error({ message: "아이디 및 패스워드 확인" }));
    }

    // 차단된 근로자 체크
    const blockedInfo = await queryBlockedInfo(accInfo.code);
    if (blockedInfo && blockedInfo.state === 1) {
      return res.status(403).json(ResultData.error({ message: "차단된 근로자 입니다", msg_code: -12 }));
    }

    // 계약정보 체크
    const contractInfo = await queryContractInfoWithTablet(site_code, accInfo.code);
    if (!contractInfo) {
      return res.status(404).json(ResultData.error({ message: "근로자 계약정보 없음", msg_code: -2 }));
    }

    // 미승인 근로자 체크
    if (contractInfo.is_approval === 0) {
      return res.status(403).json(ResultData.error({ message: "미승인 근로자 입니다", msg_code: -21 }));
    }

    const today2 = dayjs().format("YYYYMMDD");
    const currentDateInt = parseInt(today2);
    const contractEndDateInt = parseInt(dayjs(contractInfo.period_end_dt).format("YYYYMMDD"));

    if (contractEndDateInt < currentDateInt) {
      return res.status(200).json(ResultData.error({
        message: "근로자 계약만료",
        msg_code: -22,
        meas_date: today,
        meas_msg: "근로계약만료"
      }));
    }

    //1,2,3,4
    //5 : 1주일
    //6: 2주일
    //7: 1달
    //8: 3개월
    let ddayBp = 1;
    let ddayAl = 1;

    const defaultSiteConfig: tb_site_configAttributes = {
      code: -1, // 타입 체크 통과용
      site_code,
      bp_range_type1_higher_max: 120,
      bp_range_type1_higher_min: 140,
      bp_range_type1_lower_max: 100,
      bp_range_type1_lower_min: 80,
      bp_range_type2_max: 160,
      bp_range_type2_min: 100,
      max_age: 0,
      is_io_a: 0,
      is_io_b: 0,
      is_io_e: 0,
      map_zoom_no: 0,
      register_code: 0,
      reg_dt: dayjs().toDate(),  // 또는 그냥 new Date()
      updater_code: 0,
      update_dt: dayjs().toDate()
    };

    //정상처리후 다시 출결시에는 체크 하지 않는다??
    let siteConfig = await querySiteConfig(site_code);
    const rawConfig = siteConfig?.get({ plain: true }) ?? {};

    siteConfig = {
      ...defaultSiteConfig,
      ...rawConfig
    } as unknown as tb_site_config;

    //출역불가 3가지 케이스
    //출역정보 있을경우 
    if (!commuteInfo) {
      if (typeof accInfo.health_bp_check_cycle === 'number') {
        //혈압
        if (accInfo.health_bp_check_cycle >= 1 && accInfo.health_bp_check_cycle <= 5){ ddayBp = accInfo.health_bp_check_cycle; }//1~5일
        if (accInfo.health_bp_check_cycle == 5){ddayBp = 7; }//1주일
        if (accInfo.health_bp_check_cycle == 6){ddayBp = 14; } //2주일
        if (accInfo.health_bp_check_cycle == 7){ddayBp = 30; } //1달
        if (accInfo.health_bp_check_cycle == 8){ddayBp = 90;}//3달
      }

      if (typeof accInfo.health_al_check_cycle === 'number') {
        //알콜
        if (accInfo.health_al_check_cycle >= 1 && accInfo.health_al_check_cycle <= 5) { ddayBp = accInfo.health_al_check_cycle; }//1~5일
        if (accInfo.health_al_check_cycle == 5) { ddayAl = 7; }//1주일
        if (accInfo.health_al_check_cycle == 6) { ddayAl = 14; } //2주일
        if (accInfo.health_al_check_cycle == 7) { ddayAl = 30; } //1달
        if (accInfo.health_al_check_cycle == 8) { ddayAl = 90; }//3달
      }

      const dt = dayjs();
      const baseTime = dt.startOf("day");
      const startTimeBp = baseTime.subtract(ddayBp, "day").toDate(); //일주일 2일
      const startTimeAl = baseTime.subtract(ddayAl, "day").toDate(); //일주일 2일

      const { code: bpStatus1, status: bpStatus } = await getHealthBPStatus(site_code, accInfo.code, startTimeBp);
      const { code: alStatus1, status: alStatus } = await getHealthALStatus(site_code, accInfo.code, startTimeAl);
      const { code: eduStatus1, status: eduStatus } = await getEduStatus(site_code, accInfo.code);
      const { code: judgeStatus1, status: judgeStatus } = await getEduJudgeStatus(site_code, accInfo.code);

      let reasonCause = '';

      if (bpStatus1 !== 0) reasonCause += `${bpStatus}/`;
      if (alStatus1 !== 0) reasonCause += `${alStatus}/`;
      if (eduStatus1 !== 0) reasonCause += `${eduStatus}/`;
      if (judgeStatus1 !== 0) reasonCause += judgeStatus;

      //혈압+알콜이 없을경우  (NG관계없이 데이터 없음으로 표시)
      if (bpStatus1 !== 0 && alStatus1 !== 0) {
        commuteNotAdmit(accInfo.code, site_code, 2, /*"혈압+음주 미측정"*/reasonCause); // 출역불가

        //-7 QR오류 또는 QR유효기간 만료

        //-8  혈압+알콜 둘다 없을경우 
        //정상범위
        return res.status(200).json(ResultData.error({
          message: "혈압,알콜 측정 데이터 없음",
          msg_code: -8,
          health_check_cycle: ddayBp,
          health_check_cycle_bp: ddayBp,
          // 기준값 상하단값
          judge_bp_max: siteConfig.bp_range_type1_higher_max,
          judge_bp_min: siteConfig.bp_range_type1_lower_min,

          //출결 실패시 세부 결과
          bp_status: bpStatus1,
          al_status: alStatus1,
          edu_status: eduStatus1,
          judge_status: judgeStatus1
        }));
      }

      // 혈압 체크
      const itemsBP = await queryHealthListBpTop(site_code, accInfo.code);

      //1. 혈압 체크  고혈압  -34
      //2. 기록없음 (한번도 측정안할경우)  -35
      //3. 데이터 없음 (측정 기간만료) -36

      if (!itemsBP || itemsBP.length <= 0) {
        commuteNotAdmit(accInfo.code, site_code, 2, /*"혈압미측정"*/reasonCause);//출역불가

        return res.status(200).json(ResultData.error({
          message: "건강측정 데이터 없음(혈압)",
          msg_code: -35,
          meas_msg: "혈압측정 기록 없음",
          health_check_cycle: ddayBp,
          health_check_cycle_bp: ddayBp,
          judge_bp_max: siteConfig.bp_range_type1_higher_max,
          judge_bp_min: siteConfig.bp_range_type1_lower_min,

          //출결 실패시 세부 결과
          bp_status: bpStatus1,
          al_status: alStatus1,
          edu_status: eduStatus1,
          judge_status: judgeStatus1
        }));
      }

      //혈압 체크
      const healthBP = await queryHealthListBpByDate(site_code, accInfo.code, startTimeBp);

      //혈압
      if (healthBP && healthBP.length > 0) {
        // 혈압
        const h = healthBP[0];

        if (typeof h.bp_max === 'number' && typeof siteConfig.bp_range_type1_higher_max === 'number'
          && typeof h.bp_min === 'number' && typeof siteConfig.bp_range_type1_lower_min === 'number'
        ) {
          //고혈압 체크
          if ((h.bp_max >= siteConfig.bp_range_type1_higher_max) || (h.bp_min >= siteConfig.bp_range_type1_lower_min)) {
            commuteNotAdmit(accInfo.code, site_code, 4, reasonCause); //출역불가

            return res.status(200).json(ResultData.error({
              message: "건강측정 혈압 초과 고혈압 (혈압)",
              msg_code: -36,
              meas_date: dayjs(h.reg_dt).format("YYYY-MM-DD"),
              meas_msg: "고혈압 (혈압)",
              meas_bp_max: h.bp_max,
              meas_bp_min: h.bp_min,

              //기준값 상하단값
              judge_bp_max: siteConfig.bp_range_type1_higher_max,
              judge_bp_min: siteConfig.bp_range_type1_lower_min,

              //출결 실패시 세부 결과
              bp_status: bpStatus1,
              al_status: alStatus1,
              edu_status: eduStatus1,
              judge_status: judgeStatus1
            }));
          }
        }
      } else {
        //측정기간 만료
        commuteNotAdmit(accInfo.code, site_code, 2, reasonCause);//출역불가

        return res.status(200).json(ResultData.error({
          message: "혈압측정 기간 만료",
          msg_code: -34,
          meas_msg: "혈압측정 기간 만료",
          meas_date: itemsBP[0].measure_dt,
          judge_bp_max: siteConfig.bp_range_type1_higher_max,
          judge_bp_min: siteConfig.bp_range_type1_lower_min,

          //출결 실패시 세부 결과
          bp_status: bpStatus1,
          al_status: alStatus1,
          edu_status: eduStatus1,
          judge_status: judgeStatus1
        }));
      }
    
      const itemsAL = await queryHealthListAlTop(site_code, accInfo.code);

      //1. 알콜 검출  혈중알콜농도초과   -61
      //2. 알콜 기록없음 (-62)
      //3. 알콜 데이터 없음 (측정기간만료) -63
      if (!itemsAL || itemsAL.length <= 0) {
        commuteNotAdmit(accInfo.code, site_code, 3, reasonCause); // 출역불가

        return res.status(200).json(ResultData.error({
          message: "건강측정 데이터 없음(음주)",
          msg_code: -62,
          health_check_cycle: ddayAl,
          health_check_cycle_al: ddayAl,

          //출결 실패시 세부 결과
          bp_status: bpStatus1,
          al_status: alStatus1,
          edu_status: eduStatus1,
          judge_status: judgeStatus1
        }));
      }
      //알콜측정
      const healthAL = await queryHealthListAlByDate(site_code, accInfo.code, startTimeAl);

      // 알콜
      if (healthAL && healthAL.length > 0) {
        const h = healthAL[0];

        if (h.measures >= 3) { //5 -> 0.05
          commuteNotAdmit(accInfo.code, site_code, 3, reasonCause); //출역불가
          
          return res.status(200).json(ResultData.error({
            message: "건강측정 데이터 부족 (알콜)",
            msg_code: -63,
            meas_date: dayjs(h.reg_dt).format("YYYY-MM-DD"),
            meas_alcohol: h.measures,

            //출결 실패시 세부 결과
            bp_status: bpStatus1,
            al_status: alStatus1,
            edu_status: eduStatus1,
            judge_status: judgeStatus1
          }));
        }
      } else {
        commuteNotAdmit(accInfo.code, site_code, 3, reasonCause); //출역불가

        //기존데이터 table데이터 존재할경우 (2025.03.06)
        return res.status(200).json(ResultData.error({
          message: "알콜측정 기간 만료",
          msg_code: -61,
          meas_msg: "알콜측정 기간 만료",
          meas_date: itemsAL[0].measure_dt,

          //출결 실패시 세부 결과
          bp_status: bpStatus1,
          al_status: alStatus1,
          edu_status: eduStatus1,
          judge_status: judgeStatus1
        }));
      }

      // 교육
      // 교육미이수
      const eduMembers = await queryEduMemberWithSite(site_code, accInfo.code);
      if (eduMembers && eduMembers.length > 0) {
        let eduIsComplete = true;
        let judgePassIsComplete = true; //시험 미실시 또는 불합격

        for (const em of eduMembers) {
          eduIsComplete = eduIsComplete && (em.is_complete === 1 || em.complete_state === 1);
          judgePassIsComplete = judgePassIsComplete && em.judge_state === 1;
        }

        if (!eduIsComplete) {
          commuteNotAdmit(accInfo.code, site_code, 1, reasonCause); // 출역불가

          return res.status(200).json(ResultData.error({
            message: "교육 미이수",
            msg_code: -4,

            //출결 실패시 세부 결과
            bp_status: bpStatus1,
            al_status: alStatus1,
            edu_status: eduStatus1,
            judge_status: judgeStatus1
          }));
        }

        if (!judgePassIsComplete) {
          commuteNotAdmit(accInfo.code, site_code, 6, reasonCause); // 출역불가

          return res.status(200).json(ResultData.error({
            message: "시험 미이수",
            msg_code: -5,

            //출결 실패시 세부 결과
            bp_status: bpStatus1,
            al_status: alStatus1,
            edu_status: eduStatus1,
            judge_status: judgeStatus1
          }));
        }
      }
    }

    if (!commuteInfo) {
      //출역 만 처리한다
      const today = dayjs().toDate();
      const item = {
        code: -1, // 타입 체크 통과용
        account_code: accInfo.code,
        site_code,
        state_code: CommuteState.COMMUTE,
        in_dt: today,
        out_dt: today,
        reg_dt: today,
        update_dt: today,
        reason_code: 0,
        reason_cause: "정상"
      };

      const isSuccess = saveCommuteInfo(item);
    }

    //2024.08.29
    //정상 출역되면 tb_tbm에서 데이터가 생성되면
    const searchDateType = ""; //A전체
    const startDate = today;
    const endDate = today;
    const searchProcState = 2; // 0:전체 2:결재미완료

    //결재 미완료된 TBM
    const tbmItems = await queryTBMList(site_code, searchDateType, startDate, endDate, "", searchProcState);

    const workerCode = accInfo.code;

    if (tbmItems && tbmItems.length > 0) {
      for (const tbm of tbmItems) {
        const tbmCode = tbm.code;
        const regCode = tbm.register_code;
        const now = dayjs().toDate();

        const tbmState = await queryTBMState(tbmCode, workerCode);
        
        if (!tbmState) {
          const newTbmState = {
            code: -1,
            tbm_code: tbmCode,
            worker_code: workerCode,
            is_sign: 0,
            e_sign: "",
            updater_code: regCode,
            update_dt: now,
            register_code: regCode,
            reg_dt: now,
          };

          await addTBMState(newTbmState);
        }
      }
    }

    return res.status(200).json(ResultData.ok({
      data: accInfo.name,
      name: accInfo.name,
      account_code: accInfo.code,
      sosok: contractInfo.sosok,  // 근로자일경우
      health_check_cycle: ddayBp,
      health_check_cycle_bp: ddayBp,
      health_check_cycle_al: ddayAl // .NET에선 ddayBp 되어있는데 실수인듯
    }));
    
  } catch (error) {
    return res.status(500).json({ result: false, msg: error });
  }
}

// 출역 불가
async function commuteNotAdmit(
  account_code: number, site_code: number,
  reason_code: number, reason_cause: string) {
  const today = dayjs().toDate();

  const item = {
    code: -1, // 타입 체크 통과용
    account_code,
    site_code,
    state_code: CommuteState.NOT_ADMIT,
    in_dt: today,
    out_dt: today,
    reg_dt: today,
    update_dt: today,
    reason_code,
    reason_cause
  };

  const isSuccess = await saveCommuteInfo(item);
}

async function getEduJudgeStatus(site_code: number, account_code: number) {
  const eduMembers = await queryEduMemberWithSite(site_code, account_code);

  if (eduMembers && eduMembers.length > 0) {
    let passAll = true;

    for (const em of eduMembers) {
      if (em.judge_state === 0) {
        return { code: -2, status: "시험미실시" };
      }
      if (em.judge_state === 2) {
        return { code: -3, status: "불합격" };
      }

      passAll = passAll && (em.judge_state === 1);
    }

    if (!passAll) {
      return { code: -1, status: "불합격" };
    }
  }

  return { code: 0, status: "합격" };
}

async function getEduStatus(site_code: number, account_code: number) {
  const eduMembers = await queryEduMemberWithSite(site_code, account_code);

  if (eduMembers && eduMembers.length > 0) {
    let isComplete = true;

    for (const em of eduMembers) {
      const completed = em.is_complete === 1 || em.complete_state === 1;
      isComplete = isComplete && completed;
    }

    if (!isComplete) {
      return { code: -1, status: "교육미이수" };
    }
  }

  return { code: 0, status: "교육이수" };
}

async function getHealthALStatus(site_code: number, account_code: number, start_time_al: Date) {
  //전체 데이터 체크 
  const itemsAl = await queryHealthListAlTop(site_code, account_code);

  if (!itemsAl || itemsAl.length <= 0) {
    return { code: -1, status: "음주미측정" };
  }

  //알콜측정 
  const healthAL = await queryHealthListAlByDate(site_code, account_code, start_time_al);

  
  //알콜
  if (healthAL && healthAL.length > 0) {
    const h = healthAL[0];

    if (h.measures >= 3) {
      return { code: -4, status: "음주기준치초과" };
    }

    return { code: 0, status: '정상' };
  }

  return { code: -2, status: '음주기간만료' };
}

async function getHealthBPStatus(site_code: number, account_code: number, start_time_bp: Date) {
  const itemsBP = await queryHealthListBpTop(site_code, account_code);

  if (!itemsBP || itemsBP.length <= 0) {
    return { code: -1, status: "혈압미측정" };
  }

  //혈압 음주 체크 
  const healthBP = await queryHealthListBpByDate(site_code, account_code, start_time_bp);

  
  //혈압
  if (healthBP && healthBP.length > 0) {
    const h = healthBP[0];

    const defaultSiteConfig: tb_site_configAttributes = {
      code: -1, // 타입 체크 통과용
      site_code,
      bp_range_type1_higher_max: 120,
      bp_range_type1_higher_min: 140,
      bp_range_type1_lower_max: 100,
      bp_range_type1_lower_min: 80,
      bp_range_type2_max: 160,
      bp_range_type2_min: 100,
      max_age: 0,
      is_io_a: 0,
      is_io_b: 0,
      is_io_e: 0,
      map_zoom_no: 0,
      register_code: 0,
      reg_dt: dayjs().toDate(),  // 또는 그냥 new Date()
      updater_code: 0,
      update_dt: dayjs().toDate()
    };

    //정상처리후 다시 출결시에는 체크 하지 않는다??
    let siteConfig = await querySiteConfig(site_code);
    const rawConfig = siteConfig?.get({ plain: true }) ?? {};

    siteConfig = {
      ...defaultSiteConfig,
      ...rawConfig
    } as unknown as tb_site_config;

    if (typeof h.bp_max === 'number' && typeof siteConfig.bp_range_type1_higher_max === 'number'
      && typeof h.bp_min === 'number' && typeof siteConfig.bp_range_type1_lower_min === 'number'
    ) {
      if (
        h.bp_max >= siteConfig.bp_range_type1_higher_max ||
        h.bp_min >= siteConfig.bp_range_type1_lower_min
      ) {
        return { code: -4, status: '고혈압' };
      }
    }

    return { code: 0, status: '정상' };
  }

  return { code: -2, status: '혈압기간만료' };
}

export default QrCommute;
