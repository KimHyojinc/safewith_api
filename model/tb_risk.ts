import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_account, tb_accountId } from './tb_account';
import type { tb_risk_work, tb_risk_workId } from './tb_risk_work';
import type { tb_site, tb_siteId } from './tb_site';

export interface tb_riskAttributes {
  code: number;
  site_code: number;
  const_type: string;
  const_code?: number;
  is_const_sign?: number;
  const_sign_dt?: Date;
  app_code?: number;
  is_app_sign?: number;
  app_sign_dt?: Date;
  mgr_code?: number;
  is_mgr_sign?: number;
  mgr_sign_dt?: Date;
  period_begin_dt: string;
  period_end_dt: string;
  state?: number;
  register_code: number;
  reg_dt?: Date;
  updater_code: number;
  update_dt?: Date;
  const_esign?: string;
  app_esign?: string;
  mgr_esign?: string;
  is_sign?: number;
}

export type tb_riskPk = "code";
export type tb_riskId = tb_risk[tb_riskPk];
export type tb_riskOptionalAttributes = "const_code" | "is_const_sign" | "const_sign_dt" | "app_code" | "is_app_sign" | "app_sign_dt" | "mgr_code" | "is_mgr_sign" | "mgr_sign_dt" | "state" | "reg_dt" | "update_dt" | "const_esign" | "app_esign" | "mgr_esign" | "is_sign";
export type tb_riskCreationAttributes = Optional<tb_riskAttributes, tb_riskOptionalAttributes>;

export class tb_risk extends Model<tb_riskAttributes, tb_riskCreationAttributes> implements tb_riskAttributes {
  code!: number;
  site_code!: number;
  const_type!: string;
  const_code?: number;
  is_const_sign?: number;
  const_sign_dt?: Date;
  app_code?: number;
  is_app_sign?: number;
  app_sign_dt?: Date;
  mgr_code?: number;
  is_mgr_sign?: number;
  mgr_sign_dt?: Date;
  period_begin_dt!: string;
  period_end_dt!: string;
  state?: number;
  register_code!: number;
  reg_dt?: Date;
  updater_code!: number;
  update_dt?: Date;
  const_esign?: string;
  app_esign?: string;
  mgr_esign?: string;
  is_sign?: number;

  // tb_risk belongsTo tb_account via register_code
  register_code_tb_account!: tb_account;
  getRegister_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setRegister_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createRegister_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_risk belongsTo tb_account via updater_code
  updater_code_tb_account!: tb_account;
  getUpdater_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setUpdater_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createUpdater_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_risk hasMany tb_risk_work via risk_code
  tb_risk_works!: tb_risk_work[];
  getTb_risk_works!: Sequelize.HasManyGetAssociationsMixin<tb_risk_work>;
  setTb_risk_works!: Sequelize.HasManySetAssociationsMixin<tb_risk_work, tb_risk_workId>;
  addTb_risk_work!: Sequelize.HasManyAddAssociationMixin<tb_risk_work, tb_risk_workId>;
  addTb_risk_works!: Sequelize.HasManyAddAssociationsMixin<tb_risk_work, tb_risk_workId>;
  createTb_risk_work!: Sequelize.HasManyCreateAssociationMixin<tb_risk_work>;
  removeTb_risk_work!: Sequelize.HasManyRemoveAssociationMixin<tb_risk_work, tb_risk_workId>;
  removeTb_risk_works!: Sequelize.HasManyRemoveAssociationsMixin<tb_risk_work, tb_risk_workId>;
  hasTb_risk_work!: Sequelize.HasManyHasAssociationMixin<tb_risk_work, tb_risk_workId>;
  hasTb_risk_works!: Sequelize.HasManyHasAssociationsMixin<tb_risk_work, tb_risk_workId>;
  countTb_risk_works!: Sequelize.HasManyCountAssociationsMixin;
  // tb_risk belongsTo tb_site via site_code
  site_code_tb_site!: tb_site;
  getSite_code_tb_site!: Sequelize.BelongsToGetAssociationMixin<tb_site>;
  setSite_code_tb_site!: Sequelize.BelongsToSetAssociationMixin<tb_site, tb_siteId>;
  createSite_code_tb_site!: Sequelize.BelongsToCreateAssociationMixin<tb_site>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_risk {
    return tb_risk.init({
    code: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    site_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_site',
        key: 'code'
      }
    },
    const_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    const_code: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    is_const_sign: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    const_sign_dt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    app_code: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    is_app_sign: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    app_sign_dt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    mgr_code: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    is_mgr_sign: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    mgr_sign_dt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    period_begin_dt: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    period_end_dt: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    state: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
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
    const_esign: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: ""
    },
    app_esign: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: ""
    },
    mgr_esign: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: ""
    },
    is_sign: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'tb_risk',
    schema: 'public',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "tb_risk_idx",
        fields: [
          { name: "site_code" },
        ]
      },
      {
        name: "tb_risk_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
