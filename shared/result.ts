import { ResultType } from './enums';

export class ResultData {
    // 필수 공통 필드
  result: ResultType = ResultType.OK;
  msg_code: number = 0;
  message: string = '정상처리되었습니다';
  data: string | null = null;
  isCommute: boolean = true;

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
      result: ResultType.ERROR,
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