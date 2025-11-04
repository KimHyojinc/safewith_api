import { Request, Response } from 'express';
import moment from 'moment';
import { models } from '../../data-source';
import { dev_mode, verifyPassword } from '../../middleware/util';

async function GetEXSiteList(req: Request, res: Response) {
    const { page_no, page_size } = req.body;
    try {
        const page = parseInt(page_no) || 1;
        const limit = parseInt(page_size) || 1;
        const offset = (page - 1) * limit;

        const { count, rows } = await models.tb_site.findAndCountAll({
            limit,
            offset,
            order: [['created_at', 'DESC']], // 최신순 정렬 (옵션)
        });
        
        return res.status(200).json({ result: true, msg: '성공', data: {
            totalItems: count,
            totalPages: Math.ceil(count / limit),
            currentPage: page,
            users: rows,
        }});
    } catch (error) {
        return res.status(500).json({ result: false, msg: error });
    }
}

export default GetEXSiteList;
