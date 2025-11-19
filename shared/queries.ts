import { Op, QueryTypes } from 'sequelize';
import { models, sequelize } from '../data-source';
import { SiteNameDto } from './site-name';
import { tb_accountAttributes, tb_commuteAttributes, tb_contractAttributes, tb_edu_judge_contentsAttributes, tb_edu_judgeAttributes, tb_edu_sch_memberAttributes, tb_health_alcoholAttributes, tb_health_bpAttributes, tb_health_oxygenAttributes, tb_health_stressAttributes, tb_partnerAttributes, tb_site_config, tb_site_configAttributes, tb_tbm_stateAttributes, tb_tbmAttributes } from '../models/init-models';
import { CommuteState, ContractState, ContractType } from './enums';
import dayjs from 'dayjs';

/*
** 
** queries
**
*/


/**
 * 
 * @param groupName 그룹명 (tb_lib)
 * @param code 고유코드 (tb_lib)
 * @returns view_text
 * @summary tb_lib에서 group_name과 code를 기준으로 view_text 조회
 */
export async function queryLibLabel(groupName: string, code: number) {
  try {
    const result = await models.tb_lib.findOne({
      where: { group_name: groupName, code },
      attributes: ['view_text']
    });
  
    return result?.view_text ?? null;
  } catch (error) {
    console.error('queryLibLabel error -- ' + error);
    return null;
  }
}

/**
 * 
 * @param client_code 발주처고유코드
 * @returns 현장리스트
 * @summary 현장 리스트 조회
 */
export async function querySites(client_code: number = -1) {
  try {
    const rows = await models.tb_site_of_client.findAll({
        include: [{
            model: models.tb_site,
            as: 'site_code_tb_site',
            required: true, // true: INNER, false: LEFT
            attributes: ['code', 'name', 'addr']
        }],
        where: {
            ...(client_code !== -1 && { client_code }),
            '$site_code_tb_site.is_del$': { [Op.ne]: 'Y' }
        },
        subQuery: false,
        attributes: []
    });

    const items: SiteNameDto[] = [];
    let no = 1;
    for (const sc of rows) {
        const site = sc.get('site_code_tb_site') as InstanceType<typeof models.tb_site>;
        if (!site) continue;  // INNER라면 사실상 항상 존재
        
        const { code, name, addr } = site.get({ plain: true }) as { code: number; name: string; addr?: string | null };

        items.push({
            no: no++,
            code,
            name,
            addr: addr ?? ''
        });
    }

    return items;
  } catch (error) {
    console.error('querySites error -- ' + error);
    return null;
  }
}

// 현장별 + 회원에 대한 교육 미완료 리스트 
export async function queryEduSch(
  site_code: number,
  account_code: number
) {
  try {
    const result = await sequelize.query(
      `
      SELECT 
        ES.*, 
        A.name AS reg_name,
        
        -- 전체 교육생 수
        (SELECT COUNT(code) 
        FROM tb_edu_sch_member 
        WHERE edu_sch_code = ES.code) AS edu_member_count,

        -- 완료된 교육생 수
        (SELECT COUNT(code) 
        FROM tb_edu_sch_member 
        WHERE edu_sch_code = ES.code 
          AND is_complete = 1 
          AND judge_state = 1) AS edu_complete_count,

        -- 교육 콘텐츠
        EC.file_name,
        EC.file_path,
        EC.thumbnail, 
        EC.code AS edu_contents_code,

        -- 교육 정보
        E.subject,
        E.exp_begin,
        E.exp_end,
        E.type_code,
        E.const_type_code

      FROM tb_edu_sch ES
      
      LEFT JOIN tb_edu E ON ES.edu_code = E.code
      LEFT JOIN tb_account A ON ES.register_code = A.code
      LEFT JOIN tb_edu_contents EC ON ES.edu_code = EC.edu_code
      LEFT JOIN tb_edu_sch_member EM ON EM.edu_sch_code = ES.code

      WHERE 
        ES.site_code = :siteCode
        AND EM.account_code = :accountCode
        AND (EM.is_complete != 1 OR EM.judge_state != 1)
      `,
      {
        replacements: {
          siteCode: site_code,       // 예: 43
          accountCode: account_code, // 예: 347, 436
        },
        type: QueryTypes.SELECT,
        raw: true,
      }
    );

    return result;
  } catch (error) {
    throw new Error('queryEduSch error -- ' + error);
    // console.error('queryEduSch error -- ' + error);
    // return null;
  }
}

// Edu detail 가져오는 쿼리
export async function queryEduDetail(code: number) {
  try {
    const result = await sequelize.query(
      `
      SELECT 
        E.*, 
        A.name AS reg_name,
        C.file_name, 
        C.file_path,
        C.thumbnail
      FROM tb_edu E
      LEFT JOIN tb_account A ON E.register_code = A.code
      LEFT JOIN tb_edu_contents C ON E.code = C.edu_code
      WHERE E.code = :code
      LIMIT 1
      `,
      {
        replacements: { code },
        type: QueryTypes.SELECT,
        plain: true  // when getting only one row
      }
    );
  
    return result;
  } catch (error) {
    console.error('queryEduDetail error -- ' + error);
    return null;
  }
}

// 교육컨텐츠코드로 교육컨텐츠 가져오는 쿼리
export async function queryEduContentsWithCode(edu_contents_code: number) {
  try {
    const result = models.tb_edu_contents.findOne({
      where: {
        code: edu_contents_code
      }
    });

    return result;
  } catch (error) {
    console.error('queryEduContentsWithCode error -- ' + error);
    return null;
  }
}

