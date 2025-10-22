import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_account, tb_accountId } from './tb_account';
import type { tb_siren, tb_sirenId } from './tb_siren';

export interface tb_siren_stateAttributes {
  code: number;
  siren_code: number;
  worker_code: number;
  is_complete?: number;
  reg_dt?: Date;
  update_dt?: Date;
}

export type tb_siren_statePk = "code";
export type tb_siren_stateId = tb_siren_state[tb_siren_statePk];
export type tb_siren_stateOptionalAttributes = "is_complete" | "reg_dt" | "update_dt";
export type tb_siren_stateCreationAttributes = Optional<tb_siren_stateAttributes, tb_siren_stateOptionalAttributes>;

export class tb_siren_state extends Model<tb_siren_stateAttributes, tb_siren_stateCreationAttributes> implements tb_siren_stateAttributes {
  code!: number;
  siren_code!: number;
  worker_code!: number;
  is_complete?: number;
  reg_dt?: Date;
  update_dt?: Date;

  // tb_siren_state belongsTo tb_account via worker_code
  worker_code_tb_account!: tb_account;
  getWorker_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setWorker_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createWorker_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_siren_state belongsTo tb_siren via siren_code
  siren_code_tb_siren!: tb_siren;
  getSiren_code_tb_siren!: Sequelize.BelongsToGetAssociationMixin<tb_siren>;
  setSiren_code_tb_siren!: Sequelize.BelongsToSetAssociationMixin<tb_siren, tb_sirenId>;
  createSiren_code_tb_siren!: Sequelize.BelongsToCreateAssociationMixin<tb_siren>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_siren_state {
    return tb_siren_state.init({
    code: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    siren_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_siren',
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
    is_complete: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    reg_dt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    update_dt: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_siren_state',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_siren_state_idx",
        fields: [
          { name: "siren_code" },
          { name: "is_complete" },
        ]
      },
      {
        name: "tb_siren_state_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
