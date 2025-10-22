import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_edu, tb_eduId } from './tb_edu';

export interface tb_edu_contentsAttributes {
  code: number;
  edu_code: number;
  file_name: string;
  file_size: number;
  file_path: string;
  thumbnail?: string;
}

export type tb_edu_contentsPk = "code";
export type tb_edu_contentsId = tb_edu_contents[tb_edu_contentsPk];
export type tb_edu_contentsOptionalAttributes = "thumbnail";
export type tb_edu_contentsCreationAttributes = Optional<tb_edu_contentsAttributes, tb_edu_contentsOptionalAttributes>;

export class tb_edu_contents extends Model<tb_edu_contentsAttributes, tb_edu_contentsCreationAttributes> implements tb_edu_contentsAttributes {
  code!: number;
  edu_code!: number;
  file_name!: string;
  file_size!: number;
  file_path!: string;
  thumbnail?: string;

  // tb_edu_contents belongsTo tb_edu via edu_code
  edu_code_tb_edu!: tb_edu;
  getEdu_code_tb_edu!: Sequelize.BelongsToGetAssociationMixin<tb_edu>;
  setEdu_code_tb_edu!: Sequelize.BelongsToSetAssociationMixin<tb_edu, tb_eduId>;
  createEdu_code_tb_edu!: Sequelize.BelongsToCreateAssociationMixin<tb_edu>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_edu_contents {
    return tb_edu_contents.init({
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
    file_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    file_size: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    file_path: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    thumbnail: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_edu_contents',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_edu_contents_idx",
        fields: [
          { name: "edu_code" },
        ]
      },
      {
        name: "tb_edu_contents_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
