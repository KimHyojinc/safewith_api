import { Request, Response } from 'express';
import { ResultData } from '../../shared/result';
import { clearAuthCookie } from '../../middleware/auth';

/**
 * @route POST /api/logout
 * @summary 로그아웃
 */
async function Logout(req: Request, res: Response) {
  clearAuthCookie(res);

  const ret = ResultData.ok();
  return res.json({ ...ret });
}

export default Logout;