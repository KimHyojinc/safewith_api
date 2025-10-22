import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_blocked, tb_blockedId } from './tb_blocked';
import type { tb_board, tb_boardId } from './tb_board';
import type { tb_commute, tb_commuteId } from './tb_commute';
import type { tb_contract, tb_contractId } from './tb_contract';
import type { tb_daily_board, tb_daily_boardId } from './tb_daily_board';
import type { tb_danger_mat, tb_danger_matId } from './tb_danger_mat';
import type { tb_danger_mat_use_plan, tb_danger_mat_use_planId } from './tb_danger_mat_use_plan';
import type { tb_danger_mat_use_worker, tb_danger_mat_use_workerId } from './tb_danger_mat_use_worker';
import type { tb_edu, tb_eduId } from './tb_edu';
import type { tb_edu_board, tb_edu_boardId } from './tb_edu_board';
import type { tb_edu_exam, tb_edu_examId } from './tb_edu_exam';
import type { tb_edu_judge, tb_edu_judgeId } from './tb_edu_judge';
import type { tb_edu_sch, tb_edu_schId } from './tb_edu_sch';
import type { tb_edu_sch_member, tb_edu_sch_memberId } from './tb_edu_sch_member';
import type { tb_health_alcohol, tb_health_alcoholId } from './tb_health_alcohol';
import type { tb_health_alcohol_hist, tb_health_alcohol_histId } from './tb_health_alcohol_hist';
import type { tb_health_bp, tb_health_bpId } from './tb_health_bp';
import type { tb_health_bp_hist, tb_health_bp_histId } from './tb_health_bp_hist';
import type { tb_health_oxygen, tb_health_oxygenId } from './tb_health_oxygen';
import type { tb_health_stress, tb_health_stressId } from './tb_health_stress';
import type { tb_mat_pur, tb_mat_purId } from './tb_mat_pur';
import type { tb_partner, tb_partnerId } from './tb_partner';
import type { tb_partner_contract, tb_partner_contractId } from './tb_partner_contract';
import type { tb_pay, tb_payId } from './tb_pay';
import type { tb_req_doc, tb_req_docId } from './tb_req_doc';
import type { tb_risk, tb_riskId } from './tb_risk';
import type { tb_risk_action, tb_risk_actionId } from './tb_risk_action';
import type { tb_risk_actor, tb_risk_actorId } from './tb_risk_actor';
import type { tb_risk_report, tb_risk_reportId } from './tb_risk_report';
import type { tb_risk_report_action, tb_risk_report_actionId } from './tb_risk_report_action';
import type { tb_safety_prot_eqp_inventory, tb_safety_prot_eqp_inventoryId } from './tb_safety_prot_eqp_inventory';
import type { tb_safety_prot_eqp_issue, tb_safety_prot_eqp_issueId } from './tb_safety_prot_eqp_issue';
import type { tb_safety_prot_eqp_purch_detail, tb_safety_prot_eqp_purch_detailId } from './tb_safety_prot_eqp_purch_detail';
import type { tb_shelter, tb_shelterId } from './tb_shelter';
import type { tb_siren, tb_sirenId } from './tb_siren';
import type { tb_siren_state, tb_siren_stateId } from './tb_siren_state';
import type { tb_site, tb_siteId } from './tb_site';
import type { tb_site_build_major, tb_site_build_majorId } from './tb_site_build_major';
import type { tb_site_build_middle, tb_site_build_middleId } from './tb_site_build_middle';
import type { tb_site_build_sub, tb_site_build_subId } from './tb_site_build_sub';
import type { tb_site_config, tb_site_configId } from './tb_site_config';
import type { tb_site_drawing, tb_site_drawingId } from './tb_site_drawing';
import type { tb_site_ecn, tb_site_ecnId } from './tb_site_ecn';
import type { tb_site_sch, tb_site_schId } from './tb_site_sch';
import type { tb_site_sch_board, tb_site_sch_boardId } from './tb_site_sch_board';
import type { tb_site_sch_work, tb_site_sch_workId } from './tb_site_sch_work';
import type { tb_site_sch_work_major, tb_site_sch_work_majorId } from './tb_site_sch_work_major';
import type { tb_site_sch_work_middle, tb_site_sch_work_middleId } from './tb_site_sch_work_middle';
import type { tb_site_work_area, tb_site_work_areaId } from './tb_site_work_area';
import type { tb_site_work_area2, tb_site_work_area2Id } from './tb_site_work_area2';
import type { tb_tbm, tb_tbmId } from './tb_tbm';
import type { tb_tbm_state, tb_tbm_stateId } from './tb_tbm_state';
import type { tb_user, tb_userId } from './tb_user';
import type { tb_worker_location, tb_worker_locationId } from './tb_worker_location';
import type { tb_worker_shelter, tb_worker_shelterId } from './tb_worker_shelter';

export interface tb_accountAttributes {
  code: number;
  name: string;
  id: string;
  pw: string;
  photo?: string;
  mobile: string;
  family_contact?: string;
  pno1?: string;
  pno2?: string;
  addr_doro?: string;
  addr_etc?: string;
  blood_code?: number;
  is_rh_min?: number;
  e_sign?: string;
  client_code?: number;
  auth_code?: number;
  last_site_code?: number;
  allowed_code?: number;
  permit_code?: number;
  permit_dt?: Date;
  state_code?: number;
  leave_dt?: Date;
  reg_dt?: Date;
  update_dt?: Date;
  is_enabled?: number;
  bank_code?: number;
  bank_num?: string;
  health_check_cycle?: number;
  illness_state?: number;
  illness_info?: string;
  admin_site_code?: number;
  face?: string;
  user_code?: number;
  is_bp_doctor_note?: number;
  bp_doctor_note?: string;
  health_bp_check_cycle?: number;
  health_al_check_cycle?: number;
  is_face?: number;
  email?: string;
}

export type tb_accountPk = "code";
export type tb_accountId = tb_account[tb_accountPk];
export type tb_accountOptionalAttributes = "photo" | "family_contact" | "pno1" | "pno2" | "addr_doro" | "addr_etc" | "blood_code" | "is_rh_min" | "e_sign" | "client_code" | "auth_code" | "last_site_code" | "allowed_code" | "permit_code" | "permit_dt" | "state_code" | "leave_dt" | "reg_dt" | "update_dt" | "is_enabled" | "bank_code" | "bank_num" | "health_check_cycle" | "illness_state" | "illness_info" | "admin_site_code" | "face" | "user_code" | "is_bp_doctor_note" | "bp_doctor_note" | "health_bp_check_cycle" | "health_al_check_cycle" | "is_face" | "email";
export type tb_accountCreationAttributes = Optional<tb_accountAttributes, tb_accountOptionalAttributes>;

export class tb_account extends Model<tb_accountAttributes, tb_accountCreationAttributes> implements tb_accountAttributes {
  code!: number;
  name!: string;
  id!: string;
  pw!: string;
  photo?: string;
  mobile!: string;
  family_contact?: string;
  pno1?: string;
  pno2?: string;
  addr_doro?: string;
  addr_etc?: string;
  blood_code?: number;
  is_rh_min?: number;
  e_sign?: string;
  client_code?: number;
  auth_code?: number;
  last_site_code?: number;
  allowed_code?: number;
  permit_code?: number;
  permit_dt?: Date;
  state_code?: number;
  leave_dt?: Date;
  reg_dt?: Date;
  update_dt?: Date;
  is_enabled?: number;
  bank_code?: number;
  bank_num?: string;
  health_check_cycle?: number;
  illness_state?: number;
  illness_info?: string;
  admin_site_code?: number;
  face?: string;
  user_code?: number;
  is_bp_doctor_note?: number;
  bp_doctor_note?: string;
  health_bp_check_cycle?: number;
  health_al_check_cycle?: number;
  is_face?: number;
  email?: string;

