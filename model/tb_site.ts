import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_account, tb_accountId } from './tb_account';
import type { tb_blocked, tb_blockedId } from './tb_blocked';
import type { tb_board, tb_boardId } from './tb_board';
import type { tb_client, tb_clientId } from './tb_client';
import type { tb_commute, tb_commuteId } from './tb_commute';
import type { tb_contract, tb_contractId } from './tb_contract';
import type { tb_daily_board, tb_daily_boardId } from './tb_daily_board';
import type { tb_danger_mat_use_plan, tb_danger_mat_use_planId } from './tb_danger_mat_use_plan';
import type { tb_edu_board, tb_edu_boardId } from './tb_edu_board';
import type { tb_edu_sch, tb_edu_schId } from './tb_edu_sch';
import type { tb_health_alcohol, tb_health_alcoholId } from './tb_health_alcohol';
import type { tb_health_alcohol_hist, tb_health_alcohol_histId } from './tb_health_alcohol_hist';
import type { tb_health_bp, tb_health_bpId } from './tb_health_bp';
import type { tb_health_bp_hist, tb_health_bp_histId } from './tb_health_bp_hist';
import type { tb_health_oxygen, tb_health_oxygenId } from './tb_health_oxygen';
import type { tb_health_stress, tb_health_stressId } from './tb_health_stress';
import type { tb_mat_pur, tb_mat_purId } from './tb_mat_pur';
import type { tb_partner_contract, tb_partner_contractId } from './tb_partner_contract';
import type { tb_pay, tb_payId } from './tb_pay';
import type { tb_project, tb_projectId } from './tb_project';
import type { tb_risk, tb_riskId } from './tb_risk';
import type { tb_risk_report, tb_risk_reportId } from './tb_risk_report';
import type { tb_safety_prot_eqp_inventory, tb_safety_prot_eqp_inventoryId } from './tb_safety_prot_eqp_inventory';
import type { tb_safety_prot_eqp_issue, tb_safety_prot_eqp_issueId } from './tb_safety_prot_eqp_issue';
import type { tb_safety_prot_eqp_purch_detail, tb_safety_prot_eqp_purch_detailId } from './tb_safety_prot_eqp_purch_detail';
import type { tb_siren, tb_sirenId } from './tb_siren';
import type { tb_site_build_major, tb_site_build_majorId } from './tb_site_build_major';
import type { tb_site_config, tb_site_configId } from './tb_site_config';
import type { tb_site_ecn, tb_site_ecnId } from './tb_site_ecn';
import type { tb_site_of_client, tb_site_of_clientId } from './tb_site_of_client';
import type { tb_site_of_user, tb_site_of_userId } from './tb_site_of_user';
import type { tb_site_sch, tb_site_schId } from './tb_site_sch';
import type { tb_site_sch_board, tb_site_sch_boardId } from './tb_site_sch_board';
import type { tb_site_sch_work, tb_site_sch_workId } from './tb_site_sch_work';
import type { tb_site_sch_work_major, tb_site_sch_work_majorId } from './tb_site_sch_work_major';
import type { tb_site_work_area, tb_site_work_areaId } from './tb_site_work_area';
import type { tb_site_work_area2, tb_site_work_area2Id } from './tb_site_work_area2';
import type { tb_tbm, tb_tbmId } from './tb_tbm';
import type { tb_user, tb_userId } from './tb_user';
import type { tb_worker_shelter, tb_worker_shelterId } from './tb_worker_shelter';

export interface tb_siteAttributes {
  code: number;
  client_code: number;
  name: string;
  addr?: string;
  c_begin_dt?: string;
  c_end_dt?: string;
  amount?: number;
  const_class: number;
  builder?: string;
  client?: string;
  supervisor?: string;
  const_type?: string;
  register_code: number;
  reg_dt?: Date;
  updater_code: number;
  update_dt?: Date;
  photo?: string;
  map_zoom_no?: number;
  full_name?: string;
  nick_name?: string;
  post?: string;
  addr_doro?: string;
  addr_detail?: string;
  is_complete?: string;
  is_del?: string;
  id: number;
  created_at?: Date;
  is_enable?: boolean;
  updated_at?: Date;
  address?: string;
  phone?: string;
  image_map?: string;
}

export type tb_sitePk = "code";
export type tb_siteId = tb_site[tb_sitePk];
export type tb_siteOptionalAttributes = "addr" | "c_begin_dt" | "c_end_dt" | "amount" | "builder" | "client" | "supervisor" | "const_type" | "reg_dt" | "update_dt" | "photo" | "map_zoom_no" | "full_name" | "nick_name" | "post" | "addr_doro" | "addr_detail" | "is_complete" | "is_del" | "created_at" | "is_enable" | "updated_at" | "address" | "phone" | "image_map";
export type tb_siteCreationAttributes = Optional<tb_siteAttributes, tb_siteOptionalAttributes>;

