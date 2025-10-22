import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_account, tb_accountId } from './tb_account';

export interface tb_req_docAttributes {
  code: number;
  account_code: number;
  doc_data: string;
  doc_type: number;
  reg_dt?: Date;
  update_dt?: Date;
  contract_code?: number;
}

export type tb_req_docPk = "code";
export type tb_req_docId = tb_req_doc[tb_req_docPk];
export type tb_req_docOptionalAttributes = "reg_dt" | "update_dt" | "contract_code";
export type tb_req_docCreationAttributes = Optional<tb_req_docAttributes, tb_req_docOptionalAttributes>;

export class tb_req_doc extends Model<tb_req_docAttributes, tb_req_docCreationAttributes> implements tb_req_docAttributes {
  code!: number;
  account_code!: number;
  doc_data!: string;
  doc_type!: number;
  reg_dt?: Date;
  update_dt?: Date;
  contract_code?: number;

  // tb_req_doc belongsTo tb_account via account_code
  account_code_tb_account!: tb_account;
  getAccount_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setAccount_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createAccount_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_req_doc {
    return tb_req_doc.init({
    code: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    account_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_account',
        key: 'code'
      }
    },
    doc_data: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    doc_type: {
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
    },
    contract_code: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_req_doc',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_req_doc_idx",
        fields: [
          { name: "account_code" },
          { name: "doc_type" },
        ]
      },
      {
        name: "tb_req_doc_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