// Edu Schedule Info를 가져오는 쿼리
export async function queryEduSchInfo(edu_sch_code: number) {
  try {
    const result = sequelize.query(
      `
      SELECT
        ES.*,
        A.name AS reg_name,
        C.file_name AS file_name,
        C.file_path AS file_path,
        E.subject AS subject,
        E.contents AS contents,
        E.exp_begin AS exp_begin,
        E.exp_end AS exp_end,
        E.type_code AS type_code,
        E.const_type_code AS const_type_code
      FROM tb_edu_sch ES
        LEFT JOIN tb_account A ON ES.register_code = A.code
        LEFT JOIN tb_edu E ON E.code = ES.edu_code
        LEFT JOIN tb_edu_contents C ON E.code = C.edu_code
      WHERE ES.code = :edu_sch_code
      `,
      {
        replacements: { edu_sch_code },
        type: QueryTypes.SELECT,
        raw: true,
        plain: true
      }
    );

    return result;
  } catch (error) {
    console.error('queryEduSchInfo error -- ' + error);
    return null;
  }
}

// edu_code로 tb_edu_exam 정보 가져오는 쿼리
export async function queryEduExamInfoWithEduCode(edu_code: number) {
  try {
    const result = await models.tb_edu_exam.findOne({
      where: {
        edu_code
      }
    });

    return result;
  } catch (error) {
    console.error('queryEduExamInfoWithEduCode error -- ' + error);
    return null;
  }
} 

// edu_code로 edu exam contents 가져오는 쿼리
export async function queryEduExamContentsWithEduCode(edu_code: number) {
  try {
    const result = await models.tb_edu_exam_contents.findAll({
      include: [
        {
          model: models.tb_edu_exam,
          as: 'edu_exam_code_tb_edu_exam', // EC -> EX
          include: [
            {
              model: models.tb_edu,
              as: 'edu_code_tb_edu', // EX -> E
              required: true,
            }
          ],
          required: true,
        }
      ],
      where: {
        '$edu_exam_code_tb_edu_exam.edu_code$': edu_code
      },
      order: [['question', 'ASC']]
    });
  
    return result;
  } catch (error) {
    console.error('queryEduExamContentsWithEduCode error -- ' + error);
    return null;
  }
}

// 교육 완료
// 존재하면 업데이트 완료정보까지 등록하는 쿼리
export async function saveCompleteMemberInfo(eitem: tb_edu_sch_memberAttributes) {
  try {
    // ID 중복체크
    const edu_member = await models.tb_edu_sch_member.findOne({
      where: {
        edu_sch_code: eitem.edu_sch_code,
        account_code: eitem.account_code
      }
    });

    if (!edu_member) {
      // Create
      const result = await models.tb_edu_sch_member.create(eitem);

      return !!result;
    } else {
      // Update
      edu_member.edu_sch_code = eitem.edu_sch_code;
      edu_member.is_complete = eitem.is_complete;
      edu_member.complete_dt = eitem.complete_dt;

      await edu_member.save();
      return true;
    }
  } catch (error) {
    console.error('saveCompleteMemberInfo error -- ' + error);
    return false;
  }
}

// @ .NET GetAccountInfo
// account_code로 계정 정보 가져오는 쿼리
export async function queryAccountInfo(account_code: number) {
  try {
    const result = await sequelize.query<tb_accountAttributes>(
      `
      SELECT
        A.*,
        L.view_text AS bank_name
      FROM tb_account A
        LEFT JOIN tb_lib L ON A.bank_code = L.code
      WHERE A.code = :code
      `,
      {
        replacements: { code: account_code },
        type: QueryTypes.SELECT,
        raw: true,
        plain: true
      }
    );

    return result;
  } catch (error) { 
    console.error('queryAccountInfo error -- ' + error);
    return null;
  }
}

// 근로자 로그인시 계약정보 확인 키오스크/테블릿
export async function queryContractInfoWithTablet(site_code: number, account_code: number) {
  try {
    type ContractInfoWithExtra = tb_contractAttributes & { sosok: string; };

    const today = dayjs().format('YYYY-MM-DD');

    const result = await sequelize.query<ContractInfoWithExtra>(
      `
      SELECT
        A.name,
        A.state_code,
        A.allowed_code,
        A.mobile,
        C.*,
        P.name AS sosok,
        S.name AS site_name
      FROM tb_contract C
        LEFT JOIN tb_account A ON C.account_code = A.code
        LEFT JOIN tb_partner P ON C.partner_code = P.code
        LEFT JOIN tb_partner_contract PC ON P.code = PC.partner_code AND PC.site_code = C.site_code
        LEFT JOIN tb_site S ON C.site_code = S.code
      WHERE C.account_code = :account_code
        AND C.site_code = :site_code
        AND C.is_approval = :is_approval
        AND (C.period_begin_dt <= :today AND :today <= C.period_end_dt)
      ORDER BY A.name 
      `,
      {
        replacements: {
          account_code,
          site_code,
          is_approval: 1,
          today
        },
        type: QueryTypes.SELECT,
        raw: true,
        plain: true
      }
    );

    return result;
  } catch (error) {
    console.error('queryContractInfoWithTablet error -- ' + error);
    return null;
  }
}

