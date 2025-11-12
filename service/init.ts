import { Request, Response } from 'express';
import { ResultData } from '../shared/result';

async function Init(req: Request, res: Response) {
  try {
    const ret = ResultData.ok();

    return res.status(200).json(ret);
  } catch (error) {
      return res.status(500).json({ result: false, message: error });
  }
}

export default Init;