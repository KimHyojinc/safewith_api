import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tb_qnaAttributes {
  id: number;
  created_at?: Date;
  is_enable?: boolean;
  updated_at?: Date;
  answer?: string;
  email: string;
  is_answered?: boolean;
  question: string;
  questioner_name: string;
}

export type tb_qnaPk = "id";
export type tb_qnaId = tb_qna[tb_qnaPk];
export type tb_qnaOptionalAttributes = "created_at" | "is_enable" | "updated_at" | "answer" | "is_answered";
export type tb_qnaCreationAttributes = Optional<tb_qnaAttributes, tb_qnaOptionalAttributes>;

export class tb_qna extends Model<tb_qnaAttributes, tb_qnaCreationAttributes> implements tb_qnaAttributes {
  id!: number;
  created_at?: Date;
  is_enable?: boolean;
  updated_at?: Date;
  answer?: string;
  email!: string;
  is_answered?: boolean;
  question!: string;
  questioner_name!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof tb_qna {
    return tb_qna.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    is_enable: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    answer: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    is_answered: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    question: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    questioner_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tb_qna',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_qna_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
