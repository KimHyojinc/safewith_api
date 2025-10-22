import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_edu_exam_contents, tb_edu_exam_contentsId } from './tb_edu_exam_contents';
import type { tb_edu_judge, tb_edu_judgeId } from './tb_edu_judge';

export interface tb_edu_judge_contentsAttributes {
  code: number;
  edu_judge_code: number;
  edu_exam_contents_code: number;
  answer: number;
}

export type tb_edu_judge_contentsPk = "code";
export type tb_edu_judge_contentsId = tb_edu_judge_contents[tb_edu_judge_contentsPk];
export type tb_edu_judge_contentsCreationAttributes = tb_edu_judge_contentsAttributes;

export class tb_edu_judge_contents extends Model<tb_edu_judge_contentsAttributes, tb_edu_judge_contentsCreationAttributes> implements tb_edu_judge_contentsAttributes {
  code!: number;
  edu_judge_code!: number;
  edu_exam_contents_code!: number;
  answer!: number;

  // tb_edu_judge_contents belongsTo tb_edu_exam_contents via edu_exam_contents_code
  edu_exam_contents_code_tb_edu_exam_content!: tb_edu_exam_contents;
  getEdu_exam_contents_code_tb_edu_exam_content!: Sequelize.BelongsToGetAssociationMixin<tb_edu_exam_contents>;
  setEdu_exam_contents_code_tb_edu_exam_content!: Sequelize.BelongsToSetAssociationMixin<tb_edu_exam_contents, tb_edu_exam_contentsId>;
  createEdu_exam_contents_code_tb_edu_exam_content!: Sequelize.BelongsToCreateAssociationMixin<tb_edu_exam_contents>;
  // tb_edu_judge_contents belongsTo tb_edu_judge via edu_judge_code
  edu_judge_code_tb_edu_judge!: tb_edu_judge;
  getEdu_judge_code_tb_edu_judge!: Sequelize.BelongsToGetAssociationMixin<tb_edu_judge>;
  setEdu_judge_code_tb_edu_judge!: Sequelize.BelongsToSetAssociationMixin<tb_edu_judge, tb_edu_judgeId>;
  createEdu_judge_code_tb_edu_judge!: Sequelize.BelongsToCreateAssociationMixin<tb_edu_judge>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_edu_judge_contents {
    return tb_edu_judge_contents.init({
    code: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    edu_judge_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_edu_judge',
        key: 'code'
      }
    },
    edu_exam_contents_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_edu_exam_contents',
        key: 'code'
      }
    },
    answer: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tb_edu_judge_contents',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_edu_jduge_contents_idx",
        fields: [
          { name: "code" },
        ]
      },
      {
        name: "tb_edu_judge_contents_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
