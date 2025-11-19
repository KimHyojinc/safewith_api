import { Request, Response } from 'express';
import { models } from '../../data-source';
import { convertBase64ToString, verifyPassword } from '../../middleware/util';
import { ResultData } from '../../shared/result';

/**
 * @route POST /api/login/worker
 * @param id 아이디
 * @param pw 비밀번호 (비밀번호를 base64로 인코딩한 값)
 * @param site_code 현장고유코드
 * @summary 근로자 로그인
 */
async function LoginWorker(req: Request, res: Response) {
  const { id, pw, site_code } = req.body;

  try {
    const accountInstance = await models.tb_account.findOne({
        where: {
          id
        }
    });
    
    if (accountInstance) {
      // tb_lib의 AUTH_CODE 참조
      const accountInfo = accountInstance.get({ plain: true });

      const isPassword = verifyPassword(String(convertBase64ToString(pw)), String(accountInfo.pw));

      if (!isPassword) {
        return res.status(403).json({ result: false, message: '비밀번호가 일치하지 않습니다.' });
      }

      const blockedInstance = await models.tb_blocked.findOne({
        where: {
          account_code: accountInfo.code
        }
      });

      let blockedInfo = null;
      if (blockedInstance) {
        blockedInfo = blockedInstance.get({ plain: true });
      }

      if (blockedInfo && blockedInfo.state === 1) {
        return res.status(403).json({ ...ResultData.error({ msg_code: -12, message: "차단된 근로자 입니다" }) });
      }

      let contract_code = -1; // NOTE: 이건 왜 -1? 기본값은 0인데 
      const contractInstance = await models.tb_contract.findOne({
        where: {
          site_code,
          account_code: accountInfo.code
        }
      });

      if (contractInstance) {
        const contractInfo = contractInstance.get({ plain: true });
        contract_code = contractInfo.code;
      }

      // token, cookie
      // const payload = {};

      // const token = generateToken(payload);
      // setAuthCookie(res, token);

      const ret = ResultData.ok({
        data: accountInfo.name,
        name: accountInfo.name,
        mobile: accountInfo.mobile,
        account_code: accountInfo.code,
        contract_code: contract_code,
        client_code: accountInfo.client_code,
        last_site_code: accountInfo.last_site_code,
        auth_code: accountInfo.auth_code
      });

      return res.status(200).json({ ...ret });
    } else {
      return res.status(401).json({ result: false, message: '아이디 및 패스워드확인' });
    }
  } catch (error) {
      return res.status(500).json({ result: false, message: error });
  }
}

export default LoginWorker;