  // tb_account hasMany tb_blocked via account_code
  tb_blockeds!: tb_blocked[];
  getTb_blockeds!: Sequelize.HasManyGetAssociationsMixin<tb_blocked>;
  setTb_blockeds!: Sequelize.HasManySetAssociationsMixin<tb_blocked, tb_blockedId>;
  addTb_blocked!: Sequelize.HasManyAddAssociationMixin<tb_blocked, tb_blockedId>;
  addTb_blockeds!: Sequelize.HasManyAddAssociationsMixin<tb_blocked, tb_blockedId>;
  createTb_blocked!: Sequelize.HasManyCreateAssociationMixin<tb_blocked>;
  removeTb_blocked!: Sequelize.HasManyRemoveAssociationMixin<tb_blocked, tb_blockedId>;
  removeTb_blockeds!: Sequelize.HasManyRemoveAssociationsMixin<tb_blocked, tb_blockedId>;
  hasTb_blocked!: Sequelize.HasManyHasAssociationMixin<tb_blocked, tb_blockedId>;
  hasTb_blockeds!: Sequelize.HasManyHasAssociationsMixin<tb_blocked, tb_blockedId>;
  countTb_blockeds!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_board via register_code
  tb_boards!: tb_board[];
  getTb_boards!: Sequelize.HasManyGetAssociationsMixin<tb_board>;
  setTb_boards!: Sequelize.HasManySetAssociationsMixin<tb_board, tb_boardId>;
  addTb_board!: Sequelize.HasManyAddAssociationMixin<tb_board, tb_boardId>;
  addTb_boards!: Sequelize.HasManyAddAssociationsMixin<tb_board, tb_boardId>;
  createTb_board!: Sequelize.HasManyCreateAssociationMixin<tb_board>;
  removeTb_board!: Sequelize.HasManyRemoveAssociationMixin<tb_board, tb_boardId>;
  removeTb_boards!: Sequelize.HasManyRemoveAssociationsMixin<tb_board, tb_boardId>;
  hasTb_board!: Sequelize.HasManyHasAssociationMixin<tb_board, tb_boardId>;
  hasTb_boards!: Sequelize.HasManyHasAssociationsMixin<tb_board, tb_boardId>;
  countTb_boards!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_board via updater_code
  updater_code_tb_boards!: tb_board[];
  getUpdater_code_tb_boards!: Sequelize.HasManyGetAssociationsMixin<tb_board>;
  setUpdater_code_tb_boards!: Sequelize.HasManySetAssociationsMixin<tb_board, tb_boardId>;
  addUpdater_code_tb_board!: Sequelize.HasManyAddAssociationMixin<tb_board, tb_boardId>;
  addUpdater_code_tb_boards!: Sequelize.HasManyAddAssociationsMixin<tb_board, tb_boardId>;
  createUpdater_code_tb_board!: Sequelize.HasManyCreateAssociationMixin<tb_board>;
  removeUpdater_code_tb_board!: Sequelize.HasManyRemoveAssociationMixin<tb_board, tb_boardId>;
  removeUpdater_code_tb_boards!: Sequelize.HasManyRemoveAssociationsMixin<tb_board, tb_boardId>;
  hasUpdater_code_tb_board!: Sequelize.HasManyHasAssociationMixin<tb_board, tb_boardId>;
  hasUpdater_code_tb_boards!: Sequelize.HasManyHasAssociationsMixin<tb_board, tb_boardId>;
  countUpdater_code_tb_boards!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_commute via account_code
  tb_commutes!: tb_commute[];
  getTb_commutes!: Sequelize.HasManyGetAssociationsMixin<tb_commute>;
  setTb_commutes!: Sequelize.HasManySetAssociationsMixin<tb_commute, tb_commuteId>;
  addTb_commute!: Sequelize.HasManyAddAssociationMixin<tb_commute, tb_commuteId>;
  addTb_commutes!: Sequelize.HasManyAddAssociationsMixin<tb_commute, tb_commuteId>;
  createTb_commute!: Sequelize.HasManyCreateAssociationMixin<tb_commute>;
  removeTb_commute!: Sequelize.HasManyRemoveAssociationMixin<tb_commute, tb_commuteId>;
  removeTb_commutes!: Sequelize.HasManyRemoveAssociationsMixin<tb_commute, tb_commuteId>;
  hasTb_commute!: Sequelize.HasManyHasAssociationMixin<tb_commute, tb_commuteId>;
  hasTb_commutes!: Sequelize.HasManyHasAssociationsMixin<tb_commute, tb_commuteId>;
  countTb_commutes!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_contract via account_code
  tb_contracts!: tb_contract[];
  getTb_contracts!: Sequelize.HasManyGetAssociationsMixin<tb_contract>;
  setTb_contracts!: Sequelize.HasManySetAssociationsMixin<tb_contract, tb_contractId>;
  addTb_contract!: Sequelize.HasManyAddAssociationMixin<tb_contract, tb_contractId>;
  addTb_contracts!: Sequelize.HasManyAddAssociationsMixin<tb_contract, tb_contractId>;
  createTb_contract!: Sequelize.HasManyCreateAssociationMixin<tb_contract>;
  removeTb_contract!: Sequelize.HasManyRemoveAssociationMixin<tb_contract, tb_contractId>;
  removeTb_contracts!: Sequelize.HasManyRemoveAssociationsMixin<tb_contract, tb_contractId>;
  hasTb_contract!: Sequelize.HasManyHasAssociationMixin<tb_contract, tb_contractId>;
  hasTb_contracts!: Sequelize.HasManyHasAssociationsMixin<tb_contract, tb_contractId>;
  countTb_contracts!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_daily_board via register_code
  tb_daily_boards!: tb_daily_board[];
  getTb_daily_boards!: Sequelize.HasManyGetAssociationsMixin<tb_daily_board>;
  setTb_daily_boards!: Sequelize.HasManySetAssociationsMixin<tb_daily_board, tb_daily_boardId>;
  addTb_daily_board!: Sequelize.HasManyAddAssociationMixin<tb_daily_board, tb_daily_boardId>;
  addTb_daily_boards!: Sequelize.HasManyAddAssociationsMixin<tb_daily_board, tb_daily_boardId>;
  createTb_daily_board!: Sequelize.HasManyCreateAssociationMixin<tb_daily_board>;
  removeTb_daily_board!: Sequelize.HasManyRemoveAssociationMixin<tb_daily_board, tb_daily_boardId>;
  removeTb_daily_boards!: Sequelize.HasManyRemoveAssociationsMixin<tb_daily_board, tb_daily_boardId>;
  hasTb_daily_board!: Sequelize.HasManyHasAssociationMixin<tb_daily_board, tb_daily_boardId>;
  hasTb_daily_boards!: Sequelize.HasManyHasAssociationsMixin<tb_daily_board, tb_daily_boardId>;
  countTb_daily_boards!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_daily_board via updater_code
  updater_code_tb_daily_boards!: tb_daily_board[];
  getUpdater_code_tb_daily_boards!: Sequelize.HasManyGetAssociationsMixin<tb_daily_board>;
  setUpdater_code_tb_daily_boards!: Sequelize.HasManySetAssociationsMixin<tb_daily_board, tb_daily_boardId>;
  addUpdater_code_tb_daily_board!: Sequelize.HasManyAddAssociationMixin<tb_daily_board, tb_daily_boardId>;
  addUpdater_code_tb_daily_boards!: Sequelize.HasManyAddAssociationsMixin<tb_daily_board, tb_daily_boardId>;
  createUpdater_code_tb_daily_board!: Sequelize.HasManyCreateAssociationMixin<tb_daily_board>;
  removeUpdater_code_tb_daily_board!: Sequelize.HasManyRemoveAssociationMixin<tb_daily_board, tb_daily_boardId>;
  removeUpdater_code_tb_daily_boards!: Sequelize.HasManyRemoveAssociationsMixin<tb_daily_board, tb_daily_boardId>;
  hasUpdater_code_tb_daily_board!: Sequelize.HasManyHasAssociationMixin<tb_daily_board, tb_daily_boardId>;
  hasUpdater_code_tb_daily_boards!: Sequelize.HasManyHasAssociationsMixin<tb_daily_board, tb_daily_boardId>;
  countUpdater_code_tb_daily_boards!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_danger_mat via register_code
  tb_danger_mats!: tb_danger_mat[];
  getTb_danger_mats!: Sequelize.HasManyGetAssociationsMixin<tb_danger_mat>;
  setTb_danger_mats!: Sequelize.HasManySetAssociationsMixin<tb_danger_mat, tb_danger_matId>;
  addTb_danger_mat!: Sequelize.HasManyAddAssociationMixin<tb_danger_mat, tb_danger_matId>;
  addTb_danger_mats!: Sequelize.HasManyAddAssociationsMixin<tb_danger_mat, tb_danger_matId>;
  createTb_danger_mat!: Sequelize.HasManyCreateAssociationMixin<tb_danger_mat>;
  removeTb_danger_mat!: Sequelize.HasManyRemoveAssociationMixin<tb_danger_mat, tb_danger_matId>;
  removeTb_danger_mats!: Sequelize.HasManyRemoveAssociationsMixin<tb_danger_mat, tb_danger_matId>;
  hasTb_danger_mat!: Sequelize.HasManyHasAssociationMixin<tb_danger_mat, tb_danger_matId>;
  hasTb_danger_mats!: Sequelize.HasManyHasAssociationsMixin<tb_danger_mat, tb_danger_matId>;
  countTb_danger_mats!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_danger_mat via updater_code
  updater_code_tb_danger_mats!: tb_danger_mat[];
  getUpdater_code_tb_danger_mats!: Sequelize.HasManyGetAssociationsMixin<tb_danger_mat>;
  setUpdater_code_tb_danger_mats!: Sequelize.HasManySetAssociationsMixin<tb_danger_mat, tb_danger_matId>;
  addUpdater_code_tb_danger_mat!: Sequelize.HasManyAddAssociationMixin<tb_danger_mat, tb_danger_matId>;
  addUpdater_code_tb_danger_mats!: Sequelize.HasManyAddAssociationsMixin<tb_danger_mat, tb_danger_matId>;
  createUpdater_code_tb_danger_mat!: Sequelize.HasManyCreateAssociationMixin<tb_danger_mat>;
  removeUpdater_code_tb_danger_mat!: Sequelize.HasManyRemoveAssociationMixin<tb_danger_mat, tb_danger_matId>;
  removeUpdater_code_tb_danger_mats!: Sequelize.HasManyRemoveAssociationsMixin<tb_danger_mat, tb_danger_matId>;
  hasUpdater_code_tb_danger_mat!: Sequelize.HasManyHasAssociationMixin<tb_danger_mat, tb_danger_matId>;
  hasUpdater_code_tb_danger_mats!: Sequelize.HasManyHasAssociationsMixin<tb_danger_mat, tb_danger_matId>;
  countUpdater_code_tb_danger_mats!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_danger_mat_use_plan via draft_code
  tb_danger_mat_use_plans!: tb_danger_mat_use_plan[];
  getTb_danger_mat_use_plans!: Sequelize.HasManyGetAssociationsMixin<tb_danger_mat_use_plan>;
  setTb_danger_mat_use_plans!: Sequelize.HasManySetAssociationsMixin<tb_danger_mat_use_plan, tb_danger_mat_use_planId>;
  addTb_danger_mat_use_plan!: Sequelize.HasManyAddAssociationMixin<tb_danger_mat_use_plan, tb_danger_mat_use_planId>;
  addTb_danger_mat_use_plans!: Sequelize.HasManyAddAssociationsMixin<tb_danger_mat_use_plan, tb_danger_mat_use_planId>;
  createTb_danger_mat_use_plan!: Sequelize.HasManyCreateAssociationMixin<tb_danger_mat_use_plan>;
  removeTb_danger_mat_use_plan!: Sequelize.HasManyRemoveAssociationMixin<tb_danger_mat_use_plan, tb_danger_mat_use_planId>;
  removeTb_danger_mat_use_plans!: Sequelize.HasManyRemoveAssociationsMixin<tb_danger_mat_use_plan, tb_danger_mat_use_planId>;
  hasTb_danger_mat_use_plan!: Sequelize.HasManyHasAssociationMixin<tb_danger_mat_use_plan, tb_danger_mat_use_planId>;
  hasTb_danger_mat_use_plans!: Sequelize.HasManyHasAssociationsMixin<tb_danger_mat_use_plan, tb_danger_mat_use_planId>;
  countTb_danger_mat_use_plans!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_danger_mat_use_plan via register_code
  register_code_tb_danger_mat_use_plans!: tb_danger_mat_use_plan[];
  getRegister_code_tb_danger_mat_use_plans!: Sequelize.HasManyGetAssociationsMixin<tb_danger_mat_use_plan>;
  setRegister_code_tb_danger_mat_use_plans!: Sequelize.HasManySetAssociationsMixin<tb_danger_mat_use_plan, tb_danger_mat_use_planId>;
  addRegister_code_tb_danger_mat_use_plan!: Sequelize.HasManyAddAssociationMixin<tb_danger_mat_use_plan, tb_danger_mat_use_planId>;
  addRegister_code_tb_danger_mat_use_plans!: Sequelize.HasManyAddAssociationsMixin<tb_danger_mat_use_plan, tb_danger_mat_use_planId>;
  createRegister_code_tb_danger_mat_use_plan!: Sequelize.HasManyCreateAssociationMixin<tb_danger_mat_use_plan>;
  removeRegister_code_tb_danger_mat_use_plan!: Sequelize.HasManyRemoveAssociationMixin<tb_danger_mat_use_plan, tb_danger_mat_use_planId>;
  removeRegister_code_tb_danger_mat_use_plans!: Sequelize.HasManyRemoveAssociationsMixin<tb_danger_mat_use_plan, tb_danger_mat_use_planId>;
  hasRegister_code_tb_danger_mat_use_plan!: Sequelize.HasManyHasAssociationMixin<tb_danger_mat_use_plan, tb_danger_mat_use_planId>;
  hasRegister_code_tb_danger_mat_use_plans!: Sequelize.HasManyHasAssociationsMixin<tb_danger_mat_use_plan, tb_danger_mat_use_planId>;
  countRegister_code_tb_danger_mat_use_plans!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_danger_mat_use_plan via review_code
  review_code_tb_danger_mat_use_plans!: tb_danger_mat_use_plan[];
  getReview_code_tb_danger_mat_use_plans!: Sequelize.HasManyGetAssociationsMixin<tb_danger_mat_use_plan>;
  setReview_code_tb_danger_mat_use_plans!: Sequelize.HasManySetAssociationsMixin<tb_danger_mat_use_plan, tb_danger_mat_use_planId>;
  addReview_code_tb_danger_mat_use_plan!: Sequelize.HasManyAddAssociationMixin<tb_danger_mat_use_plan, tb_danger_mat_use_planId>;
  addReview_code_tb_danger_mat_use_plans!: Sequelize.HasManyAddAssociationsMixin<tb_danger_mat_use_plan, tb_danger_mat_use_planId>;
  createReview_code_tb_danger_mat_use_plan!: Sequelize.HasManyCreateAssociationMixin<tb_danger_mat_use_plan>;
  removeReview_code_tb_danger_mat_use_plan!: Sequelize.HasManyRemoveAssociationMixin<tb_danger_mat_use_plan, tb_danger_mat_use_planId>;
  removeReview_code_tb_danger_mat_use_plans!: Sequelize.HasManyRemoveAssociationsMixin<tb_danger_mat_use_plan, tb_danger_mat_use_planId>;
  hasReview_code_tb_danger_mat_use_plan!: Sequelize.HasManyHasAssociationMixin<tb_danger_mat_use_plan, tb_danger_mat_use_planId>;
  hasReview_code_tb_danger_mat_use_plans!: Sequelize.HasManyHasAssociationsMixin<tb_danger_mat_use_plan, tb_danger_mat_use_planId>;
  countReview_code_tb_danger_mat_use_plans!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_danger_mat_use_plan via updater_code
  updater_code_tb_danger_mat_use_plans!: tb_danger_mat_use_plan[];
  getUpdater_code_tb_danger_mat_use_plans!: Sequelize.HasManyGetAssociationsMixin<tb_danger_mat_use_plan>;
  setUpdater_code_tb_danger_mat_use_plans!: Sequelize.HasManySetAssociationsMixin<tb_danger_mat_use_plan, tb_danger_mat_use_planId>;
  addUpdater_code_tb_danger_mat_use_plan!: Sequelize.HasManyAddAssociationMixin<tb_danger_mat_use_plan, tb_danger_mat_use_planId>;
  addUpdater_code_tb_danger_mat_use_plans!: Sequelize.HasManyAddAssociationsMixin<tb_danger_mat_use_plan, tb_danger_mat_use_planId>;
  createUpdater_code_tb_danger_mat_use_plan!: Sequelize.HasManyCreateAssociationMixin<tb_danger_mat_use_plan>;
  removeUpdater_code_tb_danger_mat_use_plan!: Sequelize.HasManyRemoveAssociationMixin<tb_danger_mat_use_plan, tb_danger_mat_use_planId>;
  removeUpdater_code_tb_danger_mat_use_plans!: Sequelize.HasManyRemoveAssociationsMixin<tb_danger_mat_use_plan, tb_danger_mat_use_planId>;
  hasUpdater_code_tb_danger_mat_use_plan!: Sequelize.HasManyHasAssociationMixin<tb_danger_mat_use_plan, tb_danger_mat_use_planId>;
  hasUpdater_code_tb_danger_mat_use_plans!: Sequelize.HasManyHasAssociationsMixin<tb_danger_mat_use_plan, tb_danger_mat_use_planId>;
  countUpdater_code_tb_danger_mat_use_plans!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_danger_mat_use_worker via register_code
  tb_danger_mat_use_workers!: tb_danger_mat_use_worker[];
  getTb_danger_mat_use_workers!: Sequelize.HasManyGetAssociationsMixin<tb_danger_mat_use_worker>;
  setTb_danger_mat_use_workers!: Sequelize.HasManySetAssociationsMixin<tb_danger_mat_use_worker, tb_danger_mat_use_workerId>;
  addTb_danger_mat_use_worker!: Sequelize.HasManyAddAssociationMixin<tb_danger_mat_use_worker, tb_danger_mat_use_workerId>;
  addTb_danger_mat_use_workers!: Sequelize.HasManyAddAssociationsMixin<tb_danger_mat_use_worker, tb_danger_mat_use_workerId>;
  createTb_danger_mat_use_worker!: Sequelize.HasManyCreateAssociationMixin<tb_danger_mat_use_worker>;
  removeTb_danger_mat_use_worker!: Sequelize.HasManyRemoveAssociationMixin<tb_danger_mat_use_worker, tb_danger_mat_use_workerId>;
  removeTb_danger_mat_use_workers!: Sequelize.HasManyRemoveAssociationsMixin<tb_danger_mat_use_worker, tb_danger_mat_use_workerId>;
  hasTb_danger_mat_use_worker!: Sequelize.HasManyHasAssociationMixin<tb_danger_mat_use_worker, tb_danger_mat_use_workerId>;
  hasTb_danger_mat_use_workers!: Sequelize.HasManyHasAssociationsMixin<tb_danger_mat_use_worker, tb_danger_mat_use_workerId>;
  countTb_danger_mat_use_workers!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_danger_mat_use_worker via updater_code
  updater_code_tb_danger_mat_use_workers!: tb_danger_mat_use_worker[];
  getUpdater_code_tb_danger_mat_use_workers!: Sequelize.HasManyGetAssociationsMixin<tb_danger_mat_use_worker>;
  setUpdater_code_tb_danger_mat_use_workers!: Sequelize.HasManySetAssociationsMixin<tb_danger_mat_use_worker, tb_danger_mat_use_workerId>;
  addUpdater_code_tb_danger_mat_use_worker!: Sequelize.HasManyAddAssociationMixin<tb_danger_mat_use_worker, tb_danger_mat_use_workerId>;
  addUpdater_code_tb_danger_mat_use_workers!: Sequelize.HasManyAddAssociationsMixin<tb_danger_mat_use_worker, tb_danger_mat_use_workerId>;
  createUpdater_code_tb_danger_mat_use_worker!: Sequelize.HasManyCreateAssociationMixin<tb_danger_mat_use_worker>;
  removeUpdater_code_tb_danger_mat_use_worker!: Sequelize.HasManyRemoveAssociationMixin<tb_danger_mat_use_worker, tb_danger_mat_use_workerId>;
  removeUpdater_code_tb_danger_mat_use_workers!: Sequelize.HasManyRemoveAssociationsMixin<tb_danger_mat_use_worker, tb_danger_mat_use_workerId>;
  hasUpdater_code_tb_danger_mat_use_worker!: Sequelize.HasManyHasAssociationMixin<tb_danger_mat_use_worker, tb_danger_mat_use_workerId>;
  hasUpdater_code_tb_danger_mat_use_workers!: Sequelize.HasManyHasAssociationsMixin<tb_danger_mat_use_worker, tb_danger_mat_use_workerId>;
  countUpdater_code_tb_danger_mat_use_workers!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_danger_mat_use_worker via worker_code
  worker_code_tb_danger_mat_use_workers!: tb_danger_mat_use_worker[];
  getWorker_code_tb_danger_mat_use_workers!: Sequelize.HasManyGetAssociationsMixin<tb_danger_mat_use_worker>;
  setWorker_code_tb_danger_mat_use_workers!: Sequelize.HasManySetAssociationsMixin<tb_danger_mat_use_worker, tb_danger_mat_use_workerId>;
  addWorker_code_tb_danger_mat_use_worker!: Sequelize.HasManyAddAssociationMixin<tb_danger_mat_use_worker, tb_danger_mat_use_workerId>;
  addWorker_code_tb_danger_mat_use_workers!: Sequelize.HasManyAddAssociationsMixin<tb_danger_mat_use_worker, tb_danger_mat_use_workerId>;
  createWorker_code_tb_danger_mat_use_worker!: Sequelize.HasManyCreateAssociationMixin<tb_danger_mat_use_worker>;
  removeWorker_code_tb_danger_mat_use_worker!: Sequelize.HasManyRemoveAssociationMixin<tb_danger_mat_use_worker, tb_danger_mat_use_workerId>;
  removeWorker_code_tb_danger_mat_use_workers!: Sequelize.HasManyRemoveAssociationsMixin<tb_danger_mat_use_worker, tb_danger_mat_use_workerId>;
  hasWorker_code_tb_danger_mat_use_worker!: Sequelize.HasManyHasAssociationMixin<tb_danger_mat_use_worker, tb_danger_mat_use_workerId>;
  hasWorker_code_tb_danger_mat_use_workers!: Sequelize.HasManyHasAssociationsMixin<tb_danger_mat_use_worker, tb_danger_mat_use_workerId>;
  countWorker_code_tb_danger_mat_use_workers!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_edu via register_code
  tb_edus!: tb_edu[];
  getTb_edus!: Sequelize.HasManyGetAssociationsMixin<tb_edu>;
  setTb_edus!: Sequelize.HasManySetAssociationsMixin<tb_edu, tb_eduId>;
  addTb_edu!: Sequelize.HasManyAddAssociationMixin<tb_edu, tb_eduId>;
  addTb_edus!: Sequelize.HasManyAddAssociationsMixin<tb_edu, tb_eduId>;
  createTb_edu!: Sequelize.HasManyCreateAssociationMixin<tb_edu>;
  removeTb_edu!: Sequelize.HasManyRemoveAssociationMixin<tb_edu, tb_eduId>;
  removeTb_edus!: Sequelize.HasManyRemoveAssociationsMixin<tb_edu, tb_eduId>;
  hasTb_edu!: Sequelize.HasManyHasAssociationMixin<tb_edu, tb_eduId>;
  hasTb_edus!: Sequelize.HasManyHasAssociationsMixin<tb_edu, tb_eduId>;
  countTb_edus!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_edu via updater_code
  updater_code_tb_edus!: tb_edu[];
  getUpdater_code_tb_edus!: Sequelize.HasManyGetAssociationsMixin<tb_edu>;
  setUpdater_code_tb_edus!: Sequelize.HasManySetAssociationsMixin<tb_edu, tb_eduId>;
  addUpdater_code_tb_edu!: Sequelize.HasManyAddAssociationMixin<tb_edu, tb_eduId>;
  addUpdater_code_tb_edus!: Sequelize.HasManyAddAssociationsMixin<tb_edu, tb_eduId>;
  createUpdater_code_tb_edu!: Sequelize.HasManyCreateAssociationMixin<tb_edu>;
  removeUpdater_code_tb_edu!: Sequelize.HasManyRemoveAssociationMixin<tb_edu, tb_eduId>;
  removeUpdater_code_tb_edus!: Sequelize.HasManyRemoveAssociationsMixin<tb_edu, tb_eduId>;
  hasUpdater_code_tb_edu!: Sequelize.HasManyHasAssociationMixin<tb_edu, tb_eduId>;
  hasUpdater_code_tb_edus!: Sequelize.HasManyHasAssociationsMixin<tb_edu, tb_eduId>;
  countUpdater_code_tb_edus!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_edu_board via register_code
  tb_edu_boards!: tb_edu_board[];
  getTb_edu_boards!: Sequelize.HasManyGetAssociationsMixin<tb_edu_board>;
  setTb_edu_boards!: Sequelize.HasManySetAssociationsMixin<tb_edu_board, tb_edu_boardId>;
  addTb_edu_board!: Sequelize.HasManyAddAssociationMixin<tb_edu_board, tb_edu_boardId>;
  addTb_edu_boards!: Sequelize.HasManyAddAssociationsMixin<tb_edu_board, tb_edu_boardId>;
  createTb_edu_board!: Sequelize.HasManyCreateAssociationMixin<tb_edu_board>;
  removeTb_edu_board!: Sequelize.HasManyRemoveAssociationMixin<tb_edu_board, tb_edu_boardId>;
  removeTb_edu_boards!: Sequelize.HasManyRemoveAssociationsMixin<tb_edu_board, tb_edu_boardId>;
  hasTb_edu_board!: Sequelize.HasManyHasAssociationMixin<tb_edu_board, tb_edu_boardId>;
  hasTb_edu_boards!: Sequelize.HasManyHasAssociationsMixin<tb_edu_board, tb_edu_boardId>;
  countTb_edu_boards!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_edu_board via updater_code
  updater_code_tb_edu_boards!: tb_edu_board[];
  getUpdater_code_tb_edu_boards!: Sequelize.HasManyGetAssociationsMixin<tb_edu_board>;
  setUpdater_code_tb_edu_boards!: Sequelize.HasManySetAssociationsMixin<tb_edu_board, tb_edu_boardId>;
  addUpdater_code_tb_edu_board!: Sequelize.HasManyAddAssociationMixin<tb_edu_board, tb_edu_boardId>;
  addUpdater_code_tb_edu_boards!: Sequelize.HasManyAddAssociationsMixin<tb_edu_board, tb_edu_boardId>;
  createUpdater_code_tb_edu_board!: Sequelize.HasManyCreateAssociationMixin<tb_edu_board>;
  removeUpdater_code_tb_edu_board!: Sequelize.HasManyRemoveAssociationMixin<tb_edu_board, tb_edu_boardId>;
  removeUpdater_code_tb_edu_boards!: Sequelize.HasManyRemoveAssociationsMixin<tb_edu_board, tb_edu_boardId>;
  hasUpdater_code_tb_edu_board!: Sequelize.HasManyHasAssociationMixin<tb_edu_board, tb_edu_boardId>;
  hasUpdater_code_tb_edu_boards!: Sequelize.HasManyHasAssociationsMixin<tb_edu_board, tb_edu_boardId>;
  countUpdater_code_tb_edu_boards!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_edu_exam via register_code
  tb_edu_exams!: tb_edu_exam[];
  getTb_edu_exams!: Sequelize.HasManyGetAssociationsMixin<tb_edu_exam>;
  setTb_edu_exams!: Sequelize.HasManySetAssociationsMixin<tb_edu_exam, tb_edu_examId>;
  addTb_edu_exam!: Sequelize.HasManyAddAssociationMixin<tb_edu_exam, tb_edu_examId>;
  addTb_edu_exams!: Sequelize.HasManyAddAssociationsMixin<tb_edu_exam, tb_edu_examId>;
  createTb_edu_exam!: Sequelize.HasManyCreateAssociationMixin<tb_edu_exam>;
  removeTb_edu_exam!: Sequelize.HasManyRemoveAssociationMixin<tb_edu_exam, tb_edu_examId>;
  removeTb_edu_exams!: Sequelize.HasManyRemoveAssociationsMixin<tb_edu_exam, tb_edu_examId>;
  hasTb_edu_exam!: Sequelize.HasManyHasAssociationMixin<tb_edu_exam, tb_edu_examId>;
  hasTb_edu_exams!: Sequelize.HasManyHasAssociationsMixin<tb_edu_exam, tb_edu_examId>;
  countTb_edu_exams!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_edu_exam via updater_code
  updater_code_tb_edu_exams!: tb_edu_exam[];
  getUpdater_code_tb_edu_exams!: Sequelize.HasManyGetAssociationsMixin<tb_edu_exam>;
  setUpdater_code_tb_edu_exams!: Sequelize.HasManySetAssociationsMixin<tb_edu_exam, tb_edu_examId>;
  addUpdater_code_tb_edu_exam!: Sequelize.HasManyAddAssociationMixin<tb_edu_exam, tb_edu_examId>;
  addUpdater_code_tb_edu_exams!: Sequelize.HasManyAddAssociationsMixin<tb_edu_exam, tb_edu_examId>;
  createUpdater_code_tb_edu_exam!: Sequelize.HasManyCreateAssociationMixin<tb_edu_exam>;
  removeUpdater_code_tb_edu_exam!: Sequelize.HasManyRemoveAssociationMixin<tb_edu_exam, tb_edu_examId>;
  removeUpdater_code_tb_edu_exams!: Sequelize.HasManyRemoveAssociationsMixin<tb_edu_exam, tb_edu_examId>;
  hasUpdater_code_tb_edu_exam!: Sequelize.HasManyHasAssociationMixin<tb_edu_exam, tb_edu_examId>;
  hasUpdater_code_tb_edu_exams!: Sequelize.HasManyHasAssociationsMixin<tb_edu_exam, tb_edu_examId>;
  countUpdater_code_tb_edu_exams!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_edu_judge via register_code
  tb_edu_judges!: tb_edu_judge[];
  getTb_edu_judges!: Sequelize.HasManyGetAssociationsMixin<tb_edu_judge>;
  setTb_edu_judges!: Sequelize.HasManySetAssociationsMixin<tb_edu_judge, tb_edu_judgeId>;
  addTb_edu_judge!: Sequelize.HasManyAddAssociationMixin<tb_edu_judge, tb_edu_judgeId>;
  addTb_edu_judges!: Sequelize.HasManyAddAssociationsMixin<tb_edu_judge, tb_edu_judgeId>;
  createTb_edu_judge!: Sequelize.HasManyCreateAssociationMixin<tb_edu_judge>;
  removeTb_edu_judge!: Sequelize.HasManyRemoveAssociationMixin<tb_edu_judge, tb_edu_judgeId>;
  removeTb_edu_judges!: Sequelize.HasManyRemoveAssociationsMixin<tb_edu_judge, tb_edu_judgeId>;
  hasTb_edu_judge!: Sequelize.HasManyHasAssociationMixin<tb_edu_judge, tb_edu_judgeId>;
  hasTb_edu_judges!: Sequelize.HasManyHasAssociationsMixin<tb_edu_judge, tb_edu_judgeId>;
  countTb_edu_judges!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_edu_judge via updater_code
  updater_code_tb_edu_judges!: tb_edu_judge[];
  getUpdater_code_tb_edu_judges!: Sequelize.HasManyGetAssociationsMixin<tb_edu_judge>;
  setUpdater_code_tb_edu_judges!: Sequelize.HasManySetAssociationsMixin<tb_edu_judge, tb_edu_judgeId>;
  addUpdater_code_tb_edu_judge!: Sequelize.HasManyAddAssociationMixin<tb_edu_judge, tb_edu_judgeId>;
  addUpdater_code_tb_edu_judges!: Sequelize.HasManyAddAssociationsMixin<tb_edu_judge, tb_edu_judgeId>;
  createUpdater_code_tb_edu_judge!: Sequelize.HasManyCreateAssociationMixin<tb_edu_judge>;
  removeUpdater_code_tb_edu_judge!: Sequelize.HasManyRemoveAssociationMixin<tb_edu_judge, tb_edu_judgeId>;
  removeUpdater_code_tb_edu_judges!: Sequelize.HasManyRemoveAssociationsMixin<tb_edu_judge, tb_edu_judgeId>;
  hasUpdater_code_tb_edu_judge!: Sequelize.HasManyHasAssociationMixin<tb_edu_judge, tb_edu_judgeId>;
  hasUpdater_code_tb_edu_judges!: Sequelize.HasManyHasAssociationsMixin<tb_edu_judge, tb_edu_judgeId>;
  countUpdater_code_tb_edu_judges!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_edu_judge via account_code
  account_code_tb_edu_judges!: tb_edu_judge[];
  getAccount_code_tb_edu_judges!: Sequelize.HasManyGetAssociationsMixin<tb_edu_judge>;
  setAccount_code_tb_edu_judges!: Sequelize.HasManySetAssociationsMixin<tb_edu_judge, tb_edu_judgeId>;
  addAccount_code_tb_edu_judge!: Sequelize.HasManyAddAssociationMixin<tb_edu_judge, tb_edu_judgeId>;
  addAccount_code_tb_edu_judges!: Sequelize.HasManyAddAssociationsMixin<tb_edu_judge, tb_edu_judgeId>;
  createAccount_code_tb_edu_judge!: Sequelize.HasManyCreateAssociationMixin<tb_edu_judge>;
  removeAccount_code_tb_edu_judge!: Sequelize.HasManyRemoveAssociationMixin<tb_edu_judge, tb_edu_judgeId>;
  removeAccount_code_tb_edu_judges!: Sequelize.HasManyRemoveAssociationsMixin<tb_edu_judge, tb_edu_judgeId>;
  hasAccount_code_tb_edu_judge!: Sequelize.HasManyHasAssociationMixin<tb_edu_judge, tb_edu_judgeId>;
  hasAccount_code_tb_edu_judges!: Sequelize.HasManyHasAssociationsMixin<tb_edu_judge, tb_edu_judgeId>;
  countAccount_code_tb_edu_judges!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_edu_sch via updater_code
  tb_edu_sches!: tb_edu_sch[];
  getTb_edu_sches!: Sequelize.HasManyGetAssociationsMixin<tb_edu_sch>;
  setTb_edu_sches!: Sequelize.HasManySetAssociationsMixin<tb_edu_sch, tb_edu_schId>;
  addTb_edu_sch!: Sequelize.HasManyAddAssociationMixin<tb_edu_sch, tb_edu_schId>;
  addTb_edu_sches!: Sequelize.HasManyAddAssociationsMixin<tb_edu_sch, tb_edu_schId>;
  createTb_edu_sch!: Sequelize.HasManyCreateAssociationMixin<tb_edu_sch>;
  removeTb_edu_sch!: Sequelize.HasManyRemoveAssociationMixin<tb_edu_sch, tb_edu_schId>;
  removeTb_edu_sches!: Sequelize.HasManyRemoveAssociationsMixin<tb_edu_sch, tb_edu_schId>;
  hasTb_edu_sch!: Sequelize.HasManyHasAssociationMixin<tb_edu_sch, tb_edu_schId>;
  hasTb_edu_sches!: Sequelize.HasManyHasAssociationsMixin<tb_edu_sch, tb_edu_schId>;
  countTb_edu_sches!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_edu_sch_member via account_code
  tb_edu_sch_members!: tb_edu_sch_member[];
  getTb_edu_sch_members!: Sequelize.HasManyGetAssociationsMixin<tb_edu_sch_member>;
  setTb_edu_sch_members!: Sequelize.HasManySetAssociationsMixin<tb_edu_sch_member, tb_edu_sch_memberId>;
  addTb_edu_sch_member!: Sequelize.HasManyAddAssociationMixin<tb_edu_sch_member, tb_edu_sch_memberId>;
  addTb_edu_sch_members!: Sequelize.HasManyAddAssociationsMixin<tb_edu_sch_member, tb_edu_sch_memberId>;
  createTb_edu_sch_member!: Sequelize.HasManyCreateAssociationMixin<tb_edu_sch_member>;
  removeTb_edu_sch_member!: Sequelize.HasManyRemoveAssociationMixin<tb_edu_sch_member, tb_edu_sch_memberId>;
  removeTb_edu_sch_members!: Sequelize.HasManyRemoveAssociationsMixin<tb_edu_sch_member, tb_edu_sch_memberId>;
  hasTb_edu_sch_member!: Sequelize.HasManyHasAssociationMixin<tb_edu_sch_member, tb_edu_sch_memberId>;
  hasTb_edu_sch_members!: Sequelize.HasManyHasAssociationsMixin<tb_edu_sch_member, tb_edu_sch_memberId>;
  countTb_edu_sch_members!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_health_alcohol via account_code
  tb_health_alcohols!: tb_health_alcohol[];
  getTb_health_alcohols!: Sequelize.HasManyGetAssociationsMixin<tb_health_alcohol>;
  setTb_health_alcohols!: Sequelize.HasManySetAssociationsMixin<tb_health_alcohol, tb_health_alcoholId>;
  addTb_health_alcohol!: Sequelize.HasManyAddAssociationMixin<tb_health_alcohol, tb_health_alcoholId>;
  addTb_health_alcohols!: Sequelize.HasManyAddAssociationsMixin<tb_health_alcohol, tb_health_alcoholId>;
  createTb_health_alcohol!: Sequelize.HasManyCreateAssociationMixin<tb_health_alcohol>;
  removeTb_health_alcohol!: Sequelize.HasManyRemoveAssociationMixin<tb_health_alcohol, tb_health_alcoholId>;
  removeTb_health_alcohols!: Sequelize.HasManyRemoveAssociationsMixin<tb_health_alcohol, tb_health_alcoholId>;
  hasTb_health_alcohol!: Sequelize.HasManyHasAssociationMixin<tb_health_alcohol, tb_health_alcoholId>;
  hasTb_health_alcohols!: Sequelize.HasManyHasAssociationsMixin<tb_health_alcohol, tb_health_alcoholId>;
  countTb_health_alcohols!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_health_alcohol_hist via account_code
  tb_health_alcohol_hists!: tb_health_alcohol_hist[];
  getTb_health_alcohol_hists!: Sequelize.HasManyGetAssociationsMixin<tb_health_alcohol_hist>;
  setTb_health_alcohol_hists!: Sequelize.HasManySetAssociationsMixin<tb_health_alcohol_hist, tb_health_alcohol_histId>;
  addTb_health_alcohol_hist!: Sequelize.HasManyAddAssociationMixin<tb_health_alcohol_hist, tb_health_alcohol_histId>;
  addTb_health_alcohol_hists!: Sequelize.HasManyAddAssociationsMixin<tb_health_alcohol_hist, tb_health_alcohol_histId>;
  createTb_health_alcohol_hist!: Sequelize.HasManyCreateAssociationMixin<tb_health_alcohol_hist>;
  removeTb_health_alcohol_hist!: Sequelize.HasManyRemoveAssociationMixin<tb_health_alcohol_hist, tb_health_alcohol_histId>;
  removeTb_health_alcohol_hists!: Sequelize.HasManyRemoveAssociationsMixin<tb_health_alcohol_hist, tb_health_alcohol_histId>;
  hasTb_health_alcohol_hist!: Sequelize.HasManyHasAssociationMixin<tb_health_alcohol_hist, tb_health_alcohol_histId>;
  hasTb_health_alcohol_hists!: Sequelize.HasManyHasAssociationsMixin<tb_health_alcohol_hist, tb_health_alcohol_histId>;
  countTb_health_alcohol_hists!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_health_bp via account_code
  tb_health_bps!: tb_health_bp[];
  getTb_health_bps!: Sequelize.HasManyGetAssociationsMixin<tb_health_bp>;
  setTb_health_bps!: Sequelize.HasManySetAssociationsMixin<tb_health_bp, tb_health_bpId>;
  addTb_health_bp!: Sequelize.HasManyAddAssociationMixin<tb_health_bp, tb_health_bpId>;
  addTb_health_bps!: Sequelize.HasManyAddAssociationsMixin<tb_health_bp, tb_health_bpId>;
  createTb_health_bp!: Sequelize.HasManyCreateAssociationMixin<tb_health_bp>;
  removeTb_health_bp!: Sequelize.HasManyRemoveAssociationMixin<tb_health_bp, tb_health_bpId>;
  removeTb_health_bps!: Sequelize.HasManyRemoveAssociationsMixin<tb_health_bp, tb_health_bpId>;
  hasTb_health_bp!: Sequelize.HasManyHasAssociationMixin<tb_health_bp, tb_health_bpId>;
  hasTb_health_bps!: Sequelize.HasManyHasAssociationsMixin<tb_health_bp, tb_health_bpId>;
  countTb_health_bps!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_health_bp_hist via account_code
  tb_health_bp_hists!: tb_health_bp_hist[];
  getTb_health_bp_hists!: Sequelize.HasManyGetAssociationsMixin<tb_health_bp_hist>;
  setTb_health_bp_hists!: Sequelize.HasManySetAssociationsMixin<tb_health_bp_hist, tb_health_bp_histId>;
  addTb_health_bp_hist!: Sequelize.HasManyAddAssociationMixin<tb_health_bp_hist, tb_health_bp_histId>;
  addTb_health_bp_hists!: Sequelize.HasManyAddAssociationsMixin<tb_health_bp_hist, tb_health_bp_histId>;
  createTb_health_bp_hist!: Sequelize.HasManyCreateAssociationMixin<tb_health_bp_hist>;
  removeTb_health_bp_hist!: Sequelize.HasManyRemoveAssociationMixin<tb_health_bp_hist, tb_health_bp_histId>;
  removeTb_health_bp_hists!: Sequelize.HasManyRemoveAssociationsMixin<tb_health_bp_hist, tb_health_bp_histId>;
  hasTb_health_bp_hist!: Sequelize.HasManyHasAssociationMixin<tb_health_bp_hist, tb_health_bp_histId>;
  hasTb_health_bp_hists!: Sequelize.HasManyHasAssociationsMixin<tb_health_bp_hist, tb_health_bp_histId>;
  countTb_health_bp_hists!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_health_oxygen via account_code
  tb_health_oxygens!: tb_health_oxygen[];
  getTb_health_oxygens!: Sequelize.HasManyGetAssociationsMixin<tb_health_oxygen>;
  setTb_health_oxygens!: Sequelize.HasManySetAssociationsMixin<tb_health_oxygen, tb_health_oxygenId>;
  addTb_health_oxygen!: Sequelize.HasManyAddAssociationMixin<tb_health_oxygen, tb_health_oxygenId>;
  addTb_health_oxygens!: Sequelize.HasManyAddAssociationsMixin<tb_health_oxygen, tb_health_oxygenId>;
  createTb_health_oxygen!: Sequelize.HasManyCreateAssociationMixin<tb_health_oxygen>;
  removeTb_health_oxygen!: Sequelize.HasManyRemoveAssociationMixin<tb_health_oxygen, tb_health_oxygenId>;
  removeTb_health_oxygens!: Sequelize.HasManyRemoveAssociationsMixin<tb_health_oxygen, tb_health_oxygenId>;
  hasTb_health_oxygen!: Sequelize.HasManyHasAssociationMixin<tb_health_oxygen, tb_health_oxygenId>;
  hasTb_health_oxygens!: Sequelize.HasManyHasAssociationsMixin<tb_health_oxygen, tb_health_oxygenId>;
  countTb_health_oxygens!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_health_stress via account_code
  tb_health_stresses!: tb_health_stress[];
  getTb_health_stresses!: Sequelize.HasManyGetAssociationsMixin<tb_health_stress>;
  setTb_health_stresses!: Sequelize.HasManySetAssociationsMixin<tb_health_stress, tb_health_stressId>;
  addTb_health_stress!: Sequelize.HasManyAddAssociationMixin<tb_health_stress, tb_health_stressId>;
  addTb_health_stresses!: Sequelize.HasManyAddAssociationsMixin<tb_health_stress, tb_health_stressId>;
  createTb_health_stress!: Sequelize.HasManyCreateAssociationMixin<tb_health_stress>;
  removeTb_health_stress!: Sequelize.HasManyRemoveAssociationMixin<tb_health_stress, tb_health_stressId>;
  removeTb_health_stresses!: Sequelize.HasManyRemoveAssociationsMixin<tb_health_stress, tb_health_stressId>;
  hasTb_health_stress!: Sequelize.HasManyHasAssociationMixin<tb_health_stress, tb_health_stressId>;
  hasTb_health_stresses!: Sequelize.HasManyHasAssociationsMixin<tb_health_stress, tb_health_stressId>;
  countTb_health_stresses!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_mat_pur via register_code
  tb_mat_purs!: tb_mat_pur[];
  getTb_mat_purs!: Sequelize.HasManyGetAssociationsMixin<tb_mat_pur>;
  setTb_mat_purs!: Sequelize.HasManySetAssociationsMixin<tb_mat_pur, tb_mat_purId>;
  addTb_mat_pur!: Sequelize.HasManyAddAssociationMixin<tb_mat_pur, tb_mat_purId>;
  addTb_mat_purs!: Sequelize.HasManyAddAssociationsMixin<tb_mat_pur, tb_mat_purId>;
  createTb_mat_pur!: Sequelize.HasManyCreateAssociationMixin<tb_mat_pur>;
  removeTb_mat_pur!: Sequelize.HasManyRemoveAssociationMixin<tb_mat_pur, tb_mat_purId>;
  removeTb_mat_purs!: Sequelize.HasManyRemoveAssociationsMixin<tb_mat_pur, tb_mat_purId>;
  hasTb_mat_pur!: Sequelize.HasManyHasAssociationMixin<tb_mat_pur, tb_mat_purId>;
  hasTb_mat_purs!: Sequelize.HasManyHasAssociationsMixin<tb_mat_pur, tb_mat_purId>;
  countTb_mat_purs!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_mat_pur via updater_code
  updater_code_tb_mat_purs!: tb_mat_pur[];
  getUpdater_code_tb_mat_purs!: Sequelize.HasManyGetAssociationsMixin<tb_mat_pur>;
  setUpdater_code_tb_mat_purs!: Sequelize.HasManySetAssociationsMixin<tb_mat_pur, tb_mat_purId>;
  addUpdater_code_tb_mat_pur!: Sequelize.HasManyAddAssociationMixin<tb_mat_pur, tb_mat_purId>;
  addUpdater_code_tb_mat_purs!: Sequelize.HasManyAddAssociationsMixin<tb_mat_pur, tb_mat_purId>;
  createUpdater_code_tb_mat_pur!: Sequelize.HasManyCreateAssociationMixin<tb_mat_pur>;
  removeUpdater_code_tb_mat_pur!: Sequelize.HasManyRemoveAssociationMixin<tb_mat_pur, tb_mat_purId>;
  removeUpdater_code_tb_mat_purs!: Sequelize.HasManyRemoveAssociationsMixin<tb_mat_pur, tb_mat_purId>;
  hasUpdater_code_tb_mat_pur!: Sequelize.HasManyHasAssociationMixin<tb_mat_pur, tb_mat_purId>;
  hasUpdater_code_tb_mat_purs!: Sequelize.HasManyHasAssociationsMixin<tb_mat_pur, tb_mat_purId>;
  countUpdater_code_tb_mat_purs!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_partner via register_code
  tb_partners!: tb_partner[];
  getTb_partners!: Sequelize.HasManyGetAssociationsMixin<tb_partner>;
  setTb_partners!: Sequelize.HasManySetAssociationsMixin<tb_partner, tb_partnerId>;
  addTb_partner!: Sequelize.HasManyAddAssociationMixin<tb_partner, tb_partnerId>;
  addTb_partners!: Sequelize.HasManyAddAssociationsMixin<tb_partner, tb_partnerId>;
  createTb_partner!: Sequelize.HasManyCreateAssociationMixin<tb_partner>;
  removeTb_partner!: Sequelize.HasManyRemoveAssociationMixin<tb_partner, tb_partnerId>;
  removeTb_partners!: Sequelize.HasManyRemoveAssociationsMixin<tb_partner, tb_partnerId>;
  hasTb_partner!: Sequelize.HasManyHasAssociationMixin<tb_partner, tb_partnerId>;
  hasTb_partners!: Sequelize.HasManyHasAssociationsMixin<tb_partner, tb_partnerId>;
  countTb_partners!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_partner via updater_code
  updater_code_tb_partners!: tb_partner[];
  getUpdater_code_tb_partners!: Sequelize.HasManyGetAssociationsMixin<tb_partner>;
  setUpdater_code_tb_partners!: Sequelize.HasManySetAssociationsMixin<tb_partner, tb_partnerId>;
  addUpdater_code_tb_partner!: Sequelize.HasManyAddAssociationMixin<tb_partner, tb_partnerId>;
  addUpdater_code_tb_partners!: Sequelize.HasManyAddAssociationsMixin<tb_partner, tb_partnerId>;
  createUpdater_code_tb_partner!: Sequelize.HasManyCreateAssociationMixin<tb_partner>;
  removeUpdater_code_tb_partner!: Sequelize.HasManyRemoveAssociationMixin<tb_partner, tb_partnerId>;
  removeUpdater_code_tb_partners!: Sequelize.HasManyRemoveAssociationsMixin<tb_partner, tb_partnerId>;
  hasUpdater_code_tb_partner!: Sequelize.HasManyHasAssociationMixin<tb_partner, tb_partnerId>;
  hasUpdater_code_tb_partners!: Sequelize.HasManyHasAssociationsMixin<tb_partner, tb_partnerId>;
  countUpdater_code_tb_partners!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_partner_contract via register_code
  tb_partner_contracts!: tb_partner_contract[];
  getTb_partner_contracts!: Sequelize.HasManyGetAssociationsMixin<tb_partner_contract>;
  setTb_partner_contracts!: Sequelize.HasManySetAssociationsMixin<tb_partner_contract, tb_partner_contractId>;
  addTb_partner_contract!: Sequelize.HasManyAddAssociationMixin<tb_partner_contract, tb_partner_contractId>;
  addTb_partner_contracts!: Sequelize.HasManyAddAssociationsMixin<tb_partner_contract, tb_partner_contractId>;
  createTb_partner_contract!: Sequelize.HasManyCreateAssociationMixin<tb_partner_contract>;
  removeTb_partner_contract!: Sequelize.HasManyRemoveAssociationMixin<tb_partner_contract, tb_partner_contractId>;
  removeTb_partner_contracts!: Sequelize.HasManyRemoveAssociationsMixin<tb_partner_contract, tb_partner_contractId>;
  hasTb_partner_contract!: Sequelize.HasManyHasAssociationMixin<tb_partner_contract, tb_partner_contractId>;
  hasTb_partner_contracts!: Sequelize.HasManyHasAssociationsMixin<tb_partner_contract, tb_partner_contractId>;
  countTb_partner_contracts!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_partner_contract via updater_code
  updater_code_tb_partner_contracts!: tb_partner_contract[];
  getUpdater_code_tb_partner_contracts!: Sequelize.HasManyGetAssociationsMixin<tb_partner_contract>;
  setUpdater_code_tb_partner_contracts!: Sequelize.HasManySetAssociationsMixin<tb_partner_contract, tb_partner_contractId>;
  addUpdater_code_tb_partner_contract!: Sequelize.HasManyAddAssociationMixin<tb_partner_contract, tb_partner_contractId>;
  addUpdater_code_tb_partner_contracts!: Sequelize.HasManyAddAssociationsMixin<tb_partner_contract, tb_partner_contractId>;
  createUpdater_code_tb_partner_contract!: Sequelize.HasManyCreateAssociationMixin<tb_partner_contract>;
  removeUpdater_code_tb_partner_contract!: Sequelize.HasManyRemoveAssociationMixin<tb_partner_contract, tb_partner_contractId>;
  removeUpdater_code_tb_partner_contracts!: Sequelize.HasManyRemoveAssociationsMixin<tb_partner_contract, tb_partner_contractId>;
  hasUpdater_code_tb_partner_contract!: Sequelize.HasManyHasAssociationMixin<tb_partner_contract, tb_partner_contractId>;
  hasUpdater_code_tb_partner_contracts!: Sequelize.HasManyHasAssociationsMixin<tb_partner_contract, tb_partner_contractId>;
  countUpdater_code_tb_partner_contracts!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_pay via account_code
  tb_pays!: tb_pay[];
  getTb_pays!: Sequelize.HasManyGetAssociationsMixin<tb_pay>;
  setTb_pays!: Sequelize.HasManySetAssociationsMixin<tb_pay, tb_payId>;
  addTb_pay!: Sequelize.HasManyAddAssociationMixin<tb_pay, tb_payId>;
  addTb_pays!: Sequelize.HasManyAddAssociationsMixin<tb_pay, tb_payId>;
  createTb_pay!: Sequelize.HasManyCreateAssociationMixin<tb_pay>;
  removeTb_pay!: Sequelize.HasManyRemoveAssociationMixin<tb_pay, tb_payId>;
  removeTb_pays!: Sequelize.HasManyRemoveAssociationsMixin<tb_pay, tb_payId>;
  hasTb_pay!: Sequelize.HasManyHasAssociationMixin<tb_pay, tb_payId>;
  hasTb_pays!: Sequelize.HasManyHasAssociationsMixin<tb_pay, tb_payId>;
  countTb_pays!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_pay via register_code
  register_code_tb_pays!: tb_pay[];
  getRegister_code_tb_pays!: Sequelize.HasManyGetAssociationsMixin<tb_pay>;
  setRegister_code_tb_pays!: Sequelize.HasManySetAssociationsMixin<tb_pay, tb_payId>;
  addRegister_code_tb_pay!: Sequelize.HasManyAddAssociationMixin<tb_pay, tb_payId>;
  addRegister_code_tb_pays!: Sequelize.HasManyAddAssociationsMixin<tb_pay, tb_payId>;
  createRegister_code_tb_pay!: Sequelize.HasManyCreateAssociationMixin<tb_pay>;
  removeRegister_code_tb_pay!: Sequelize.HasManyRemoveAssociationMixin<tb_pay, tb_payId>;
  removeRegister_code_tb_pays!: Sequelize.HasManyRemoveAssociationsMixin<tb_pay, tb_payId>;
  hasRegister_code_tb_pay!: Sequelize.HasManyHasAssociationMixin<tb_pay, tb_payId>;
  hasRegister_code_tb_pays!: Sequelize.HasManyHasAssociationsMixin<tb_pay, tb_payId>;
  countRegister_code_tb_pays!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_pay via updater_code
  updater_code_tb_pays!: tb_pay[];
  getUpdater_code_tb_pays!: Sequelize.HasManyGetAssociationsMixin<tb_pay>;
  setUpdater_code_tb_pays!: Sequelize.HasManySetAssociationsMixin<tb_pay, tb_payId>;
  addUpdater_code_tb_pay!: Sequelize.HasManyAddAssociationMixin<tb_pay, tb_payId>;
  addUpdater_code_tb_pays!: Sequelize.HasManyAddAssociationsMixin<tb_pay, tb_payId>;
  createUpdater_code_tb_pay!: Sequelize.HasManyCreateAssociationMixin<tb_pay>;
  removeUpdater_code_tb_pay!: Sequelize.HasManyRemoveAssociationMixin<tb_pay, tb_payId>;
  removeUpdater_code_tb_pays!: Sequelize.HasManyRemoveAssociationsMixin<tb_pay, tb_payId>;
  hasUpdater_code_tb_pay!: Sequelize.HasManyHasAssociationMixin<tb_pay, tb_payId>;
  hasUpdater_code_tb_pays!: Sequelize.HasManyHasAssociationsMixin<tb_pay, tb_payId>;
  countUpdater_code_tb_pays!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_req_doc via account_code
  tb_req_docs!: tb_req_doc[];
  getTb_req_docs!: Sequelize.HasManyGetAssociationsMixin<tb_req_doc>;
  setTb_req_docs!: Sequelize.HasManySetAssociationsMixin<tb_req_doc, tb_req_docId>;
  addTb_req_doc!: Sequelize.HasManyAddAssociationMixin<tb_req_doc, tb_req_docId>;
  addTb_req_docs!: Sequelize.HasManyAddAssociationsMixin<tb_req_doc, tb_req_docId>;
  createTb_req_doc!: Sequelize.HasManyCreateAssociationMixin<tb_req_doc>;
  removeTb_req_doc!: Sequelize.HasManyRemoveAssociationMixin<tb_req_doc, tb_req_docId>;
  removeTb_req_docs!: Sequelize.HasManyRemoveAssociationsMixin<tb_req_doc, tb_req_docId>;
  hasTb_req_doc!: Sequelize.HasManyHasAssociationMixin<tb_req_doc, tb_req_docId>;
  hasTb_req_docs!: Sequelize.HasManyHasAssociationsMixin<tb_req_doc, tb_req_docId>;
  countTb_req_docs!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_risk via register_code
  tb_risks!: tb_risk[];
  getTb_risks!: Sequelize.HasManyGetAssociationsMixin<tb_risk>;
  setTb_risks!: Sequelize.HasManySetAssociationsMixin<tb_risk, tb_riskId>;
  addTb_risk!: Sequelize.HasManyAddAssociationMixin<tb_risk, tb_riskId>;
  addTb_risks!: Sequelize.HasManyAddAssociationsMixin<tb_risk, tb_riskId>;
  createTb_risk!: Sequelize.HasManyCreateAssociationMixin<tb_risk>;
  removeTb_risk!: Sequelize.HasManyRemoveAssociationMixin<tb_risk, tb_riskId>;
  removeTb_risks!: Sequelize.HasManyRemoveAssociationsMixin<tb_risk, tb_riskId>;
  hasTb_risk!: Sequelize.HasManyHasAssociationMixin<tb_risk, tb_riskId>;
  hasTb_risks!: Sequelize.HasManyHasAssociationsMixin<tb_risk, tb_riskId>;
  countTb_risks!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_risk via updater_code
  updater_code_tb_risks!: tb_risk[];
  getUpdater_code_tb_risks!: Sequelize.HasManyGetAssociationsMixin<tb_risk>;
  setUpdater_code_tb_risks!: Sequelize.HasManySetAssociationsMixin<tb_risk, tb_riskId>;
  addUpdater_code_tb_risk!: Sequelize.HasManyAddAssociationMixin<tb_risk, tb_riskId>;
  addUpdater_code_tb_risks!: Sequelize.HasManyAddAssociationsMixin<tb_risk, tb_riskId>;
  createUpdater_code_tb_risk!: Sequelize.HasManyCreateAssociationMixin<tb_risk>;
  removeUpdater_code_tb_risk!: Sequelize.HasManyRemoveAssociationMixin<tb_risk, tb_riskId>;
  removeUpdater_code_tb_risks!: Sequelize.HasManyRemoveAssociationsMixin<tb_risk, tb_riskId>;
  hasUpdater_code_tb_risk!: Sequelize.HasManyHasAssociationMixin<tb_risk, tb_riskId>;
  hasUpdater_code_tb_risks!: Sequelize.HasManyHasAssociationsMixin<tb_risk, tb_riskId>;
  countUpdater_code_tb_risks!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_risk_action via register_code
  tb_risk_actions!: tb_risk_action[];
  getTb_risk_actions!: Sequelize.HasManyGetAssociationsMixin<tb_risk_action>;
  setTb_risk_actions!: Sequelize.HasManySetAssociationsMixin<tb_risk_action, tb_risk_actionId>;
  addTb_risk_action!: Sequelize.HasManyAddAssociationMixin<tb_risk_action, tb_risk_actionId>;
  addTb_risk_actions!: Sequelize.HasManyAddAssociationsMixin<tb_risk_action, tb_risk_actionId>;
  createTb_risk_action!: Sequelize.HasManyCreateAssociationMixin<tb_risk_action>;
  removeTb_risk_action!: Sequelize.HasManyRemoveAssociationMixin<tb_risk_action, tb_risk_actionId>;
  removeTb_risk_actions!: Sequelize.HasManyRemoveAssociationsMixin<tb_risk_action, tb_risk_actionId>;
  hasTb_risk_action!: Sequelize.HasManyHasAssociationMixin<tb_risk_action, tb_risk_actionId>;
  hasTb_risk_actions!: Sequelize.HasManyHasAssociationsMixin<tb_risk_action, tb_risk_actionId>;
  countTb_risk_actions!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_risk_action via updater_code
  updater_code_tb_risk_actions!: tb_risk_action[];
  getUpdater_code_tb_risk_actions!: Sequelize.HasManyGetAssociationsMixin<tb_risk_action>;
  setUpdater_code_tb_risk_actions!: Sequelize.HasManySetAssociationsMixin<tb_risk_action, tb_risk_actionId>;
  addUpdater_code_tb_risk_action!: Sequelize.HasManyAddAssociationMixin<tb_risk_action, tb_risk_actionId>;
  addUpdater_code_tb_risk_actions!: Sequelize.HasManyAddAssociationsMixin<tb_risk_action, tb_risk_actionId>;
  createUpdater_code_tb_risk_action!: Sequelize.HasManyCreateAssociationMixin<tb_risk_action>;
  removeUpdater_code_tb_risk_action!: Sequelize.HasManyRemoveAssociationMixin<tb_risk_action, tb_risk_actionId>;
  removeUpdater_code_tb_risk_actions!: Sequelize.HasManyRemoveAssociationsMixin<tb_risk_action, tb_risk_actionId>;
  hasUpdater_code_tb_risk_action!: Sequelize.HasManyHasAssociationMixin<tb_risk_action, tb_risk_actionId>;
  hasUpdater_code_tb_risk_actions!: Sequelize.HasManyHasAssociationsMixin<tb_risk_action, tb_risk_actionId>;
  countUpdater_code_tb_risk_actions!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_risk_actor via actor_code
  tb_risk_actors!: tb_risk_actor[];
  getTb_risk_actors!: Sequelize.HasManyGetAssociationsMixin<tb_risk_actor>;
  setTb_risk_actors!: Sequelize.HasManySetAssociationsMixin<tb_risk_actor, tb_risk_actorId>;
  addTb_risk_actor!: Sequelize.HasManyAddAssociationMixin<tb_risk_actor, tb_risk_actorId>;
  addTb_risk_actors!: Sequelize.HasManyAddAssociationsMixin<tb_risk_actor, tb_risk_actorId>;
  createTb_risk_actor!: Sequelize.HasManyCreateAssociationMixin<tb_risk_actor>;
  removeTb_risk_actor!: Sequelize.HasManyRemoveAssociationMixin<tb_risk_actor, tb_risk_actorId>;
  removeTb_risk_actors!: Sequelize.HasManyRemoveAssociationsMixin<tb_risk_actor, tb_risk_actorId>;
  hasTb_risk_actor!: Sequelize.HasManyHasAssociationMixin<tb_risk_actor, tb_risk_actorId>;
  hasTb_risk_actors!: Sequelize.HasManyHasAssociationsMixin<tb_risk_actor, tb_risk_actorId>;
  countTb_risk_actors!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_risk_report via register_code
  tb_risk_reports!: tb_risk_report[];
  getTb_risk_reports!: Sequelize.HasManyGetAssociationsMixin<tb_risk_report>;
  setTb_risk_reports!: Sequelize.HasManySetAssociationsMixin<tb_risk_report, tb_risk_reportId>;
  addTb_risk_report!: Sequelize.HasManyAddAssociationMixin<tb_risk_report, tb_risk_reportId>;
  addTb_risk_reports!: Sequelize.HasManyAddAssociationsMixin<tb_risk_report, tb_risk_reportId>;
  createTb_risk_report!: Sequelize.HasManyCreateAssociationMixin<tb_risk_report>;
  removeTb_risk_report!: Sequelize.HasManyRemoveAssociationMixin<tb_risk_report, tb_risk_reportId>;
  removeTb_risk_reports!: Sequelize.HasManyRemoveAssociationsMixin<tb_risk_report, tb_risk_reportId>;
  hasTb_risk_report!: Sequelize.HasManyHasAssociationMixin<tb_risk_report, tb_risk_reportId>;
  hasTb_risk_reports!: Sequelize.HasManyHasAssociationsMixin<tb_risk_report, tb_risk_reportId>;
  countTb_risk_reports!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_risk_report via updater_code
  updater_code_tb_risk_reports!: tb_risk_report[];
  getUpdater_code_tb_risk_reports!: Sequelize.HasManyGetAssociationsMixin<tb_risk_report>;
  setUpdater_code_tb_risk_reports!: Sequelize.HasManySetAssociationsMixin<tb_risk_report, tb_risk_reportId>;
  addUpdater_code_tb_risk_report!: Sequelize.HasManyAddAssociationMixin<tb_risk_report, tb_risk_reportId>;
  addUpdater_code_tb_risk_reports!: Sequelize.HasManyAddAssociationsMixin<tb_risk_report, tb_risk_reportId>;
  createUpdater_code_tb_risk_report!: Sequelize.HasManyCreateAssociationMixin<tb_risk_report>;
  removeUpdater_code_tb_risk_report!: Sequelize.HasManyRemoveAssociationMixin<tb_risk_report, tb_risk_reportId>;
  removeUpdater_code_tb_risk_reports!: Sequelize.HasManyRemoveAssociationsMixin<tb_risk_report, tb_risk_reportId>;
  hasUpdater_code_tb_risk_report!: Sequelize.HasManyHasAssociationMixin<tb_risk_report, tb_risk_reportId>;
  hasUpdater_code_tb_risk_reports!: Sequelize.HasManyHasAssociationsMixin<tb_risk_report, tb_risk_reportId>;
  countUpdater_code_tb_risk_reports!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_risk_report_action via register_code
  tb_risk_report_actions!: tb_risk_report_action[];
  getTb_risk_report_actions!: Sequelize.HasManyGetAssociationsMixin<tb_risk_report_action>;
  setTb_risk_report_actions!: Sequelize.HasManySetAssociationsMixin<tb_risk_report_action, tb_risk_report_actionId>;
  addTb_risk_report_action!: Sequelize.HasManyAddAssociationMixin<tb_risk_report_action, tb_risk_report_actionId>;
  addTb_risk_report_actions!: Sequelize.HasManyAddAssociationsMixin<tb_risk_report_action, tb_risk_report_actionId>;
  createTb_risk_report_action!: Sequelize.HasManyCreateAssociationMixin<tb_risk_report_action>;
  removeTb_risk_report_action!: Sequelize.HasManyRemoveAssociationMixin<tb_risk_report_action, tb_risk_report_actionId>;
  removeTb_risk_report_actions!: Sequelize.HasManyRemoveAssociationsMixin<tb_risk_report_action, tb_risk_report_actionId>;
  hasTb_risk_report_action!: Sequelize.HasManyHasAssociationMixin<tb_risk_report_action, tb_risk_report_actionId>;
  hasTb_risk_report_actions!: Sequelize.HasManyHasAssociationsMixin<tb_risk_report_action, tb_risk_report_actionId>;
  countTb_risk_report_actions!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_risk_report_action via updater_code
  updater_code_tb_risk_report_actions!: tb_risk_report_action[];
  getUpdater_code_tb_risk_report_actions!: Sequelize.HasManyGetAssociationsMixin<tb_risk_report_action>;
  setUpdater_code_tb_risk_report_actions!: Sequelize.HasManySetAssociationsMixin<tb_risk_report_action, tb_risk_report_actionId>;
  addUpdater_code_tb_risk_report_action!: Sequelize.HasManyAddAssociationMixin<tb_risk_report_action, tb_risk_report_actionId>;
  addUpdater_code_tb_risk_report_actions!: Sequelize.HasManyAddAssociationsMixin<tb_risk_report_action, tb_risk_report_actionId>;
  createUpdater_code_tb_risk_report_action!: Sequelize.HasManyCreateAssociationMixin<tb_risk_report_action>;
  removeUpdater_code_tb_risk_report_action!: Sequelize.HasManyRemoveAssociationMixin<tb_risk_report_action, tb_risk_report_actionId>;
  removeUpdater_code_tb_risk_report_actions!: Sequelize.HasManyRemoveAssociationsMixin<tb_risk_report_action, tb_risk_report_actionId>;
  hasUpdater_code_tb_risk_report_action!: Sequelize.HasManyHasAssociationMixin<tb_risk_report_action, tb_risk_report_actionId>;
  hasUpdater_code_tb_risk_report_actions!: Sequelize.HasManyHasAssociationsMixin<tb_risk_report_action, tb_risk_report_actionId>;
  countUpdater_code_tb_risk_report_actions!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_safety_prot_eqp_inventory via register_code
  tb_safety_prot_eqp_inventories!: tb_safety_prot_eqp_inventory[];
  getTb_safety_prot_eqp_inventories!: Sequelize.HasManyGetAssociationsMixin<tb_safety_prot_eqp_inventory>;
  setTb_safety_prot_eqp_inventories!: Sequelize.HasManySetAssociationsMixin<tb_safety_prot_eqp_inventory, tb_safety_prot_eqp_inventoryId>;
  addTb_safety_prot_eqp_inventory!: Sequelize.HasManyAddAssociationMixin<tb_safety_prot_eqp_inventory, tb_safety_prot_eqp_inventoryId>;
  addTb_safety_prot_eqp_inventories!: Sequelize.HasManyAddAssociationsMixin<tb_safety_prot_eqp_inventory, tb_safety_prot_eqp_inventoryId>;
  createTb_safety_prot_eqp_inventory!: Sequelize.HasManyCreateAssociationMixin<tb_safety_prot_eqp_inventory>;
  removeTb_safety_prot_eqp_inventory!: Sequelize.HasManyRemoveAssociationMixin<tb_safety_prot_eqp_inventory, tb_safety_prot_eqp_inventoryId>;
  removeTb_safety_prot_eqp_inventories!: Sequelize.HasManyRemoveAssociationsMixin<tb_safety_prot_eqp_inventory, tb_safety_prot_eqp_inventoryId>;
  hasTb_safety_prot_eqp_inventory!: Sequelize.HasManyHasAssociationMixin<tb_safety_prot_eqp_inventory, tb_safety_prot_eqp_inventoryId>;
  hasTb_safety_prot_eqp_inventories!: Sequelize.HasManyHasAssociationsMixin<tb_safety_prot_eqp_inventory, tb_safety_prot_eqp_inventoryId>;
  countTb_safety_prot_eqp_inventories!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_safety_prot_eqp_inventory via updater_code
  updater_code_tb_safety_prot_eqp_inventories!: tb_safety_prot_eqp_inventory[];
  getUpdater_code_tb_safety_prot_eqp_inventories!: Sequelize.HasManyGetAssociationsMixin<tb_safety_prot_eqp_inventory>;
  setUpdater_code_tb_safety_prot_eqp_inventories!: Sequelize.HasManySetAssociationsMixin<tb_safety_prot_eqp_inventory, tb_safety_prot_eqp_inventoryId>;
  addUpdater_code_tb_safety_prot_eqp_inventory!: Sequelize.HasManyAddAssociationMixin<tb_safety_prot_eqp_inventory, tb_safety_prot_eqp_inventoryId>;
  addUpdater_code_tb_safety_prot_eqp_inventories!: Sequelize.HasManyAddAssociationsMixin<tb_safety_prot_eqp_inventory, tb_safety_prot_eqp_inventoryId>;
  createUpdater_code_tb_safety_prot_eqp_inventory!: Sequelize.HasManyCreateAssociationMixin<tb_safety_prot_eqp_inventory>;
  removeUpdater_code_tb_safety_prot_eqp_inventory!: Sequelize.HasManyRemoveAssociationMixin<tb_safety_prot_eqp_inventory, tb_safety_prot_eqp_inventoryId>;
  removeUpdater_code_tb_safety_prot_eqp_inventories!: Sequelize.HasManyRemoveAssociationsMixin<tb_safety_prot_eqp_inventory, tb_safety_prot_eqp_inventoryId>;
  hasUpdater_code_tb_safety_prot_eqp_inventory!: Sequelize.HasManyHasAssociationMixin<tb_safety_prot_eqp_inventory, tb_safety_prot_eqp_inventoryId>;
  hasUpdater_code_tb_safety_prot_eqp_inventories!: Sequelize.HasManyHasAssociationsMixin<tb_safety_prot_eqp_inventory, tb_safety_prot_eqp_inventoryId>;
  countUpdater_code_tb_safety_prot_eqp_inventories!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_safety_prot_eqp_issue via register_code
  tb_safety_prot_eqp_issues!: tb_safety_prot_eqp_issue[];
  getTb_safety_prot_eqp_issues!: Sequelize.HasManyGetAssociationsMixin<tb_safety_prot_eqp_issue>;
  setTb_safety_prot_eqp_issues!: Sequelize.HasManySetAssociationsMixin<tb_safety_prot_eqp_issue, tb_safety_prot_eqp_issueId>;
  addTb_safety_prot_eqp_issue!: Sequelize.HasManyAddAssociationMixin<tb_safety_prot_eqp_issue, tb_safety_prot_eqp_issueId>;
  addTb_safety_prot_eqp_issues!: Sequelize.HasManyAddAssociationsMixin<tb_safety_prot_eqp_issue, tb_safety_prot_eqp_issueId>;
  createTb_safety_prot_eqp_issue!: Sequelize.HasManyCreateAssociationMixin<tb_safety_prot_eqp_issue>;
  removeTb_safety_prot_eqp_issue!: Sequelize.HasManyRemoveAssociationMixin<tb_safety_prot_eqp_issue, tb_safety_prot_eqp_issueId>;
  removeTb_safety_prot_eqp_issues!: Sequelize.HasManyRemoveAssociationsMixin<tb_safety_prot_eqp_issue, tb_safety_prot_eqp_issueId>;
  hasTb_safety_prot_eqp_issue!: Sequelize.HasManyHasAssociationMixin<tb_safety_prot_eqp_issue, tb_safety_prot_eqp_issueId>;
  hasTb_safety_prot_eqp_issues!: Sequelize.HasManyHasAssociationsMixin<tb_safety_prot_eqp_issue, tb_safety_prot_eqp_issueId>;
  countTb_safety_prot_eqp_issues!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_safety_prot_eqp_issue via updater_code
  updater_code_tb_safety_prot_eqp_issues!: tb_safety_prot_eqp_issue[];
  getUpdater_code_tb_safety_prot_eqp_issues!: Sequelize.HasManyGetAssociationsMixin<tb_safety_prot_eqp_issue>;
  setUpdater_code_tb_safety_prot_eqp_issues!: Sequelize.HasManySetAssociationsMixin<tb_safety_prot_eqp_issue, tb_safety_prot_eqp_issueId>;
  addUpdater_code_tb_safety_prot_eqp_issue!: Sequelize.HasManyAddAssociationMixin<tb_safety_prot_eqp_issue, tb_safety_prot_eqp_issueId>;
  addUpdater_code_tb_safety_prot_eqp_issues!: Sequelize.HasManyAddAssociationsMixin<tb_safety_prot_eqp_issue, tb_safety_prot_eqp_issueId>;
  createUpdater_code_tb_safety_prot_eqp_issue!: Sequelize.HasManyCreateAssociationMixin<tb_safety_prot_eqp_issue>;
  removeUpdater_code_tb_safety_prot_eqp_issue!: Sequelize.HasManyRemoveAssociationMixin<tb_safety_prot_eqp_issue, tb_safety_prot_eqp_issueId>;
  removeUpdater_code_tb_safety_prot_eqp_issues!: Sequelize.HasManyRemoveAssociationsMixin<tb_safety_prot_eqp_issue, tb_safety_prot_eqp_issueId>;
  hasUpdater_code_tb_safety_prot_eqp_issue!: Sequelize.HasManyHasAssociationMixin<tb_safety_prot_eqp_issue, tb_safety_prot_eqp_issueId>;
  hasUpdater_code_tb_safety_prot_eqp_issues!: Sequelize.HasManyHasAssociationsMixin<tb_safety_prot_eqp_issue, tb_safety_prot_eqp_issueId>;
  countUpdater_code_tb_safety_prot_eqp_issues!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_safety_prot_eqp_issue via worker_code
  worker_code_tb_safety_prot_eqp_issues!: tb_safety_prot_eqp_issue[];
  getWorker_code_tb_safety_prot_eqp_issues!: Sequelize.HasManyGetAssociationsMixin<tb_safety_prot_eqp_issue>;
  setWorker_code_tb_safety_prot_eqp_issues!: Sequelize.HasManySetAssociationsMixin<tb_safety_prot_eqp_issue, tb_safety_prot_eqp_issueId>;
  addWorker_code_tb_safety_prot_eqp_issue!: Sequelize.HasManyAddAssociationMixin<tb_safety_prot_eqp_issue, tb_safety_prot_eqp_issueId>;
  addWorker_code_tb_safety_prot_eqp_issues!: Sequelize.HasManyAddAssociationsMixin<tb_safety_prot_eqp_issue, tb_safety_prot_eqp_issueId>;
  createWorker_code_tb_safety_prot_eqp_issue!: Sequelize.HasManyCreateAssociationMixin<tb_safety_prot_eqp_issue>;
  removeWorker_code_tb_safety_prot_eqp_issue!: Sequelize.HasManyRemoveAssociationMixin<tb_safety_prot_eqp_issue, tb_safety_prot_eqp_issueId>;
  removeWorker_code_tb_safety_prot_eqp_issues!: Sequelize.HasManyRemoveAssociationsMixin<tb_safety_prot_eqp_issue, tb_safety_prot_eqp_issueId>;
  hasWorker_code_tb_safety_prot_eqp_issue!: Sequelize.HasManyHasAssociationMixin<tb_safety_prot_eqp_issue, tb_safety_prot_eqp_issueId>;
  hasWorker_code_tb_safety_prot_eqp_issues!: Sequelize.HasManyHasAssociationsMixin<tb_safety_prot_eqp_issue, tb_safety_prot_eqp_issueId>;
  countWorker_code_tb_safety_prot_eqp_issues!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_safety_prot_eqp_purch_detail via register_code
  tb_safety_prot_eqp_purch_details!: tb_safety_prot_eqp_purch_detail[];
  getTb_safety_prot_eqp_purch_details!: Sequelize.HasManyGetAssociationsMixin<tb_safety_prot_eqp_purch_detail>;
  setTb_safety_prot_eqp_purch_details!: Sequelize.HasManySetAssociationsMixin<tb_safety_prot_eqp_purch_detail, tb_safety_prot_eqp_purch_detailId>;
  addTb_safety_prot_eqp_purch_detail!: Sequelize.HasManyAddAssociationMixin<tb_safety_prot_eqp_purch_detail, tb_safety_prot_eqp_purch_detailId>;
  addTb_safety_prot_eqp_purch_details!: Sequelize.HasManyAddAssociationsMixin<tb_safety_prot_eqp_purch_detail, tb_safety_prot_eqp_purch_detailId>;
  createTb_safety_prot_eqp_purch_detail!: Sequelize.HasManyCreateAssociationMixin<tb_safety_prot_eqp_purch_detail>;
  removeTb_safety_prot_eqp_purch_detail!: Sequelize.HasManyRemoveAssociationMixin<tb_safety_prot_eqp_purch_detail, tb_safety_prot_eqp_purch_detailId>;
  removeTb_safety_prot_eqp_purch_details!: Sequelize.HasManyRemoveAssociationsMixin<tb_safety_prot_eqp_purch_detail, tb_safety_prot_eqp_purch_detailId>;
  hasTb_safety_prot_eqp_purch_detail!: Sequelize.HasManyHasAssociationMixin<tb_safety_prot_eqp_purch_detail, tb_safety_prot_eqp_purch_detailId>;
  hasTb_safety_prot_eqp_purch_details!: Sequelize.HasManyHasAssociationsMixin<tb_safety_prot_eqp_purch_detail, tb_safety_prot_eqp_purch_detailId>;
  countTb_safety_prot_eqp_purch_details!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_safety_prot_eqp_purch_detail via updater_code
  updater_code_tb_safety_prot_eqp_purch_details!: tb_safety_prot_eqp_purch_detail[];
  getUpdater_code_tb_safety_prot_eqp_purch_details!: Sequelize.HasManyGetAssociationsMixin<tb_safety_prot_eqp_purch_detail>;
  setUpdater_code_tb_safety_prot_eqp_purch_details!: Sequelize.HasManySetAssociationsMixin<tb_safety_prot_eqp_purch_detail, tb_safety_prot_eqp_purch_detailId>;
  addUpdater_code_tb_safety_prot_eqp_purch_detail!: Sequelize.HasManyAddAssociationMixin<tb_safety_prot_eqp_purch_detail, tb_safety_prot_eqp_purch_detailId>;
  addUpdater_code_tb_safety_prot_eqp_purch_details!: Sequelize.HasManyAddAssociationsMixin<tb_safety_prot_eqp_purch_detail, tb_safety_prot_eqp_purch_detailId>;
  createUpdater_code_tb_safety_prot_eqp_purch_detail!: Sequelize.HasManyCreateAssociationMixin<tb_safety_prot_eqp_purch_detail>;
  removeUpdater_code_tb_safety_prot_eqp_purch_detail!: Sequelize.HasManyRemoveAssociationMixin<tb_safety_prot_eqp_purch_detail, tb_safety_prot_eqp_purch_detailId>;
  removeUpdater_code_tb_safety_prot_eqp_purch_details!: Sequelize.HasManyRemoveAssociationsMixin<tb_safety_prot_eqp_purch_detail, tb_safety_prot_eqp_purch_detailId>;
  hasUpdater_code_tb_safety_prot_eqp_purch_detail!: Sequelize.HasManyHasAssociationMixin<tb_safety_prot_eqp_purch_detail, tb_safety_prot_eqp_purch_detailId>;
  hasUpdater_code_tb_safety_prot_eqp_purch_details!: Sequelize.HasManyHasAssociationsMixin<tb_safety_prot_eqp_purch_detail, tb_safety_prot_eqp_purch_detailId>;
  countUpdater_code_tb_safety_prot_eqp_purch_details!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_shelter via register_code
  tb_shelters!: tb_shelter[];
  getTb_shelters!: Sequelize.HasManyGetAssociationsMixin<tb_shelter>;
  setTb_shelters!: Sequelize.HasManySetAssociationsMixin<tb_shelter, tb_shelterId>;
  addTb_shelter!: Sequelize.HasManyAddAssociationMixin<tb_shelter, tb_shelterId>;
  addTb_shelters!: Sequelize.HasManyAddAssociationsMixin<tb_shelter, tb_shelterId>;
  createTb_shelter!: Sequelize.HasManyCreateAssociationMixin<tb_shelter>;
  removeTb_shelter!: Sequelize.HasManyRemoveAssociationMixin<tb_shelter, tb_shelterId>;
  removeTb_shelters!: Sequelize.HasManyRemoveAssociationsMixin<tb_shelter, tb_shelterId>;
  hasTb_shelter!: Sequelize.HasManyHasAssociationMixin<tb_shelter, tb_shelterId>;
  hasTb_shelters!: Sequelize.HasManyHasAssociationsMixin<tb_shelter, tb_shelterId>;
  countTb_shelters!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_shelter via updater_code
  updater_code_tb_shelters!: tb_shelter[];
  getUpdater_code_tb_shelters!: Sequelize.HasManyGetAssociationsMixin<tb_shelter>;
  setUpdater_code_tb_shelters!: Sequelize.HasManySetAssociationsMixin<tb_shelter, tb_shelterId>;
  addUpdater_code_tb_shelter!: Sequelize.HasManyAddAssociationMixin<tb_shelter, tb_shelterId>;
  addUpdater_code_tb_shelters!: Sequelize.HasManyAddAssociationsMixin<tb_shelter, tb_shelterId>;
  createUpdater_code_tb_shelter!: Sequelize.HasManyCreateAssociationMixin<tb_shelter>;
  removeUpdater_code_tb_shelter!: Sequelize.HasManyRemoveAssociationMixin<tb_shelter, tb_shelterId>;
  removeUpdater_code_tb_shelters!: Sequelize.HasManyRemoveAssociationsMixin<tb_shelter, tb_shelterId>;
  hasUpdater_code_tb_shelter!: Sequelize.HasManyHasAssociationMixin<tb_shelter, tb_shelterId>;
  hasUpdater_code_tb_shelters!: Sequelize.HasManyHasAssociationsMixin<tb_shelter, tb_shelterId>;
  countUpdater_code_tb_shelters!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_siren via register_code
  tb_sirens!: tb_siren[];
  getTb_sirens!: Sequelize.HasManyGetAssociationsMixin<tb_siren>;
  setTb_sirens!: Sequelize.HasManySetAssociationsMixin<tb_siren, tb_sirenId>;
  addTb_siren!: Sequelize.HasManyAddAssociationMixin<tb_siren, tb_sirenId>;
  addTb_sirens!: Sequelize.HasManyAddAssociationsMixin<tb_siren, tb_sirenId>;
  createTb_siren!: Sequelize.HasManyCreateAssociationMixin<tb_siren>;
  removeTb_siren!: Sequelize.HasManyRemoveAssociationMixin<tb_siren, tb_sirenId>;
  removeTb_sirens!: Sequelize.HasManyRemoveAssociationsMixin<tb_siren, tb_sirenId>;
  hasTb_siren!: Sequelize.HasManyHasAssociationMixin<tb_siren, tb_sirenId>;
  hasTb_sirens!: Sequelize.HasManyHasAssociationsMixin<tb_siren, tb_sirenId>;
  countTb_sirens!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_siren via updater_code
  updater_code_tb_sirens!: tb_siren[];
  getUpdater_code_tb_sirens!: Sequelize.HasManyGetAssociationsMixin<tb_siren>;
  setUpdater_code_tb_sirens!: Sequelize.HasManySetAssociationsMixin<tb_siren, tb_sirenId>;
  addUpdater_code_tb_siren!: Sequelize.HasManyAddAssociationMixin<tb_siren, tb_sirenId>;
  addUpdater_code_tb_sirens!: Sequelize.HasManyAddAssociationsMixin<tb_siren, tb_sirenId>;
  createUpdater_code_tb_siren!: Sequelize.HasManyCreateAssociationMixin<tb_siren>;
  removeUpdater_code_tb_siren!: Sequelize.HasManyRemoveAssociationMixin<tb_siren, tb_sirenId>;
  removeUpdater_code_tb_sirens!: Sequelize.HasManyRemoveAssociationsMixin<tb_siren, tb_sirenId>;
  hasUpdater_code_tb_siren!: Sequelize.HasManyHasAssociationMixin<tb_siren, tb_sirenId>;
  hasUpdater_code_tb_sirens!: Sequelize.HasManyHasAssociationsMixin<tb_siren, tb_sirenId>;
  countUpdater_code_tb_sirens!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_siren_state via worker_code
  tb_siren_states!: tb_siren_state[];
  getTb_siren_states!: Sequelize.HasManyGetAssociationsMixin<tb_siren_state>;
  setTb_siren_states!: Sequelize.HasManySetAssociationsMixin<tb_siren_state, tb_siren_stateId>;
  addTb_siren_state!: Sequelize.HasManyAddAssociationMixin<tb_siren_state, tb_siren_stateId>;
  addTb_siren_states!: Sequelize.HasManyAddAssociationsMixin<tb_siren_state, tb_siren_stateId>;
  createTb_siren_state!: Sequelize.HasManyCreateAssociationMixin<tb_siren_state>;
  removeTb_siren_state!: Sequelize.HasManyRemoveAssociationMixin<tb_siren_state, tb_siren_stateId>;
  removeTb_siren_states!: Sequelize.HasManyRemoveAssociationsMixin<tb_siren_state, tb_siren_stateId>;
  hasTb_siren_state!: Sequelize.HasManyHasAssociationMixin<tb_siren_state, tb_siren_stateId>;
  hasTb_siren_states!: Sequelize.HasManyHasAssociationsMixin<tb_siren_state, tb_siren_stateId>;
  countTb_siren_states!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_site via register_code
  tb_sites!: tb_site[];
  getTb_sites!: Sequelize.HasManyGetAssociationsMixin<tb_site>;
  setTb_sites!: Sequelize.HasManySetAssociationsMixin<tb_site, tb_siteId>;
  addTb_site!: Sequelize.HasManyAddAssociationMixin<tb_site, tb_siteId>;
  addTb_sites!: Sequelize.HasManyAddAssociationsMixin<tb_site, tb_siteId>;
  createTb_site!: Sequelize.HasManyCreateAssociationMixin<tb_site>;
  removeTb_site!: Sequelize.HasManyRemoveAssociationMixin<tb_site, tb_siteId>;
  removeTb_sites!: Sequelize.HasManyRemoveAssociationsMixin<tb_site, tb_siteId>;
  hasTb_site!: Sequelize.HasManyHasAssociationMixin<tb_site, tb_siteId>;
  hasTb_sites!: Sequelize.HasManyHasAssociationsMixin<tb_site, tb_siteId>;
  countTb_sites!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_site via updater_code
  updater_code_tb_sites!: tb_site[];
  getUpdater_code_tb_sites!: Sequelize.HasManyGetAssociationsMixin<tb_site>;
  setUpdater_code_tb_sites!: Sequelize.HasManySetAssociationsMixin<tb_site, tb_siteId>;
  addUpdater_code_tb_site!: Sequelize.HasManyAddAssociationMixin<tb_site, tb_siteId>;
  addUpdater_code_tb_sites!: Sequelize.HasManyAddAssociationsMixin<tb_site, tb_siteId>;
  createUpdater_code_tb_site!: Sequelize.HasManyCreateAssociationMixin<tb_site>;
  removeUpdater_code_tb_site!: Sequelize.HasManyRemoveAssociationMixin<tb_site, tb_siteId>;
  removeUpdater_code_tb_sites!: Sequelize.HasManyRemoveAssociationsMixin<tb_site, tb_siteId>;
  hasUpdater_code_tb_site!: Sequelize.HasManyHasAssociationMixin<tb_site, tb_siteId>;
  hasUpdater_code_tb_sites!: Sequelize.HasManyHasAssociationsMixin<tb_site, tb_siteId>;
  countUpdater_code_tb_sites!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_site_build_major via register_code
  tb_site_build_majors!: tb_site_build_major[];
  getTb_site_build_majors!: Sequelize.HasManyGetAssociationsMixin<tb_site_build_major>;
  setTb_site_build_majors!: Sequelize.HasManySetAssociationsMixin<tb_site_build_major, tb_site_build_majorId>;
  addTb_site_build_major!: Sequelize.HasManyAddAssociationMixin<tb_site_build_major, tb_site_build_majorId>;
  addTb_site_build_majors!: Sequelize.HasManyAddAssociationsMixin<tb_site_build_major, tb_site_build_majorId>;
  createTb_site_build_major!: Sequelize.HasManyCreateAssociationMixin<tb_site_build_major>;
  removeTb_site_build_major!: Sequelize.HasManyRemoveAssociationMixin<tb_site_build_major, tb_site_build_majorId>;
  removeTb_site_build_majors!: Sequelize.HasManyRemoveAssociationsMixin<tb_site_build_major, tb_site_build_majorId>;
  hasTb_site_build_major!: Sequelize.HasManyHasAssociationMixin<tb_site_build_major, tb_site_build_majorId>;
  hasTb_site_build_majors!: Sequelize.HasManyHasAssociationsMixin<tb_site_build_major, tb_site_build_majorId>;
  countTb_site_build_majors!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_site_build_major via updater_code
  updater_code_tb_site_build_majors!: tb_site_build_major[];
  getUpdater_code_tb_site_build_majors!: Sequelize.HasManyGetAssociationsMixin<tb_site_build_major>;
  setUpdater_code_tb_site_build_majors!: Sequelize.HasManySetAssociationsMixin<tb_site_build_major, tb_site_build_majorId>;
  addUpdater_code_tb_site_build_major!: Sequelize.HasManyAddAssociationMixin<tb_site_build_major, tb_site_build_majorId>;
  addUpdater_code_tb_site_build_majors!: Sequelize.HasManyAddAssociationsMixin<tb_site_build_major, tb_site_build_majorId>;
  createUpdater_code_tb_site_build_major!: Sequelize.HasManyCreateAssociationMixin<tb_site_build_major>;
  removeUpdater_code_tb_site_build_major!: Sequelize.HasManyRemoveAssociationMixin<tb_site_build_major, tb_site_build_majorId>;
  removeUpdater_code_tb_site_build_majors!: Sequelize.HasManyRemoveAssociationsMixin<tb_site_build_major, tb_site_build_majorId>;
  hasUpdater_code_tb_site_build_major!: Sequelize.HasManyHasAssociationMixin<tb_site_build_major, tb_site_build_majorId>;
  hasUpdater_code_tb_site_build_majors!: Sequelize.HasManyHasAssociationsMixin<tb_site_build_major, tb_site_build_majorId>;
  countUpdater_code_tb_site_build_majors!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_site_build_middle via register_code
  tb_site_build_middles!: tb_site_build_middle[];
  getTb_site_build_middles!: Sequelize.HasManyGetAssociationsMixin<tb_site_build_middle>;
  setTb_site_build_middles!: Sequelize.HasManySetAssociationsMixin<tb_site_build_middle, tb_site_build_middleId>;
  addTb_site_build_middle!: Sequelize.HasManyAddAssociationMixin<tb_site_build_middle, tb_site_build_middleId>;
  addTb_site_build_middles!: Sequelize.HasManyAddAssociationsMixin<tb_site_build_middle, tb_site_build_middleId>;
  createTb_site_build_middle!: Sequelize.HasManyCreateAssociationMixin<tb_site_build_middle>;
  removeTb_site_build_middle!: Sequelize.HasManyRemoveAssociationMixin<tb_site_build_middle, tb_site_build_middleId>;
  removeTb_site_build_middles!: Sequelize.HasManyRemoveAssociationsMixin<tb_site_build_middle, tb_site_build_middleId>;
  hasTb_site_build_middle!: Sequelize.HasManyHasAssociationMixin<tb_site_build_middle, tb_site_build_middleId>;
  hasTb_site_build_middles!: Sequelize.HasManyHasAssociationsMixin<tb_site_build_middle, tb_site_build_middleId>;
  countTb_site_build_middles!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_site_build_middle via updater_code
  updater_code_tb_site_build_middles!: tb_site_build_middle[];
  getUpdater_code_tb_site_build_middles!: Sequelize.HasManyGetAssociationsMixin<tb_site_build_middle>;
  setUpdater_code_tb_site_build_middles!: Sequelize.HasManySetAssociationsMixin<tb_site_build_middle, tb_site_build_middleId>;
  addUpdater_code_tb_site_build_middle!: Sequelize.HasManyAddAssociationMixin<tb_site_build_middle, tb_site_build_middleId>;
  addUpdater_code_tb_site_build_middles!: Sequelize.HasManyAddAssociationsMixin<tb_site_build_middle, tb_site_build_middleId>;
  createUpdater_code_tb_site_build_middle!: Sequelize.HasManyCreateAssociationMixin<tb_site_build_middle>;
  removeUpdater_code_tb_site_build_middle!: Sequelize.HasManyRemoveAssociationMixin<tb_site_build_middle, tb_site_build_middleId>;
  removeUpdater_code_tb_site_build_middles!: Sequelize.HasManyRemoveAssociationsMixin<tb_site_build_middle, tb_site_build_middleId>;
  hasUpdater_code_tb_site_build_middle!: Sequelize.HasManyHasAssociationMixin<tb_site_build_middle, tb_site_build_middleId>;
  hasUpdater_code_tb_site_build_middles!: Sequelize.HasManyHasAssociationsMixin<tb_site_build_middle, tb_site_build_middleId>;
  countUpdater_code_tb_site_build_middles!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_site_build_sub via register_code
  tb_site_build_subs!: tb_site_build_sub[];
  getTb_site_build_subs!: Sequelize.HasManyGetAssociationsMixin<tb_site_build_sub>;
  setTb_site_build_subs!: Sequelize.HasManySetAssociationsMixin<tb_site_build_sub, tb_site_build_subId>;
  addTb_site_build_sub!: Sequelize.HasManyAddAssociationMixin<tb_site_build_sub, tb_site_build_subId>;
  addTb_site_build_subs!: Sequelize.HasManyAddAssociationsMixin<tb_site_build_sub, tb_site_build_subId>;
  createTb_site_build_sub!: Sequelize.HasManyCreateAssociationMixin<tb_site_build_sub>;
  removeTb_site_build_sub!: Sequelize.HasManyRemoveAssociationMixin<tb_site_build_sub, tb_site_build_subId>;
  removeTb_site_build_subs!: Sequelize.HasManyRemoveAssociationsMixin<tb_site_build_sub, tb_site_build_subId>;
  hasTb_site_build_sub!: Sequelize.HasManyHasAssociationMixin<tb_site_build_sub, tb_site_build_subId>;
  hasTb_site_build_subs!: Sequelize.HasManyHasAssociationsMixin<tb_site_build_sub, tb_site_build_subId>;
  countTb_site_build_subs!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_site_build_sub via updater_code
  updater_code_tb_site_build_subs!: tb_site_build_sub[];
  getUpdater_code_tb_site_build_subs!: Sequelize.HasManyGetAssociationsMixin<tb_site_build_sub>;
  setUpdater_code_tb_site_build_subs!: Sequelize.HasManySetAssociationsMixin<tb_site_build_sub, tb_site_build_subId>;
  addUpdater_code_tb_site_build_sub!: Sequelize.HasManyAddAssociationMixin<tb_site_build_sub, tb_site_build_subId>;
  addUpdater_code_tb_site_build_subs!: Sequelize.HasManyAddAssociationsMixin<tb_site_build_sub, tb_site_build_subId>;
  createUpdater_code_tb_site_build_sub!: Sequelize.HasManyCreateAssociationMixin<tb_site_build_sub>;
  removeUpdater_code_tb_site_build_sub!: Sequelize.HasManyRemoveAssociationMixin<tb_site_build_sub, tb_site_build_subId>;
  removeUpdater_code_tb_site_build_subs!: Sequelize.HasManyRemoveAssociationsMixin<tb_site_build_sub, tb_site_build_subId>;
  hasUpdater_code_tb_site_build_sub!: Sequelize.HasManyHasAssociationMixin<tb_site_build_sub, tb_site_build_subId>;
  hasUpdater_code_tb_site_build_subs!: Sequelize.HasManyHasAssociationsMixin<tb_site_build_sub, tb_site_build_subId>;
  countUpdater_code_tb_site_build_subs!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_site_config via register_code
  tb_site_configs!: tb_site_config[];
  getTb_site_configs!: Sequelize.HasManyGetAssociationsMixin<tb_site_config>;
  setTb_site_configs!: Sequelize.HasManySetAssociationsMixin<tb_site_config, tb_site_configId>;
  addTb_site_config!: Sequelize.HasManyAddAssociationMixin<tb_site_config, tb_site_configId>;
  addTb_site_configs!: Sequelize.HasManyAddAssociationsMixin<tb_site_config, tb_site_configId>;
  createTb_site_config!: Sequelize.HasManyCreateAssociationMixin<tb_site_config>;
  removeTb_site_config!: Sequelize.HasManyRemoveAssociationMixin<tb_site_config, tb_site_configId>;
  removeTb_site_configs!: Sequelize.HasManyRemoveAssociationsMixin<tb_site_config, tb_site_configId>;
  hasTb_site_config!: Sequelize.HasManyHasAssociationMixin<tb_site_config, tb_site_configId>;
  hasTb_site_configs!: Sequelize.HasManyHasAssociationsMixin<tb_site_config, tb_site_configId>;
  countTb_site_configs!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_site_config via updater_code
  updater_code_tb_site_configs!: tb_site_config[];
  getUpdater_code_tb_site_configs!: Sequelize.HasManyGetAssociationsMixin<tb_site_config>;
  setUpdater_code_tb_site_configs!: Sequelize.HasManySetAssociationsMixin<tb_site_config, tb_site_configId>;
  addUpdater_code_tb_site_config!: Sequelize.HasManyAddAssociationMixin<tb_site_config, tb_site_configId>;
  addUpdater_code_tb_site_configs!: Sequelize.HasManyAddAssociationsMixin<tb_site_config, tb_site_configId>;
  createUpdater_code_tb_site_config!: Sequelize.HasManyCreateAssociationMixin<tb_site_config>;
  removeUpdater_code_tb_site_config!: Sequelize.HasManyRemoveAssociationMixin<tb_site_config, tb_site_configId>;
  removeUpdater_code_tb_site_configs!: Sequelize.HasManyRemoveAssociationsMixin<tb_site_config, tb_site_configId>;
  hasUpdater_code_tb_site_config!: Sequelize.HasManyHasAssociationMixin<tb_site_config, tb_site_configId>;
  hasUpdater_code_tb_site_configs!: Sequelize.HasManyHasAssociationsMixin<tb_site_config, tb_site_configId>;
  countUpdater_code_tb_site_configs!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_site_drawing via register_code
  tb_site_drawings!: tb_site_drawing[];
  getTb_site_drawings!: Sequelize.HasManyGetAssociationsMixin<tb_site_drawing>;
  setTb_site_drawings!: Sequelize.HasManySetAssociationsMixin<tb_site_drawing, tb_site_drawingId>;
  addTb_site_drawing!: Sequelize.HasManyAddAssociationMixin<tb_site_drawing, tb_site_drawingId>;
  addTb_site_drawings!: Sequelize.HasManyAddAssociationsMixin<tb_site_drawing, tb_site_drawingId>;
  createTb_site_drawing!: Sequelize.HasManyCreateAssociationMixin<tb_site_drawing>;
  removeTb_site_drawing!: Sequelize.HasManyRemoveAssociationMixin<tb_site_drawing, tb_site_drawingId>;
  removeTb_site_drawings!: Sequelize.HasManyRemoveAssociationsMixin<tb_site_drawing, tb_site_drawingId>;
  hasTb_site_drawing!: Sequelize.HasManyHasAssociationMixin<tb_site_drawing, tb_site_drawingId>;
  hasTb_site_drawings!: Sequelize.HasManyHasAssociationsMixin<tb_site_drawing, tb_site_drawingId>;
  countTb_site_drawings!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_site_drawing via updater_code
  updater_code_tb_site_drawings!: tb_site_drawing[];
  getUpdater_code_tb_site_drawings!: Sequelize.HasManyGetAssociationsMixin<tb_site_drawing>;
  setUpdater_code_tb_site_drawings!: Sequelize.HasManySetAssociationsMixin<tb_site_drawing, tb_site_drawingId>;
  addUpdater_code_tb_site_drawing!: Sequelize.HasManyAddAssociationMixin<tb_site_drawing, tb_site_drawingId>;
  addUpdater_code_tb_site_drawings!: Sequelize.HasManyAddAssociationsMixin<tb_site_drawing, tb_site_drawingId>;
  createUpdater_code_tb_site_drawing!: Sequelize.HasManyCreateAssociationMixin<tb_site_drawing>;
  removeUpdater_code_tb_site_drawing!: Sequelize.HasManyRemoveAssociationMixin<tb_site_drawing, tb_site_drawingId>;
  removeUpdater_code_tb_site_drawings!: Sequelize.HasManyRemoveAssociationsMixin<tb_site_drawing, tb_site_drawingId>;
  hasUpdater_code_tb_site_drawing!: Sequelize.HasManyHasAssociationMixin<tb_site_drawing, tb_site_drawingId>;
  hasUpdater_code_tb_site_drawings!: Sequelize.HasManyHasAssociationsMixin<tb_site_drawing, tb_site_drawingId>;
  countUpdater_code_tb_site_drawings!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_site_ecn via register_code
  tb_site_ecns!: tb_site_ecn[];
  getTb_site_ecns!: Sequelize.HasManyGetAssociationsMixin<tb_site_ecn>;
  setTb_site_ecns!: Sequelize.HasManySetAssociationsMixin<tb_site_ecn, tb_site_ecnId>;
  addTb_site_ecn!: Sequelize.HasManyAddAssociationMixin<tb_site_ecn, tb_site_ecnId>;
  addTb_site_ecns!: Sequelize.HasManyAddAssociationsMixin<tb_site_ecn, tb_site_ecnId>;
  createTb_site_ecn!: Sequelize.HasManyCreateAssociationMixin<tb_site_ecn>;
  removeTb_site_ecn!: Sequelize.HasManyRemoveAssociationMixin<tb_site_ecn, tb_site_ecnId>;
  removeTb_site_ecns!: Sequelize.HasManyRemoveAssociationsMixin<tb_site_ecn, tb_site_ecnId>;
  hasTb_site_ecn!: Sequelize.HasManyHasAssociationMixin<tb_site_ecn, tb_site_ecnId>;
  hasTb_site_ecns!: Sequelize.HasManyHasAssociationsMixin<tb_site_ecn, tb_site_ecnId>;
  countTb_site_ecns!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_site_ecn via updater_code
  updater_code_tb_site_ecns!: tb_site_ecn[];
  getUpdater_code_tb_site_ecns!: Sequelize.HasManyGetAssociationsMixin<tb_site_ecn>;
  setUpdater_code_tb_site_ecns!: Sequelize.HasManySetAssociationsMixin<tb_site_ecn, tb_site_ecnId>;
  addUpdater_code_tb_site_ecn!: Sequelize.HasManyAddAssociationMixin<tb_site_ecn, tb_site_ecnId>;
  addUpdater_code_tb_site_ecns!: Sequelize.HasManyAddAssociationsMixin<tb_site_ecn, tb_site_ecnId>;
  createUpdater_code_tb_site_ecn!: Sequelize.HasManyCreateAssociationMixin<tb_site_ecn>;
  removeUpdater_code_tb_site_ecn!: Sequelize.HasManyRemoveAssociationMixin<tb_site_ecn, tb_site_ecnId>;
  removeUpdater_code_tb_site_ecns!: Sequelize.HasManyRemoveAssociationsMixin<tb_site_ecn, tb_site_ecnId>;
  hasUpdater_code_tb_site_ecn!: Sequelize.HasManyHasAssociationMixin<tb_site_ecn, tb_site_ecnId>;
  hasUpdater_code_tb_site_ecns!: Sequelize.HasManyHasAssociationsMixin<tb_site_ecn, tb_site_ecnId>;
  countUpdater_code_tb_site_ecns!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_site_sch via register_code
  tb_site_sches!: tb_site_sch[];
  getTb_site_sches!: Sequelize.HasManyGetAssociationsMixin<tb_site_sch>;
  setTb_site_sches!: Sequelize.HasManySetAssociationsMixin<tb_site_sch, tb_site_schId>;
  addTb_site_sch!: Sequelize.HasManyAddAssociationMixin<tb_site_sch, tb_site_schId>;
  addTb_site_sches!: Sequelize.HasManyAddAssociationsMixin<tb_site_sch, tb_site_schId>;
  createTb_site_sch!: Sequelize.HasManyCreateAssociationMixin<tb_site_sch>;
  removeTb_site_sch!: Sequelize.HasManyRemoveAssociationMixin<tb_site_sch, tb_site_schId>;
  removeTb_site_sches!: Sequelize.HasManyRemoveAssociationsMixin<tb_site_sch, tb_site_schId>;
  hasTb_site_sch!: Sequelize.HasManyHasAssociationMixin<tb_site_sch, tb_site_schId>;
  hasTb_site_sches!: Sequelize.HasManyHasAssociationsMixin<tb_site_sch, tb_site_schId>;
  countTb_site_sches!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_site_sch via updater_code
  updater_code_tb_site_sches!: tb_site_sch[];
  getUpdater_code_tb_site_sches!: Sequelize.HasManyGetAssociationsMixin<tb_site_sch>;
  setUpdater_code_tb_site_sches!: Sequelize.HasManySetAssociationsMixin<tb_site_sch, tb_site_schId>;
  addUpdater_code_tb_site_sch!: Sequelize.HasManyAddAssociationMixin<tb_site_sch, tb_site_schId>;
  addUpdater_code_tb_site_sches!: Sequelize.HasManyAddAssociationsMixin<tb_site_sch, tb_site_schId>;
  createUpdater_code_tb_site_sch!: Sequelize.HasManyCreateAssociationMixin<tb_site_sch>;
  removeUpdater_code_tb_site_sch!: Sequelize.HasManyRemoveAssociationMixin<tb_site_sch, tb_site_schId>;
  removeUpdater_code_tb_site_sches!: Sequelize.HasManyRemoveAssociationsMixin<tb_site_sch, tb_site_schId>;
  hasUpdater_code_tb_site_sch!: Sequelize.HasManyHasAssociationMixin<tb_site_sch, tb_site_schId>;
  hasUpdater_code_tb_site_sches!: Sequelize.HasManyHasAssociationsMixin<tb_site_sch, tb_site_schId>;
  countUpdater_code_tb_site_sches!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_site_sch_board via register_code
  tb_site_sch_boards!: tb_site_sch_board[];
  getTb_site_sch_boards!: Sequelize.HasManyGetAssociationsMixin<tb_site_sch_board>;
  setTb_site_sch_boards!: Sequelize.HasManySetAssociationsMixin<tb_site_sch_board, tb_site_sch_boardId>;
  addTb_site_sch_board!: Sequelize.HasManyAddAssociationMixin<tb_site_sch_board, tb_site_sch_boardId>;
  addTb_site_sch_boards!: Sequelize.HasManyAddAssociationsMixin<tb_site_sch_board, tb_site_sch_boardId>;
  createTb_site_sch_board!: Sequelize.HasManyCreateAssociationMixin<tb_site_sch_board>;
  removeTb_site_sch_board!: Sequelize.HasManyRemoveAssociationMixin<tb_site_sch_board, tb_site_sch_boardId>;
  removeTb_site_sch_boards!: Sequelize.HasManyRemoveAssociationsMixin<tb_site_sch_board, tb_site_sch_boardId>;
  hasTb_site_sch_board!: Sequelize.HasManyHasAssociationMixin<tb_site_sch_board, tb_site_sch_boardId>;
  hasTb_site_sch_boards!: Sequelize.HasManyHasAssociationsMixin<tb_site_sch_board, tb_site_sch_boardId>;
  countTb_site_sch_boards!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_site_sch_board via updater_code
  updater_code_tb_site_sch_boards!: tb_site_sch_board[];
  getUpdater_code_tb_site_sch_boards!: Sequelize.HasManyGetAssociationsMixin<tb_site_sch_board>;
  setUpdater_code_tb_site_sch_boards!: Sequelize.HasManySetAssociationsMixin<tb_site_sch_board, tb_site_sch_boardId>;
  addUpdater_code_tb_site_sch_board!: Sequelize.HasManyAddAssociationMixin<tb_site_sch_board, tb_site_sch_boardId>;
  addUpdater_code_tb_site_sch_boards!: Sequelize.HasManyAddAssociationsMixin<tb_site_sch_board, tb_site_sch_boardId>;
  createUpdater_code_tb_site_sch_board!: Sequelize.HasManyCreateAssociationMixin<tb_site_sch_board>;
  removeUpdater_code_tb_site_sch_board!: Sequelize.HasManyRemoveAssociationMixin<tb_site_sch_board, tb_site_sch_boardId>;
  removeUpdater_code_tb_site_sch_boards!: Sequelize.HasManyRemoveAssociationsMixin<tb_site_sch_board, tb_site_sch_boardId>;
  hasUpdater_code_tb_site_sch_board!: Sequelize.HasManyHasAssociationMixin<tb_site_sch_board, tb_site_sch_boardId>;
  hasUpdater_code_tb_site_sch_boards!: Sequelize.HasManyHasAssociationsMixin<tb_site_sch_board, tb_site_sch_boardId>;
  countUpdater_code_tb_site_sch_boards!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_site_sch_work via register_code
  tb_site_sch_works!: tb_site_sch_work[];
  getTb_site_sch_works!: Sequelize.HasManyGetAssociationsMixin<tb_site_sch_work>;
  setTb_site_sch_works!: Sequelize.HasManySetAssociationsMixin<tb_site_sch_work, tb_site_sch_workId>;
  addTb_site_sch_work!: Sequelize.HasManyAddAssociationMixin<tb_site_sch_work, tb_site_sch_workId>;
  addTb_site_sch_works!: Sequelize.HasManyAddAssociationsMixin<tb_site_sch_work, tb_site_sch_workId>;
  createTb_site_sch_work!: Sequelize.HasManyCreateAssociationMixin<tb_site_sch_work>;
  removeTb_site_sch_work!: Sequelize.HasManyRemoveAssociationMixin<tb_site_sch_work, tb_site_sch_workId>;
  removeTb_site_sch_works!: Sequelize.HasManyRemoveAssociationsMixin<tb_site_sch_work, tb_site_sch_workId>;
  hasTb_site_sch_work!: Sequelize.HasManyHasAssociationMixin<tb_site_sch_work, tb_site_sch_workId>;
  hasTb_site_sch_works!: Sequelize.HasManyHasAssociationsMixin<tb_site_sch_work, tb_site_sch_workId>;
  countTb_site_sch_works!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_site_sch_work via updater_code
  updater_code_tb_site_sch_works!: tb_site_sch_work[];
  getUpdater_code_tb_site_sch_works!: Sequelize.HasManyGetAssociationsMixin<tb_site_sch_work>;
  setUpdater_code_tb_site_sch_works!: Sequelize.HasManySetAssociationsMixin<tb_site_sch_work, tb_site_sch_workId>;
  addUpdater_code_tb_site_sch_work!: Sequelize.HasManyAddAssociationMixin<tb_site_sch_work, tb_site_sch_workId>;
  addUpdater_code_tb_site_sch_works!: Sequelize.HasManyAddAssociationsMixin<tb_site_sch_work, tb_site_sch_workId>;
  createUpdater_code_tb_site_sch_work!: Sequelize.HasManyCreateAssociationMixin<tb_site_sch_work>;
  removeUpdater_code_tb_site_sch_work!: Sequelize.HasManyRemoveAssociationMixin<tb_site_sch_work, tb_site_sch_workId>;
  removeUpdater_code_tb_site_sch_works!: Sequelize.HasManyRemoveAssociationsMixin<tb_site_sch_work, tb_site_sch_workId>;
  hasUpdater_code_tb_site_sch_work!: Sequelize.HasManyHasAssociationMixin<tb_site_sch_work, tb_site_sch_workId>;
  hasUpdater_code_tb_site_sch_works!: Sequelize.HasManyHasAssociationsMixin<tb_site_sch_work, tb_site_sch_workId>;
  countUpdater_code_tb_site_sch_works!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_site_sch_work_major via register_code
  tb_site_sch_work_majors!: tb_site_sch_work_major[];
  getTb_site_sch_work_majors!: Sequelize.HasManyGetAssociationsMixin<tb_site_sch_work_major>;
  setTb_site_sch_work_majors!: Sequelize.HasManySetAssociationsMixin<tb_site_sch_work_major, tb_site_sch_work_majorId>;
  addTb_site_sch_work_major!: Sequelize.HasManyAddAssociationMixin<tb_site_sch_work_major, tb_site_sch_work_majorId>;
  addTb_site_sch_work_majors!: Sequelize.HasManyAddAssociationsMixin<tb_site_sch_work_major, tb_site_sch_work_majorId>;
  createTb_site_sch_work_major!: Sequelize.HasManyCreateAssociationMixin<tb_site_sch_work_major>;
  removeTb_site_sch_work_major!: Sequelize.HasManyRemoveAssociationMixin<tb_site_sch_work_major, tb_site_sch_work_majorId>;
  removeTb_site_sch_work_majors!: Sequelize.HasManyRemoveAssociationsMixin<tb_site_sch_work_major, tb_site_sch_work_majorId>;
  hasTb_site_sch_work_major!: Sequelize.HasManyHasAssociationMixin<tb_site_sch_work_major, tb_site_sch_work_majorId>;
  hasTb_site_sch_work_majors!: Sequelize.HasManyHasAssociationsMixin<tb_site_sch_work_major, tb_site_sch_work_majorId>;
  countTb_site_sch_work_majors!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_site_sch_work_major via updater_code
  updater_code_tb_site_sch_work_majors!: tb_site_sch_work_major[];
  getUpdater_code_tb_site_sch_work_majors!: Sequelize.HasManyGetAssociationsMixin<tb_site_sch_work_major>;
  setUpdater_code_tb_site_sch_work_majors!: Sequelize.HasManySetAssociationsMixin<tb_site_sch_work_major, tb_site_sch_work_majorId>;
  addUpdater_code_tb_site_sch_work_major!: Sequelize.HasManyAddAssociationMixin<tb_site_sch_work_major, tb_site_sch_work_majorId>;
  addUpdater_code_tb_site_sch_work_majors!: Sequelize.HasManyAddAssociationsMixin<tb_site_sch_work_major, tb_site_sch_work_majorId>;
  createUpdater_code_tb_site_sch_work_major!: Sequelize.HasManyCreateAssociationMixin<tb_site_sch_work_major>;
  removeUpdater_code_tb_site_sch_work_major!: Sequelize.HasManyRemoveAssociationMixin<tb_site_sch_work_major, tb_site_sch_work_majorId>;
  removeUpdater_code_tb_site_sch_work_majors!: Sequelize.HasManyRemoveAssociationsMixin<tb_site_sch_work_major, tb_site_sch_work_majorId>;
  hasUpdater_code_tb_site_sch_work_major!: Sequelize.HasManyHasAssociationMixin<tb_site_sch_work_major, tb_site_sch_work_majorId>;
  hasUpdater_code_tb_site_sch_work_majors!: Sequelize.HasManyHasAssociationsMixin<tb_site_sch_work_major, tb_site_sch_work_majorId>;
  countUpdater_code_tb_site_sch_work_majors!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_site_sch_work_middle via register_code
  tb_site_sch_work_middles!: tb_site_sch_work_middle[];
  getTb_site_sch_work_middles!: Sequelize.HasManyGetAssociationsMixin<tb_site_sch_work_middle>;
  setTb_site_sch_work_middles!: Sequelize.HasManySetAssociationsMixin<tb_site_sch_work_middle, tb_site_sch_work_middleId>;
  addTb_site_sch_work_middle!: Sequelize.HasManyAddAssociationMixin<tb_site_sch_work_middle, tb_site_sch_work_middleId>;
  addTb_site_sch_work_middles!: Sequelize.HasManyAddAssociationsMixin<tb_site_sch_work_middle, tb_site_sch_work_middleId>;
  createTb_site_sch_work_middle!: Sequelize.HasManyCreateAssociationMixin<tb_site_sch_work_middle>;
  removeTb_site_sch_work_middle!: Sequelize.HasManyRemoveAssociationMixin<tb_site_sch_work_middle, tb_site_sch_work_middleId>;
  removeTb_site_sch_work_middles!: Sequelize.HasManyRemoveAssociationsMixin<tb_site_sch_work_middle, tb_site_sch_work_middleId>;
  hasTb_site_sch_work_middle!: Sequelize.HasManyHasAssociationMixin<tb_site_sch_work_middle, tb_site_sch_work_middleId>;
  hasTb_site_sch_work_middles!: Sequelize.HasManyHasAssociationsMixin<tb_site_sch_work_middle, tb_site_sch_work_middleId>;
  countTb_site_sch_work_middles!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_site_sch_work_middle via updater_code
  updater_code_tb_site_sch_work_middles!: tb_site_sch_work_middle[];
  getUpdater_code_tb_site_sch_work_middles!: Sequelize.HasManyGetAssociationsMixin<tb_site_sch_work_middle>;
  setUpdater_code_tb_site_sch_work_middles!: Sequelize.HasManySetAssociationsMixin<tb_site_sch_work_middle, tb_site_sch_work_middleId>;
  addUpdater_code_tb_site_sch_work_middle!: Sequelize.HasManyAddAssociationMixin<tb_site_sch_work_middle, tb_site_sch_work_middleId>;
  addUpdater_code_tb_site_sch_work_middles!: Sequelize.HasManyAddAssociationsMixin<tb_site_sch_work_middle, tb_site_sch_work_middleId>;
  createUpdater_code_tb_site_sch_work_middle!: Sequelize.HasManyCreateAssociationMixin<tb_site_sch_work_middle>;
  removeUpdater_code_tb_site_sch_work_middle!: Sequelize.HasManyRemoveAssociationMixin<tb_site_sch_work_middle, tb_site_sch_work_middleId>;
  removeUpdater_code_tb_site_sch_work_middles!: Sequelize.HasManyRemoveAssociationsMixin<tb_site_sch_work_middle, tb_site_sch_work_middleId>;
  hasUpdater_code_tb_site_sch_work_middle!: Sequelize.HasManyHasAssociationMixin<tb_site_sch_work_middle, tb_site_sch_work_middleId>;
  hasUpdater_code_tb_site_sch_work_middles!: Sequelize.HasManyHasAssociationsMixin<tb_site_sch_work_middle, tb_site_sch_work_middleId>;
  countUpdater_code_tb_site_sch_work_middles!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_site_work_area via register_code
  tb_site_work_areas!: tb_site_work_area[];
  getTb_site_work_areas!: Sequelize.HasManyGetAssociationsMixin<tb_site_work_area>;
  setTb_site_work_areas!: Sequelize.HasManySetAssociationsMixin<tb_site_work_area, tb_site_work_areaId>;
  addTb_site_work_area!: Sequelize.HasManyAddAssociationMixin<tb_site_work_area, tb_site_work_areaId>;
  addTb_site_work_areas!: Sequelize.HasManyAddAssociationsMixin<tb_site_work_area, tb_site_work_areaId>;
  createTb_site_work_area!: Sequelize.HasManyCreateAssociationMixin<tb_site_work_area>;
  removeTb_site_work_area!: Sequelize.HasManyRemoveAssociationMixin<tb_site_work_area, tb_site_work_areaId>;
  removeTb_site_work_areas!: Sequelize.HasManyRemoveAssociationsMixin<tb_site_work_area, tb_site_work_areaId>;
  hasTb_site_work_area!: Sequelize.HasManyHasAssociationMixin<tb_site_work_area, tb_site_work_areaId>;
  hasTb_site_work_areas!: Sequelize.HasManyHasAssociationsMixin<tb_site_work_area, tb_site_work_areaId>;
  countTb_site_work_areas!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_site_work_area via updater_code
  updater_code_tb_site_work_areas!: tb_site_work_area[];
  getUpdater_code_tb_site_work_areas!: Sequelize.HasManyGetAssociationsMixin<tb_site_work_area>;
  setUpdater_code_tb_site_work_areas!: Sequelize.HasManySetAssociationsMixin<tb_site_work_area, tb_site_work_areaId>;
  addUpdater_code_tb_site_work_area!: Sequelize.HasManyAddAssociationMixin<tb_site_work_area, tb_site_work_areaId>;
  addUpdater_code_tb_site_work_areas!: Sequelize.HasManyAddAssociationsMixin<tb_site_work_area, tb_site_work_areaId>;
  createUpdater_code_tb_site_work_area!: Sequelize.HasManyCreateAssociationMixin<tb_site_work_area>;
  removeUpdater_code_tb_site_work_area!: Sequelize.HasManyRemoveAssociationMixin<tb_site_work_area, tb_site_work_areaId>;
  removeUpdater_code_tb_site_work_areas!: Sequelize.HasManyRemoveAssociationsMixin<tb_site_work_area, tb_site_work_areaId>;
  hasUpdater_code_tb_site_work_area!: Sequelize.HasManyHasAssociationMixin<tb_site_work_area, tb_site_work_areaId>;
  hasUpdater_code_tb_site_work_areas!: Sequelize.HasManyHasAssociationsMixin<tb_site_work_area, tb_site_work_areaId>;
  countUpdater_code_tb_site_work_areas!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_site_work_area2 via register_code
  tb_site_work_area2s!: tb_site_work_area2[];
  getTb_site_work_area2s!: Sequelize.HasManyGetAssociationsMixin<tb_site_work_area2>;
  setTb_site_work_area2s!: Sequelize.HasManySetAssociationsMixin<tb_site_work_area2, tb_site_work_area2Id>;
  addTb_site_work_area2!: Sequelize.HasManyAddAssociationMixin<tb_site_work_area2, tb_site_work_area2Id>;
  addTb_site_work_area2s!: Sequelize.HasManyAddAssociationsMixin<tb_site_work_area2, tb_site_work_area2Id>;
  createTb_site_work_area2!: Sequelize.HasManyCreateAssociationMixin<tb_site_work_area2>;
  removeTb_site_work_area2!: Sequelize.HasManyRemoveAssociationMixin<tb_site_work_area2, tb_site_work_area2Id>;
  removeTb_site_work_area2s!: Sequelize.HasManyRemoveAssociationsMixin<tb_site_work_area2, tb_site_work_area2Id>;
  hasTb_site_work_area2!: Sequelize.HasManyHasAssociationMixin<tb_site_work_area2, tb_site_work_area2Id>;
  hasTb_site_work_area2s!: Sequelize.HasManyHasAssociationsMixin<tb_site_work_area2, tb_site_work_area2Id>;
  countTb_site_work_area2s!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_site_work_area2 via updater_code
  updater_code_tb_site_work_area2s!: tb_site_work_area2[];
  getUpdater_code_tb_site_work_area2s!: Sequelize.HasManyGetAssociationsMixin<tb_site_work_area2>;
  setUpdater_code_tb_site_work_area2s!: Sequelize.HasManySetAssociationsMixin<tb_site_work_area2, tb_site_work_area2Id>;
  addUpdater_code_tb_site_work_area2!: Sequelize.HasManyAddAssociationMixin<tb_site_work_area2, tb_site_work_area2Id>;
  addUpdater_code_tb_site_work_area2s!: Sequelize.HasManyAddAssociationsMixin<tb_site_work_area2, tb_site_work_area2Id>;
  createUpdater_code_tb_site_work_area2!: Sequelize.HasManyCreateAssociationMixin<tb_site_work_area2>;
  removeUpdater_code_tb_site_work_area2!: Sequelize.HasManyRemoveAssociationMixin<tb_site_work_area2, tb_site_work_area2Id>;
  removeUpdater_code_tb_site_work_area2s!: Sequelize.HasManyRemoveAssociationsMixin<tb_site_work_area2, tb_site_work_area2Id>;
  hasUpdater_code_tb_site_work_area2!: Sequelize.HasManyHasAssociationMixin<tb_site_work_area2, tb_site_work_area2Id>;
  hasUpdater_code_tb_site_work_area2s!: Sequelize.HasManyHasAssociationsMixin<tb_site_work_area2, tb_site_work_area2Id>;
  countUpdater_code_tb_site_work_area2s!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_tbm via register_code
  tb_tbms!: tb_tbm[];
  getTb_tbms!: Sequelize.HasManyGetAssociationsMixin<tb_tbm>;
  setTb_tbms!: Sequelize.HasManySetAssociationsMixin<tb_tbm, tb_tbmId>;
  addTb_tbm!: Sequelize.HasManyAddAssociationMixin<tb_tbm, tb_tbmId>;
  addTb_tbms!: Sequelize.HasManyAddAssociationsMixin<tb_tbm, tb_tbmId>;
  createTb_tbm!: Sequelize.HasManyCreateAssociationMixin<tb_tbm>;
  removeTb_tbm!: Sequelize.HasManyRemoveAssociationMixin<tb_tbm, tb_tbmId>;
  removeTb_tbms!: Sequelize.HasManyRemoveAssociationsMixin<tb_tbm, tb_tbmId>;
  hasTb_tbm!: Sequelize.HasManyHasAssociationMixin<tb_tbm, tb_tbmId>;
  hasTb_tbms!: Sequelize.HasManyHasAssociationsMixin<tb_tbm, tb_tbmId>;
  countTb_tbms!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_tbm via updater_code
  updater_code_tb_tbms!: tb_tbm[];
  getUpdater_code_tb_tbms!: Sequelize.HasManyGetAssociationsMixin<tb_tbm>;
  setUpdater_code_tb_tbms!: Sequelize.HasManySetAssociationsMixin<tb_tbm, tb_tbmId>;
  addUpdater_code_tb_tbm!: Sequelize.HasManyAddAssociationMixin<tb_tbm, tb_tbmId>;
  addUpdater_code_tb_tbms!: Sequelize.HasManyAddAssociationsMixin<tb_tbm, tb_tbmId>;
  createUpdater_code_tb_tbm!: Sequelize.HasManyCreateAssociationMixin<tb_tbm>;
  removeUpdater_code_tb_tbm!: Sequelize.HasManyRemoveAssociationMixin<tb_tbm, tb_tbmId>;
  removeUpdater_code_tb_tbms!: Sequelize.HasManyRemoveAssociationsMixin<tb_tbm, tb_tbmId>;
  hasUpdater_code_tb_tbm!: Sequelize.HasManyHasAssociationMixin<tb_tbm, tb_tbmId>;
  hasUpdater_code_tb_tbms!: Sequelize.HasManyHasAssociationsMixin<tb_tbm, tb_tbmId>;
  countUpdater_code_tb_tbms!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_tbm_state via register_code
  tb_tbm_states!: tb_tbm_state[];
  getTb_tbm_states!: Sequelize.HasManyGetAssociationsMixin<tb_tbm_state>;
  setTb_tbm_states!: Sequelize.HasManySetAssociationsMixin<tb_tbm_state, tb_tbm_stateId>;
  addTb_tbm_state!: Sequelize.HasManyAddAssociationMixin<tb_tbm_state, tb_tbm_stateId>;
  addTb_tbm_states!: Sequelize.HasManyAddAssociationsMixin<tb_tbm_state, tb_tbm_stateId>;
  createTb_tbm_state!: Sequelize.HasManyCreateAssociationMixin<tb_tbm_state>;
  removeTb_tbm_state!: Sequelize.HasManyRemoveAssociationMixin<tb_tbm_state, tb_tbm_stateId>;
  removeTb_tbm_states!: Sequelize.HasManyRemoveAssociationsMixin<tb_tbm_state, tb_tbm_stateId>;
  hasTb_tbm_state!: Sequelize.HasManyHasAssociationMixin<tb_tbm_state, tb_tbm_stateId>;
  hasTb_tbm_states!: Sequelize.HasManyHasAssociationsMixin<tb_tbm_state, tb_tbm_stateId>;
  countTb_tbm_states!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_tbm_state via updater_code
  updater_code_tb_tbm_states!: tb_tbm_state[];
  getUpdater_code_tb_tbm_states!: Sequelize.HasManyGetAssociationsMixin<tb_tbm_state>;
  setUpdater_code_tb_tbm_states!: Sequelize.HasManySetAssociationsMixin<tb_tbm_state, tb_tbm_stateId>;
  addUpdater_code_tb_tbm_state!: Sequelize.HasManyAddAssociationMixin<tb_tbm_state, tb_tbm_stateId>;
  addUpdater_code_tb_tbm_states!: Sequelize.HasManyAddAssociationsMixin<tb_tbm_state, tb_tbm_stateId>;
  createUpdater_code_tb_tbm_state!: Sequelize.HasManyCreateAssociationMixin<tb_tbm_state>;
  removeUpdater_code_tb_tbm_state!: Sequelize.HasManyRemoveAssociationMixin<tb_tbm_state, tb_tbm_stateId>;
  removeUpdater_code_tb_tbm_states!: Sequelize.HasManyRemoveAssociationsMixin<tb_tbm_state, tb_tbm_stateId>;
  hasUpdater_code_tb_tbm_state!: Sequelize.HasManyHasAssociationMixin<tb_tbm_state, tb_tbm_stateId>;
  hasUpdater_code_tb_tbm_states!: Sequelize.HasManyHasAssociationsMixin<tb_tbm_state, tb_tbm_stateId>;
  countUpdater_code_tb_tbm_states!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_tbm_state via worker_code
  worker_code_tb_tbm_states!: tb_tbm_state[];
  getWorker_code_tb_tbm_states!: Sequelize.HasManyGetAssociationsMixin<tb_tbm_state>;
  setWorker_code_tb_tbm_states!: Sequelize.HasManySetAssociationsMixin<tb_tbm_state, tb_tbm_stateId>;
  addWorker_code_tb_tbm_state!: Sequelize.HasManyAddAssociationMixin<tb_tbm_state, tb_tbm_stateId>;
  addWorker_code_tb_tbm_states!: Sequelize.HasManyAddAssociationsMixin<tb_tbm_state, tb_tbm_stateId>;
  createWorker_code_tb_tbm_state!: Sequelize.HasManyCreateAssociationMixin<tb_tbm_state>;
  removeWorker_code_tb_tbm_state!: Sequelize.HasManyRemoveAssociationMixin<tb_tbm_state, tb_tbm_stateId>;
  removeWorker_code_tb_tbm_states!: Sequelize.HasManyRemoveAssociationsMixin<tb_tbm_state, tb_tbm_stateId>;
  hasWorker_code_tb_tbm_state!: Sequelize.HasManyHasAssociationMixin<tb_tbm_state, tb_tbm_stateId>;
  hasWorker_code_tb_tbm_states!: Sequelize.HasManyHasAssociationsMixin<tb_tbm_state, tb_tbm_stateId>;
  countWorker_code_tb_tbm_states!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_worker_location via worker_code
  tb_worker_locations!: tb_worker_location[];
  getTb_worker_locations!: Sequelize.HasManyGetAssociationsMixin<tb_worker_location>;
  setTb_worker_locations!: Sequelize.HasManySetAssociationsMixin<tb_worker_location, tb_worker_locationId>;
  addTb_worker_location!: Sequelize.HasManyAddAssociationMixin<tb_worker_location, tb_worker_locationId>;
  addTb_worker_locations!: Sequelize.HasManyAddAssociationsMixin<tb_worker_location, tb_worker_locationId>;
  createTb_worker_location!: Sequelize.HasManyCreateAssociationMixin<tb_worker_location>;
  removeTb_worker_location!: Sequelize.HasManyRemoveAssociationMixin<tb_worker_location, tb_worker_locationId>;
  removeTb_worker_locations!: Sequelize.HasManyRemoveAssociationsMixin<tb_worker_location, tb_worker_locationId>;
  hasTb_worker_location!: Sequelize.HasManyHasAssociationMixin<tb_worker_location, tb_worker_locationId>;
  hasTb_worker_locations!: Sequelize.HasManyHasAssociationsMixin<tb_worker_location, tb_worker_locationId>;
  countTb_worker_locations!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account hasMany tb_worker_shelter via worker_code
  tb_worker_shelters!: tb_worker_shelter[];
  getTb_worker_shelters!: Sequelize.HasManyGetAssociationsMixin<tb_worker_shelter>;
  setTb_worker_shelters!: Sequelize.HasManySetAssociationsMixin<tb_worker_shelter, tb_worker_shelterId>;
  addTb_worker_shelter!: Sequelize.HasManyAddAssociationMixin<tb_worker_shelter, tb_worker_shelterId>;
  addTb_worker_shelters!: Sequelize.HasManyAddAssociationsMixin<tb_worker_shelter, tb_worker_shelterId>;
  createTb_worker_shelter!: Sequelize.HasManyCreateAssociationMixin<tb_worker_shelter>;
  removeTb_worker_shelter!: Sequelize.HasManyRemoveAssociationMixin<tb_worker_shelter, tb_worker_shelterId>;
  removeTb_worker_shelters!: Sequelize.HasManyRemoveAssociationsMixin<tb_worker_shelter, tb_worker_shelterId>;
  hasTb_worker_shelter!: Sequelize.HasManyHasAssociationMixin<tb_worker_shelter, tb_worker_shelterId>;
  hasTb_worker_shelters!: Sequelize.HasManyHasAssociationsMixin<tb_worker_shelter, tb_worker_shelterId>;
  countTb_worker_shelters!: Sequelize.HasManyCountAssociationsMixin;
  // tb_account belongsTo tb_user via user_code
  user_code_tb_user!: tb_user;
  getUser_code_tb_user!: Sequelize.BelongsToGetAssociationMixin<tb_user>;
  setUser_code_tb_user!: Sequelize.BelongsToSetAssociationMixin<tb_user, tb_userId>;
  createUser_code_tb_user!: Sequelize.BelongsToCreateAssociationMixin<tb_user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_account {
    return tb_account.init({
    code: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    id: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    pw: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    photo: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: ""
    },
    mobile: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    family_contact: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    pno1: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    },
    pno2: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    },
    addr_doro: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    },
    addr_etc: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    },
    blood_code: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    is_rh_min: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    e_sign: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: ""
    },
    client_code: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    auth_code: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    last_site_code: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    allowed_code: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    permit_code: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    permit_dt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    state_code: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    leave_dt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    reg_dt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    update_dt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    is_enabled: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    bank_code: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    bank_num: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    },
    health_check_cycle: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    illness_state: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    illness_info: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    },
    admin_site_code: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    face: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    user_code: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tb_user',
        key: 'code'
      }
    },
    is_bp_doctor_note: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    bp_doctor_note: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    health_bp_check_cycle: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    health_al_check_cycle: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_face: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_account',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_account_idx",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "tb_account_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
