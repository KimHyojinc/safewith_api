import { Op, QueryTypes } from 'sequelize';
import { models, sequelize } from '../data-source';
import { SiteNameDto } from './site-name';
import moment from 'moment';
import { tb_accountAttributes, tb_commuteAttributes, tb_contractAttributes, tb_edu_judge_contentsAttributes, tb_edu_judgeAttributes, tb_edu_sch_memberAttributes, tb_health_alcoholAttributes, tb_health_bpAttributes } from '../models/init-models';
import { CommuteState } from './enums';

// tb_lib에서 group_name과 code를 기준으로 label 조회
export async function queryLibLabel(groupName: string, code: number) {
  try {
    const result = await models.tb_lib.findOne({
      where: { group_name: groupName, code },
      attributes: ['view_text']
    });
  
    return result?.view_text ?? null;
  } catch (error) {
    throw new Error('queryLibLabel error -- ' + error);
  }
}

// 현장 리스트 조회
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
    throw new Error('querySites error -- ' + error);
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
    throw new Error('queryEduDetail error -- ' + error);
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
    throw new Error('queryEduContentsWithCode error -- ' + error);
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
    throw new Error('queryEduSchInfo error -- ' + error);
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
    throw new Error('queryEduExamInfoWithEduCode error -- ' + error);
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
    throw new Error('queryEduExamContentsWithEduCode error -- ' + error);
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
      const result = await models.tb_edu_sch_member.create(eitem as tb_edu_sch_memberAttributes);

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
    // throw new Error('saveCompleteMemberInfo error -- ' + error);
    return false;
  }
}

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
    throw new Error('queryAccountInfo error -- ' + error);
  }
}

// 근로자 로그인시 계약정보 확인 키오스크/테블릿
export async function queryContractInfoWithTablet(site_code: number, account_code: number) {
  try {
    type ContractInfoWithExtra = tb_contractAttributes & { sosok: string; };

    const today = moment().format('YYYY-MM-DD');

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
    throw new Error('queryContractInfoWithTablet error -- ' + error);
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
    throw new Error('queryBlockedInfo error -- ' + error);
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
    throw new Error('queryHealthInfoBP error -- ' + error);
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
    throw new Error('saveHealthInfoBP error -- ' + error);
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
    throw new Error('saveHealthInfoAL error -- ' + error);
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
    throw new Error('queryAccountInfoWithMobile error -- ' + error);
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
    throw new Error('querySiteInfo error -- ' + error);
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
    throw new Error('queryContractInfoWithSite error -- ' + error);
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
    // throw new Error('addEduJudgeInfo error -- ' + error);
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
     // throw new Error('addEduJudgeContentsInfo error -- ' + error);
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
    throw new Error('queryEduMember error -- ' + error);
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
    // throw new Error('updateEduSchMember error -- ' + error);
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
    throw new Error('queryContractInfo error -- ' + error);
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
export async function queryCommuteInfoHistory(site_code: number, account_code: number | undefined, cstate: CommuteState, date: string) {
  try {
    const result = await models.tb_commute.findOne({
      where: {
        site_code,
        account_code,
        state_code: cstate,
        in_dt: date
      }
    });

    return result;
  } catch (error) {
    throw new Error('queryCommuteInfoHistory error -- ' + error);
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

//
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
    // throw new Error('queryHealthListBPTOP error -- ' + error);
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
          [Op.gte]: moment(start_time_bp).format("YYYY-MM-DD")
        }
      },
    });

    return result;
  } catch (error) {
    // throw new Error('queryHealthListBpByDate error -- ' + error);
    return null;
  }
} 

//
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
    // throw new Error('queryHealthListBPTOP error -- ' + error);
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
          [Op.gte]: moment(start_time_al).format("YYYY-MM-DD")
        }
      },
    });

    return result;
  } catch (error) {
    // throw new Error('queryHealthListBpByDate error -- ' + error);
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
    // throw new Error('queryEduMemberWithSite error -- ' + error);
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
          in_dt: moment(item.in_dt).format("YYYY-MM-DD")
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
    // throw new Error('updateCommuteInfo error -- ' + error);
    console.error('addCommuteInfo error -- ' + error);
    return false;
  }
}