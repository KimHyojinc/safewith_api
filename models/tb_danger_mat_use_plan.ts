import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_account, tb_accountId } from './tb_account';
import type { tb_danger_mat, tb_danger_matId } from './tb_danger_mat';
import type { tb_danger_mat_use_plan_files, tb_danger_mat_use_plan_filesId } from './tb_danger_mat_use_plan_files';
import type { tb_danger_mat_use_worker, tb_danger_mat_use_workerId } from './tb_danger_mat_use_worker';
import type { tb_partner, tb_partnerId } from './tb_partner';
import type { tb_site, tb_siteId } from './tb_site';

export interface tb_danger_mat_use_planAttributes {
  code: number;
  danger_mat_code: number;
  site_code: number;
  partner_code: number;
  use_dt?: string;
  unit?: string;
  count?: number;
  work_name?: string;
  use_begin_dt?: string;
  use_end_dt?: string;
  lat?: number;
  lon?: number;
  purpose?: string;
  priority?: string;
  comment?: string;
  msmd?: string;
  draft_code: number;
  is_draft_sign?: number;
  draft_sign_dt?: Date;
  draft_esign?: string;
  review_code: number;
  is_review_sign?: number;
  review_sign_dt?: Date;
  review_esign?: string;
  app_code: number;
  is_app_sign?: number;
  app_sign_dt?: Date;
  app_esign?: string;
  state?: number;
  register_code: number;
  reg_dt?: Date;
  updater_code: number;
  update_dt?: Date;
  handle_proc?: string;
  unit_text?: string;
  count_text?: string;
}

export type tb_danger_mat_use_planPk = "code";
export type tb_danger_mat_use_planId = tb_danger_mat_use_plan[tb_danger_mat_use_planPk];
export type tb_danger_mat_use_planOptionalAttributes = "use_dt" | "unit" | "count" | "work_name" | "use_begin_dt" | "use_end_dt" | "lat" | "lon" | "purpose" | "priority" | "comment" | "msmd" | "is_draft_sign" | "draft_sign_dt" | "draft_esign" | "is_review_sign" | "review_sign_dt" | "review_esign" | "is_app_sign" | "app_sign_dt" | "app_esign" | "state" | "reg_dt" | "update_dt" | "handle_proc" | "unit_text" | "count_text";
export type tb_danger_mat_use_planCreationAttributes = Optional<tb_danger_mat_use_planAttributes, tb_danger_mat_use_planOptionalAttributes>;

export class tb_danger_mat_use_plan extends Model<tb_danger_mat_use_planAttributes, tb_danger_mat_use_planCreationAttributes> implements tb_danger_mat_use_planAttributes {
  code!: number;
  danger_mat_code!: number;
  site_code!: number;
  partner_code!: number;
  use_dt?: string;
  unit?: string;
  count?: number;
  work_name?: string;
  use_begin_dt?: string;
  use_end_dt?: string;
  lat?: number;
  lon?: number;
  purpose?: string;
  priority?: string;
  comment?: string;
  msmd?: string;
  draft_code!: number;
  is_draft_sign?: number;
  draft_sign_dt?: Date;
  draft_esign?: string;
  review_code!: number;
  is_review_sign?: number;
  review_sign_dt?: Date;
  review_esign?: string;
  app_code!: number;
  is_app_sign?: number;
  app_sign_dt?: Date;
  app_esign?: string;
  state?: number;
  register_code!: number;
  reg_dt?: Date;
  updater_code!: number;
  update_dt?: Date;
  handle_proc?: string;
  unit_text?: string;
  count_text?: string;

