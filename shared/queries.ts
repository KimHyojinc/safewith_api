import { Op, QueryTypes } from 'sequelize';
import { models, sequelize } from '../data-source';
import { SiteNameDto } from './site-name';
import moment from 'moment';
import { tb_accountAttributes, tb_contractAttributes, tb_health_bpAttributes } from '../models/init-models';

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
export async function saveCompleteMemberInfo(eitem: {
    edu_sch_code: number;
    account_code: number;
    is_complete: number;
    complete_dt: string
  }) {
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
      const result = await models.tb_edu_sch_member.create(eitem as any);

      return !!result;
    } else {
      // Update
      edu_member.edu_sch_code = eitem.edu_sch_code;
      edu_member.is_complete = eitem.is_complete;
      edu_member.complete_dt = new Date(eitem.complete_dt);

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
      } as any);

      return !!result;
    } else {
      // UPDATE
      healthBP.bp_max = item.bp_max;
      healthBP.bp_min = item.bp_min;
      healthBP.measure_dt = item.measure_dt;
      healthBP.reg_dt = item.reg_dt;

      await healthBP.save();
      return true;
    }
  } catch (error) {
    throw new Error('saveHealthInfoBP error -- ' + error);
  }
}