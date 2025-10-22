import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_account, tb_accountId } from './tb_account';
import type { tb_risk_report_action, tb_risk_report_actionId } from './tb_risk_report_action';
import type { tb_risk_report_photo, tb_risk_report_photoId } from './tb_risk_report_photo';
import type { tb_site, tb_siteId } from './tb_site';

export interface tb_risk_reportAttributes {
  code: number;
  site_code: number;
  subject: string;
  contents: string;
  state?: number;
  register_code: number;
  reg_dt?: Date;
  updater_code: number;
  update_dt?: Date;
  risk_loc?: string;
}

export type tb_risk_reportPk = "code";
export type tb_risk_reportId = tb_risk_report[tb_risk_reportPk];
export type tb_risk_reportOptionalAttributes = "state" | "reg_dt" | "update_dt" | "risk_loc";
export type tb_risk_reportCreationAttributes = Optional<tb_risk_reportAttributes, tb_risk_reportOptionalAttributes>;

export class tb_risk_report extends Model<tb_risk_reportAttributes, tb_risk_reportCreationAttributes> implements tb_risk_reportAttributes {
  code!: number;
  site_code!: number;
  subject!: string;
  contents!: string;
  state?: number;
  register_code!: number;
  reg_dt?: Date;
  updater_code!: number;
  update_dt?: Date;
  risk_loc?: string;

  // tb_risk_report belongsTo tb_account via register_code
  register_code_tb_account!: tb_account;
  getRegister_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setRegister_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createRegister_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_risk_report belongsTo tb_account via updater_code
  updater_code_tb_account!: tb_account;
  getUpdater_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setUpdater_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createUpdater_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_risk_report hasMany tb_risk_report_action via report_code
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
  // tb_risk_report hasMany tb_risk_report_photo via report_code
  tb_risk_report_photos!: tb_risk_report_photo[];
  getTb_risk_report_photos!: Sequelize.HasManyGetAssociationsMixin<tb_risk_report_photo>;
  setTb_risk_report_photos!: Sequelize.HasManySetAssociationsMixin<tb_risk_report_photo, tb_risk_report_photoId>;
  addTb_risk_report_photo!: Sequelize.HasManyAddAssociationMixin<tb_risk_report_photo, tb_risk_report_photoId>;
  addTb_risk_report_photos!: Sequelize.HasManyAddAssociationsMixin<tb_risk_report_photo, tb_risk_report_photoId>;
  createTb_risk_report_photo!: Sequelize.HasManyCreateAssociationMixin<tb_risk_report_photo>;
  removeTb_risk_report_photo!: Sequelize.HasManyRemoveAssociationMixin<tb_risk_report_photo, tb_risk_report_photoId>;
  removeTb_risk_report_photos!: Sequelize.HasManyRemoveAssociationsMixin<tb_risk_report_photo, tb_risk_report_photoId>;
  hasTb_risk_report_photo!: Sequelize.HasManyHasAssociationMixin<tb_risk_report_photo, tb_risk_report_photoId>;
  hasTb_risk_report_photos!: Sequelize.HasManyHasAssociationsMixin<tb_risk_report_photo, tb_risk_report_photoId>;
  countTb_risk_report_photos!: Sequelize.HasManyCountAssociationsMixin;
  // tb_risk_report belongsTo tb_site via site_code
  site_code_tb_site!: tb_site;
  getSite_code_tb_site!: Sequelize.BelongsToGetAssociationMixin<tb_site>;
  setSite_code_tb_site!: Sequelize.BelongsToSetAssociationMixin<tb_site, tb_siteId>;
  createSite_code_tb_site!: Sequelize.BelongsToCreateAssociationMixin<tb_site>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_risk_report {
    return tb_risk_report.init({
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
    subject: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    contents: {
      type: DataTypes.STRING(255),
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
    risk_loc: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_risk_report',
    schema: 'public',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "tb_risk_report_idx",
        fields: [
          { name: "site_code" },
        ]
      },
      {
        name: "tb_risk_report_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