  // tb_danger_mat_use_plan belongsTo tb_account via draft_code
  draft_code_tb_account!: tb_account;
  getDraft_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setDraft_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createDraft_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_danger_mat_use_plan belongsTo tb_account via register_code
  register_code_tb_account!: tb_account;
  getRegister_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setRegister_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createRegister_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_danger_mat_use_plan belongsTo tb_account via review_code
  review_code_tb_account!: tb_account;
  getReview_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setReview_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createReview_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_danger_mat_use_plan belongsTo tb_account via updater_code
  updater_code_tb_account!: tb_account;
  getUpdater_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setUpdater_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createUpdater_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_danger_mat_use_plan belongsTo tb_danger_mat via danger_mat_code
  danger_mat_code_tb_danger_mat!: tb_danger_mat;
  getDanger_mat_code_tb_danger_mat!: Sequelize.BelongsToGetAssociationMixin<tb_danger_mat>;
  setDanger_mat_code_tb_danger_mat!: Sequelize.BelongsToSetAssociationMixin<tb_danger_mat, tb_danger_matId>;
  createDanger_mat_code_tb_danger_mat!: Sequelize.BelongsToCreateAssociationMixin<tb_danger_mat>;
  // tb_danger_mat_use_plan hasMany tb_danger_mat_use_plan_files via danger_mat_use_plan_code
  tb_danger_mat_use_plan_files!: tb_danger_mat_use_plan_files[];
  getTb_danger_mat_use_plan_files!: Sequelize.HasManyGetAssociationsMixin<tb_danger_mat_use_plan_files>;
  setTb_danger_mat_use_plan_files!: Sequelize.HasManySetAssociationsMixin<tb_danger_mat_use_plan_files, tb_danger_mat_use_plan_filesId>;
  addTb_danger_mat_use_plan_file!: Sequelize.HasManyAddAssociationMixin<tb_danger_mat_use_plan_files, tb_danger_mat_use_plan_filesId>;
  addTb_danger_mat_use_plan_files!: Sequelize.HasManyAddAssociationsMixin<tb_danger_mat_use_plan_files, tb_danger_mat_use_plan_filesId>;
  createTb_danger_mat_use_plan_file!: Sequelize.HasManyCreateAssociationMixin<tb_danger_mat_use_plan_files>;
  removeTb_danger_mat_use_plan_file!: Sequelize.HasManyRemoveAssociationMixin<tb_danger_mat_use_plan_files, tb_danger_mat_use_plan_filesId>;
  removeTb_danger_mat_use_plan_files!: Sequelize.HasManyRemoveAssociationsMixin<tb_danger_mat_use_plan_files, tb_danger_mat_use_plan_filesId>;
  hasTb_danger_mat_use_plan_file!: Sequelize.HasManyHasAssociationMixin<tb_danger_mat_use_plan_files, tb_danger_mat_use_plan_filesId>;
  hasTb_danger_mat_use_plan_files!: Sequelize.HasManyHasAssociationsMixin<tb_danger_mat_use_plan_files, tb_danger_mat_use_plan_filesId>;
  countTb_danger_mat_use_plan_files!: Sequelize.HasManyCountAssociationsMixin;
  // tb_danger_mat_use_plan hasMany tb_danger_mat_use_worker via danger_mat_use_plan_code
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
  // tb_danger_mat_use_plan belongsTo tb_partner via partner_code
  partner_code_tb_partner!: tb_partner;
  getPartner_code_tb_partner!: Sequelize.BelongsToGetAssociationMixin<tb_partner>;
  setPartner_code_tb_partner!: Sequelize.BelongsToSetAssociationMixin<tb_partner, tb_partnerId>;
  createPartner_code_tb_partner!: Sequelize.BelongsToCreateAssociationMixin<tb_partner>;
  // tb_danger_mat_use_plan belongsTo tb_site via site_code
  site_code_tb_site!: tb_site;
  getSite_code_tb_site!: Sequelize.BelongsToGetAssociationMixin<tb_site>;
  setSite_code_tb_site!: Sequelize.BelongsToSetAssociationMixin<tb_site, tb_siteId>;
  createSite_code_tb_site!: Sequelize.BelongsToCreateAssociationMixin<tb_site>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_danger_mat_use_plan {
    return tb_danger_mat_use_plan.init({
    code: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    danger_mat_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_danger_mat',
        key: 'code'
      }
    },
    site_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_site',
        key: 'code'
      }
    },
    partner_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_partner',
        key: 'code'
      }
    },
    use_dt: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    unit: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    work_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    use_begin_dt: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    use_end_dt: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    lat: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    lon: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    purpose: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    priority: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    comment: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    msmd: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    draft_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_account',
        key: 'code'
      }
    },
    is_draft_sign: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    draft_sign_dt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    draft_esign: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    review_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_account',
        key: 'code'
      }
    },
    is_review_sign: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    review_sign_dt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    review_esign: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    app_code: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    is_app_sign: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    app_sign_dt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    app_esign: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    state: {
      type: DataTypes.INTEGER,
      allowNull: true
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
    handle_proc: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    unit_text: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    count_text: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_danger_mat_use_plan',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_danger_mat_use_plan_idx",
        fields: [
          { name: "code" },
        ]
      },
      {
        name: "tb_danger_mat_use_plan_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
