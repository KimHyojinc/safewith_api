import { Request, Response } from 'express';
import moment from 'moment';

async function GetCustList(req: Request, res: Response) {
    const { mt_store_code, date, type, work, pay_order } = req.query;
    
    try {
        return res.status(403).json({ result: false, msg: '' });
    } catch (error) {
        return res.status(403).json({ result: false, msg: error });
    }
}

export default GetCustList;