export class tb_site extends Model<tb_siteAttributes, tb_siteCreationAttributes> implements tb_siteAttributes {
  code!: number;
  client_code!: number;
  name!: string;
  addr?: string;
  c_begin_dt?: string;
  c_end_dt?: string;
  amount?: number;
  const_class!: number;
  builder?: string;
  client?: string;
  supervisor?: string;
  const_type?: string;
  register_code!: number;
  reg_dt?: Date;
  updater_code!: number;
  update_dt?: Date;
  photo?: string;
  map_zoom_no?: number;
  full_name?: string;
  nick_name?: string;
  post?: string;
  addr_doro?: string;
  addr_detail?: string;
  is_complete?: string;
  is_del?: string;
  id!: number;
  created_at?: Date;
  is_enable?: boolean;
  updated_at?: Date;
  address?: string;
  phone?: string;
  image_map?: string;

  // tb_site belongsTo tb_account via register_code
  register_code_tb_account!: tb_account;
  getRegister_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setRegister_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createRegister_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_site belongsTo tb_account via updater_code
  updater_code_tb_account!: tb_account;
  getUpdater_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setUpdater_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createUpdater_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_site belongsTo tb_client via client_code
  client_code_tb_client!: tb_client;
  getClient_code_tb_client!: Sequelize.BelongsToGetAssociationMixin<tb_client>;
  setClient_code_tb_client!: Sequelize.BelongsToSetAssociationMixin<tb_client, tb_clientId>;
  createClient_code_tb_client!: Sequelize.BelongsToCreateAssociationMixin<tb_client>;
  // tb_site hasMany tb_blocked via site_code
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
  // tb_site hasMany tb_board via site_code
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
  // tb_site hasMany tb_commute via site_code
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
  // tb_site hasMany tb_contract via site_code
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
  // tb_site hasMany tb_daily_board via site_code
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
  // tb_site hasMany tb_danger_mat_use_plan via site_code
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
  // tb_site hasMany tb_edu_board via site_code
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
  // tb_site hasMany tb_edu_sch via site_code
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
  // tb_site hasMany tb_health_alcohol via site_code
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
  // tb_site hasMany tb_health_alcohol_hist via site_code
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
  // tb_site hasMany tb_health_bp via site_code
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
  // tb_site hasMany tb_health_bp_hist via site_code
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
  // tb_site hasMany tb_health_oxygen via site_code
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
  // tb_site hasMany tb_health_stress via site_code
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
  // tb_site hasMany tb_mat_pur via site_code
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
  // tb_site hasMany tb_partner_contract via site_code
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
  // tb_site hasMany tb_pay via site_code
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
  // tb_site hasMany tb_project via site_id
  tb_projects!: tb_project[];
  getTb_projects!: Sequelize.HasManyGetAssociationsMixin<tb_project>;
  setTb_projects!: Sequelize.HasManySetAssociationsMixin<tb_project, tb_projectId>;
  addTb_project!: Sequelize.HasManyAddAssociationMixin<tb_project, tb_projectId>;
  addTb_projects!: Sequelize.HasManyAddAssociationsMixin<tb_project, tb_projectId>;
  createTb_project!: Sequelize.HasManyCreateAssociationMixin<tb_project>;
  removeTb_project!: Sequelize.HasManyRemoveAssociationMixin<tb_project, tb_projectId>;
  removeTb_projects!: Sequelize.HasManyRemoveAssociationsMixin<tb_project, tb_projectId>;
  hasTb_project!: Sequelize.HasManyHasAssociationMixin<tb_project, tb_projectId>;
  hasTb_projects!: Sequelize.HasManyHasAssociationsMixin<tb_project, tb_projectId>;
  countTb_projects!: Sequelize.HasManyCountAssociationsMixin;
  // tb_site hasMany tb_risk via site_code
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
  // tb_site hasMany tb_risk_report via site_code
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
  // tb_site hasMany tb_safety_prot_eqp_inventory via site_code
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
  // tb_site hasMany tb_safety_prot_eqp_issue via site_code
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
  // tb_site hasMany tb_safety_prot_eqp_purch_detail via site_code
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
  // tb_site hasMany tb_siren via site_code
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
  // tb_site hasMany tb_site_build_major via site_code
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
  // tb_site hasMany tb_site_config via site_code
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
  // tb_site hasMany tb_site_ecn via site_code
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
  // tb_site hasMany tb_site_of_client via site_code
  tb_site_of_clients!: tb_site_of_client[];
  getTb_site_of_clients!: Sequelize.HasManyGetAssociationsMixin<tb_site_of_client>;
  setTb_site_of_clients!: Sequelize.HasManySetAssociationsMixin<tb_site_of_client, tb_site_of_clientId>;
  addTb_site_of_client!: Sequelize.HasManyAddAssociationMixin<tb_site_of_client, tb_site_of_clientId>;
  addTb_site_of_clients!: Sequelize.HasManyAddAssociationsMixin<tb_site_of_client, tb_site_of_clientId>;
  createTb_site_of_client!: Sequelize.HasManyCreateAssociationMixin<tb_site_of_client>;
  removeTb_site_of_client!: Sequelize.HasManyRemoveAssociationMixin<tb_site_of_client, tb_site_of_clientId>;
  removeTb_site_of_clients!: Sequelize.HasManyRemoveAssociationsMixin<tb_site_of_client, tb_site_of_clientId>;
  hasTb_site_of_client!: Sequelize.HasManyHasAssociationMixin<tb_site_of_client, tb_site_of_clientId>;
  hasTb_site_of_clients!: Sequelize.HasManyHasAssociationsMixin<tb_site_of_client, tb_site_of_clientId>;
  countTb_site_of_clients!: Sequelize.HasManyCountAssociationsMixin;
  // tb_site hasMany tb_site_of_user via site_code
  tb_site_of_users!: tb_site_of_user[];
  getTb_site_of_users!: Sequelize.HasManyGetAssociationsMixin<tb_site_of_user>;
  setTb_site_of_users!: Sequelize.HasManySetAssociationsMixin<tb_site_of_user, tb_site_of_userId>;
  addTb_site_of_user!: Sequelize.HasManyAddAssociationMixin<tb_site_of_user, tb_site_of_userId>;
  addTb_site_of_users!: Sequelize.HasManyAddAssociationsMixin<tb_site_of_user, tb_site_of_userId>;
  createTb_site_of_user!: Sequelize.HasManyCreateAssociationMixin<tb_site_of_user>;
  removeTb_site_of_user!: Sequelize.HasManyRemoveAssociationMixin<tb_site_of_user, tb_site_of_userId>;
  removeTb_site_of_users!: Sequelize.HasManyRemoveAssociationsMixin<tb_site_of_user, tb_site_of_userId>;
  hasTb_site_of_user!: Sequelize.HasManyHasAssociationMixin<tb_site_of_user, tb_site_of_userId>;
  hasTb_site_of_users!: Sequelize.HasManyHasAssociationsMixin<tb_site_of_user, tb_site_of_userId>;
  countTb_site_of_users!: Sequelize.HasManyCountAssociationsMixin;
  // tb_site hasMany tb_site_sch via site_code
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
  // tb_site hasMany tb_site_sch_board via site_code
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
  // tb_site hasMany tb_site_sch_work via site_code
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
  // tb_site hasMany tb_site_sch_work_major via site_code
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
  // tb_site hasMany tb_site_work_area via site_code
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
  // tb_site hasMany tb_site_work_area2 via site_code
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
  // tb_site hasMany tb_tbm via site_code
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
  // tb_site hasMany tb_user via site_id
  tb_users!: tb_user[];
  getTb_users!: Sequelize.HasManyGetAssociationsMixin<tb_user>;
  setTb_users!: Sequelize.HasManySetAssociationsMixin<tb_user, tb_userId>;
  addTb_user!: Sequelize.HasManyAddAssociationMixin<tb_user, tb_userId>;
  addTb_users!: Sequelize.HasManyAddAssociationsMixin<tb_user, tb_userId>;
  createTb_user!: Sequelize.HasManyCreateAssociationMixin<tb_user>;
  removeTb_user!: Sequelize.HasManyRemoveAssociationMixin<tb_user, tb_userId>;
  removeTb_users!: Sequelize.HasManyRemoveAssociationsMixin<tb_user, tb_userId>;
  hasTb_user!: Sequelize.HasManyHasAssociationMixin<tb_user, tb_userId>;
  hasTb_users!: Sequelize.HasManyHasAssociationsMixin<tb_user, tb_userId>;
  countTb_users!: Sequelize.HasManyCountAssociationsMixin;
  // tb_site hasMany tb_worker_shelter via site_code
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

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_site {
    return tb_site.init({
    code: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    client_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_client',
        key: 'code'
      }
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    addr: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    },
    c_begin_dt: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: ""
    },
    c_end_dt: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: ""
    },
    amount: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    const_class: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    builder: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    },
    client: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    },
    supervisor: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    },
    const_type: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "건설업"
    },
    register_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_account',
        key: 'code'
      }
    },
    reg_dt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    updater_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_account',
        key: 'code'
      }
    },
    update_dt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    photo: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: ""
    },
    map_zoom_no: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    full_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nick_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    post: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    addr_doro: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    addr_detail: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    is_complete: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    is_del: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    is_enable: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    image_map: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_site',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_site_idx",
        fields: [
          { name: "client_code" },
        ]
      },
      {
        name: "tb_site_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
