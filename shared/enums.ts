// cf) Original LIB_INFO (SafetyDatabase\Data) 참고할 것 

// 출역 상태
export enum CommuteState {
  COMMUTE = 1,       // 출역
  NO_COMMUTE = 2,    // 미출역
  EARLY_COMMUTE = 3, // 조퇴
  NOT_ADMIT = 4,     // 출역불가
  NONE = -1           // 없음 (C#의 CC_None)
}

// 교육 구분
export enum EduType {
  BASIC = 5,         // 기본교육
  TOTAL = 6,         // 전체교육
  NEW = 7,           // 신규교육
  REGULAR = 8,       // 정기교육
  NONE = -1           // ET_None
}

// 공사 구분
export enum ConstClass {
  PRIVATE = 9,       // 민간공사
  PUBLIC = 10,       // 공공공사
  NONE = -1           // CC_None
}

// 공종 구분
export enum ConstType {
  TOTAL = 11,        // 전체
  GENERAL = 12,      // 일반
  CIVIL = 13,        // 토목
  ELECTRIC = 14,     // 전기
  NONE = -1           // CT_None
}

// 직종
export enum JobType {
  GENERAL = 15,      // 일반근로자
  ELECTRIC = 16,     // 전기
  CIVIL = 17,        // 토목
  NONE = -1           // JT_None
}

// 은행
export enum BankName {
  KOKMIN = 18,     // 국민
  NONGHYUP = 19,   // 농협
  SHINHAN = 20,    // 신한
  WOORI = 21,      // 우리
  HANA = 22,       // 하나
  SC_JEIL = 23,    // SC제일
  CITY = 24,       // 한국씨티
  IBK = 25,        // IBK기업
  SUHYUP = 26,     // 수협
  NONE = -1
}

// 혈액형
export enum BloodType {
  A = 27,          // A형
  B = 28,          // B형
  AB = 29,         // AB형
  O = 30,          // O형
  NONE = -1
}

// 자가문진 질문 (CARE_TYPE)
export enum CareType {
  QUESTION_1 = 1,   // 1. 최근 1년 동안 병원 입원?
  QUESTION_2 = 2,   // 2. 현재 본인의 건강이 나쁘다고 생각?
  QUESTION_3 = 3,   // 3. 정기적으로 4가지 이상 약 복용?
  QUESTION_4 = 4,   // 4. 1년간 체중 5% 이상 감소?
  QUESTION_5 = 5,   // 5. 최근 한 달간 우울하거나 슬픔?
  QUESTION_6 = 6,   // 6. 최근 한 달 동안 배뇨/배변 실수?
  QUESTION_7 = 7,   // 7. 청력/시력 문제 경험?
  NONE = -1
}

// 임금 지급 방식 (PAYMENT_TYPE)
export enum PaymentType {
  DAILY = 38,      // 일급
  WEEKLY = 39,     // 주급
  NONE = -1
}

// 계약 상태 코드 (CONTRACT_STATE)
export enum ContractState {
  WAIT = 40,       // 승인대기중
  VALID = 41,      // 계약유효
  EXPIRE = 42,     // 계약만료
  NOT_ADMIT = 43,  // 계약불가
  NONE = -1,
  ALL = 0         // 전체 (명시적 처리)
}

//권한 타입
export enum AdminType {
  SYSTEM = 44,  // 44	시스템 관리자
  MASTER = 45,  // 45	마스터 관리자
  TOTAL = 46, // 46	총괄 관리자
  GENERAL = 47,  // 47	일반 관리자
  NONE = -1  // 권한 없음
}

// 근로 계약 타입 (일용, 용역)
export enum ContractType {
  DAILY = 48,      // 일용 근로계약
  SERVICE = 49,    // 용역 근로계약
  ETC = 96,        // 기타 근로자
  ALL = 0,         // 전체 (명시적 정의)
  NONE = -1        // 아무것도 검색안함
}

// 재해 유형
export enum RiskType {
  FIRE = 50,     // 화재
  BREAK = 51,    // 붕괴
  EXPLOSION = 52, // 폭발
  ETC = 53,      // 기타
  NONE = -1
}

// 도면 종류
export enum DrawingType {
  LAYOUT = 54,     // 평면도
  SEAT = 55,       // 배치도
  ELEVATION = 56,  // 입면도
  SECTION = 57,    // 단면도
  DETAIL = 58,     // 상세도
  INDOOR = 59,     // 실내도
  WINDOW = 60,     // 창호도
  TREEDIM = 61,    // 조감도
  NONE = -1
}

// 자재 종류
export enum MaterialType {
  NORMAL = 62,     // 일반자재(소모성자재)
  EQUIP = 63,      // 설비자재
  SAFE = 64,       // 안전자재
  CIVIL = 65,      // 토목자재
  ARCH = 66,       // 건축자재
  ELEC = 67,       // 전기자재
  MACH = 68,       // 기계자재
  FIREF = 69,      // 소방자재
  SOFFICE = 70,    // 문구/오피스
  NONE = -1,
  ALL = 0
}

// 보호구 종류
export enum ProtEqpType {
  HELMET = 84,        // 안전모
  SHOE = 86,          // 안전화
  SIG_JACKET = 87,    // 신호수조끼
  INDU_JACKET = 88,   // 유도자조끼
  BELT = 89,          // 안전벨트
  SPAT = 90,          // 각반
  GOGGLE = 91,        // 보안경
  MASK = 92,          // 보안면
  DUST_MASK = 93,     // 방진마스크면
  ETC = 94,           // 기타 보호구
  ALL = 0
}

