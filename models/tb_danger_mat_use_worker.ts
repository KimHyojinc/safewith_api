import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_account, tb_accountId } from './tb_account';
import type { tb_danger_mat_use_plan, tb_danger_mat_use_planId } from './tb_danger_mat_use_plan';

export interface tb_danger_mat_use_workerAttributes {
  code: number;
  danger_mat_use_plan_code: number;
  worker_code: number;
  register_code: number;
  reg_dt?: Date;
  updater_code: number;
  update_dt?: Date;
}

export type tb_danger_mat_use_workerPk = "code";
export type tb_danger_mat_use_workerId = tb_danger_mat_use_worker[tb_danger_mat_use_workerPk];
export type tb_danger_mat_use_workerOptionalAttributes = "reg_dt" | "update_dt";
export type tb_danger_mat_use_workerCreationAttributes = Optional<tb_danger_mat_use_workerAttributes, tb_danger_mat_use_workerOptionalAttributes>;

export class tb_danger_mat_use_worker extends Model<tb_danger_mat_use_workerAttributes, tb_danger_mat_use_workerCreationAttributes> implements tb_danger_mat_use_workerAttributes {
  code!: number;
  danger_mat_use_plan_code!: number;
  worker_code!: number;
  register_code!: number;
  reg_dt?: Date;
  updater_code!: number;
  update_dt?: Date;

  // tb_danger_mat_use_worker belongsTo tb_account via register_code
  register_code_tb_account!: tb_account;
  getRegister_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setRegister_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createRegister_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_danger_mat_use_worker belongsTo tb_account via updater_code
  updater_code_tb_account!: tb_account;
  getUpdater_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setUpdater_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createUpdater_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_danger_mat_use_worker belongsTo tb_account via worker_code
  worker_code_tb_account!: tb_account;
  getWorker_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setWorker_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createWorker_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_danger_mat_use_worker belongsTo tb_danger_mat_use_plan via danger_mat_use_plan_code
  danger_mat_use_plan_code_tb_danger_mat_use_plan!: tb_danger_mat_use_plan;
  getDanger_mat_use_plan_code_tb_danger_mat_use_plan!: Sequelize.BelongsToGetAssociationMixin<tb_danger_mat_use_plan>;
  setDanger_mat_use_plan_code_tb_danger_mat_use_plan!: Sequelize.BelongsToSetAssociationMixin<tb_danger_mat_use_plan, tb_danger_mat_use_planId>;
  createDanger_mat_use_plan_code_tb_danger_mat_use_plan!: Sequelize.BelongsToCreateAssociationMixin<tb_danger_mat_use_plan>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_danger_mat_use_worker {
    return tb_danger_mat_use_worker.init({
    code: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    danger_mat_use_plan_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_danger_mat_use_plan',
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
    tableName: 'tb_danger_mat_use_worker',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_danger_mat_use_worker_idx",
        fields: [
          { name: "code" },
        ]
      },
      {
        name: "tb_danger_mat_use_worker_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
