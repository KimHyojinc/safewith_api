import type { Sequelize } from "sequelize";
import { tb_account as _tb_account } from "./tb_account";
import type { tb_accountAttributes, tb_accountCreationAttributes } from "./tb_account";
import { tb_area as _tb_area } from "./tb_area";
import type { tb_areaAttributes, tb_areaCreationAttributes } from "./tb_area";
import { tb_area_count_trip as _tb_area_count_trip } from "./tb_area_count_trip";
import type { tb_area_count_tripAttributes, tb_area_count_tripCreationAttributes } from "./tb_area_count_trip";
import { tb_auth as _tb_auth } from "./tb_auth";
import type { tb_authAttributes, tb_authCreationAttributes } from "./tb_auth";
import { tb_banner as _tb_banner } from "./tb_banner";
import type { tb_bannerAttributes, tb_bannerCreationAttributes } from "./tb_banner";
import { tb_blocked as _tb_blocked } from "./tb_blocked";
import type { tb_blockedAttributes, tb_blockedCreationAttributes } from "./tb_blocked";
import { tb_board as _tb_board } from "./tb_board";
import type { tb_boardAttributes, tb_boardCreationAttributes } from "./tb_board";
import { tb_board_photo as _tb_board_photo } from "./tb_board_photo";
import type { tb_board_photoAttributes, tb_board_photoCreationAttributes } from "./tb_board_photo";
import { tb_client as _tb_client } from "./tb_client";
import type { tb_clientAttributes, tb_clientCreationAttributes } from "./tb_client";
import { tb_commute as _tb_commute } from "./tb_commute";
import type { tb_commuteAttributes, tb_commuteCreationAttributes } from "./tb_commute";
import { tb_contract as _tb_contract } from "./tb_contract";
import type { tb_contractAttributes, tb_contractCreationAttributes } from "./tb_contract";
import { tb_contract_photo as _tb_contract_photo } from "./tb_contract_photo";
import type { tb_contract_photoAttributes, tb_contract_photoCreationAttributes } from "./tb_contract_photo";
import { tb_daily_board as _tb_daily_board } from "./tb_daily_board";
import type { tb_daily_boardAttributes, tb_daily_boardCreationAttributes } from "./tb_daily_board";
import { tb_danger_mat as _tb_danger_mat } from "./tb_danger_mat";
import type { tb_danger_matAttributes, tb_danger_matCreationAttributes } from "./tb_danger_mat";
import { tb_danger_mat_parts_items as _tb_danger_mat_parts_items } from "./tb_danger_mat_parts_items";
import type { tb_danger_mat_parts_itemsAttributes, tb_danger_mat_parts_itemsCreationAttributes } from "./tb_danger_mat_parts_items";
import { tb_danger_mat_use_plan as _tb_danger_mat_use_plan } from "./tb_danger_mat_use_plan";
import type { tb_danger_mat_use_planAttributes, tb_danger_mat_use_planCreationAttributes } from "./tb_danger_mat_use_plan";
import { tb_danger_mat_use_plan_files as _tb_danger_mat_use_plan_files } from "./tb_danger_mat_use_plan_files";
import type { tb_danger_mat_use_plan_filesAttributes, tb_danger_mat_use_plan_filesCreationAttributes } from "./tb_danger_mat_use_plan_files";
import { tb_danger_mat_use_worker as _tb_danger_mat_use_worker } from "./tb_danger_mat_use_worker";
import type { tb_danger_mat_use_workerAttributes, tb_danger_mat_use_workerCreationAttributes } from "./tb_danger_mat_use_worker";
import { tb_danger_parts as _tb_danger_parts } from "./tb_danger_parts";
import type { tb_danger_partsAttributes, tb_danger_partsCreationAttributes } from "./tb_danger_parts";
import { tb_driver as _tb_driver } from "./tb_driver";
import type { tb_driverAttributes, tb_driverCreationAttributes } from "./tb_driver";
import { tb_edu as _tb_edu } from "./tb_edu";
import type { tb_eduAttributes, tb_eduCreationAttributes } from "./tb_edu";
import { tb_edu_board as _tb_edu_board } from "./tb_edu_board";
import type { tb_edu_boardAttributes, tb_edu_boardCreationAttributes } from "./tb_edu_board";
import { tb_edu_contents as _tb_edu_contents } from "./tb_edu_contents";
import type { tb_edu_contentsAttributes, tb_edu_contentsCreationAttributes } from "./tb_edu_contents";
import { tb_edu_exam as _tb_edu_exam } from "./tb_edu_exam";
import type { tb_edu_examAttributes, tb_edu_examCreationAttributes } from "./tb_edu_exam";
import { tb_edu_exam_contents as _tb_edu_exam_contents } from "./tb_edu_exam_contents";
import type { tb_edu_exam_contentsAttributes, tb_edu_exam_contentsCreationAttributes } from "./tb_edu_exam_contents";
import { tb_edu_judge as _tb_edu_judge } from "./tb_edu_judge";
import type { tb_edu_judgeAttributes, tb_edu_judgeCreationAttributes } from "./tb_edu_judge";
import { tb_edu_judge_contents as _tb_edu_judge_contents } from "./tb_edu_judge_contents";
import type { tb_edu_judge_contentsAttributes, tb_edu_judge_contentsCreationAttributes } from "./tb_edu_judge_contents";
import { tb_edu_sch as _tb_edu_sch } from "./tb_edu_sch";
import type { tb_edu_schAttributes, tb_edu_schCreationAttributes } from "./tb_edu_sch";
import { tb_edu_sch_member as _tb_edu_sch_member } from "./tb_edu_sch_member";
import type { tb_edu_sch_memberAttributes, tb_edu_sch_memberCreationAttributes } from "./tb_edu_sch_member";
import { tb_file_upload as _tb_file_upload } from "./tb_file_upload";
import type { tb_file_uploadAttributes, tb_file_uploadCreationAttributes } from "./tb_file_upload";
import { tb_gps_tracking as _tb_gps_tracking } from "./tb_gps_tracking";
import type { tb_gps_trackingAttributes, tb_gps_trackingCreationAttributes } from "./tb_gps_tracking";
import { tb_health_alcohol as _tb_health_alcohol } from "./tb_health_alcohol";
import type { tb_health_alcoholAttributes, tb_health_alcoholCreationAttributes } from "./tb_health_alcohol";
import { tb_health_alcohol_hist as _tb_health_alcohol_hist } from "./tb_health_alcohol_hist";
import type { tb_health_alcohol_histAttributes, tb_health_alcohol_histCreationAttributes } from "./tb_health_alcohol_hist";
import { tb_health_bp as _tb_health_bp } from "./tb_health_bp";
import type { tb_health_bpAttributes, tb_health_bpCreationAttributes } from "./tb_health_bp";
import { tb_health_bp_hist as _tb_health_bp_hist } from "./tb_health_bp_hist";
import type { tb_health_bp_histAttributes, tb_health_bp_histCreationAttributes } from "./tb_health_bp_hist";
import { tb_health_oxygen as _tb_health_oxygen } from "./tb_health_oxygen";
import type { tb_health_oxygenAttributes, tb_health_oxygenCreationAttributes } from "./tb_health_oxygen";
import { tb_health_stress as _tb_health_stress } from "./tb_health_stress";
import type { tb_health_stressAttributes, tb_health_stressCreationAttributes } from "./tb_health_stress";
import { tb_holiday as _tb_holiday } from "./tb_holiday";
import type { tb_holidayAttributes, tb_holidayCreationAttributes } from "./tb_holiday";
import { tb_lib as _tb_lib } from "./tb_lib";
import type { tb_libAttributes, tb_libCreationAttributes } from "./tb_lib";
import { tb_listof_dayoff as _tb_listof_dayoff } from "./tb_listof_dayoff";
import type { tb_listof_dayoffAttributes, tb_listof_dayoffCreationAttributes } from "./tb_listof_dayoff";
import { tb_mat_pur as _tb_mat_pur } from "./tb_mat_pur";
import type { tb_mat_purAttributes, tb_mat_purCreationAttributes } from "./tb_mat_pur";
import { tb_mat_pur_photo as _tb_mat_pur_photo } from "./tb_mat_pur_photo";
import type { tb_mat_pur_photoAttributes, tb_mat_pur_photoCreationAttributes } from "./tb_mat_pur_photo";
import { tb_notifications as _tb_notifications } from "./tb_notifications";
import type { tb_notificationsAttributes, tb_notificationsCreationAttributes } from "./tb_notifications";
import { tb_notifications_temp as _tb_notifications_temp } from "./tb_notifications_temp";
import type { tb_notifications_tempAttributes, tb_notifications_tempCreationAttributes } from "./tb_notifications_temp";
import { tb_notify_message as _tb_notify_message } from "./tb_notify_message";
import type { tb_notify_messageAttributes, tb_notify_messageCreationAttributes } from "./tb_notify_message";
import { tb_partner as _tb_partner } from "./tb_partner";
import type { tb_partnerAttributes, tb_partnerCreationAttributes } from "./tb_partner";
import { tb_partner_contract as _tb_partner_contract } from "./tb_partner_contract";
import type { tb_partner_contractAttributes, tb_partner_contractCreationAttributes } from "./tb_partner_contract";
import { tb_pay as _tb_pay } from "./tb_pay";
import type { tb_payAttributes, tb_payCreationAttributes } from "./tb_pay";
import { tb_project as _tb_project } from "./tb_project";
import type { tb_projectAttributes, tb_projectCreationAttributes } from "./tb_project";
import { tb_project_area as _tb_project_area } from "./tb_project_area";
import type { tb_project_areaAttributes, tb_project_areaCreationAttributes } from "./tb_project_area";
import { tb_project_manager as _tb_project_manager } from "./tb_project_manager";
import type { tb_project_managerAttributes, tb_project_managerCreationAttributes } from "./tb_project_manager";
import { tb_qna as _tb_qna } from "./tb_qna";
import type { tb_qnaAttributes, tb_qnaCreationAttributes } from "./tb_qna";
import { tb_req_doc as _tb_req_doc } from "./tb_req_doc";
import type { tb_req_docAttributes, tb_req_docCreationAttributes } from "./tb_req_doc";
import { tb_risk as _tb_risk } from "./tb_risk";
import type { tb_riskAttributes, tb_riskCreationAttributes } from "./tb_risk";
import { tb_risk_action as _tb_risk_action } from "./tb_risk_action";
import type { tb_risk_actionAttributes, tb_risk_actionCreationAttributes } from "./tb_risk_action";
import { tb_risk_action_photo as _tb_risk_action_photo } from "./tb_risk_action_photo";
import type { tb_risk_action_photoAttributes, tb_risk_action_photoCreationAttributes } from "./tb_risk_action_photo";
import { tb_risk_actor as _tb_risk_actor } from "./tb_risk_actor";
import type { tb_risk_actorAttributes, tb_risk_actorCreationAttributes } from "./tb_risk_actor";
import { tb_risk_report as _tb_risk_report } from "./tb_risk_report";
import type { tb_risk_reportAttributes, tb_risk_reportCreationAttributes } from "./tb_risk_report";
import { tb_risk_report_action as _tb_risk_report_action } from "./tb_risk_report_action";
import type { tb_risk_report_actionAttributes, tb_risk_report_actionCreationAttributes } from "./tb_risk_report_action";
import { tb_risk_report_action_photo as _tb_risk_report_action_photo } from "./tb_risk_report_action_photo";
import type { tb_risk_report_action_photoAttributes, tb_risk_report_action_photoCreationAttributes } from "./tb_risk_report_action_photo";
import { tb_risk_report_photo as _tb_risk_report_photo } from "./tb_risk_report_photo";
import type { tb_risk_report_photoAttributes, tb_risk_report_photoCreationAttributes } from "./tb_risk_report_photo";
import { tb_risk_work as _tb_risk_work } from "./tb_risk_work";
import type { tb_risk_workAttributes, tb_risk_workCreationAttributes } from "./tb_risk_work";
import { tb_risk_work_contents as _tb_risk_work_contents } from "./tb_risk_work_contents";
import type { tb_risk_work_contentsAttributes, tb_risk_work_contentsCreationAttributes } from "./tb_risk_work_contents";
import { tb_risk_work_contents_hist as _tb_risk_work_contents_hist } from "./tb_risk_work_contents_hist";
import type { tb_risk_work_contents_histAttributes, tb_risk_work_contents_histCreationAttributes } from "./tb_risk_work_contents_hist";
import { tb_safety_prot_eqp_inventory as _tb_safety_prot_eqp_inventory } from "./tb_safety_prot_eqp_inventory";
import type { tb_safety_prot_eqp_inventoryAttributes, tb_safety_prot_eqp_inventoryCreationAttributes } from "./tb_safety_prot_eqp_inventory";
import { tb_safety_prot_eqp_issue as _tb_safety_prot_eqp_issue } from "./tb_safety_prot_eqp_issue";
import type { tb_safety_prot_eqp_issueAttributes, tb_safety_prot_eqp_issueCreationAttributes } from "./tb_safety_prot_eqp_issue";
import { tb_safety_prot_eqp_issue_dtail as _tb_safety_prot_eqp_issue_dtail } from "./tb_safety_prot_eqp_issue_dtail";
import type { tb_safety_prot_eqp_issue_dtailAttributes, tb_safety_prot_eqp_issue_dtailCreationAttributes } from "./tb_safety_prot_eqp_issue_dtail";
import { tb_safety_prot_eqp_purch_detail as _tb_safety_prot_eqp_purch_detail } from "./tb_safety_prot_eqp_purch_detail";
import type { tb_safety_prot_eqp_purch_detailAttributes, tb_safety_prot_eqp_purch_detailCreationAttributes } from "./tb_safety_prot_eqp_purch_detail";
import { tb_self_care as _tb_self_care } from "./tb_self_care";
import type { tb_self_careAttributes, tb_self_careCreationAttributes } from "./tb_self_care";
import { tb_service as _tb_service } from "./tb_service";
import type { tb_serviceAttributes, tb_serviceCreationAttributes } from "./tb_service";
import { tb_shelter as _tb_shelter } from "./tb_shelter";
import type { tb_shelterAttributes, tb_shelterCreationAttributes } from "./tb_shelter";
import { tb_siren as _tb_siren } from "./tb_siren";
import type { tb_sirenAttributes, tb_sirenCreationAttributes } from "./tb_siren";
import { tb_siren_state as _tb_siren_state } from "./tb_siren_state";
import type { tb_siren_stateAttributes, tb_siren_stateCreationAttributes } from "./tb_siren_state";
import { tb_site as _tb_site } from "./tb_site";
import type { tb_siteAttributes, tb_siteCreationAttributes } from "./tb_site";
import { tb_site_build_major as _tb_site_build_major } from "./tb_site_build_major";
import type { tb_site_build_majorAttributes, tb_site_build_majorCreationAttributes } from "./tb_site_build_major";
import { tb_site_build_middle as _tb_site_build_middle } from "./tb_site_build_middle";
import type { tb_site_build_middleAttributes, tb_site_build_middleCreationAttributes } from "./tb_site_build_middle";
import { tb_site_build_sub as _tb_site_build_sub } from "./tb_site_build_sub";
import type { tb_site_build_subAttributes, tb_site_build_subCreationAttributes } from "./tb_site_build_sub";
import { tb_site_config as _tb_site_config } from "./tb_site_config";
import type { tb_site_configAttributes, tb_site_configCreationAttributes } from "./tb_site_config";
import { tb_site_drawing as _tb_site_drawing } from "./tb_site_drawing";
import type { tb_site_drawingAttributes, tb_site_drawingCreationAttributes } from "./tb_site_drawing";
import { tb_site_ecn as _tb_site_ecn } from "./tb_site_ecn";
import type { tb_site_ecnAttributes, tb_site_ecnCreationAttributes } from "./tb_site_ecn";
import { tb_site_of_client as _tb_site_of_client } from "./tb_site_of_client";
import type { tb_site_of_clientAttributes, tb_site_of_clientCreationAttributes } from "./tb_site_of_client";
import { tb_site_of_user as _tb_site_of_user } from "./tb_site_of_user";
import type { tb_site_of_userAttributes, tb_site_of_userCreationAttributes } from "./tb_site_of_user";
import { tb_site_sch as _tb_site_sch } from "./tb_site_sch";
import type { tb_site_schAttributes, tb_site_schCreationAttributes } from "./tb_site_sch";
import { tb_site_sch_board as _tb_site_sch_board } from "./tb_site_sch_board";
import type { tb_site_sch_boardAttributes, tb_site_sch_boardCreationAttributes } from "./tb_site_sch_board";
import { tb_site_sch_work as _tb_site_sch_work } from "./tb_site_sch_work";
import type { tb_site_sch_workAttributes, tb_site_sch_workCreationAttributes } from "./tb_site_sch_work";
import { tb_site_sch_work_major as _tb_site_sch_work_major } from "./tb_site_sch_work_major";
import type { tb_site_sch_work_majorAttributes, tb_site_sch_work_majorCreationAttributes } from "./tb_site_sch_work_major";
import { tb_site_sch_work_middle as _tb_site_sch_work_middle } from "./tb_site_sch_work_middle";
import type { tb_site_sch_work_middleAttributes, tb_site_sch_work_middleCreationAttributes } from "./tb_site_sch_work_middle";
import { tb_site_work_area as _tb_site_work_area } from "./tb_site_work_area";
import type { tb_site_work_areaAttributes, tb_site_work_areaCreationAttributes } from "./tb_site_work_area";
import { tb_site_work_area2 as _tb_site_work_area2 } from "./tb_site_work_area2";
import type { tb_site_work_area2Attributes, tb_site_work_area2CreationAttributes } from "./tb_site_work_area2";
import { tb_site_work_area_kind as _tb_site_work_area_kind } from "./tb_site_work_area_kind";
import type { tb_site_work_area_kindAttributes, tb_site_work_area_kindCreationAttributes } from "./tb_site_work_area_kind";
import { tb_site_work_area_type as _tb_site_work_area_type } from "./tb_site_work_area_type";
import type { tb_site_work_area_typeAttributes, tb_site_work_area_typeCreationAttributes } from "./tb_site_work_area_type";
import { tb_site_work_drawing as _tb_site_work_drawing } from "./tb_site_work_drawing";
import type { tb_site_work_drawingAttributes, tb_site_work_drawingCreationAttributes } from "./tb_site_work_drawing";
import { tb_site_work_drawing2 as _tb_site_work_drawing2 } from "./tb_site_work_drawing2";
import type { tb_site_work_drawing2Attributes, tb_site_work_drawing2CreationAttributes } from "./tb_site_work_drawing2";
import { tb_tbm as _tb_tbm } from "./tb_tbm";
import type { tb_tbmAttributes, tb_tbmCreationAttributes } from "./tb_tbm";
import { tb_tbm_photo as _tb_tbm_photo } from "./tb_tbm_photo";
import type { tb_tbm_photoAttributes, tb_tbm_photoCreationAttributes } from "./tb_tbm_photo";
import { tb_tbm_state as _tb_tbm_state } from "./tb_tbm_state";
import type { tb_tbm_stateAttributes, tb_tbm_stateCreationAttributes } from "./tb_tbm_state";
import { tb_trip as _tb_trip } from "./tb_trip";
import type { tb_tripAttributes, tb_tripCreationAttributes } from "./tb_trip";
import { tb_user as _tb_user } from "./tb_user";
import type { tb_userAttributes, tb_userCreationAttributes } from "./tb_user";
import { tb_user_device as _tb_user_device } from "./tb_user_device";
import type { tb_user_deviceAttributes, tb_user_deviceCreationAttributes } from "./tb_user_device";
import { tb_worker_location as _tb_worker_location } from "./tb_worker_location";
import type { tb_worker_locationAttributes, tb_worker_locationCreationAttributes } from "./tb_worker_location";
import { tb_worker_shelter as _tb_worker_shelter } from "./tb_worker_shelter";
import type { tb_worker_shelterAttributes, tb_worker_shelterCreationAttributes } from "./tb_worker_shelter";
import { test_table as _test_table } from "./test_table";
import type { test_tableAttributes, test_tableCreationAttributes } from "./test_table";

