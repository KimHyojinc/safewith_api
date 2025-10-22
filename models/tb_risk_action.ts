import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_account, tb_accountId } from './tb_account';
import type { tb_risk_work_contents, tb_risk_work_contentsId } from './tb_risk_work_contents';

export interface tb_risk_actionAttributes {
  code: number;
  content_code: number;
  contents: string;
  register_code: number;
  reg_dt?: Date;
  updater_code: number;
  update_dt?: Date;
  is_payment?: number;
  payment_code?: number;
}

export type tb_risk_actionPk = "code";
export type tb_risk_actionId = tb_risk_action[tb_risk_actionPk];
export type tb_risk_actionOptionalAttributes = "reg_dt" | "update_dt" | "is_payment" | "payment_code";
export type tb_risk_actionCreationAttributes = Optional<tb_risk_actionAttributes, tb_risk_actionOptionalAttributes>;

export class tb_risk_action extends Model<tb_risk_actionAttributes, tb_risk_actionCreationAttributes> implements tb_risk_actionAttributes {
  code!: number;
  content_code!: number;
  contents!: string;
  register_code!: number;
  reg_dt?: Date;
  updater_code!: number;
  update_dt?: Date;
  is_payment?: number;
  payment_code?: number;

  // tb_risk_action belongsTo tb_account via register_code
  register_code_tb_account!: tb_account;
  getRegister_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setRegister_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createRegister_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_risk_action belongsTo tb_account via updater_code
  updater_code_tb_account!: tb_account;
  getUpdater_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setUpdater_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createUpdater_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_risk_action belongsTo tb_risk_work_contents via content_code
  content_code_tb_risk_work_content!: tb_risk_work_contents;
  getContent_code_tb_risk_work_content!: Sequelize.BelongsToGetAssociationMixin<tb_risk_work_contents>;
  setContent_code_tb_risk_work_content!: Sequelize.BelongsToSetAssociationMixin<tb_risk_work_contents, tb_risk_work_contentsId>;
  createContent_code_tb_risk_work_content!: Sequelize.BelongsToCreateAssociationMixin<tb_risk_work_contents>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_risk_action {
    return tb_risk_action.init({
    code: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    content_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_risk_work_contents',
        key: 'code'
      }
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
    },
    is_payment: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    payment_code: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'tb_risk_action',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_risk_action_idx",
        fields: [
          { name: "content_code" },
        ]
      },
      {
        name: "tb_risk_action_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
