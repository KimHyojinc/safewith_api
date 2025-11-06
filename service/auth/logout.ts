import { Request, Response } from 'express';
import { ResultData } from '../../shared/result';
import { clearAuthCookie } from '../../middleware/auth';

async function Logout(req: Request, res: Response) {
  clearAuthCookie(res);

  const ret = ResultData.ok();
  return res.json({ ...ret });
}

export default Logout;