// 차단된 근로자 정보 가져오는 쿼리
export async function queryBlockedInfo(account_code: number) {
  try {
    const result = await models.tb_blocked.findOne({
      where: {
        account_code
      }
    });

    return result;
  } catch (error) {
    console.error('queryBlockedInfo error -- ' + error);
    return null;
  }
}

// 오늘의 건강정보(혈압) 가져오는 쿼리 
export async function queryHealthInfoBP(site_code: number, account_code: number, now: string) {
  try {
    const today = now.slice(0, 10);
  
    const result = await models.tb_health_bp.findOne({
      where: {
        account_code,
        site_code,
        measure_dt: today
      }
    });
  
    return result;
  } catch (error) {
    console.error('queryHealthInfoBP error -- ' + error);
    return null;
  }
}

// 건강정보등록(혈압) 쿼리
export async function saveHealthInfoBP(item: tb_health_bpAttributes) {
  try {
    const healthBP = await models.tb_health_bp.findOne({
      where: {
        account_code: item.account_code,
        site_code: item.site_code,
        measure_dt: item.measure_dt
      }
    });

    if (!healthBP) {
      // INSERT
      const result = await models.tb_health_bp.create({
        site_code: item.site_code,
        account_code: item.account_code,
        bp_max: item.bp_max ?? null,
        bp_min: item.bp_min ?? null,
        measure_dt: item.measure_dt, // string or Date 타입 가능 (timestamp)
        reg_dt: item.reg_dt    
      } as tb_health_bpAttributes);

      return !!result;
    } else {
      
      // UPDATE
      healthBP.bp_max = item.bp_max;
      healthBP.bp_min = item.bp_min;
      // healthBP.measure_dt = item.measure_dt;
      healthBP.reg_dt = item.reg_dt;

      // healthBP.changed('bp_max', true);
      // healthBP.changed('bp_min', true);
      // healthBP.changed('reg_dt', true);

      await healthBP.save();
      return true;
    }
    
  } catch (error) {
    console.error('saveHealthInfoBP error -- ' + error)
    return false;
  }
}

// 건강정보등록(음주량) 쿼리
export async function saveHealthInfoAL(item: tb_health_alcoholAttributes) {
  try {
    const healthAL = await models.tb_health_alcohol.findOne({
      where: {
        account_code: item.account_code,
        site_code: item.site_code,
        measure_dt: item.measure_dt
      }
    });

    if (!healthAL) {
      // INSERT
      const result = await models.tb_health_alcohol.create({
        site_code: item.site_code,
        account_code: item.account_code,
        measures: item.measures ?? 0,
        measure_dt: item.measure_dt, // string or Date 타입 가능 (timestamp)
        reg_dt: item.reg_dt    
      } as tb_health_alcoholAttributes);

      return !!result;
    } else {
      
      // UPDATE
      healthAL.measures = item.measures ?? 0;
      // healthAL.measure_dt = item.measure_dt;
      healthAL.reg_dt = item.reg_dt;

      await healthAL.save();
      return true;
    }
    
  } catch (error) {
    console.error('saveHealthInfoAL error -- ' + error);
    return false;
  }
}

// QR체크를 위한 계정정보를 가져오는 쿼리
export async function queryAccountInfoWithMobile(mobile: string) {
  try {
    const result = await models.tb_account.findOne({
      where: {
        mobile
      }
    });

    return result;
  } catch (error) {
    console.error('queryAccountInfoWithMobile error -- ' + error);
    return null;
  }
}

// 현장고유코드로 현장 정보 가져오는 쿼리
export async function querySiteInfo(site_code: number) {
  try {
    const result = await models.tb_site.findOne({
      where: {
        code: site_code
      }
    });

    return result;
  } catch (error) {
    console.error('querySiteInfo error -- ' + error);
    return null;
  }
}

// site_code와 account_code로 reg_dt 내림차순 기준 첫 번째 row(계약정보)를 가져오는 쿼리
export async function queryContractInfoWithSite(site_code: number, account_code: number) {
  try {
    type ContractInfoWithExtra = tb_contractAttributes & { sosok: string; };

    const result = await sequelize.query<ContractInfoWithExtra>(
      `
      SELECT 
        A.name, A.state_code, A.allowed_code, A.mobile, 
        C.*, 
        P.name AS sosok, 
        S.name AS site_name
      FROM tb_contract C
        LEFT JOIN tb_account A ON C.account_code = A.code
        LEFT JOIN tb_partner P ON C.partner_code = P.code 
        LEFT JOIN tb_partner_contract PC ON P.code = PC.partner_code AND PC.site_code = C.site_code
        LEFT JOIN tb_site S ON C.site_code = S.code
      WHERE 
        C.account_code = :account_code 
        AND C.site_code = :site_code
      ORDER BY C.reg_dt DESC
      LIMIT 1
      `,
      {
        replacements: { account_code, site_code },
        type: QueryTypes.SELECT,
        raw: true,
        plain: true
      }
    );
  
    return result;
  } catch (error) {
    console.error('queryContractInfoWithSite error -- ' + error);
    return null;
  }
}

// EduJudge 정보를 등록하는 쿼리
export async function addEduJudgeInfo(item: tb_edu_judgeAttributes) {
  try {
    const result = await models.tb_edu_judge.create({
      edu_sch_code: item.edu_sch_code,
      edu_exam_code: item.edu_exam_code,
      account_code: item.account_code,
      register_code: item.register_code,
      reg_dt: item.reg_dt,
      updater_code: item.updater_code,
      update_dt: item.update_dt
    } as tb_edu_judgeAttributes);

    return result.code;
  } catch (error) {
    console.error('addEduJudgeInfo error -- ' + error);
    return -1;
  }
}

