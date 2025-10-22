import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_account, tb_accountId } from './tb_account';
import type { tb_edu_exam, tb_edu_examId } from './tb_edu_exam';
import type { tb_edu_judge_contents, tb_edu_judge_contentsId } from './tb_edu_judge_contents';
import type { tb_edu_sch, tb_edu_schId } from './tb_edu_sch';

export interface tb_edu_judgeAttributes {
  code: number;
  edu_sch_code: number;
  edu_exam_code: number;
  account_code: number;
  register_code: number;
  reg_dt?: Date;
  updater_code: number;
  update_dt?: Date;
}

export type tb_edu_judgePk = "code";
export type tb_edu_judgeId = tb_edu_judge[tb_edu_judgePk];
export type tb_edu_judgeOptionalAttributes = "reg_dt" | "update_dt";
export type tb_edu_judgeCreationAttributes = Optional<tb_edu_judgeAttributes, tb_edu_judgeOptionalAttributes>;

export class tb_edu_judge extends Model<tb_edu_judgeAttributes, tb_edu_judgeCreationAttributes> implements tb_edu_judgeAttributes {
  code!: number;
  edu_sch_code!: number;
  edu_exam_code!: number;
  account_code!: number;
  register_code!: number;
  reg_dt?: Date;
  updater_code!: number;
  update_dt?: Date;

  // tb_edu_judge belongsTo tb_account via register_code
  register_code_tb_account!: tb_account;
  getRegister_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setRegister_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createRegister_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_edu_judge belongsTo tb_account via updater_code
  updater_code_tb_account!: tb_account;
  getUpdater_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setUpdater_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createUpdater_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_edu_judge belongsTo tb_account via account_code
  account_code_tb_account!: tb_account;
  getAccount_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setAccount_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createAccount_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_edu_judge belongsTo tb_edu_exam via edu_exam_code
  edu_exam_code_tb_edu_exam!: tb_edu_exam;
  getEdu_exam_code_tb_edu_exam!: Sequelize.BelongsToGetAssociationMixin<tb_edu_exam>;
  setEdu_exam_code_tb_edu_exam!: Sequelize.BelongsToSetAssociationMixin<tb_edu_exam, tb_edu_examId>;
  createEdu_exam_code_tb_edu_exam!: Sequelize.BelongsToCreateAssociationMixin<tb_edu_exam>;
  // tb_edu_judge hasMany tb_edu_judge_contents via edu_judge_code
  tb_edu_judge_contents!: tb_edu_judge_contents[];
  getTb_edu_judge_contents!: Sequelize.HasManyGetAssociationsMixin<tb_edu_judge_contents>;
  setTb_edu_judge_contents!: Sequelize.HasManySetAssociationsMixin<tb_edu_judge_contents, tb_edu_judge_contentsId>;
  addTb_edu_judge_content!: Sequelize.HasManyAddAssociationMixin<tb_edu_judge_contents, tb_edu_judge_contentsId>;
  addTb_edu_judge_contents!: Sequelize.HasManyAddAssociationsMixin<tb_edu_judge_contents, tb_edu_judge_contentsId>;
  createTb_edu_judge_content!: Sequelize.HasManyCreateAssociationMixin<tb_edu_judge_contents>;
  removeTb_edu_judge_content!: Sequelize.HasManyRemoveAssociationMixin<tb_edu_judge_contents, tb_edu_judge_contentsId>;
  removeTb_edu_judge_contents!: Sequelize.HasManyRemoveAssociationsMixin<tb_edu_judge_contents, tb_edu_judge_contentsId>;
  hasTb_edu_judge_content!: Sequelize.HasManyHasAssociationMixin<tb_edu_judge_contents, tb_edu_judge_contentsId>;
  hasTb_edu_judge_contents!: Sequelize.HasManyHasAssociationsMixin<tb_edu_judge_contents, tb_edu_judge_contentsId>;
  countTb_edu_judge_contents!: Sequelize.HasManyCountAssociationsMixin;
  // tb_edu_judge belongsTo tb_edu_sch via edu_sch_code
  edu_sch_code_tb_edu_sch!: tb_edu_sch;
  getEdu_sch_code_tb_edu_sch!: Sequelize.BelongsToGetAssociationMixin<tb_edu_sch>;
  setEdu_sch_code_tb_edu_sch!: Sequelize.BelongsToSetAssociationMixin<tb_edu_sch, tb_edu_schId>;
  createEdu_sch_code_tb_edu_sch!: Sequelize.BelongsToCreateAssociationMixin<tb_edu_sch>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_edu_judge {
    return tb_edu_judge.init({
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
    edu_exam_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_edu_exam',
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
      allowNull: true
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
    tableName: 'tb_edu_judge',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_edu_judge_idx",
        fields: [
          { name: "code" },
        ]
      },
      {
        name: "tb_edu_judge_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
