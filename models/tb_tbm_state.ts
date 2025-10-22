import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_account, tb_accountId } from './tb_account';
import type { tb_tbm, tb_tbmId } from './tb_tbm';

export interface tb_tbm_stateAttributes {
  code: number;
  tbm_code: number;
  worker_code: number;
  is_sign?: number;
  sign_dt?: Date;
  e_sign?: string;
  register_code: number;
  reg_dt?: Date;
  updater_code: number;
  update_dt?: Date;
}

export type tb_tbm_statePk = "code";
export type tb_tbm_stateId = tb_tbm_state[tb_tbm_statePk];
export type tb_tbm_stateOptionalAttributes = "is_sign" | "sign_dt" | "e_sign" | "reg_dt" | "update_dt";
export type tb_tbm_stateCreationAttributes = Optional<tb_tbm_stateAttributes, tb_tbm_stateOptionalAttributes>;

export class tb_tbm_state extends Model<tb_tbm_stateAttributes, tb_tbm_stateCreationAttributes> implements tb_tbm_stateAttributes {
  code!: number;
  tbm_code!: number;
  worker_code!: number;
  is_sign?: number;
  sign_dt?: Date;
  e_sign?: string;
  register_code!: number;
  reg_dt?: Date;
  updater_code!: number;
  update_dt?: Date;

  // tb_tbm_state belongsTo tb_account via register_code
  register_code_tb_account!: tb_account;
  getRegister_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setRegister_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createRegister_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_tbm_state belongsTo tb_account via updater_code
  updater_code_tb_account!: tb_account;
  getUpdater_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setUpdater_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createUpdater_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_tbm_state belongsTo tb_account via worker_code
  worker_code_tb_account!: tb_account;
  getWorker_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setWorker_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createWorker_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_tbm_state belongsTo tb_tbm via tbm_code
  tbm_code_tb_tbm!: tb_tbm;
  getTbm_code_tb_tbm!: Sequelize.BelongsToGetAssociationMixin<tb_tbm>;
  setTbm_code_tb_tbm!: Sequelize.BelongsToSetAssociationMixin<tb_tbm, tb_tbmId>;
  createTbm_code_tb_tbm!: Sequelize.BelongsToCreateAssociationMixin<tb_tbm>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_tbm_state {
    return tb_tbm_state.init({
    code: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tbm_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_tbm',
        key: 'code'
      }
    },
    worker_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_account',
        key: 'code'
      }
    },
    is_sign: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    sign_dt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    e_sign: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: ""
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
    tableName: 'tb_tbm_state',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_tbm_state_idx",
        fields: [
          { name: "tbm_code" },
          { name: "is_sign" },
        ]
      },
      {
        name: "tb_tbm_state_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