// 교육 평가지 컨텐츠 정보 추가
export async function addEduJudgeContentsInfo(item: tb_edu_judge_contentsAttributes) {
  try {
    const result = await models.tb_edu_judge_contents.create({
      edu_judge_code: item.edu_judge_code,
      edu_exam_contents_code: item.edu_exam_contents_code,
      answer: item.answer
    } as tb_edu_judge_contentsAttributes);

    return !!result;
  } catch (error) {
    console.error('addEduJudgeContentsInfo error -- ' + error);
    return false;
  }
}

// 교육일정고유코드, 계정고유코드로 교육일정멤버 정보를 가져오는 쿼리
export async function queryEduMember(edu_sch_code: number, account_code: number) {
  try {
    const result = await models.tb_edu_sch_member.findOne({
      where: {
        edu_sch_code,
        account_code
      }
    });

    return result;
  } catch (error) {
    console.error('queryEduMember error -- ' + error)
    return null;
  }
}

export async function updateEduSchMember(item: tb_edu_sch_memberAttributes) {
  try {
    const [updatedCount] = await models.tb_edu_sch_member.update(
      {
        complete_state: item.complete_state,
        judge_state: item.judge_state,
        is_complete: item.is_complete
      },
      {
        where: {
          code: item.code
        }
      }
    );

    if (updatedCount >= 1) {
      return true;
    }
    
    return false;
  } catch (error) {
    console.error('updateEduSchMember error -- ' + error);
    return false;
  }
}

// 계약서공유코드로 계약정보 가져오는 쿼리
export async function queryContractInfo(contract_code: number) {
  try {
    const result = await sequelize.query<tb_contractAttributes>(
      `
      SELECT
        A.name,   
        A.state_code, 
        A.allowed_code,  
        A.MOBILE,   
        C.*, 
        P.name AS sosok,
        S.name AS site_name,
        CC.code AS client_code,
        CC.name AS client_name,
        B.state AS blocked_state,
        B.contents AS blocked_contents,
        L.view_text AS bank_name
      FROM tb_contract C
        LEFT JOIN tb_account A ON C.account_code = A.code
        LEFT JOIN tb_partner P ON C.partner_code = P.code 
        LEFT JOIN tb_partner_contract PC ON P.code = PC.partner_code AND PC.site_code = C.site_code
        LEFT JOIN tb_site S ON C.site_code = S.code
        LEFT JOIN tb_blocked B ON C.account_code = B.account_code AND C.partner_code = B.partner_code AND C.site_code = B.site_code
        LEFT JOIN tb_site_of_client SC ON SC.site_code = C.site_code
        LEFT JOIN tb_client CC ON CC.code = SC.client_code
        LEFT JOIN tb_lib L ON L.code = C.bank_code
      WHERE C.code = :code
      `,
      {
        replacements: { code: contract_code },
        type: QueryTypes.SELECT,
        raw: true,
        plain: true
      }
    );

    return result;
  } catch (error) {
    console.error('queryContractInfo error -- ' + error);
    return null;
  }
}

// 필수 문서 리스트 조회 쿼리
export async function queryReqDocList(account_code: number) {
  try {
    const result = await models.tb_req_doc.findAll({
      where: {
        account_code
      }
    });

    return result;
  } catch (error) {
    throw new Error('queryReqDocList error -- ' + error);
  }
}

// 통근정보히스토리 가져오는 쿼리
export async function queryCommuteInfoHistory(site_code: number, account_code: number | undefined, cstate: CommuteState, dateStr: string) {
  try {
    const result = await sequelize.query<tb_commuteAttributes>(
      `
      SELECT * FROM tb_commute
      WHERE 
        site_code = :site_code AND
        account_code = :account_code AND
        state_code = :state_code AND
        TO_CHAR(in_dt, 'YYYY-MM-DD') = :in_dt
      LIMIT 1
      `,
      {
        replacements: {
          site_code,
          account_code,
          state_code: cstate,
          in_dt: dateStr
        },
        type: QueryTypes.SELECT,
        plain: true
      }
    );

    return result;
  } catch (error) {
    console.error("queryCommuteInfoHistory error -- " + error);
    return null;
  }
}

// 통근정보 업데이트
export async function updateCommuteInfo(commuteInfo: tb_commuteAttributes) {
  try {
    const [updatedCount] = await models.tb_commute.update(
      {
        in_dt: commuteInfo.in_dt,
        out_dt: commuteInfo.out_dt,
        state_code: commuteInfo.state_code,
        update_dt: commuteInfo.update_dt,
        reason_code: commuteInfo.reason_code,
        reason_cause: commuteInfo.reason_cause
      },
      {
        where: {
          code: commuteInfo.code
        }
      }
    );

    if (updatedCount >= 1) {
      return true;
    }
    
    return false;
  } catch (error) {
    // throw new Error('updateCommuteInfo error -- ' + error);
    console.error('updateCommuteInfo error -- ' + error);
    return false;
  }
}

// site config 가져오는 쿼리
export async function querySiteConfig(site_code: number) {
  try {
    const result = await models.tb_site_config.findOne({
      where: {
        site_code
      }
    });

    return result;
  } catch (error) {
    throw new Error('querySiteConfig error -- ' + error);
  }
}

