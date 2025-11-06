import { Request, Response } from 'express';
import { models } from '../../data-source';
import { Op } from 'sequelize';
import { SiteNameDto } from '../../shared/site-name';

async function GetEXSiteList(req: Request, res: Response) {
    const { client_code: clientCodeAsStr } = req.body;

    try {
        const client_code = Number(clientCodeAsStr);

        const items = await querySites(client_code);

        return res.status(200).json(items);
    } catch (error) {
        return res.status(500).json({ result: false, msg: error });
    }
}

async function querySites(client_code: number = -1) {
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

export default GetEXSiteList;
