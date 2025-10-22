import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_edu_exam, tb_edu_examId } from './tb_edu_exam';
import type { tb_edu_judge_contents, tb_edu_judge_contentsId } from './tb_edu_judge_contents';

export interface tb_edu_exam_contentsAttributes {
  code: number;
  edu_exam_code: number;
  question?: string;
  answer1?: string;
  answer2?: string;
  answer3?: string;
  answer4?: string;
  answer5?: string;
  correct?: number;
}

export type tb_edu_exam_contentsPk = "code";
export type tb_edu_exam_contentsId = tb_edu_exam_contents[tb_edu_exam_contentsPk];
export type tb_edu_exam_contentsOptionalAttributes = "question" | "answer1" | "answer2" | "answer3" | "answer4" | "answer5" | "correct";
export type tb_edu_exam_contentsCreationAttributes = Optional<tb_edu_exam_contentsAttributes, tb_edu_exam_contentsOptionalAttributes>;

export class tb_edu_exam_contents extends Model<tb_edu_exam_contentsAttributes, tb_edu_exam_contentsCreationAttributes> implements tb_edu_exam_contentsAttributes {
  code!: number;
  edu_exam_code!: number;
  question?: string;
  answer1?: string;
  answer2?: string;
  answer3?: string;
  answer4?: string;
  answer5?: string;
  correct?: number;

  // tb_edu_exam_contents belongsTo tb_edu_exam via edu_exam_code
  edu_exam_code_tb_edu_exam!: tb_edu_exam;
  getEdu_exam_code_tb_edu_exam!: Sequelize.BelongsToGetAssociationMixin<tb_edu_exam>;
  setEdu_exam_code_tb_edu_exam!: Sequelize.BelongsToSetAssociationMixin<tb_edu_exam, tb_edu_examId>;
  createEdu_exam_code_tb_edu_exam!: Sequelize.BelongsToCreateAssociationMixin<tb_edu_exam>;
  // tb_edu_exam_contents hasMany tb_edu_judge_contents via edu_exam_contents_code
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

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_edu_exam_contents {
    return tb_edu_exam_contents.init({
    code: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    edu_exam_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_edu_exam',
        key: 'code'
      }
    },
    question: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    answer1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    answer2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    answer3: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    answer4: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    answer5: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    correct: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_edu_exam_contents',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_edu_exam_contents_idx",
        fields: [
          { name: "code" },
        ]
      },
      {
        name: "tb_edu_exam_contents_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
