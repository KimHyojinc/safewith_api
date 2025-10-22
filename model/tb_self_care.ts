import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_contract, tb_contractId } from './tb_contract';

export interface tb_self_careAttributes {
  code: number;
  contract_code: number;
  question: string;
  answer: number;
  reg_dt?: Date;
  update_dt?: Date;
}

export type tb_self_carePk = "code";
export type tb_self_careId = tb_self_care[tb_self_carePk];
export type tb_self_careOptionalAttributes = "reg_dt" | "update_dt";
export type tb_self_careCreationAttributes = Optional<tb_self_careAttributes, tb_self_careOptionalAttributes>;

export class tb_self_care extends Model<tb_self_careAttributes, tb_self_careCreationAttributes> implements tb_self_careAttributes {
  code!: number;
  contract_code!: number;
  question!: string;
  answer!: number;
  reg_dt?: Date;
  update_dt?: Date;

  // tb_self_care belongsTo tb_contract via contract_code
  contract_code_tb_contract!: tb_contract;
  getContract_code_tb_contract!: Sequelize.BelongsToGetAssociationMixin<tb_contract>;
  setContract_code_tb_contract!: Sequelize.BelongsToSetAssociationMixin<tb_contract, tb_contractId>;
  createContract_code_tb_contract!: Sequelize.BelongsToCreateAssociationMixin<tb_contract>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_self_care {
    return tb_self_care.init({
    code: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    contract_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_contract',
        key: 'code'
      }
    },
    question: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    answer: {
      type: DataTypes.INTEGER,
      allowNull: false
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
    tableName: 'tb_self_care',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_self_care_idx",
        fields: [
          { name: "contract_code" },
        ]
      },
      {
        name: "tb_self_care_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
