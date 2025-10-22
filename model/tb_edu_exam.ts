import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_account, tb_accountId } from './tb_account';
import type { tb_edu, tb_eduId } from './tb_edu';
import type { tb_edu_exam_contents, tb_edu_exam_contentsId } from './tb_edu_exam_contents';
import type { tb_edu_judge, tb_edu_judgeId } from './tb_edu_judge';

export interface tb_edu_examAttributes {
  code: number;
  edu_code: number;
  pass_judge?: number;
  register_code: number;
  reg_dt?: Date;
  updater_code: number;
  update_dt?: Date;
}

export type tb_edu_examPk = "code";
export type tb_edu_examId = tb_edu_exam[tb_edu_examPk];
export type tb_edu_examOptionalAttributes = "pass_judge" | "reg_dt" | "update_dt";
export type tb_edu_examCreationAttributes = Optional<tb_edu_examAttributes, tb_edu_examOptionalAttributes>;

export class tb_edu_exam extends Model<tb_edu_examAttributes, tb_edu_examCreationAttributes> implements tb_edu_examAttributes {
  code!: number;
  edu_code!: number;
  pass_judge?: number;
  register_code!: number;
  reg_dt?: Date;
  updater_code!: number;
  update_dt?: Date;

  // tb_edu_exam belongsTo tb_account via register_code
  register_code_tb_account!: tb_account;
  getRegister_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setRegister_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createRegister_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_edu_exam belongsTo tb_account via updater_code
  updater_code_tb_account!: tb_account;
  getUpdater_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setUpdater_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createUpdater_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_edu_exam belongsTo tb_edu via edu_code
  edu_code_tb_edu!: tb_edu;
  getEdu_code_tb_edu!: Sequelize.BelongsToGetAssociationMixin<tb_edu>;
  setEdu_code_tb_edu!: Sequelize.BelongsToSetAssociationMixin<tb_edu, tb_eduId>;
  createEdu_code_tb_edu!: Sequelize.BelongsToCreateAssociationMixin<tb_edu>;
  // tb_edu_exam hasMany tb_edu_exam_contents via edu_exam_code
  tb_edu_exam_contents!: tb_edu_exam_contents[];
  getTb_edu_exam_contents!: Sequelize.HasManyGetAssociationsMixin<tb_edu_exam_contents>;
  setTb_edu_exam_contents!: Sequelize.HasManySetAssociationsMixin<tb_edu_exam_contents, tb_edu_exam_contentsId>;
  addTb_edu_exam_content!: Sequelize.HasManyAddAssociationMixin<tb_edu_exam_contents, tb_edu_exam_contentsId>;
  addTb_edu_exam_contents!: Sequelize.HasManyAddAssociationsMixin<tb_edu_exam_contents, tb_edu_exam_contentsId>;
  createTb_edu_exam_content!: Sequelize.HasManyCreateAssociationMixin<tb_edu_exam_contents>;
  removeTb_edu_exam_content!: Sequelize.HasManyRemoveAssociationMixin<tb_edu_exam_contents, tb_edu_exam_contentsId>;
  removeTb_edu_exam_contents!: Sequelize.HasManyRemoveAssociationsMixin<tb_edu_exam_contents, tb_edu_exam_contentsId>;
  hasTb_edu_exam_content!: Sequelize.HasManyHasAssociationMixin<tb_edu_exam_contents, tb_edu_exam_contentsId>;
  hasTb_edu_exam_contents!: Sequelize.HasManyHasAssociationsMixin<tb_edu_exam_contents, tb_edu_exam_contentsId>;
  countTb_edu_exam_contents!: Sequelize.HasManyCountAssociationsMixin;
  // tb_edu_exam hasMany tb_edu_judge via edu_exam_code
  tb_edu_judges!: tb_edu_judge[];
  getTb_edu_judges!: Sequelize.HasManyGetAssociationsMixin<tb_edu_judge>;
  setTb_edu_judges!: Sequelize.HasManySetAssociationsMixin<tb_edu_judge, tb_edu_judgeId>;
  addTb_edu_judge!: Sequelize.HasManyAddAssociationMixin<tb_edu_judge, tb_edu_judgeId>;
  addTb_edu_judges!: Sequelize.HasManyAddAssociationsMixin<tb_edu_judge, tb_edu_judgeId>;
  createTb_edu_judge!: Sequelize.HasManyCreateAssociationMixin<tb_edu_judge>;
  removeTb_edu_judge!: Sequelize.HasManyRemoveAssociationMixin<tb_edu_judge, tb_edu_judgeId>;
  removeTb_edu_judges!: Sequelize.HasManyRemoveAssociationsMixin<tb_edu_judge, tb_edu_judgeId>;
  hasTb_edu_judge!: Sequelize.HasManyHasAssociationMixin<tb_edu_judge, tb_edu_judgeId>;
  hasTb_edu_judges!: Sequelize.HasManyHasAssociationsMixin<tb_edu_judge, tb_edu_judgeId>;
  countTb_edu_judges!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_edu_exam {
    return tb_edu_exam.init({
    code: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    edu_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_edu',
        key: 'code'
      }
    },
    pass_judge: {
      type: DataTypes.INTEGER,
      allowNull: true
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
    tableName: 'tb_edu_exam',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_edu_exam_idx",
        fields: [
          { name: "edu_code" },
        ]
      },
      {
        name: "tb_edu_exam_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