// @ .NET QueryHealthList_BP_TOP
export async function queryHealthListBpTop(site_code: number, account_code: number) {
  try {
    const result = await models.tb_health_bp.findAll({
      where: {
        site_code,
        account_code
      },
      order: [['measure_dt', 'DESC']],
      limit: 10
    });

    return result;
  } catch (error) {
    console.error('queryHealthListBPTOP error -- ' + error);
    return null;
  }
}

//
export async function queryHealthListBpByDate(site_code: number, account_code: number, start_time_bp: Date) {
  try {
    const result = await models.tb_health_bp.findAll({
      where: {
        site_code,
        account_code,
        measure_dt: {
          [Op.gte]: dayjs(start_time_bp).format("YYYY-MM-DD")
        }
      },
    });

    return result;
  } catch (error) {
    console.error('queryHealthListBpByDate error -- ' + error);
    return null;
  }
} 

// @ .NET QueryHealthList_ALCOHOL_TOP
export async function queryHealthListAlTop(site_code: number, account_code: number) {
  try {
    const result = await models.tb_health_alcohol.findAll({
      where: {
        site_code,
        account_code
      },
      order: [['measure_dt', 'DESC']],
      limit: 10
    });

    return result;
  } catch (error) {
    console.error('queryHealthListAlTop error -- ' + error);
    return null;
  }
}

//
export async function queryHealthListAlByDate(site_code: number, account_code: number, start_time_al: Date) {
  try {
    const result = await models.tb_health_alcohol.findAll({
      where: {
        site_code,
        account_code,
        measure_dt: {
          [Op.gte]: dayjs(start_time_al).format("YYYY-MM-DD")
        }
      },
    });

    return result;
  } catch (error) {
    console.error('queryHealthListAlByDate error -- ' + error);
    return null;
  }
} 

// @ .NET QueryHealthList_OXYGEN_TOP
export async function queryHealthListOxTop(site_code: number, account_code: number) {
  try {
    const result = await models.tb_health_oxygen.findAll({
      where: {
        site_code,
        account_code
      },
      order: [['measure_dt', 'DESC']],
      limit: 10
    });

    return result;
  } catch (error) {
    console.error('queryHealthListOxTop error -- ' + error);
    return null;
  }
}

// @ .NET QueryHealthList_STRESS_TOP
export async function queryHealthListStTop(site_code: number, account_code: number) {
  try {
    const result = await models.tb_health_stress.findAll({
      where: {
        site_code,
        account_code
      },
      order: [['measure_dt', 'DESC']],
      limit: 10
    });

    return result;
  } catch (error) {
    console.error('queryHealthListStTop error -- ' + error);
    return null;
  }
}

//
export async function queryEduMemberWithSite(site_code: number, account_code: number) {
  try {
    const result = await sequelize.query<tb_edu_sch_memberAttributes>(
      `
      SELECT *
      FROM tb_edu_sch_member EM
        LEFT JOIN tb_edu_sch ES ON EM.edu_sch_code = ES.code
        LEFT JOIN tb_edu E ON ES.edu_code = E.code
        LEFT JOIN tb_account A ON EM.account_code = A.code 
      WHERE ES.site_code = :site_code
        AND EM.account_code = :account_code
      `,
      {
        replacements: { 
          site_code,
          account_code
        },
        type: QueryTypes.SELECT,
        raw: true,
      }
    );

    return result;
  } catch (error) {
    console.error('queryEduMemberWithSite error -- ' + error);
    return null;
  }
}

// 
export async function saveCommuteInfo(item: tb_commuteAttributes) {
  try {
    const commuteRows = await sequelize.query<tb_commuteAttributes>(
      `
      SELECT *
      FROM tb_commute
      WHERE site_code = :site_code
        AND account_code = :account_code
        AND TO_CHAR(in_dt, 'YYYY-MM-DD') = :in_dt
      `,
      {
        replacements: {
          site_code: item.site_code,
          account_code: item.account_code,
          in_dt: dayjs(item.in_dt).format("YYYY-MM-DD")
        },
        type: QueryTypes.SELECT
      }
    );

    let commuteCode = -1;
    if (commuteRows.length > 0) {
      commuteCode = commuteRows[0].code;
    }

    if (commuteCode === -1) {
      const result = await models.tb_commute.create({
        site_code: item.site_code,
        account_code: item.account_code,
        state_code: item.state_code,
        in_dt: item.in_dt,
        reg_dt: item.reg_dt,
        update_dt: item.update_dt,
        reason_code: item.reason_code,
        reason_cause: item.reason_cause
      } as tb_commuteAttributes);

      return !!result;
    } else {
      const [updatedCount] = await models.tb_commute.update(
        {
          in_dt: item.in_dt,
          state_code: item.state_code,
          update_dt: item.update_dt,
          reason_code: item.reason_code,
          reason_cause: item.reason_cause
        },
        {
          where: {
            code: commuteCode
          }
        }
      );

      if (updatedCount >= 1) {
        return true;
      }
      
      return false;
    }
  } catch (error) {
    console.error('saveCommuteInfo error -- ' + error);
    return false;
  }
}