export {
  _tb_account as tb_account,
  _tb_area as tb_area,
  _tb_area_count_trip as tb_area_count_trip,
  _tb_auth as tb_auth,
  _tb_banner as tb_banner,
  _tb_blocked as tb_blocked,
  _tb_board as tb_board,
  _tb_board_photo as tb_board_photo,
  _tb_client as tb_client,
  _tb_commute as tb_commute,
  _tb_contract as tb_contract,
  _tb_contract_photo as tb_contract_photo,
  _tb_daily_board as tb_daily_board,
  _tb_danger_mat as tb_danger_mat,
  _tb_danger_mat_parts_items as tb_danger_mat_parts_items,
  _tb_danger_mat_use_plan as tb_danger_mat_use_plan,
  _tb_danger_mat_use_plan_files as tb_danger_mat_use_plan_files,
  _tb_danger_mat_use_worker as tb_danger_mat_use_worker,
  _tb_danger_parts as tb_danger_parts,
  _tb_driver as tb_driver,
  _tb_edu as tb_edu,
  _tb_edu_board as tb_edu_board,
  _tb_edu_contents as tb_edu_contents,
  _tb_edu_exam as tb_edu_exam,
  _tb_edu_exam_contents as tb_edu_exam_contents,
  _tb_edu_judge as tb_edu_judge,
  _tb_edu_judge_contents as tb_edu_judge_contents,
  _tb_edu_sch as tb_edu_sch,
  _tb_edu_sch_member as tb_edu_sch_member,
  _tb_file_upload as tb_file_upload,
  _tb_gps_tracking as tb_gps_tracking,
  _tb_health_alcohol as tb_health_alcohol,
  _tb_health_alcohol_hist as tb_health_alcohol_hist,
  _tb_health_bp as tb_health_bp,
  _tb_health_bp_hist as tb_health_bp_hist,
  _tb_health_oxygen as tb_health_oxygen,
  _tb_health_stress as tb_health_stress,
  _tb_holiday as tb_holiday,
  _tb_lib as tb_lib,
  _tb_listof_dayoff as tb_listof_dayoff,
  _tb_mat_pur as tb_mat_pur,
  _tb_mat_pur_photo as tb_mat_pur_photo,
  _tb_notifications as tb_notifications,
  _tb_notifications_temp as tb_notifications_temp,
  _tb_notify_message as tb_notify_message,
  _tb_partner as tb_partner,
  _tb_partner_contract as tb_partner_contract,
  _tb_pay as tb_pay,
  _tb_project as tb_project,
  _tb_project_area as tb_project_area,
  _tb_project_manager as tb_project_manager,
  _tb_qna as tb_qna,
  _tb_req_doc as tb_req_doc,
  _tb_risk as tb_risk,
  _tb_risk_action as tb_risk_action,
  _tb_risk_action_photo as tb_risk_action_photo,
  _tb_risk_actor as tb_risk_actor,
  _tb_risk_report as tb_risk_report,
  _tb_risk_report_action as tb_risk_report_action,
  _tb_risk_report_action_photo as tb_risk_report_action_photo,
  _tb_risk_report_photo as tb_risk_report_photo,
  _tb_risk_work as tb_risk_work,
  _tb_risk_work_contents as tb_risk_work_contents,
  _tb_risk_work_contents_hist as tb_risk_work_contents_hist,
  _tb_safety_prot_eqp_inventory as tb_safety_prot_eqp_inventory,
  _tb_safety_prot_eqp_issue as tb_safety_prot_eqp_issue,
  _tb_safety_prot_eqp_issue_dtail as tb_safety_prot_eqp_issue_dtail,
  _tb_safety_prot_eqp_purch_detail as tb_safety_prot_eqp_purch_detail,
  _tb_self_care as tb_self_care,
  _tb_service as tb_service,
  _tb_shelter as tb_shelter,
  _tb_siren as tb_siren,
  _tb_siren_state as tb_siren_state,
  _tb_site as tb_site,
  _tb_site_build_major as tb_site_build_major,
  _tb_site_build_middle as tb_site_build_middle,
  _tb_site_build_sub as tb_site_build_sub,
  _tb_site_config as tb_site_config,
  _tb_site_drawing as tb_site_drawing,
  _tb_site_ecn as tb_site_ecn,
  _tb_site_of_client as tb_site_of_client,
  _tb_site_of_user as tb_site_of_user,
  _tb_site_sch as tb_site_sch,
  _tb_site_sch_board as tb_site_sch_board,
  _tb_site_sch_work as tb_site_sch_work,
  _tb_site_sch_work_major as tb_site_sch_work_major,
  _tb_site_sch_work_middle as tb_site_sch_work_middle,
  _tb_site_work_area as tb_site_work_area,
  _tb_site_work_area2 as tb_site_work_area2,
  _tb_site_work_area_kind as tb_site_work_area_kind,
  _tb_site_work_area_type as tb_site_work_area_type,
  _tb_site_work_drawing as tb_site_work_drawing,
  _tb_site_work_drawing2 as tb_site_work_drawing2,
  _tb_tbm as tb_tbm,
  _tb_tbm_photo as tb_tbm_photo,
  _tb_tbm_state as tb_tbm_state,
  _tb_trip as tb_trip,
  _tb_user as tb_user,
  _tb_user_device as tb_user_device,
  _tb_worker_location as tb_worker_location,
  _tb_worker_shelter as tb_worker_shelter,
  _test_table as test_table,
};

