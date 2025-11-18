import { Request, Response } from 'express';
import { querySites } from '../../shared/queries';

// @POST /api/site/list
// 현장 리스트
async function GetEXSiteList(req: Request, res: Response) {
    const { client_code } = req.body;

    try {
        const items = await querySites(client_code);

        return res.status(200).json(items);
    } catch (error) {
        return res.status(500).json({ result: false, msg: error });
    }
}

export default GetEXSiteList;