// TBMList Query
export async function queryTBMList(site_code: number, search_type: string,
  sdt: string, edt: string, search_text: string, search_proc_state: number) {
    
  try { 
    let qry =
      `
      SELECT 
        T.*, 
        A.name AS reg_name
      FROM tb_tbm T
        LEFT JOIN tb_account A ON T.register_code = A.code
        LEFT JOIN tb_lib L ON T.const_type = L.code
      WHERE T.site_code = :site_code 
      `;
    
    const replacements: any = {
      site_code
    };

    //전체검색이 아닐경우 
    if (sdt !== "" && edt !== "") {
      qry += `
        AND (:sdt <= TO_CHAR(T.reg_dt, 'YYYY-MM-DD')
        AND :edt >= TO_CHAR(T.reg_dt, 'YYYY-MM-DD'))
      `;
      replacements.sdt = sdt;
      replacements.edt = edt;
    }

    // 결재상태 필터 
    if (search_proc_state === 1 || search_proc_state === 2) {
      qry += ` AND T.is_sign = :is_sign `;
      replacements.is_sign = search_proc_state === 1 ? 1 : 0; // 1: 결재완료, 0: 결재미완료
    }

    // 텍스트 검색
    if (search_text && search_text.trim() !== "") {
      qry += `
        AND (
          T.subject ILIKE :search_pattern OR 
          A.name ILIKE :search_pattern OR 
          L.view_text ILIKE :search_pattern
        )
      `;
      replacements.search_pattern = `%${search_text}%`;
    }

    qry += ` ORDER BY T.reg_dt DESC`;

    const tbmRows = await sequelize.query<tb_tbmAttributes>(qry, {
      type: QueryTypes.SELECT,
      replacements
    });

    return tbmRows;
  } catch (error) {
    console.error('queryTBMList error -- ' + error);
    return null;
  }
}

//
export async function queryTBMState(tbm_code: number, worker_code: number) {
  try {
    const result = await models.tb_tbm_state.findOne({
      where: {
        tbm_code,
        worker_code
      }
    });

    return result;
  } catch (error) {
    console.error('queryTBMState error -- ' + error);
    return null;
  }
}

// addTBMState
export async function addTBMState(item: tb_tbm_stateAttributes) {
  try {
    const result = await models.tb_tbm_state.create(item);

    return !!result;
  } catch (error) {
    console.error('addTBMState error -- ' + error);
    return false;
  }
}

// @ original : DataManager.QueryContracts
export async function queryContracts(site_code: number, cstate: ContractState,
  ctype: ContractType, sdt: string, edt: string, search_text: string) {

  try {
    let qry = `
      SELECT
      A.name,
      A.state_code,
      A.allowed_code,
      A.mobile,
      C.*,
      P.name AS sosok,
      (SELECT state
       FROM tb_blocked
       WHERE account_code = C.account_code
         AND site_code = C.site_code
         AND partner_code = C.partner_code
       LIMIT 1) AS blocked_state,
      B.state AS blocked_state,
      B.contents AS blocked_contents
    FROM tb_contract C
    LEFT JOIN tb_account A ON C.account_code = A.code
    LEFT JOIN tb_partner P ON C.partner_code = P.code
    LEFT JOIN tb_partner_contract PC ON P.code = PC.partner_code AND PC.site_code = C.site_code
    LEFT JOIN tb_lib L ON C.const_type_code = L.code
    LEFT JOIN tb_blocked B ON C.account_code = B.account_code
                          AND C.partner_code = B.partner_code
                          AND C.site_code = B.site_code
    `;

    const replacements: any = { site_code };

    // 필터: 사이트
    qry += ` WHERE PC.site_code = :site_code `;

    const today = dayjs().format('YYYY-MM-DD');
    replacements.TODAY = today;

    // 계약 유효
    if (cstate === ContractState.VALID) {
      qry += ` AND C.is_approval = :is_approval `;
      replacements.is_approval = 1;

      qry += ` AND ( (C.period_begin_dt <= :TODAY) AND (:TODAY <= C.period_end_dt) ) `;
      qry += ` AND NOT(A.code IN (
                  SELECT account_code
                    FROM tb_blocked
                  WHERE state = 1
                    AND site_code = C.site_code
                    AND account_code = C.account_code
                    AND partner_code = C.partner_code
                )) `;
    }

    // 계약대기
    if (cstate === ContractState.WAIT) {
      qry += ` AND C.is_approval = :is_approval `;
      replacements.is_approval = 0;

      qry += ` AND NOT(A.code IN (
                  SELECT account_code
                    FROM tb_blocked
                  WHERE state = 1
                    AND site_code = C.site_code
                    AND account_code = C.account_code
                    AND partner_code = C.partner_code
                )) `;
    }

    // 계약만료
    if (cstate === ContractState.EXPIRE) {
      qry += ` AND C.is_approval = :is_approval `;
      replacements.is_approval = 1;

      qry += ` AND DATE(C.period_end_dt) <= DATE(NOW()) `;
      qry += ` AND NOT(A.code IN (
                  SELECT account_code
                    FROM tb_blocked
                  WHERE state = 1
                    AND site_code = C.site_code
                    AND account_code = C.account_code
                    AND partner_code = C.partner_code
                )) `;
    }

    // 계약불가
    if (cstate === ContractState.NOT_ADMIT) {
      qry += ` AND A.code IN (
                  SELECT account_code
                    FROM tb_blocked
                  WHERE state = 1
                    AND site_code = C.site_code
                    AND account_code = C.account_code
                    AND partner_code = C.partner_code
                ) `;
    }

    // 계약타입 필터
    if (ctype !== ContractType.ALL) {
      qry += ` AND C.contract_type = :contract_type `;
      replacements.contract_type = ctype;
    }

    // 날짜 검색
  if (sdt !== "" && edt !== "") {
    qry += `
      AND (
        (C.period_begin_dt <= :sdt AND :sdt <= C.period_end_dt)
        OR (C.period_begin_dt <= :edt AND :edt <= C.period_end_dt)
        OR (C.period_begin_dt >= :sdt AND :edt >= C.period_begin_dt)
        OR (C.period_end_dt >= :sdt AND :edt >= C.period_end_dt)
      )
    `;
    replacements.sdt = sdt;
    replacements.edt = edt;
  }

  // 검색 텍스트
  if (search_text && search_text.trim() !== "") {
    qry += `
      AND (
        A.name ILIKE :search_text
        OR A.mobile ILIKE :search_text
        OR P.name ILIKE :search_text
        OR L.view_text ILIKE :search_text
      )
    `;
    replacements.search_text = `%${search_text}%`;
  }

  // 인증코드 필터 + 정렬
  qry += ` AND A.auth_code = 0 ORDER BY A.code `;

  const result = await sequelize.query(qry, {
    type: QueryTypes.SELECT,
    replacements
  });

  return result;
    
  } catch (error) {
    console.error('queryContracts error -- ' + error);
    return null;
  }
}