export type {
  tb_accountAttributes,
  tb_accountCreationAttributes,
  tb_areaAttributes,
  tb_areaCreationAttributes,
  tb_area_count_tripAttributes,
  tb_area_count_tripCreationAttributes,
  tb_authAttributes,
  tb_authCreationAttributes,
  tb_bannerAttributes,
  tb_bannerCreationAttributes,
  tb_blockedAttributes,
  tb_blockedCreationAttributes,
  tb_boardAttributes,
  tb_boardCreationAttributes,
  tb_board_photoAttributes,
  tb_board_photoCreationAttributes,
  tb_clientAttributes,
  tb_clientCreationAttributes,
  tb_commuteAttributes,
  tb_commuteCreationAttributes,
  tb_contractAttributes,
  tb_contractCreationAttributes,
  tb_contract_photoAttributes,
  tb_contract_photoCreationAttributes,
  tb_daily_boardAttributes,
  tb_daily_boardCreationAttributes,
  tb_danger_matAttributes,
  tb_danger_matCreationAttributes,
  tb_danger_mat_parts_itemsAttributes,
  tb_danger_mat_parts_itemsCreationAttributes,
  tb_danger_mat_use_planAttributes,
  tb_danger_mat_use_planCreationAttributes,
  tb_danger_mat_use_plan_filesAttributes,
  tb_danger_mat_use_plan_filesCreationAttributes,
  tb_danger_mat_use_workerAttributes,
  tb_danger_mat_use_workerCreationAttributes,
  tb_danger_partsAttributes,
  tb_danger_partsCreationAttributes,
  tb_driverAttributes,
  tb_driverCreationAttributes,
  tb_eduAttributes,
  tb_eduCreationAttributes,
  tb_edu_boardAttributes,
  tb_edu_boardCreationAttributes,
  tb_edu_contentsAttributes,
  tb_edu_contentsCreationAttributes,
  tb_edu_examAttributes,
  tb_edu_examCreationAttributes,
  tb_edu_exam_contentsAttributes,
  tb_edu_exam_contentsCreationAttributes,
  tb_edu_judgeAttributes,
  tb_edu_judgeCreationAttributes,
  tb_edu_judge_contentsAttributes,
  tb_edu_judge_contentsCreationAttributes,
  tb_edu_schAttributes,
  tb_edu_schCreationAttributes,
  tb_edu_sch_memberAttributes,
  tb_edu_sch_memberCreationAttributes,
  tb_file_uploadAttributes,
  tb_file_uploadCreationAttributes,
  tb_gps_trackingAttributes,
  tb_gps_trackingCreationAttributes,
  tb_health_alcoholAttributes,
  tb_health_alcoholCreationAttributes,
  tb_health_alcohol_histAttributes,
  tb_health_alcohol_histCreationAttributes,
  tb_health_bpAttributes,
  tb_health_bpCreationAttributes,
  tb_health_bp_histAttributes,
  tb_health_bp_histCreationAttributes,
  tb_health_oxygenAttributes,
  tb_health_oxygenCreationAttributes,
  tb_health_stressAttributes,
  tb_health_stressCreationAttributes,
  tb_holidayAttributes,
  tb_holidayCreationAttributes,
  tb_libAttributes,
  tb_libCreationAttributes,
  tb_listof_dayoffAttributes,
  tb_listof_dayoffCreationAttributes,
  tb_mat_purAttributes,
  tb_mat_purCreationAttributes,
  tb_mat_pur_photoAttributes,
  tb_mat_pur_photoCreationAttributes,
  tb_notificationsAttributes,
  tb_notificationsCreationAttributes,
  tb_notifications_tempAttributes,
  tb_notifications_tempCreationAttributes,
  tb_notify_messageAttributes,
  tb_notify_messageCreationAttributes,
  tb_partnerAttributes,
  tb_partnerCreationAttributes,
  tb_partner_contractAttributes,
  tb_partner_contractCreationAttributes,
  tb_payAttributes,
  tb_payCreationAttributes,
  tb_projectAttributes,
  tb_projectCreationAttributes,
  tb_project_areaAttributes,
  tb_project_areaCreationAttributes,
  tb_project_managerAttributes,
  tb_project_managerCreationAttributes,
  tb_qnaAttributes,
  tb_qnaCreationAttributes,
  tb_req_docAttributes,
  tb_req_docCreationAttributes,
  tb_riskAttributes,
  tb_riskCreationAttributes,
  tb_risk_actionAttributes,
  tb_risk_actionCreationAttributes,
  tb_risk_action_photoAttributes,
  tb_risk_action_photoCreationAttributes,
  tb_risk_actorAttributes,
  tb_risk_actorCreationAttributes,
  tb_risk_reportAttributes,
  tb_risk_reportCreationAttributes,
  tb_risk_report_actionAttributes,
  tb_risk_report_actionCreationAttributes,
  tb_risk_report_action_photoAttributes,
  tb_risk_report_action_photoCreationAttributes,
  tb_risk_report_photoAttributes,
  tb_risk_report_photoCreationAttributes,
  tb_risk_workAttributes,
  tb_risk_workCreationAttributes,
  tb_risk_work_contentsAttributes,
  tb_risk_work_contentsCreationAttributes,
  tb_risk_work_contents_histAttributes,
  tb_risk_work_contents_histCreationAttributes,
  tb_safety_prot_eqp_inventoryAttributes,
  tb_safety_prot_eqp_inventoryCreationAttributes,
  tb_safety_prot_eqp_issueAttributes,
  tb_safety_prot_eqp_issueCreationAttributes,
  tb_safety_prot_eqp_issue_dtailAttributes,
  tb_safety_prot_eqp_issue_dtailCreationAttributes,
  tb_safety_prot_eqp_purch_detailAttributes,
  tb_safety_prot_eqp_purch_detailCreationAttributes,
  tb_self_careAttributes,
  tb_self_careCreationAttributes,
  tb_serviceAttributes,
  tb_serviceCreationAttributes,
  tb_shelterAttributes,
  tb_shelterCreationAttributes,
  tb_sirenAttributes,
  tb_sirenCreationAttributes,
  tb_siren_stateAttributes,
  tb_siren_stateCreationAttributes,
  tb_siteAttributes,
  tb_siteCreationAttributes,
  tb_site_build_majorAttributes,
  tb_site_build_majorCreationAttributes,
  tb_site_build_middleAttributes,
  tb_site_build_middleCreationAttributes,
  tb_site_build_subAttributes,
  tb_site_build_subCreationAttributes,
  tb_site_configAttributes,
  tb_site_configCreationAttributes,
  tb_site_drawingAttributes,
  tb_site_drawingCreationAttributes,
  tb_site_ecnAttributes,
  tb_site_ecnCreationAttributes,
  tb_site_of_clientAttributes,
  tb_site_of_clientCreationAttributes,
  tb_site_of_userAttributes,
  tb_site_of_userCreationAttributes,
  tb_site_schAttributes,
  tb_site_schCreationAttributes,
  tb_site_sch_boardAttributes,
  tb_site_sch_boardCreationAttributes,
  tb_site_sch_workAttributes,
  tb_site_sch_workCreationAttributes,
  tb_site_sch_work_majorAttributes,
  tb_site_sch_work_majorCreationAttributes,
  tb_site_sch_work_middleAttributes,
  tb_site_sch_work_middleCreationAttributes,
  tb_site_work_areaAttributes,
  tb_site_work_areaCreationAttributes,
  tb_site_work_area2Attributes,
  tb_site_work_area2CreationAttributes,
  tb_site_work_area_kindAttributes,
  tb_site_work_area_kindCreationAttributes,
  tb_site_work_area_typeAttributes,
  tb_site_work_area_typeCreationAttributes,
  tb_site_work_drawingAttributes,
  tb_site_work_drawingCreationAttributes,
  tb_site_work_drawing2Attributes,
  tb_site_work_drawing2CreationAttributes,
  tb_tbmAttributes,
  tb_tbmCreationAttributes,
  tb_tbm_photoAttributes,
  tb_tbm_photoCreationAttributes,
  tb_tbm_stateAttributes,
  tb_tbm_stateCreationAttributes,
  tb_tripAttributes,
  tb_tripCreationAttributes,
  tb_userAttributes,
  tb_userCreationAttributes,
  tb_user_deviceAttributes,
  tb_user_deviceCreationAttributes,
  tb_worker_locationAttributes,
  tb_worker_locationCreationAttributes,
  tb_worker_shelterAttributes,
  tb_worker_shelterCreationAttributes,
  test_tableAttributes,
  test_tableCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const tb_account = _tb_account.initModel(sequelize);
  const tb_area = _tb_area.initModel(sequelize);
  const tb_area_count_trip = _tb_area_count_trip.initModel(sequelize);
  const tb_auth = _tb_auth.initModel(sequelize);
  const tb_banner = _tb_banner.initModel(sequelize);
  const tb_blocked = _tb_blocked.initModel(sequelize);
  const tb_board = _tb_board.initModel(sequelize);
  const tb_board_photo = _tb_board_photo.initModel(sequelize);
  const tb_client = _tb_client.initModel(sequelize);
  const tb_commute = _tb_commute.initModel(sequelize);
  const tb_contract = _tb_contract.initModel(sequelize);
  const tb_contract_photo = _tb_contract_photo.initModel(sequelize);
  const tb_daily_board = _tb_daily_board.initModel(sequelize);
  const tb_danger_mat = _tb_danger_mat.initModel(sequelize);
  const tb_danger_mat_parts_items = _tb_danger_mat_parts_items.initModel(sequelize);
  const tb_danger_mat_use_plan = _tb_danger_mat_use_plan.initModel(sequelize);
  const tb_danger_mat_use_plan_files = _tb_danger_mat_use_plan_files.initModel(sequelize);
  const tb_danger_mat_use_worker = _tb_danger_mat_use_worker.initModel(sequelize);
  const tb_danger_parts = _tb_danger_parts.initModel(sequelize);
  const tb_driver = _tb_driver.initModel(sequelize);
  const tb_edu = _tb_edu.initModel(sequelize);
  const tb_edu_board = _tb_edu_board.initModel(sequelize);
  const tb_edu_contents = _tb_edu_contents.initModel(sequelize);
  const tb_edu_exam = _tb_edu_exam.initModel(sequelize);
  const tb_edu_exam_contents = _tb_edu_exam_contents.initModel(sequelize);
  const tb_edu_judge = _tb_edu_judge.initModel(sequelize);
  const tb_edu_judge_contents = _tb_edu_judge_contents.initModel(sequelize);
  const tb_edu_sch = _tb_edu_sch.initModel(sequelize);
  const tb_edu_sch_member = _tb_edu_sch_member.initModel(sequelize);
  const tb_file_upload = _tb_file_upload.initModel(sequelize);
  const tb_gps_tracking = _tb_gps_tracking.initModel(sequelize);
  const tb_health_alcohol = _tb_health_alcohol.initModel(sequelize);
  const tb_health_alcohol_hist = _tb_health_alcohol_hist.initModel(sequelize);
  const tb_health_bp = _tb_health_bp.initModel(sequelize);
  const tb_health_bp_hist = _tb_health_bp_hist.initModel(sequelize);
  const tb_health_oxygen = _tb_health_oxygen.initModel(sequelize);
  const tb_health_stress = _tb_health_stress.initModel(sequelize);
  const tb_holiday = _tb_holiday.initModel(sequelize);
  const tb_lib = _tb_lib.initModel(sequelize);
  const tb_listof_dayoff = _tb_listof_dayoff.initModel(sequelize);
  const tb_mat_pur = _tb_mat_pur.initModel(sequelize);
  const tb_mat_pur_photo = _tb_mat_pur_photo.initModel(sequelize);
  const tb_notifications = _tb_notifications.initModel(sequelize);
  const tb_notifications_temp = _tb_notifications_temp.initModel(sequelize);
  const tb_notify_message = _tb_notify_message.initModel(sequelize);
  const tb_partner = _tb_partner.initModel(sequelize);
  const tb_partner_contract = _tb_partner_contract.initModel(sequelize);
  const tb_pay = _tb_pay.initModel(sequelize);
  const tb_project = _tb_project.initModel(sequelize);
  const tb_project_area = _tb_project_area.initModel(sequelize);
  const tb_project_manager = _tb_project_manager.initModel(sequelize);
  const tb_qna = _tb_qna.initModel(sequelize);
  const tb_req_doc = _tb_req_doc.initModel(sequelize);
  const tb_risk = _tb_risk.initModel(sequelize);
  const tb_risk_action = _tb_risk_action.initModel(sequelize);
  const tb_risk_action_photo = _tb_risk_action_photo.initModel(sequelize);
  const tb_risk_actor = _tb_risk_actor.initModel(sequelize);
  const tb_risk_report = _tb_risk_report.initModel(sequelize);
  const tb_risk_report_action = _tb_risk_report_action.initModel(sequelize);
  const tb_risk_report_action_photo = _tb_risk_report_action_photo.initModel(sequelize);
  const tb_risk_report_photo = _tb_risk_report_photo.initModel(sequelize);
  const tb_risk_work = _tb_risk_work.initModel(sequelize);
  const tb_risk_work_contents = _tb_risk_work_contents.initModel(sequelize);
  const tb_risk_work_contents_hist = _tb_risk_work_contents_hist.initModel(sequelize);
  const tb_safety_prot_eqp_inventory = _tb_safety_prot_eqp_inventory.initModel(sequelize);
  const tb_safety_prot_eqp_issue = _tb_safety_prot_eqp_issue.initModel(sequelize);
  const tb_safety_prot_eqp_issue_dtail = _tb_safety_prot_eqp_issue_dtail.initModel(sequelize);
  const tb_safety_prot_eqp_purch_detail = _tb_safety_prot_eqp_purch_detail.initModel(sequelize);
  const tb_self_care = _tb_self_care.initModel(sequelize);
  const tb_service = _tb_service.initModel(sequelize);
  const tb_shelter = _tb_shelter.initModel(sequelize);
  const tb_siren = _tb_siren.initModel(sequelize);
  const tb_siren_state = _tb_siren_state.initModel(sequelize);
  const tb_site = _tb_site.initModel(sequelize);
  const tb_site_build_major = _tb_site_build_major.initModel(sequelize);
  const tb_site_build_middle = _tb_site_build_middle.initModel(sequelize);
  const tb_site_build_sub = _tb_site_build_sub.initModel(sequelize);
  const tb_site_config = _tb_site_config.initModel(sequelize);
  const tb_site_drawing = _tb_site_drawing.initModel(sequelize);
  const tb_site_ecn = _tb_site_ecn.initModel(sequelize);
  const tb_site_of_client = _tb_site_of_client.initModel(sequelize);
  const tb_site_of_user = _tb_site_of_user.initModel(sequelize);
  const tb_site_sch = _tb_site_sch.initModel(sequelize);
  const tb_site_sch_board = _tb_site_sch_board.initModel(sequelize);
  const tb_site_sch_work = _tb_site_sch_work.initModel(sequelize);
  const tb_site_sch_work_major = _tb_site_sch_work_major.initModel(sequelize);
  const tb_site_sch_work_middle = _tb_site_sch_work_middle.initModel(sequelize);
  const tb_site_work_area = _tb_site_work_area.initModel(sequelize);
  const tb_site_work_area2 = _tb_site_work_area2.initModel(sequelize);
  const tb_site_work_area_kind = _tb_site_work_area_kind.initModel(sequelize);
  const tb_site_work_area_type = _tb_site_work_area_type.initModel(sequelize);
  const tb_site_work_drawing = _tb_site_work_drawing.initModel(sequelize);
  const tb_site_work_drawing2 = _tb_site_work_drawing2.initModel(sequelize);
  const tb_tbm = _tb_tbm.initModel(sequelize);
  const tb_tbm_photo = _tb_tbm_photo.initModel(sequelize);
  const tb_tbm_state = _tb_tbm_state.initModel(sequelize);
  const tb_trip = _tb_trip.initModel(sequelize);
  const tb_user = _tb_user.initModel(sequelize);
  const tb_user_device = _tb_user_device.initModel(sequelize);
  const tb_worker_location = _tb_worker_location.initModel(sequelize);
  const tb_worker_shelter = _tb_worker_shelter.initModel(sequelize);
  const test_table = _test_table.initModel(sequelize);

  tb_blocked.belongsTo(tb_account, { as: "account_code_tb_account", foreignKey: "account_code"});
  tb_account.hasMany(tb_blocked, { as: "tb_blockeds", foreignKey: "account_code"});
  tb_board.belongsTo(tb_account, { as: "register_code_tb_account", foreignKey: "register_code"});
  tb_account.hasMany(tb_board, { as: "tb_boards", foreignKey: "register_code"});
  tb_board.belongsTo(tb_account, { as: "updater_code_tb_account", foreignKey: "updater_code"});
  tb_account.hasMany(tb_board, { as: "updater_code_tb_boards", foreignKey: "updater_code"});
  tb_commute.belongsTo(tb_account, { as: "account_code_tb_account", foreignKey: "account_code"});
  tb_account.hasMany(tb_commute, { as: "tb_commutes", foreignKey: "account_code"});
  tb_contract.belongsTo(tb_account, { as: "account_code_tb_account", foreignKey: "account_code"});
  tb_account.hasMany(tb_contract, { as: "tb_contracts", foreignKey: "account_code"});
  tb_daily_board.belongsTo(tb_account, { as: "register_code_tb_account", foreignKey: "register_code"});
  tb_account.hasMany(tb_daily_board, { as: "tb_daily_boards", foreignKey: "register_code"});
  tb_daily_board.belongsTo(tb_account, { as: "updater_code_tb_account", foreignKey: "updater_code"});
  tb_account.hasMany(tb_daily_board, { as: "updater_code_tb_daily_boards", foreignKey: "updater_code"});
  tb_danger_mat.belongsTo(tb_account, { as: "register_code_tb_account", foreignKey: "register_code"});
  tb_account.hasMany(tb_danger_mat, { as: "tb_danger_mats", foreignKey: "register_code"});
  tb_danger_mat.belongsTo(tb_account, { as: "updater_code_tb_account", foreignKey: "updater_code"});
  tb_account.hasMany(tb_danger_mat, { as: "updater_code_tb_danger_mats", foreignKey: "updater_code"});
  tb_danger_mat_use_plan.belongsTo(tb_account, { as: "draft_code_tb_account", foreignKey: "draft_code"});
  tb_account.hasMany(tb_danger_mat_use_plan, { as: "tb_danger_mat_use_plans", foreignKey: "draft_code"});
  tb_danger_mat_use_plan.belongsTo(tb_account, { as: "register_code_tb_account", foreignKey: "register_code"});
  tb_account.hasMany(tb_danger_mat_use_plan, { as: "register_code_tb_danger_mat_use_plans", foreignKey: "register_code"});
  tb_danger_mat_use_plan.belongsTo(tb_account, { as: "review_code_tb_account", foreignKey: "review_code"});
  tb_account.hasMany(tb_danger_mat_use_plan, { as: "review_code_tb_danger_mat_use_plans", foreignKey: "review_code"});
  tb_danger_mat_use_plan.belongsTo(tb_account, { as: "updater_code_tb_account", foreignKey: "updater_code"});
  tb_account.hasMany(tb_danger_mat_use_plan, { as: "updater_code_tb_danger_mat_use_plans", foreignKey: "updater_code"});
  tb_danger_mat_use_worker.belongsTo(tb_account, { as: "register_code_tb_account", foreignKey: "register_code"});
  tb_account.hasMany(tb_danger_mat_use_worker, { as: "tb_danger_mat_use_workers", foreignKey: "register_code"});
  tb_danger_mat_use_worker.belongsTo(tb_account, { as: "updater_code_tb_account", foreignKey: "updater_code"});
  tb_account.hasMany(tb_danger_mat_use_worker, { as: "updater_code_tb_danger_mat_use_workers", foreignKey: "updater_code"});
  tb_danger_mat_use_worker.belongsTo(tb_account, { as: "worker_code_tb_account", foreignKey: "worker_code"});
  tb_account.hasMany(tb_danger_mat_use_worker, { as: "worker_code_tb_danger_mat_use_workers", foreignKey: "worker_code"});
  tb_edu.belongsTo(tb_account, { as: "register_code_tb_account", foreignKey: "register_code"});
  tb_account.hasMany(tb_edu, { as: "tb_edus", foreignKey: "register_code"});
  tb_edu.belongsTo(tb_account, { as: "updater_code_tb_account", foreignKey: "updater_code"});
  tb_account.hasMany(tb_edu, { as: "updater_code_tb_edus", foreignKey: "updater_code"});
  tb_edu_board.belongsTo(tb_account, { as: "register_code_tb_account", foreignKey: "register_code"});
  tb_account.hasMany(tb_edu_board, { as: "tb_edu_boards", foreignKey: "register_code"});
  tb_edu_board.belongsTo(tb_account, { as: "updater_code_tb_account", foreignKey: "updater_code"});
  tb_account.hasMany(tb_edu_board, { as: "updater_code_tb_edu_boards", foreignKey: "updater_code"});
  tb_edu_exam.belongsTo(tb_account, { as: "register_code_tb_account", foreignKey: "register_code"});
  tb_account.hasMany(tb_edu_exam, { as: "tb_edu_exams", foreignKey: "register_code"});
  tb_edu_exam.belongsTo(tb_account, { as: "updater_code_tb_account", foreignKey: "updater_code"});
  tb_account.hasMany(tb_edu_exam, { as: "updater_code_tb_edu_exams", foreignKey: "updater_code"});
  tb_edu_judge.belongsTo(tb_account, { as: "register_code_tb_account", foreignKey: "register_code"});
  tb_account.hasMany(tb_edu_judge, { as: "tb_edu_judges", foreignKey: "register_code"});
  tb_edu_judge.belongsTo(tb_account, { as: "updater_code_tb_account", foreignKey: "updater_code"});
  tb_account.hasMany(tb_edu_judge, { as: "updater_code_tb_edu_judges", foreignKey: "updater_code"});
  tb_edu_judge.belongsTo(tb_account, { as: "account_code_tb_account", foreignKey: "account_code"});
  tb_account.hasMany(tb_edu_judge, { as: "account_code_tb_edu_judges", foreignKey: "account_code"});
  tb_edu_sch.belongsTo(tb_account, { as: "updater_code_tb_account", foreignKey: "updater_code"});
  tb_account.hasMany(tb_edu_sch, { as: "tb_edu_sches", foreignKey: "updater_code"});
  tb_edu_sch_member.belongsTo(tb_account, { as: "account_code_tb_account", foreignKey: "account_code"});
  tb_account.hasMany(tb_edu_sch_member, { as: "tb_edu_sch_members", foreignKey: "account_code"});
  tb_health_alcohol.belongsTo(tb_account, { as: "account_code_tb_account", foreignKey: "account_code"});
  tb_account.hasMany(tb_health_alcohol, { as: "tb_health_alcohols", foreignKey: "account_code"});
  tb_health_alcohol_hist.belongsTo(tb_account, { as: "account_code_tb_account", foreignKey: "account_code"});
  tb_account.hasMany(tb_health_alcohol_hist, { as: "tb_health_alcohol_hists", foreignKey: "account_code"});
  tb_health_bp.belongsTo(tb_account, { as: "account_code_tb_account", foreignKey: "account_code"});
  tb_account.hasMany(tb_health_bp, { as: "tb_health_bps", foreignKey: "account_code"});
  tb_health_bp_hist.belongsTo(tb_account, { as: "account_code_tb_account", foreignKey: "account_code"});
  tb_account.hasMany(tb_health_bp_hist, { as: "tb_health_bp_hists", foreignKey: "account_code"});
  tb_health_oxygen.belongsTo(tb_account, { as: "account_code_tb_account", foreignKey: "account_code"});
  tb_account.hasMany(tb_health_oxygen, { as: "tb_health_oxygens", foreignKey: "account_code"});
  tb_health_stress.belongsTo(tb_account, { as: "account_code_tb_account", foreignKey: "account_code"});
  tb_account.hasMany(tb_health_stress, { as: "tb_health_stresses", foreignKey: "account_code"});
  tb_mat_pur.belongsTo(tb_account, { as: "register_code_tb_account", foreignKey: "register_code"});
  tb_account.hasMany(tb_mat_pur, { as: "tb_mat_purs", foreignKey: "register_code"});
  tb_mat_pur.belongsTo(tb_account, { as: "updater_code_tb_account", foreignKey: "updater_code"});
  tb_account.hasMany(tb_mat_pur, { as: "updater_code_tb_mat_purs", foreignKey: "updater_code"});
  tb_partner.belongsTo(tb_account, { as: "register_code_tb_account", foreignKey: "register_code"});
  tb_account.hasMany(tb_partner, { as: "tb_partners", foreignKey: "register_code"});
  tb_partner.belongsTo(tb_account, { as: "updater_code_tb_account", foreignKey: "updater_code"});
  tb_account.hasMany(tb_partner, { as: "updater_code_tb_partners", foreignKey: "updater_code"});
  tb_partner_contract.belongsTo(tb_account, { as: "register_code_tb_account", foreignKey: "register_code"});
  tb_account.hasMany(tb_partner_contract, { as: "tb_partner_contracts", foreignKey: "register_code"});
  tb_partner_contract.belongsTo(tb_account, { as: "updater_code_tb_account", foreignKey: "updater_code"});
  tb_account.hasMany(tb_partner_contract, { as: "updater_code_tb_partner_contracts", foreignKey: "updater_code"});
  tb_pay.belongsTo(tb_account, { as: "account_code_tb_account", foreignKey: "account_code"});
  tb_account.hasMany(tb_pay, { as: "tb_pays", foreignKey: "account_code"});
  tb_pay.belongsTo(tb_account, { as: "register_code_tb_account", foreignKey: "register_code"});
  tb_account.hasMany(tb_pay, { as: "register_code_tb_pays", foreignKey: "register_code"});
  tb_pay.belongsTo(tb_account, { as: "updater_code_tb_account", foreignKey: "updater_code"});
  tb_account.hasMany(tb_pay, { as: "updater_code_tb_pays", foreignKey: "updater_code"});
  tb_req_doc.belongsTo(tb_account, { as: "account_code_tb_account", foreignKey: "account_code"});
  tb_account.hasMany(tb_req_doc, { as: "tb_req_docs", foreignKey: "account_code"});
  tb_risk.belongsTo(tb_account, { as: "register_code_tb_account", foreignKey: "register_code"});
  tb_account.hasMany(tb_risk, { as: "tb_risks", foreignKey: "register_code"});
  tb_risk.belongsTo(tb_account, { as: "updater_code_tb_account", foreignKey: "updater_code"});
  tb_account.hasMany(tb_risk, { as: "updater_code_tb_risks", foreignKey: "updater_code"});
  tb_risk_action.belongsTo(tb_account, { as: "register_code_tb_account", foreignKey: "register_code"});
  tb_account.hasMany(tb_risk_action, { as: "tb_risk_actions", foreignKey: "register_code"});
  tb_risk_action.belongsTo(tb_account, { as: "updater_code_tb_account", foreignKey: "updater_code"});
  tb_account.hasMany(tb_risk_action, { as: "updater_code_tb_risk_actions", foreignKey: "updater_code"});
  tb_risk_actor.belongsTo(tb_account, { as: "actor_code_tb_account", foreignKey: "actor_code"});
  tb_account.hasMany(tb_risk_actor, { as: "tb_risk_actors", foreignKey: "actor_code"});
  tb_risk_report.belongsTo(tb_account, { as: "register_code_tb_account", foreignKey: "register_code"});
  tb_account.hasMany(tb_risk_report, { as: "tb_risk_reports", foreignKey: "register_code"});
  tb_risk_report.belongsTo(tb_account, { as: "updater_code_tb_account", foreignKey: "updater_code"});
  tb_account.hasMany(tb_risk_report, { as: "updater_code_tb_risk_reports", foreignKey: "updater_code"});
  tb_risk_report_action.belongsTo(tb_account, { as: "register_code_tb_account", foreignKey: "register_code"});
  tb_account.hasMany(tb_risk_report_action, { as: "tb_risk_report_actions", foreignKey: "register_code"});
  tb_risk_report_action.belongsTo(tb_account, { as: "updater_code_tb_account", foreignKey: "updater_code"});
  tb_account.hasMany(tb_risk_report_action, { as: "updater_code_tb_risk_report_actions", foreignKey: "updater_code"});
  tb_safety_prot_eqp_inventory.belongsTo(tb_account, { as: "register_code_tb_account", foreignKey: "register_code"});
  tb_account.hasMany(tb_safety_prot_eqp_inventory, { as: "tb_safety_prot_eqp_inventories", foreignKey: "register_code"});
  tb_safety_prot_eqp_inventory.belongsTo(tb_account, { as: "updater_code_tb_account", foreignKey: "updater_code"});
  tb_account.hasMany(tb_safety_prot_eqp_inventory, { as: "updater_code_tb_safety_prot_eqp_inventories", foreignKey: "updater_code"});
  tb_safety_prot_eqp_issue.belongsTo(tb_account, { as: "register_code_tb_account", foreignKey: "register_code"});
  tb_account.hasMany(tb_safety_prot_eqp_issue, { as: "tb_safety_prot_eqp_issues", foreignKey: "register_code"});
  tb_safety_prot_eqp_issue.belongsTo(tb_account, { as: "updater_code_tb_account", foreignKey: "updater_code"});
  tb_account.hasMany(tb_safety_prot_eqp_issue, { as: "updater_code_tb_safety_prot_eqp_issues", foreignKey: "updater_code"});
  tb_safety_prot_eqp_issue.belongsTo(tb_account, { as: "worker_code_tb_account", foreignKey: "worker_code"});
  tb_account.hasMany(tb_safety_prot_eqp_issue, { as: "worker_code_tb_safety_prot_eqp_issues", foreignKey: "worker_code"});
  tb_safety_prot_eqp_purch_detail.belongsTo(tb_account, { as: "register_code_tb_account", foreignKey: "register_code"});
  tb_account.hasMany(tb_safety_prot_eqp_purch_detail, { as: "tb_safety_prot_eqp_purch_details", foreignKey: "register_code"});
  tb_safety_prot_eqp_purch_detail.belongsTo(tb_account, { as: "updater_code_tb_account", foreignKey: "updater_code"});
  tb_account.hasMany(tb_safety_prot_eqp_purch_detail, { as: "updater_code_tb_safety_prot_eqp_purch_details", foreignKey: "updater_code"});
  tb_shelter.belongsTo(tb_account, { as: "register_code_tb_account", foreignKey: "register_code"});
  tb_account.hasMany(tb_shelter, { as: "tb_shelters", foreignKey: "register_code"});
  tb_shelter.belongsTo(tb_account, { as: "updater_code_tb_account", foreignKey: "updater_code"});
  tb_account.hasMany(tb_shelter, { as: "updater_code_tb_shelters", foreignKey: "updater_code"});
  tb_siren.belongsTo(tb_account, { as: "register_code_tb_account", foreignKey: "register_code"});
  tb_account.hasMany(tb_siren, { as: "tb_sirens", foreignKey: "register_code"});
  tb_siren.belongsTo(tb_account, { as: "updater_code_tb_account", foreignKey: "updater_code"});
  tb_account.hasMany(tb_siren, { as: "updater_code_tb_sirens", foreignKey: "updater_code"});
  tb_siren_state.belongsTo(tb_account, { as: "worker_code_tb_account", foreignKey: "worker_code"});
  tb_account.hasMany(tb_siren_state, { as: "tb_siren_states", foreignKey: "worker_code"});
  tb_site.belongsTo(tb_account, { as: "register_code_tb_account", foreignKey: "register_code"});
  tb_account.hasMany(tb_site, { as: "tb_sites", foreignKey: "register_code"});
  tb_site.belongsTo(tb_account, { as: "updater_code_tb_account", foreignKey: "updater_code"});
  tb_account.hasMany(tb_site, { as: "updater_code_tb_sites", foreignKey: "updater_code"});
  tb_site_build_major.belongsTo(tb_account, { as: "register_code_tb_account", foreignKey: "register_code"});
  tb_account.hasMany(tb_site_build_major, { as: "tb_site_build_majors", foreignKey: "register_code"});
  tb_site_build_major.belongsTo(tb_account, { as: "updater_code_tb_account", foreignKey: "updater_code"});
  tb_account.hasMany(tb_site_build_major, { as: "updater_code_tb_site_build_majors", foreignKey: "updater_code"});
  tb_site_build_middle.belongsTo(tb_account, { as: "register_code_tb_account", foreignKey: "register_code"});
  tb_account.hasMany(tb_site_build_middle, { as: "tb_site_build_middles", foreignKey: "register_code"});
  tb_site_build_middle.belongsTo(tb_account, { as: "updater_code_tb_account", foreignKey: "updater_code"});
  tb_account.hasMany(tb_site_build_middle, { as: "updater_code_tb_site_build_middles", foreignKey: "updater_code"});
  tb_site_build_sub.belongsTo(tb_account, { as: "register_code_tb_account", foreignKey: "register_code"});
  tb_account.hasMany(tb_site_build_sub, { as: "tb_site_build_subs", foreignKey: "register_code"});
  tb_site_build_sub.belongsTo(tb_account, { as: "updater_code_tb_account", foreignKey: "updater_code"});
  tb_account.hasMany(tb_site_build_sub, { as: "updater_code_tb_site_build_subs", foreignKey: "updater_code"});
  tb_site_config.belongsTo(tb_account, { as: "register_code_tb_account", foreignKey: "register_code"});
  tb_account.hasMany(tb_site_config, { as: "tb_site_configs", foreignKey: "register_code"});
  tb_site_config.belongsTo(tb_account, { as: "updater_code_tb_account", foreignKey: "updater_code"});
  tb_account.hasMany(tb_site_config, { as: "updater_code_tb_site_configs", foreignKey: "updater_code"});
  tb_site_drawing.belongsTo(tb_account, { as: "register_code_tb_account", foreignKey: "register_code"});
  tb_account.hasMany(tb_site_drawing, { as: "tb_site_drawings", foreignKey: "register_code"});
  tb_site_drawing.belongsTo(tb_account, { as: "updater_code_tb_account", foreignKey: "updater_code"});
  tb_account.hasMany(tb_site_drawing, { as: "updater_code_tb_site_drawings", foreignKey: "updater_code"});
  tb_site_ecn.belongsTo(tb_account, { as: "register_code_tb_account", foreignKey: "register_code"});
  tb_account.hasMany(tb_site_ecn, { as: "tb_site_ecns", foreignKey: "register_code"});
  tb_site_ecn.belongsTo(tb_account, { as: "updater_code_tb_account", foreignKey: "updater_code"});
  tb_account.hasMany(tb_site_ecn, { as: "updater_code_tb_site_ecns", foreignKey: "updater_code"});
  tb_site_sch.belongsTo(tb_account, { as: "register_code_tb_account", foreignKey: "register_code"});
  tb_account.hasMany(tb_site_sch, { as: "tb_site_sches", foreignKey: "register_code"});
  tb_site_sch.belongsTo(tb_account, { as: "updater_code_tb_account", foreignKey: "updater_code"});
  tb_account.hasMany(tb_site_sch, { as: "updater_code_tb_site_sches", foreignKey: "updater_code"});
  tb_site_sch_board.belongsTo(tb_account, { as: "register_code_tb_account", foreignKey: "register_code"});
  tb_account.hasMany(tb_site_sch_board, { as: "tb_site_sch_boards", foreignKey: "register_code"});
  tb_site_sch_board.belongsTo(tb_account, { as: "updater_code_tb_account", foreignKey: "updater_code"});
  tb_account.hasMany(tb_site_sch_board, { as: "updater_code_tb_site_sch_boards", foreignKey: "updater_code"});
  tb_site_sch_work.belongsTo(tb_account, { as: "register_code_tb_account", foreignKey: "register_code"});
  tb_account.hasMany(tb_site_sch_work, { as: "tb_site_sch_works", foreignKey: "register_code"});
  tb_site_sch_work.belongsTo(tb_account, { as: "updater_code_tb_account", foreignKey: "updater_code"});
  tb_account.hasMany(tb_site_sch_work, { as: "updater_code_tb_site_sch_works", foreignKey: "updater_code"});
  tb_site_sch_work_major.belongsTo(tb_account, { as: "register_code_tb_account", foreignKey: "register_code"});
  tb_account.hasMany(tb_site_sch_work_major, { as: "tb_site_sch_work_majors", foreignKey: "register_code"});
  tb_site_sch_work_major.belongsTo(tb_account, { as: "updater_code_tb_account", foreignKey: "updater_code"});
  tb_account.hasMany(tb_site_sch_work_major, { as: "updater_code_tb_site_sch_work_majors", foreignKey: "updater_code"});
  tb_site_sch_work_middle.belongsTo(tb_account, { as: "register_code_tb_account", foreignKey: "register_code"});
  tb_account.hasMany(tb_site_sch_work_middle, { as: "tb_site_sch_work_middles", foreignKey: "register_code"});
  tb_site_sch_work_middle.belongsTo(tb_account, { as: "updater_code_tb_account", foreignKey: "updater_code"});
  tb_account.hasMany(tb_site_sch_work_middle, { as: "updater_code_tb_site_sch_work_middles", foreignKey: "updater_code"});
  tb_site_work_area.belongsTo(tb_account, { as: "register_code_tb_account", foreignKey: "register_code"});
  tb_account.hasMany(tb_site_work_area, { as: "tb_site_work_areas", foreignKey: "register_code"});
  tb_site_work_area.belongsTo(tb_account, { as: "updater_code_tb_account", foreignKey: "updater_code"});
  tb_account.hasMany(tb_site_work_area, { as: "updater_code_tb_site_work_areas", foreignKey: "updater_code"});
  tb_site_work_area2.belongsTo(tb_account, { as: "register_code_tb_account", foreignKey: "register_code"});
  tb_account.hasMany(tb_site_work_area2, { as: "tb_site_work_area2s", foreignKey: "register_code"});
  tb_site_work_area2.belongsTo(tb_account, { as: "updater_code_tb_account", foreignKey: "updater_code"});
  tb_account.hasMany(tb_site_work_area2, { as: "updater_code_tb_site_work_area2s", foreignKey: "updater_code"});
  tb_tbm.belongsTo(tb_account, { as: "register_code_tb_account", foreignKey: "register_code"});
  tb_account.hasMany(tb_tbm, { as: "tb_tbms", foreignKey: "register_code"});
  tb_tbm.belongsTo(tb_account, { as: "updater_code_tb_account", foreignKey: "updater_code"});
  tb_account.hasMany(tb_tbm, { as: "updater_code_tb_tbms", foreignKey: "updater_code"});
  tb_tbm_state.belongsTo(tb_account, { as: "register_code_tb_account", foreignKey: "register_code"});
  tb_account.hasMany(tb_tbm_state, { as: "tb_tbm_states", foreignKey: "register_code"});
  tb_tbm_state.belongsTo(tb_account, { as: "updater_code_tb_account", foreignKey: "updater_code"});
  tb_account.hasMany(tb_tbm_state, { as: "updater_code_tb_tbm_states", foreignKey: "updater_code"});
  tb_tbm_state.belongsTo(tb_account, { as: "worker_code_tb_account", foreignKey: "worker_code"});
  tb_account.hasMany(tb_tbm_state, { as: "worker_code_tb_tbm_states", foreignKey: "worker_code"});
  tb_worker_location.belongsTo(tb_account, { as: "worker_code_tb_account", foreignKey: "worker_code"});
  tb_account.hasMany(tb_worker_location, { as: "tb_worker_locations", foreignKey: "worker_code"});
  tb_worker_shelter.belongsTo(tb_account, { as: "worker_code_tb_account", foreignKey: "worker_code"});
  tb_account.hasMany(tb_worker_shelter, { as: "tb_worker_shelters", foreignKey: "worker_code"});
  tb_area_count_trip.belongsTo(tb_area, { as: "area", foreignKey: "area_id"});
  tb_area.hasOne(tb_area_count_trip, { as: "tb_area_count_trip", foreignKey: "area_id"});
  tb_project_area.belongsTo(tb_area, { as: "area", foreignKey: "area_id"});
  tb_area.hasMany(tb_project_area, { as: "tb_project_areas", foreignKey: "area_id"});
  tb_trip.belongsTo(tb_area, { as: "loading_area", foreignKey: "loading_area_id"});
  tb_area.hasMany(tb_trip, { as: "tb_trips", foreignKey: "loading_area_id"});
  tb_trip.belongsTo(tb_area, { as: "unloading_area", foreignKey: "unloading_area_id"});
  tb_area.hasMany(tb_trip, { as: "unloading_area_tb_trips", foreignKey: "unloading_area_id"});
  tb_site_of_user.belongsTo(tb_auth, { as: "auth_code_tb_auth", foreignKey: "auth_code"});
  tb_auth.hasMany(tb_site_of_user, { as: "tb_site_of_users", foreignKey: "auth_code"});
  tb_user.belongsTo(tb_auth, { as: "auth_code_tb_auth", foreignKey: "auth_code"});
  tb_auth.hasMany(tb_user, { as: "tb_users", foreignKey: "auth_code"});
  tb_board_photo.belongsTo(tb_board, { as: "board_code_tb_board", foreignKey: "board_code"});
  tb_board.hasMany(tb_board_photo, { as: "tb_board_photos", foreignKey: "board_code"});
  tb_danger_mat.belongsTo(tb_client, { as: "client_code_tb_client", foreignKey: "client_code"});
  tb_client.hasMany(tb_danger_mat, { as: "tb_danger_mats", foreignKey: "client_code"});
  tb_edu.belongsTo(tb_client, { as: "client_code_tb_client", foreignKey: "client_code"});
  tb_client.hasMany(tb_edu, { as: "tb_edus", foreignKey: "client_code"});
  tb_listof_dayoff.belongsTo(tb_client, { as: "client_code_tb_client", foreignKey: "client_code"});
  tb_client.hasMany(tb_listof_dayoff, { as: "tb_listof_dayoffs", foreignKey: "client_code"});
  tb_service.belongsTo(tb_client, { as: "client_code_tb_client", foreignKey: "client_code"});
  tb_client.hasMany(tb_service, { as: "tb_services", foreignKey: "client_code"});
  tb_site.belongsTo(tb_client, { as: "client_code_tb_client", foreignKey: "client_code"});
  tb_client.hasMany(tb_site, { as: "tb_sites", foreignKey: "client_code"});
  tb_site_of_client.belongsTo(tb_client, { as: "client_code_tb_client", foreignKey: "client_code"});
  tb_client.hasMany(tb_site_of_client, { as: "tb_site_of_clients", foreignKey: "client_code"});
  tb_user.belongsTo(tb_client, { as: "client_code_tb_client", foreignKey: "client_code"});
  tb_client.hasMany(tb_user, { as: "tb_users", foreignKey: "client_code"});
  tb_self_care.belongsTo(tb_contract, { as: "contract_code_tb_contract", foreignKey: "contract_code"});
  tb_contract.hasMany(tb_self_care, { as: "tb_self_cares", foreignKey: "contract_code"});
  tb_danger_mat_parts_items.belongsTo(tb_danger_mat, { as: "danger_mat_code_tb_danger_mat", foreignKey: "danger_mat_code"});
  tb_danger_mat.hasMany(tb_danger_mat_parts_items, { as: "tb_danger_mat_parts_items", foreignKey: "danger_mat_code"});
  tb_danger_mat_use_plan.belongsTo(tb_danger_mat, { as: "danger_mat_code_tb_danger_mat", foreignKey: "danger_mat_code"});
  tb_danger_mat.hasMany(tb_danger_mat_use_plan, { as: "tb_danger_mat_use_plans", foreignKey: "danger_mat_code"});
  tb_danger_mat_use_plan_files.belongsTo(tb_danger_mat_use_plan, { as: "danger_mat_use_plan_code_tb_danger_mat_use_plan", foreignKey: "danger_mat_use_plan_code"});
  tb_danger_mat_use_plan.hasMany(tb_danger_mat_use_plan_files, { as: "tb_danger_mat_use_plan_files", foreignKey: "danger_mat_use_plan_code"});
  tb_danger_mat_use_worker.belongsTo(tb_danger_mat_use_plan, { as: "danger_mat_use_plan_code_tb_danger_mat_use_plan", foreignKey: "danger_mat_use_plan_code"});
  tb_danger_mat_use_plan.hasMany(tb_danger_mat_use_worker, { as: "tb_danger_mat_use_workers", foreignKey: "danger_mat_use_plan_code"});
  tb_danger_mat_parts_items.belongsTo(tb_danger_parts, { as: "danger_parts_code_tb_danger_part", foreignKey: "danger_parts_code"});
  tb_danger_parts.hasMany(tb_danger_mat_parts_items, { as: "tb_danger_mat_parts_items", foreignKey: "danger_parts_code"});
  tb_trip.belongsTo(tb_driver, { as: "driver", foreignKey: "driver_id"});
  tb_driver.hasMany(tb_trip, { as: "tb_trips", foreignKey: "driver_id"});
  tb_edu_contents.belongsTo(tb_edu, { as: "edu_code_tb_edu", foreignKey: "edu_code"});
  tb_edu.hasMany(tb_edu_contents, { as: "tb_edu_contents", foreignKey: "edu_code"});
  tb_edu_exam.belongsTo(tb_edu, { as: "edu_code_tb_edu", foreignKey: "edu_code"});
  tb_edu.hasMany(tb_edu_exam, { as: "tb_edu_exams", foreignKey: "edu_code"});
  tb_edu_sch.belongsTo(tb_edu, { as: "edu_code_tb_edu", foreignKey: "edu_code"});
  tb_edu.hasMany(tb_edu_sch, { as: "tb_edu_sches", foreignKey: "edu_code"});
  tb_edu_exam_contents.belongsTo(tb_edu_exam, { as: "edu_exam_code_tb_edu_exam", foreignKey: "edu_exam_code"});
  tb_edu_exam.hasMany(tb_edu_exam_contents, { as: "tb_edu_exam_contents", foreignKey: "edu_exam_code"});
  tb_edu_judge.belongsTo(tb_edu_exam, { as: "edu_exam_code_tb_edu_exam", foreignKey: "edu_exam_code"});
  tb_edu_exam.hasMany(tb_edu_judge, { as: "tb_edu_judges", foreignKey: "edu_exam_code"});
  tb_edu_judge_contents.belongsTo(tb_edu_exam_contents, { as: "edu_exam_contents_code_tb_edu_exam_content", foreignKey: "edu_exam_contents_code"});
  tb_edu_exam_contents.hasMany(tb_edu_judge_contents, { as: "tb_edu_judge_contents", foreignKey: "edu_exam_contents_code"});
  tb_edu_judge_contents.belongsTo(tb_edu_judge, { as: "edu_judge_code_tb_edu_judge", foreignKey: "edu_judge_code"});
  tb_edu_judge.hasMany(tb_edu_judge_contents, { as: "tb_edu_judge_contents", foreignKey: "edu_judge_code"});
  tb_edu_judge.belongsTo(tb_edu_sch, { as: "edu_sch_code_tb_edu_sch", foreignKey: "edu_sch_code"});
  tb_edu_sch.hasMany(tb_edu_judge, { as: "tb_edu_judges", foreignKey: "edu_sch_code"});
  tb_edu_sch_member.belongsTo(tb_edu_sch, { as: "edu_sch_code_tb_edu_sch", foreignKey: "edu_sch_code"});
  tb_edu_sch.hasMany(tb_edu_sch_member, { as: "tb_edu_sch_members", foreignKey: "edu_sch_code"});
  tb_banner.belongsTo(tb_file_upload, { as: "banner_image", foreignKey: "banner_image_id"});
  tb_file_upload.hasOne(tb_banner, { as: "tb_banner", foreignKey: "banner_image_id"});
  tb_user.belongsTo(tb_file_upload, { as: "avatar", foreignKey: "avatar_id"});
  tb_file_upload.hasOne(tb_user, { as: "tb_user", foreignKey: "avatar_id"});
  tb_commute.belongsTo(tb_lib, { as: "state_code_tb_lib", foreignKey: "state_code"});
  tb_lib.hasMany(tb_commute, { as: "tb_commutes", foreignKey: "state_code"});
  tb_mat_pur.belongsTo(tb_lib, { as: "mat_type_tb_lib", foreignKey: "mat_type"});
  tb_lib.hasMany(tb_mat_pur, { as: "tb_mat_purs", foreignKey: "mat_type"});
  tb_mat_pur_photo.belongsTo(tb_mat_pur, { as: "pur_code_tb_mat_pur", foreignKey: "pur_code"});
  tb_mat_pur.hasMany(tb_mat_pur_photo, { as: "tb_mat_pur_photos", foreignKey: "pur_code"});
  tb_contract.belongsTo(tb_partner, { as: "partner_code_tb_partner", foreignKey: "partner_code"});
  tb_partner.hasMany(tb_contract, { as: "tb_contracts", foreignKey: "partner_code"});
  tb_danger_mat_use_plan.belongsTo(tb_partner, { as: "partner_code_tb_partner", foreignKey: "partner_code"});
  tb_partner.hasMany(tb_danger_mat_use_plan, { as: "tb_danger_mat_use_plans", foreignKey: "partner_code"});
  tb_partner_contract.belongsTo(tb_partner, { as: "partner_code_tb_partner", foreignKey: "partner_code"});
  tb_partner.hasMany(tb_partner_contract, { as: "tb_partner_contracts", foreignKey: "partner_code"});
  tb_project_area.belongsTo(tb_project, { as: "project", foreignKey: "project_id"});
  tb_project.hasMany(tb_project_area, { as: "tb_project_areas", foreignKey: "project_id"});
  tb_project_manager.belongsTo(tb_project, { as: "project", foreignKey: "project_id"});
  tb_project.hasMany(tb_project_manager, { as: "tb_project_managers", foreignKey: "project_id"});
  tb_trip.belongsTo(tb_project, { as: "project", foreignKey: "project_id"});
  tb_project.hasMany(tb_trip, { as: "tb_trips", foreignKey: "project_id"});
  tb_risk_work.belongsTo(tb_risk, { as: "risk_code_tb_risk", foreignKey: "risk_code"});
  tb_risk.hasMany(tb_risk_work, { as: "tb_risk_works", foreignKey: "risk_code"});
  tb_risk_report_action.belongsTo(tb_risk_report, { as: "report_code_tb_risk_report", foreignKey: "report_code"});
  tb_risk_report.hasMany(tb_risk_report_action, { as: "tb_risk_report_actions", foreignKey: "report_code"});
  tb_risk_report_photo.belongsTo(tb_risk_report, { as: "report_code_tb_risk_report", foreignKey: "report_code"});
  tb_risk_report.hasMany(tb_risk_report_photo, { as: "tb_risk_report_photos", foreignKey: "report_code"});
  tb_risk_action_photo.belongsTo(tb_risk_report_action, { as: "action_code_tb_risk_report_action", foreignKey: "action_code"});
  tb_risk_report_action.hasMany(tb_risk_action_photo, { as: "tb_risk_action_photos", foreignKey: "action_code"});
  tb_risk_report_action_photo.belongsTo(tb_risk_report_action, { as: "action_code_tb_risk_report_action", foreignKey: "action_code"});
  tb_risk_report_action.hasMany(tb_risk_report_action_photo, { as: "tb_risk_report_action_photos", foreignKey: "action_code"});
  tb_risk_work_contents.belongsTo(tb_risk_work, { as: "work_code_tb_risk_work", foreignKey: "work_code"});
  tb_risk_work.hasMany(tb_risk_work_contents, { as: "tb_risk_work_contents", foreignKey: "work_code"});
  tb_risk_action.belongsTo(tb_risk_work_contents, { as: "content_code_tb_risk_work_content", foreignKey: "content_code"});
  tb_risk_work_contents.hasMany(tb_risk_action, { as: "tb_risk_actions", foreignKey: "content_code"});
  tb_risk_actor.belongsTo(tb_risk_work_contents, { as: "content_code_tb_risk_work_content", foreignKey: "content_code"});
  tb_risk_work_contents.hasMany(tb_risk_actor, { as: "tb_risk_actors", foreignKey: "content_code"});
  tb_safety_prot_eqp_issue_dtail.belongsTo(tb_safety_prot_eqp_issue, { as: "safety_prot_eqp_issue_code_tb_safety_prot_eqp_issue", foreignKey: "safety_prot_eqp_issue_code"});
  tb_safety_prot_eqp_issue.hasMany(tb_safety_prot_eqp_issue_dtail, { as: "tb_safety_prot_eqp_issue_dtails", foreignKey: "safety_prot_eqp_issue_code"});
  tb_worker_shelter.belongsTo(tb_shelter, { as: "shelter_code_tb_shelter", foreignKey: "shelter_code"});
  tb_shelter.hasMany(tb_worker_shelter, { as: "tb_worker_shelters", foreignKey: "shelter_code"});
  tb_siren_state.belongsTo(tb_siren, { as: "siren_code_tb_siren", foreignKey: "siren_code"});
  tb_siren.hasMany(tb_siren_state, { as: "tb_siren_states", foreignKey: "siren_code"});
  tb_blocked.belongsTo(tb_site, { as: "site_code_tb_site", foreignKey: "site_code"});
  tb_site.hasMany(tb_blocked, { as: "tb_blockeds", foreignKey: "site_code"});
  tb_board.belongsTo(tb_site, { as: "site_code_tb_site", foreignKey: "site_code"});
  tb_site.hasMany(tb_board, { as: "tb_boards", foreignKey: "site_code"});
  tb_commute.belongsTo(tb_site, { as: "site_code_tb_site", foreignKey: "site_code"});
  tb_site.hasMany(tb_commute, { as: "tb_commutes", foreignKey: "site_code"});
  tb_contract.belongsTo(tb_site, { as: "site_code_tb_site", foreignKey: "site_code"});
  tb_site.hasMany(tb_contract, { as: "tb_contracts", foreignKey: "site_code"});
  tb_daily_board.belongsTo(tb_site, { as: "site_code_tb_site", foreignKey: "site_code"});
  tb_site.hasMany(tb_daily_board, { as: "tb_daily_boards", foreignKey: "site_code"});
  tb_danger_mat_use_plan.belongsTo(tb_site, { as: "site_code_tb_site", foreignKey: "site_code"});
  tb_site.hasMany(tb_danger_mat_use_plan, { as: "tb_danger_mat_use_plans", foreignKey: "site_code"});
  tb_edu_board.belongsTo(tb_site, { as: "site_code_tb_site", foreignKey: "site_code"});
  tb_site.hasMany(tb_edu_board, { as: "tb_edu_boards", foreignKey: "site_code"});
  tb_edu_sch.belongsTo(tb_site, { as: "site_code_tb_site", foreignKey: "site_code"});
  tb_site.hasMany(tb_edu_sch, { as: "tb_edu_sches", foreignKey: "site_code"});
  tb_health_alcohol.belongsTo(tb_site, { as: "site_code_tb_site", foreignKey: "site_code"});
  tb_site.hasMany(tb_health_alcohol, { as: "tb_health_alcohols", foreignKey: "site_code"});
  tb_health_alcohol_hist.belongsTo(tb_site, { as: "site_code_tb_site", foreignKey: "site_code"});
  tb_site.hasMany(tb_health_alcohol_hist, { as: "tb_health_alcohol_hists", foreignKey: "site_code"});
  tb_health_bp.belongsTo(tb_site, { as: "site_code_tb_site", foreignKey: "site_code"});
  tb_site.hasMany(tb_health_bp, { as: "tb_health_bps", foreignKey: "site_code"});
  tb_health_bp_hist.belongsTo(tb_site, { as: "site_code_tb_site", foreignKey: "site_code"});
  tb_site.hasMany(tb_health_bp_hist, { as: "tb_health_bp_hists", foreignKey: "site_code"});
  tb_health_oxygen.belongsTo(tb_site, { as: "site_code_tb_site", foreignKey: "site_code"});
  tb_site.hasMany(tb_health_oxygen, { as: "tb_health_oxygens", foreignKey: "site_code"});
  tb_health_stress.belongsTo(tb_site, { as: "site_code_tb_site", foreignKey: "site_code"});
  tb_site.hasMany(tb_health_stress, { as: "tb_health_stresses", foreignKey: "site_code"});
  tb_mat_pur.belongsTo(tb_site, { as: "site_code_tb_site", foreignKey: "site_code"});
  tb_site.hasMany(tb_mat_pur, { as: "tb_mat_purs", foreignKey: "site_code"});
  tb_partner_contract.belongsTo(tb_site, { as: "site_code_tb_site", foreignKey: "site_code"});
  tb_site.hasMany(tb_partner_contract, { as: "tb_partner_contracts", foreignKey: "site_code"});
  tb_pay.belongsTo(tb_site, { as: "site_code_tb_site", foreignKey: "site_code"});
  tb_site.hasMany(tb_pay, { as: "tb_pays", foreignKey: "site_code"});
  tb_project.belongsTo(tb_site, { as: "site", foreignKey: "site_id"});
  tb_site.hasMany(tb_project, { as: "tb_projects", foreignKey: "site_id"});
  tb_risk.belongsTo(tb_site, { as: "site_code_tb_site", foreignKey: "site_code"});
  tb_site.hasMany(tb_risk, { as: "tb_risks", foreignKey: "site_code"});
  tb_risk_report.belongsTo(tb_site, { as: "site_code_tb_site", foreignKey: "site_code"});
  tb_site.hasMany(tb_risk_report, { as: "tb_risk_reports", foreignKey: "site_code"});
  tb_safety_prot_eqp_inventory.belongsTo(tb_site, { as: "site_code_tb_site", foreignKey: "site_code"});
  tb_site.hasMany(tb_safety_prot_eqp_inventory, { as: "tb_safety_prot_eqp_inventories", foreignKey: "site_code"});
  tb_safety_prot_eqp_issue.belongsTo(tb_site, { as: "site_code_tb_site", foreignKey: "site_code"});
  tb_site.hasMany(tb_safety_prot_eqp_issue, { as: "tb_safety_prot_eqp_issues", foreignKey: "site_code"});
  tb_safety_prot_eqp_purch_detail.belongsTo(tb_site, { as: "site_code_tb_site", foreignKey: "site_code"});
  tb_site.hasMany(tb_safety_prot_eqp_purch_detail, { as: "tb_safety_prot_eqp_purch_details", foreignKey: "site_code"});
  tb_siren.belongsTo(tb_site, { as: "site_code_tb_site", foreignKey: "site_code"});
  tb_site.hasMany(tb_siren, { as: "tb_sirens", foreignKey: "site_code"});
  tb_site_build_major.belongsTo(tb_site, { as: "site_code_tb_site", foreignKey: "site_code"});
  tb_site.hasMany(tb_site_build_major, { as: "tb_site_build_majors", foreignKey: "site_code"});
  tb_site_config.belongsTo(tb_site, { as: "site_code_tb_site", foreignKey: "site_code"});
  tb_site.hasMany(tb_site_config, { as: "tb_site_configs", foreignKey: "site_code"});
  tb_site_ecn.belongsTo(tb_site, { as: "site_code_tb_site", foreignKey: "site_code"});
  tb_site.hasMany(tb_site_ecn, { as: "tb_site_ecns", foreignKey: "site_code"});
  tb_site_of_client.belongsTo(tb_site, { as: "site_code_tb_site", foreignKey: "site_code"});
  tb_site.hasMany(tb_site_of_client, { as: "tb_site_of_clients", foreignKey: "site_code"});
  tb_site_of_user.belongsTo(tb_site, { as: "site_code_tb_site", foreignKey: "site_code"});
  tb_site.hasMany(tb_site_of_user, { as: "tb_site_of_users", foreignKey: "site_code"});
  tb_site_sch.belongsTo(tb_site, { as: "site_code_tb_site", foreignKey: "site_code"});
  tb_site.hasMany(tb_site_sch, { as: "tb_site_sches", foreignKey: "site_code"});
  tb_site_sch_board.belongsTo(tb_site, { as: "site_code_tb_site", foreignKey: "site_code"});
  tb_site.hasMany(tb_site_sch_board, { as: "tb_site_sch_boards", foreignKey: "site_code"});
  tb_site_sch_work.belongsTo(tb_site, { as: "site_code_tb_site", foreignKey: "site_code"});
  tb_site.hasMany(tb_site_sch_work, { as: "tb_site_sch_works", foreignKey: "site_code"});
  tb_site_sch_work_major.belongsTo(tb_site, { as: "site_code_tb_site", foreignKey: "site_code"});
  tb_site.hasMany(tb_site_sch_work_major, { as: "tb_site_sch_work_majors", foreignKey: "site_code"});
  tb_site_work_area.belongsTo(tb_site, { as: "site_code_tb_site", foreignKey: "site_code"});
  tb_site.hasMany(tb_site_work_area, { as: "tb_site_work_areas", foreignKey: "site_code"});
  tb_site_work_area2.belongsTo(tb_site, { as: "site_code_tb_site", foreignKey: "site_code"});
  tb_site.hasMany(tb_site_work_area2, { as: "tb_site_work_area2s", foreignKey: "site_code"});
  tb_tbm.belongsTo(tb_site, { as: "site_code_tb_site", foreignKey: "site_code"});
  tb_site.hasMany(tb_tbm, { as: "tb_tbms", foreignKey: "site_code"});
  tb_user.belongsTo(tb_site, { as: "site", foreignKey: "site_id"});
  tb_site.hasMany(tb_user, { as: "tb_users", foreignKey: "site_id"});
  tb_worker_shelter.belongsTo(tb_site, { as: "site_code_tb_site", foreignKey: "site_code"});
  tb_site.hasMany(tb_worker_shelter, { as: "tb_worker_shelters", foreignKey: "site_code"});
  tb_site_build_sub.belongsTo(tb_site_build_middle, { as: "middle_code_tb_site_build_middle", foreignKey: "middle_code"});
  tb_site_build_middle.hasMany(tb_site_build_sub, { as: "tb_site_build_subs", foreignKey: "middle_code"});
  tb_site_drawing.belongsTo(tb_site_build_sub, { as: "sub_code_tb_site_build_sub", foreignKey: "sub_code"});
  tb_site_build_sub.hasMany(tb_site_drawing, { as: "tb_site_drawings", foreignKey: "sub_code"});
  tb_site_work_drawing.belongsTo(tb_site_drawing, { as: "drawing_code_tb_site_drawing", foreignKey: "drawing_code"});
  tb_site_drawing.hasMany(tb_site_work_drawing, { as: "tb_site_work_drawings", foreignKey: "drawing_code"});
  tb_site_work_drawing2.belongsTo(tb_site_drawing, { as: "drawing_code_tb_site_drawing", foreignKey: "drawing_code"});
  tb_site_drawing.hasMany(tb_site_work_drawing2, { as: "tb_site_work_drawing2s", foreignKey: "drawing_code"});
  tb_site_build_middle.belongsTo(tb_site_sch_work_major, { as: "major_code_tb_site_sch_work_major", foreignKey: "major_code"});
  tb_site_sch_work_major.hasMany(tb_site_build_middle, { as: "tb_site_build_middles", foreignKey: "major_code"});
  tb_site_sch_work_middle.belongsTo(tb_site_sch_work_major, { as: "major_code_tb_site_sch_work_major", foreignKey: "major_code"});
  tb_site_sch_work_major.hasMany(tb_site_sch_work_middle, { as: "tb_site_sch_work_middles", foreignKey: "major_code"});
  tb_site_sch_work.belongsTo(tb_site_sch_work_middle, { as: "middle_code_tb_site_sch_work_middle", foreignKey: "middle_code"});
  tb_site_sch_work_middle.hasMany(tb_site_sch_work, { as: "tb_site_sch_works", foreignKey: "middle_code"});
  tb_tbm_photo.belongsTo(tb_tbm, { as: "tbm_code_tb_tbm", foreignKey: "tbm_code"});
  tb_tbm.hasMany(tb_tbm_photo, { as: "tb_tbm_photos", foreignKey: "tbm_code"});
  tb_tbm_state.belongsTo(tb_tbm, { as: "tbm_code_tb_tbm", foreignKey: "tbm_code"});
  tb_tbm.hasMany(tb_tbm_state, { as: "tb_tbm_states", foreignKey: "tbm_code"});
  tb_gps_tracking.belongsTo(tb_trip, { as: "trip", foreignKey: "trip_id"});
  tb_trip.hasMany(tb_gps_tracking, { as: "tb_gps_trackings", foreignKey: "trip_id"});
  tb_account.belongsTo(tb_user, { as: "user_code_tb_user", foreignKey: "user_code"});
  tb_user.hasMany(tb_account, { as: "tb_accounts", foreignKey: "user_code"});
  tb_banner.belongsTo(tb_user, { as: "author", foreignKey: "author_id"});
  tb_user.hasMany(tb_banner, { as: "tb_banners", foreignKey: "author_id"});
  tb_project_manager.belongsTo(tb_user, { as: "manager", foreignKey: "manager_id"});
  tb_user.hasMany(tb_project_manager, { as: "tb_project_managers", foreignKey: "manager_id"});
  tb_site_of_user.belongsTo(tb_user, { as: "user_code_tb_user", foreignKey: "user_code"});
  tb_user.hasMany(tb_site_of_user, { as: "tb_site_of_users", foreignKey: "user_code"});

  return {
    tb_account: tb_account,
    tb_area: tb_area,
    tb_area_count_trip: tb_area_count_trip,
    tb_auth: tb_auth,
    tb_banner: tb_banner,
    tb_blocked: tb_blocked,
    tb_board: tb_board,
    tb_board_photo: tb_board_photo,
    tb_client: tb_client,
    tb_commute: tb_commute,
    tb_contract: tb_contract,
    tb_contract_photo: tb_contract_photo,
    tb_daily_board: tb_daily_board,
    tb_danger_mat: tb_danger_mat,
    tb_danger_mat_parts_items: tb_danger_mat_parts_items,
    tb_danger_mat_use_plan: tb_danger_mat_use_plan,
    tb_danger_mat_use_plan_files: tb_danger_mat_use_plan_files,
    tb_danger_mat_use_worker: tb_danger_mat_use_worker,
    tb_danger_parts: tb_danger_parts,
    tb_driver: tb_driver,
    tb_edu: tb_edu,
    tb_edu_board: tb_edu_board,
    tb_edu_contents: tb_edu_contents,
    tb_edu_exam: tb_edu_exam,
    tb_edu_exam_contents: tb_edu_exam_contents,
    tb_edu_judge: tb_edu_judge,
    tb_edu_judge_contents: tb_edu_judge_contents,
    tb_edu_sch: tb_edu_sch,
    tb_edu_sch_member: tb_edu_sch_member,
    tb_file_upload: tb_file_upload,
    tb_gps_tracking: tb_gps_tracking,
    tb_health_alcohol: tb_health_alcohol,
    tb_health_alcohol_hist: tb_health_alcohol_hist,
    tb_health_bp: tb_health_bp,
    tb_health_bp_hist: tb_health_bp_hist,
    tb_health_oxygen: tb_health_oxygen,
    tb_health_stress: tb_health_stress,
    tb_holiday: tb_holiday,
    tb_lib: tb_lib,
    tb_listof_dayoff: tb_listof_dayoff,
    tb_mat_pur: tb_mat_pur,
    tb_mat_pur_photo: tb_mat_pur_photo,
    tb_notifications: tb_notifications,
    tb_notifications_temp: tb_notifications_temp,
    tb_notify_message: tb_notify_message,
    tb_partner: tb_partner,
    tb_partner_contract: tb_partner_contract,
    tb_pay: tb_pay,
    tb_project: tb_project,
    tb_project_area: tb_project_area,
    tb_project_manager: tb_project_manager,
    tb_qna: tb_qna,
    tb_req_doc: tb_req_doc,
    tb_risk: tb_risk,
    tb_risk_action: tb_risk_action,
    tb_risk_action_photo: tb_risk_action_photo,
    tb_risk_actor: tb_risk_actor,
    tb_risk_report: tb_risk_report,
    tb_risk_report_action: tb_risk_report_action,
    tb_risk_report_action_photo: tb_risk_report_action_photo,
    tb_risk_report_photo: tb_risk_report_photo,
    tb_risk_work: tb_risk_work,
    tb_risk_work_contents: tb_risk_work_contents,
    tb_risk_work_contents_hist: tb_risk_work_contents_hist,
    tb_safety_prot_eqp_inventory: tb_safety_prot_eqp_inventory,
    tb_safety_prot_eqp_issue: tb_safety_prot_eqp_issue,
    tb_safety_prot_eqp_issue_dtail: tb_safety_prot_eqp_issue_dtail,
    tb_safety_prot_eqp_purch_detail: tb_safety_prot_eqp_purch_detail,
    tb_self_care: tb_self_care,
    tb_service: tb_service,
    tb_shelter: tb_shelter,
    tb_siren: tb_siren,
    tb_siren_state: tb_siren_state,
    tb_site: tb_site,
    tb_site_build_major: tb_site_build_major,
    tb_site_build_middle: tb_site_build_middle,
    tb_site_build_sub: tb_site_build_sub,
    tb_site_config: tb_site_config,
    tb_site_drawing: tb_site_drawing,
    tb_site_ecn: tb_site_ecn,
    tb_site_of_client: tb_site_of_client,
    tb_site_of_user: tb_site_of_user,
    tb_site_sch: tb_site_sch,
    tb_site_sch_board: tb_site_sch_board,
    tb_site_sch_work: tb_site_sch_work,
    tb_site_sch_work_major: tb_site_sch_work_major,
    tb_site_sch_work_middle: tb_site_sch_work_middle,
    tb_site_work_area: tb_site_work_area,
    tb_site_work_area2: tb_site_work_area2,
    tb_site_work_area_kind: tb_site_work_area_kind,
    tb_site_work_area_type: tb_site_work_area_type,
    tb_site_work_drawing: tb_site_work_drawing,
    tb_site_work_drawing2: tb_site_work_drawing2,
    tb_tbm: tb_tbm,
    tb_tbm_photo: tb_tbm_photo,
    tb_tbm_state: tb_tbm_state,
    tb_trip: tb_trip,
    tb_user: tb_user,
    tb_user_device: tb_user_device,
    tb_worker_location: tb_worker_location,
    tb_worker_shelter: tb_worker_shelter,
    test_table: test_table,
  };
}
