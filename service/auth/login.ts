import { Request, Response, NextFunction } from 'express';
import moment from 'moment';
import { models } from '../../data-source';
import { convertBase64ToString, dev_mode, verifyPassword } from '../../middleware/util';
import { generateToken } from '../../middleware/jwt';
import { setAuthCookie } from '../../middleware/auth';
import { ResultType } from '../../shared/result';
import { ADMIN_TYPE } from '../../shared/admin';

export class ResultData {
    // 필수 공통 필드
  result: ResultType = ResultType.OK;
  msg_code: number = 0;
  message: string = '정상처리되었습니다';
  isCommute: boolean = true;
  data: string | null = null;

  // 도메인 필드들 — C# 기본값처럼 전부 초기화
  account_code: number = 0;
  contract_code: number = 0;
  contract_reg_dt: string | null = null;

  name: string | null = null;
  mobile: string | null = null;
  family_contact: string | null = null; // 민감정보: 원칙적으론 비노출 권장
  pno1: string | null = null;
  pno2: string | null = null;

  sosok: string | null = null;
  site_name: string | null = null;
  client_code: number = 0;
  auth_code: number = 0;
  last_site_code: number = 0;
  site_code: number = 0;

  meas_date: string | null = null;
  meas_msg: string | null = null;
  meas_alcohol: number = 0;

  meas_bp_max: number = 0;
  meas_bp_min: number = 0;
  base_bp_max: number = 0;
  base_bp_min: number = 0;

  health_check_cycle: number = 0;
  health_check_cycle_bp: number = 0;
  health_check_cycle_al: number = 0;

  bp_status: number = 0;
  al_status: number = 0;
  edu_status: number = 0;
  judge_status: number = 0;

  judge_bp_max: number = 0;
  judge_bp_min: number = 0;

  private constructor(init?: Partial<ResultData>) {
    if (init) Object.assign(this, init); // 기본값 위에 덮어쓰기
  }

  static ok(overrides: Partial<ResultData> = {}) {
    return new ResultData({
      result: ResultType.OK,
      msg_code: 0,
      message: '정상처리되었습니다',
      isCommute: true,
      ...overrides,
    });
  }

  static error(overrides: Partial<ResultData> = {}) {
    return new ResultData({
      result: ResultType.Error,
      msg_code: -1,
      message: '실패처리',
      isCommute: true,
      ...overrides,
    });
  }

  // 직렬화 시 순수 JSON으로 반환 (모든 키가 값(null/0 등)을 가짐)
  toJSON() {
    return { ...this };
  }
}

async function Login(req: Request, res: Response) {
    const { id, pw } = req.body;
    
    try {
        const userInstance = await models.tb_user.findOne({
            where: {
                id: String(id),
            }
        });

        if(!userInstance) {
            return res.status(404).json({ result: false, message: '존재하지 않는 회원 아이디입니다.' });
        } 

        // plain: javascript 객체로 변환
        const userInfo = userInstance.get({ plain: true });

        if(userInfo.is_del == 'Y') {
            return res.status(403).json({ result: false, message: '이미 탈퇴한 회원입니다.' });
        }

        const isPassword = verifyPassword(String(convertBase64ToString(pw)), String(userInfo.pw));

        if (!isPassword) {
            return res.status(403).json({ result: false, message: '비밀번호가 일치하지 않습니다.' });
        }

        const accountInstance = await models.tb_account.findOne({
            where: {
                user_code: userInfo.code,
            }
        });

        if(accountInstance) {
            // tb_lib의 AUTH_CODE 참조
            const accountInfo = accountInstance.get({ plain: true });

            if (accountInfo.auth_code === ADMIN_TYPE.AT_None) {
                return res.status(403).json({ result: false, message: '관리자 권한이 없음!!' });
            }

            // tb_client 
            const clientInstance = await models.tb_client.findOne({
                where: {
                    code: accountInfo.client_code
                }
            });

            if (!clientInstance) {
                return res.status(403).json({ result: false, message: '관리자 소속없음!!' });
            }

            if (accountInfo.allowed_code === 0) {
                return res.status(403).json({ result: false, message: '관리자 가입 승인안됨' });
            }

            if (accountInfo.state_code === 1) {
                return res.status(403).json({ result: false, message: '관리자 탈퇴 상태' });
            }

            const clientInfo = clientInstance.get({ plain: true });

            // token, cookie
            const payload = {};

            const token = generateToken(payload);
            setAuthCookie(res, token);

            const ret = ResultData.ok({
                data: accountInfo.name,
                name: accountInfo.name,
                account_code: accountInfo.code,
                client_code: accountInfo.client_code,
                sosok: clientInfo?.name,
                last_site_code: accountInfo.last_site_code,
                site_code: accountInfo.admin_site_code,
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

export default Login;