// 사이트 해당하는 근로자 전체
export async function queryContractsWithSiteCode(site_code: number) {
  try {
    const today = dayjs().format('YYYY-MM-DD');

    type tbContactAttributesWithExtra = tb_contractAttributes & {
      today_commute: number,
      illness_state: number,
      age: number
    };

    const result = sequelize.query<tbContactAttributesWithExtra>(
      `
      SELECT 
      C.*,

      A.illness_state AS illness_state,
      A.face AS face,
      A.mobile AS mobile,
      A.name AS name,
      (
        SELECT COUNT(*)
        FROM tb_commute T
        WHERE
          T.site_code = :site_code
          AND T.state_code = 1
          AND T.account_code = C.account_code
          AND :in_dt = TO_CHAR(T.in_dt, 'YYYY-MM-DD')
      ) AS today_commute,
      P.name AS sosok,
      B.state AS blocked_state,
      B.contents AS blocked_contents
      FROM tb_contract C
        LEFT JOIN tb_account A ON C.account_code = A.code
        LEFT JOIN tb_partner P ON C.partner_code = P.code
        LEFT JOIN tb_blocked B ON C.account_code = B.account_code
                              AND C.partner_code = B.partner_code
                              AND C.site_code = B.site_code
      WHERE C.site_code = :site_code
      `,
      {
        replacements: {
          site_code,
          in_dt: today
        },
        type: QueryTypes.SELECT
      }
    );

    return result;
  } catch (error) {
    console.error('queryContractsWithSiteCode error -- ' + error);
    return null;
  }
}

// 사이트별 근로자 소속된 협력사 코드
export async function queryContractsPartners(site_code: number) {
  try {
    const result = await sequelize.query<{ partner_code: number }>(
      `
      SELECT
        partner_code
      FROM tb_contract C
        LEFT JOIN tb_partner P ON P.code = C.partner_code
      WHERE C.site_code = :site_code
      GROUP BY partner_code
      `,
      {
        replacements: { site_code },
        type: QueryTypes.SELECT
      }
    );

    return result.map(row => row.partner_code);
  } catch (error) {
    console.error('queryContractsPartners error -- ' + error);
    return null;
  }
}

// @ .NET GetPartnerInfo
export async function queryPartnerInfo(code: number) {
  try {
    const today = dayjs().format('YYYY-MM-DD');

    const qry = `
      SELECT P.*,
            P2.site_code,
            S.c_begin_dt,
            S.c_end_dt,
            P2.mgr_contact,
            P2.period_begin,
            P2.period_end,
            S.name AS site_name,
            (SELECT COUNT(code)
              FROM tb_contract
              WHERE site_code = P2.site_code
                AND partner_code = P2.partner_code
                AND is_approval = 1
                AND period_end_dt > :today
            ) AS member_count,
            P2.code AS pc_code
      FROM tb_partner P
        LEFT JOIN tb_partner_contract P2 ON P.code = P2.partner_code
        LEFT JOIN tb_site S ON P2.site_code = S.code
      WHERE P.code = :code
    `;
    
    const result = await sequelize.query<tb_partnerAttributes>(qry, {
      type: QueryTypes.SELECT,
      replacements: {
        today,
        code
      },
      plain: true
    });

    return result;
  } catch (error) {
    console.error('queryPartnerInfo error -- ' + error);
    return null;
  }
}

// @ .NET QueryContracts_SiteCode_withTablet
export async function queryContractsSiteCodeWithTablet(site_code: number) {
  try {
    const today = dayjs().format('YYYY-MM-DD');

    const qry = `
      SELECT 
        A.name,   
        A.state_code,  
        A.allowed_code,  
        A.MOBILE,   
        C.*, 
        P.name AS sosok,
        A.face AS face,
        A.mobile AS mobile,
        A.name AS name,
        (
          SELECT state 
          FROM tb_blocked 
          WHERE account_code = C.account_code  
            AND site_code = C.site_code 
            AND partner_code = C.partner_code
          LIMIT 1
        ) AS blocked_state
      FROM tb_contract C
      LEFT JOIN tb_account A ON C.account_code = A.code
      LEFT JOIN tb_partner P ON C.partner_code = P.code
      LEFT JOIN tb_partner_contract PC ON P.code = PC.partner_code AND PC.site_code = C.site_code
      LEFT JOIN tb_lib L ON C.const_type_code = L.code
      WHERE PC.site_code = :site_code
        AND is_approval = :is_approval
        AND (
          (period_begin_dt <= :today) 
          AND (:today <= period_end_dt)
        )
        AND NOT (A.code IN (
          SELECT account_code 
          FROM tb_blocked 
          WHERE state = 1
        ))
    `;

    const result = await sequelize.query<tb_contractAttributes & tb_accountAttributes>(qry, {
      replacements: {
        site_code,
        is_approval: 1,
        today
      },
      type: QueryTypes.SELECT
    });

    return result;
  } catch (error) { 
    console.error('queryContractsSiteCodeWithTablet error -- ' + error);
    return null;
  }
}

