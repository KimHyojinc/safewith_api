import { Op, QueryTypes } from 'sequelize';
import { models, sequelize } from '../data-source';
import { SiteNameDto } from './site-name';

// tb_lib에서 group_name과 code를 기준으로 label 조회
export async function queryLibLabel(groupName: string, code: number) {
  const result = await models.tb_lib.findOne({
    where: { group_name: groupName, code },
    attributes: ['view_text']
  });

  return result?.view_text ?? null;
}

// 현장 리스트 조회
export async function querySites(client_code: number = -1) {
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
    throw new Error('queryEduSch failed -- ' + error);
  }
}

// Edu detail 가져오는 쿼리
export async function queryEduDetail(code: number) {
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
    throw new Error('queryEduContentsWithCode failed -- ' + error);
  }
}