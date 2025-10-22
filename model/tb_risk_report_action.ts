import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_account, tb_accountId } from './tb_account';
import type { tb_risk_action_photo, tb_risk_action_photoId } from './tb_risk_action_photo';
import type { tb_risk_report, tb_risk_reportId } from './tb_risk_report';
import type { tb_risk_report_action_photo, tb_risk_report_action_photoId } from './tb_risk_report_action_photo';

export interface tb_risk_report_actionAttributes {
  code: number;
  report_code: number;
  subject: string;
  contents: string;
  register_code: number;
  reg_dt?: Date;
  updater_code: number;
  update_dt?: Date;
}

export type tb_risk_report_actionPk = "code";
export type tb_risk_report_actionId = tb_risk_report_action[tb_risk_report_actionPk];
export type tb_risk_report_actionOptionalAttributes = "reg_dt" | "update_dt";
export type tb_risk_report_actionCreationAttributes = Optional<tb_risk_report_actionAttributes, tb_risk_report_actionOptionalAttributes>;

export class tb_risk_report_action extends Model<tb_risk_report_actionAttributes, tb_risk_report_actionCreationAttributes> implements tb_risk_report_actionAttributes {
  code!: number;
  report_code!: number;
  subject!: string;
  contents!: string;
  register_code!: number;
  reg_dt?: Date;
  updater_code!: number;
  update_dt?: Date;

  // tb_risk_report_action belongsTo tb_account via register_code
  register_code_tb_account!: tb_account;
  getRegister_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setRegister_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createRegister_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_risk_report_action belongsTo tb_account via updater_code
  updater_code_tb_account!: tb_account;
  getUpdater_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setUpdater_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createUpdater_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_risk_report_action belongsTo tb_risk_report via report_code
  report_code_tb_risk_report!: tb_risk_report;
  getReport_code_tb_risk_report!: Sequelize.BelongsToGetAssociationMixin<tb_risk_report>;
  setReport_code_tb_risk_report!: Sequelize.BelongsToSetAssociationMixin<tb_risk_report, tb_risk_reportId>;
  createReport_code_tb_risk_report!: Sequelize.BelongsToCreateAssociationMixin<tb_risk_report>;
  // tb_risk_report_action hasMany tb_risk_action_photo via action_code
  tb_risk_action_photos!: tb_risk_action_photo[];
  getTb_risk_action_photos!: Sequelize.HasManyGetAssociationsMixin<tb_risk_action_photo>;
  setTb_risk_action_photos!: Sequelize.HasManySetAssociationsMixin<tb_risk_action_photo, tb_risk_action_photoId>;
  addTb_risk_action_photo!: Sequelize.HasManyAddAssociationMixin<tb_risk_action_photo, tb_risk_action_photoId>;
  addTb_risk_action_photos!: Sequelize.HasManyAddAssociationsMixin<tb_risk_action_photo, tb_risk_action_photoId>;
  createTb_risk_action_photo!: Sequelize.HasManyCreateAssociationMixin<tb_risk_action_photo>;
  removeTb_risk_action_photo!: Sequelize.HasManyRemoveAssociationMixin<tb_risk_action_photo, tb_risk_action_photoId>;
  removeTb_risk_action_photos!: Sequelize.HasManyRemoveAssociationsMixin<tb_risk_action_photo, tb_risk_action_photoId>;
  hasTb_risk_action_photo!: Sequelize.HasManyHasAssociationMixin<tb_risk_action_photo, tb_risk_action_photoId>;
  hasTb_risk_action_photos!: Sequelize.HasManyHasAssociationsMixin<tb_risk_action_photo, tb_risk_action_photoId>;
  countTb_risk_action_photos!: Sequelize.HasManyCountAssociationsMixin;
  // tb_risk_report_action hasMany tb_risk_report_action_photo via action_code
  tb_risk_report_action_photos!: tb_risk_report_action_photo[];
  getTb_risk_report_action_photos!: Sequelize.HasManyGetAssociationsMixin<tb_risk_report_action_photo>;
  setTb_risk_report_action_photos!: Sequelize.HasManySetAssociationsMixin<tb_risk_report_action_photo, tb_risk_report_action_photoId>;
  addTb_risk_report_action_photo!: Sequelize.HasManyAddAssociationMixin<tb_risk_report_action_photo, tb_risk_report_action_photoId>;
  addTb_risk_report_action_photos!: Sequelize.HasManyAddAssociationsMixin<tb_risk_report_action_photo, tb_risk_report_action_photoId>;
  createTb_risk_report_action_photo!: Sequelize.HasManyCreateAssociationMixin<tb_risk_report_action_photo>;
  removeTb_risk_report_action_photo!: Sequelize.HasManyRemoveAssociationMixin<tb_risk_report_action_photo, tb_risk_report_action_photoId>;
  removeTb_risk_report_action_photos!: Sequelize.HasManyRemoveAssociationsMixin<tb_risk_report_action_photo, tb_risk_report_action_photoId>;
  hasTb_risk_report_action_photo!: Sequelize.HasManyHasAssociationMixin<tb_risk_report_action_photo, tb_risk_report_action_photoId>;
  hasTb_risk_report_action_photos!: Sequelize.HasManyHasAssociationsMixin<tb_risk_report_action_photo, tb_risk_report_action_photoId>;
  countTb_risk_report_action_photos!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_risk_report_action {
    return tb_risk_report_action.init({
    code: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    report_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_risk_report',
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
    }
  }, {
    sequelize,
    tableName: 'tb_risk_report_action',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_risk_report_action_idx",
        fields: [
          { name: "report_code" },
        ]
      },
      {
        name: "tb_risk_report_action_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