export async function updateAccountInfoFace(account_code: number, face: string) {
  try {
    // const existing = await models.tb_account.findByPk(account_code);
    // if (!existing || existing.face === face) {
    //   return false; // 값 동일하면 update 안 함
    // }
    
    const [updatedCount] = await models.tb_account.update(
      {
        face
      },
      {
        where: {
          code: account_code
        }
      }
    );

    return updatedCount >= 1;
  } catch (error) {
    console.error('updateAccountInfoFace error -- ' + error);
    return false;
  }
}




/*
** 
** custom 함수
**
*/





// @ .NET QueryHealthList_TOP
export async function queryHealthListTop(site_code: number, account_code: number) {
  try {
    const healthInfoBpItems = await queryHealthListBpTop(site_code, account_code);
    const healthInfoAlItems = await queryHealthListAlTop(site_code, account_code);
    const healthInfoOxItems = await queryHealthListOxTop(site_code, account_code);
    const healthInfoStItems = await queryHealthListStTop(site_code, account_code);

    const healthInfoItems = getListToRec(healthInfoBpItems ?? [], healthInfoAlItems ?? [],
      healthInfoOxItems ?? [], healthInfoStItems ?? []);

    // 정렬된 리스트로 변환 (.NET에서는 최근 10개라고 주석은 되어 있는데, 로직은 과거 -> 최근임)
    const result: HealthInfo[] = Object.values(healthInfoItems)
      .sort((a, b) => a.measure_dt.localeCompare(b.measure_dt)) // 과거 -> 최근 
      .slice(0, 10);

    return result;
  } catch (error) {
    console.error('queryHealthListTop error -- ' + error);
    return null;
  }
}

type HealthInfo = {
  bp_max?: number;
  bp_min?: number;
  alcohol?: number;
  oxygen?: number;
  stress?: number;
  measure_dt: string;
  reg_dt?: Date;
}
// @ .NET GetListToDic
// bp, al, ox, st 리스트를 하나의 리스트로 만드는 함수
function getListToRec(
  itemsBp: tb_health_bpAttributes[],
  itemsAl: tb_health_alcoholAttributes[],
  itemsOx: tb_health_oxygenAttributes[],
  itemsSt: tb_health_stressAttributes[]
) : Record<string, HealthInfo> {
  const items: Record<string, HealthInfo> = {};

  for (const item of itemsBp) {
    if (!items[item.measure_dt]) {
      items[item.measure_dt] = {
        measure_dt: item.measure_dt,
        reg_dt: item.reg_dt
      };
    }
    items[item.measure_dt].bp_max = item.bp_max;
    items[item.measure_dt].bp_min = item.bp_min;
  }

  for (const item of itemsAl) {
    if (!items[item.measure_dt]) {
      items[item.measure_dt] = {
        measure_dt: item.measure_dt,
        reg_dt: item.reg_dt
      };
    }
    items[item.measure_dt].alcohol = item.measures;
  }

  for (const item of itemsOx) {
    if (!items[item.measure_dt]) {
      items[item.measure_dt] = {
        measure_dt: item.measure_dt,
        reg_dt: item.reg_dt
      };
    }
    items[item.measure_dt].oxygen = Math.floor(item.measures);
  }

   for (const item of itemsSt) {
    if (!items[item.measure_dt]) {
      items[item.measure_dt] = {
        measure_dt: item.measure_dt,
        reg_dt: item.reg_dt
      };
    }
    items[item.measure_dt].stress = Math.floor(item.measures);
  }

  return items;
}


// 출역 불가
export async function commuteNotAdmit(
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

export async function getEduJudgeStatus(site_code: number, account_code: number) {
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

export async function getEduStatus(site_code: number, account_code: number) {
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

export async function getHealthALStatus(site_code: number, account_code: number, start_time_al: Date) {
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

export async function getHealthBPStatus(site_code: number, account_code: number, start_time_bp: Date) {
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

// @ .NET GetProfile
// 해당하는 id의 계정정보를 가져오는 쿼리
export async function queryProfile(userid: string) {
  try {
    const result = await models.tb_account.findOne({
      where: {
        id: userid
      }
    });

    return result;
  } catch (error) {
    console.error('queryProfile error -- ', error);
    return null;
  }
}

// @ .NET Login
// userid, password 로 계정정보, 현장고유코드 등을 가져오는 쿼리
export async function login(userid: string, password: string) {
  try {
    const qry = `
      SELECT
        A.*,
        S.name as site_name,
        S.code as site_code
      FROM tb_account A
        LEFT JOIN tb_site S ON S.code = A.admin_site_code
      WHERE A.id = :id
        AND A.pw = :pw
    `;

    const result = await sequelize.query(qry, {
      replacements: {
        id: userid,
        pw: password
      },
      type: QueryTypes.SELECT,
      plain: true
    });

    return result;
  } catch (error) {
    console.error('login error -- ', error);
    return null;
  }
}