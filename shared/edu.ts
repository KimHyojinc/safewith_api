// THINK: 이거 edulist에만 쓰이는지? 아니면 범용적으로 쓰이는지? 
// if 범용적 -> 새로 다른 파일로 옮기기
// for: Pagination Response
export interface PageListContext<T = any> {
  page_no: number;        // 현재 페이지 번호
  page_size: number;      // 페이지당 항목 수
  page_total: number;     // 전체 페이지 수
  page_start: number;     // 페이지 블록 시작 번호
  page_end: number;       // 페이지 블록 끝 번호
  item_total: number;     // 전체 아이템 수
  items: T[];             // 아이템 리스트 (제네릭)
  download_url?: string | null;  // 다운로드 링크 (옵션)
  download_url2?: string | null; // 다운로드 링크2 (옵션)
  stime?: string | null;         // 검색 시작 시간 (옵션)
  etime?: string | null;         // 검색 종료 시간 (옵션)
}

export interface EduSchInfo {
  // 기본 정보
  code: number;
  site_code: number;
  edu_code: number;
  training_begin: string;
  training_end: string;

  register_code: number;
  reg_dt: string; // ISO 문자열 기준 (ex. "2025-11-06T09:00:00Z")
  updater_code: number;
  update_dt: string;

  // 등록자 정보
  reg_name: string;

  // 교육 콘텐츠
  file_name: string;
  file_path: string;
  thumbnail: string;

  // 교육 참여자 수
  edu_member_count: number;
  edu_complete_count: number;

  // 교육 정보
  subject: string;
  contents: string;
  exp_begin: string;
  exp_end: string;
  type_code: number;         // ex. 5: 기본교육
  const_type_code: number;   // ex. 11: 전체, 12: 일반

  // 교육 콘텐츠 코드
  edu_contents_code: number;

  // 문제지 관련
  edu_exam_code: number;
}

// for: edulist
export interface EduListItem {
  no: number;
  edu_sch_code: number;
  edu_code: number;
  edu_contents_code: number;
  edu_type: string;       // 교육 타입 이름
  const_type: string;     // 교육 분류 이름
  subject: string;        // 교육 제목
  exp_begin: string;      // 시작일 (예: '2025-11-01')
  exp_end: string;        // 종료일
  reg_dt: string;         // 등록일
  movie_url: string;      // 영상 URL (필드 명이 암시적으로 EC.file_path?)
  filename: string;       // 콘텐츠 파일 이름
  thumbnail: string;      // 썸네일 경로
}