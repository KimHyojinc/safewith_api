import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_account, tb_accountId } from './tb_account';
import type { tb_edu_sch, tb_edu_schId } from './tb_edu_sch';

export interface tb_edu_sch_memberAttributes {
  code: number;
  edu_sch_code: number;
  account_code: number;
  is_complete?: number;
  complete_dt?: Date;
  complete_state?: number;
  judge_state?: number;
  cert_doc_file?: string;
  cert_no?: string;
}

export type tb_edu_sch_memberPk = "code";
export type tb_edu_sch_memberId = tb_edu_sch_member[tb_edu_sch_memberPk];
export type tb_edu_sch_memberOptionalAttributes = "is_complete" | "complete_dt" | "complete_state" | "judge_state" | "cert_doc_file" | "cert_no";
export type tb_edu_sch_memberCreationAttributes = Optional<tb_edu_sch_memberAttributes, tb_edu_sch_memberOptionalAttributes>;

export class tb_edu_sch_member extends Model<tb_edu_sch_memberAttributes, tb_edu_sch_memberCreationAttributes> implements tb_edu_sch_memberAttributes {
  code!: number;
  edu_sch_code!: number;
  account_code!: number;
  is_complete?: number;
  complete_dt?: Date;
  complete_state?: number;
  judge_state?: number;
  cert_doc_file?: string;
  cert_no?: string;

  // tb_edu_sch_member belongsTo tb_account via account_code
  account_code_tb_account!: tb_account;
  getAccount_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setAccount_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createAccount_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_edu_sch_member belongsTo tb_edu_sch via edu_sch_code
  edu_sch_code_tb_edu_sch!: tb_edu_sch;
  getEdu_sch_code_tb_edu_sch!: Sequelize.BelongsToGetAssociationMixin<tb_edu_sch>;
  setEdu_sch_code_tb_edu_sch!: Sequelize.BelongsToSetAssociationMixin<tb_edu_sch, tb_edu_schId>;
  createEdu_sch_code_tb_edu_sch!: Sequelize.BelongsToCreateAssociationMixin<tb_edu_sch>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_edu_sch_member {
    return tb_edu_sch_member.init({
    code: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    edu_sch_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_edu_sch',
        key: 'code'
      }
    },
    account_code: {
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
    complete_dt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    complete_state: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    judge_state: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cert_doc_file: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cert_no: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_edu_sch_member',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_edu_sch_member_idx",
        fields: [
          { name: "edu_sch_code" },
          { name: "account_code" },
        ]
      },
      {
        name: "tb_edu_sch_member_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
