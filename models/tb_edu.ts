import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_account, tb_accountId } from './tb_account';
import type { tb_client, tb_clientId } from './tb_client';
import type { tb_edu_contents, tb_edu_contentsId } from './tb_edu_contents';
import type { tb_edu_exam, tb_edu_examId } from './tb_edu_exam';
import type { tb_edu_sch, tb_edu_schId } from './tb_edu_sch';

export interface tb_eduAttributes {
  code: number;
  client_code: number;
  type_code: number;
  const_type_code: number;
  subject: string;
  contents: string;
  exp_begin: string;
  exp_end: string;
  register_code: number;
  reg_dt?: Date;
  updater_code: number;
  update_dt?: Date;
  contents_type?: number;
}

export type tb_eduPk = "code";
export type tb_eduId = tb_edu[tb_eduPk];
export type tb_eduOptionalAttributes = "reg_dt" | "update_dt" | "contents_type";
export type tb_eduCreationAttributes = Optional<tb_eduAttributes, tb_eduOptionalAttributes>;

export class tb_edu extends Model<tb_eduAttributes, tb_eduCreationAttributes> implements tb_eduAttributes {
  code!: number;
  client_code!: number;
  type_code!: number;
  const_type_code!: number;
  subject!: string;
  contents!: string;
  exp_begin!: string;
  exp_end!: string;
  register_code!: number;
  reg_dt?: Date;
  updater_code!: number;
  update_dt?: Date;
  contents_type?: number;

  // tb_edu belongsTo tb_account via register_code
  register_code_tb_account!: tb_account;
  getRegister_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setRegister_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createRegister_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_edu belongsTo tb_account via updater_code
  updater_code_tb_account!: tb_account;
  getUpdater_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setUpdater_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createUpdater_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_edu belongsTo tb_client via client_code
  client_code_tb_client!: tb_client;
  getClient_code_tb_client!: Sequelize.BelongsToGetAssociationMixin<tb_client>;
  setClient_code_tb_client!: Sequelize.BelongsToSetAssociationMixin<tb_client, tb_clientId>;
  createClient_code_tb_client!: Sequelize.BelongsToCreateAssociationMixin<tb_client>;
  // tb_edu hasMany tb_edu_contents via edu_code
  tb_edu_contents!: tb_edu_contents[];
  getTb_edu_contents!: Sequelize.HasManyGetAssociationsMixin<tb_edu_contents>;
  setTb_edu_contents!: Sequelize.HasManySetAssociationsMixin<tb_edu_contents, tb_edu_contentsId>;
  addTb_edu_content!: Sequelize.HasManyAddAssociationMixin<tb_edu_contents, tb_edu_contentsId>;
  addTb_edu_contents!: Sequelize.HasManyAddAssociationsMixin<tb_edu_contents, tb_edu_contentsId>;
  createTb_edu_content!: Sequelize.HasManyCreateAssociationMixin<tb_edu_contents>;
  removeTb_edu_content!: Sequelize.HasManyRemoveAssociationMixin<tb_edu_contents, tb_edu_contentsId>;
  removeTb_edu_contents!: Sequelize.HasManyRemoveAssociationsMixin<tb_edu_contents, tb_edu_contentsId>;
  hasTb_edu_content!: Sequelize.HasManyHasAssociationMixin<tb_edu_contents, tb_edu_contentsId>;
  hasTb_edu_contents!: Sequelize.HasManyHasAssociationsMixin<tb_edu_contents, tb_edu_contentsId>;
  countTb_edu_contents!: Sequelize.HasManyCountAssociationsMixin;
  // tb_edu hasMany tb_edu_exam via edu_code
  tb_edu_exams!: tb_edu_exam[];
  getTb_edu_exams!: Sequelize.HasManyGetAssociationsMixin<tb_edu_exam>;
  setTb_edu_exams!: Sequelize.HasManySetAssociationsMixin<tb_edu_exam, tb_edu_examId>;
  addTb_edu_exam!: Sequelize.HasManyAddAssociationMixin<tb_edu_exam, tb_edu_examId>;
  addTb_edu_exams!: Sequelize.HasManyAddAssociationsMixin<tb_edu_exam, tb_edu_examId>;
  createTb_edu_exam!: Sequelize.HasManyCreateAssociationMixin<tb_edu_exam>;
  removeTb_edu_exam!: Sequelize.HasManyRemoveAssociationMixin<tb_edu_exam, tb_edu_examId>;
  removeTb_edu_exams!: Sequelize.HasManyRemoveAssociationsMixin<tb_edu_exam, tb_edu_examId>;
  hasTb_edu_exam!: Sequelize.HasManyHasAssociationMixin<tb_edu_exam, tb_edu_examId>;
  hasTb_edu_exams!: Sequelize.HasManyHasAssociationsMixin<tb_edu_exam, tb_edu_examId>;
  countTb_edu_exams!: Sequelize.HasManyCountAssociationsMixin;
  // tb_edu hasMany tb_edu_sch via edu_code
  tb_edu_sches!: tb_edu_sch[];
  getTb_edu_sches!: Sequelize.HasManyGetAssociationsMixin<tb_edu_sch>;
  setTb_edu_sches!: Sequelize.HasManySetAssociationsMixin<tb_edu_sch, tb_edu_schId>;
  addTb_edu_sch!: Sequelize.HasManyAddAssociationMixin<tb_edu_sch, tb_edu_schId>;
  addTb_edu_sches!: Sequelize.HasManyAddAssociationsMixin<tb_edu_sch, tb_edu_schId>;
  createTb_edu_sch!: Sequelize.HasManyCreateAssociationMixin<tb_edu_sch>;
  removeTb_edu_sch!: Sequelize.HasManyRemoveAssociationMixin<tb_edu_sch, tb_edu_schId>;
  removeTb_edu_sches!: Sequelize.HasManyRemoveAssociationsMixin<tb_edu_sch, tb_edu_schId>;
  hasTb_edu_sch!: Sequelize.HasManyHasAssociationMixin<tb_edu_sch, tb_edu_schId>;
  hasTb_edu_sches!: Sequelize.HasManyHasAssociationsMixin<tb_edu_sch, tb_edu_schId>;
  countTb_edu_sches!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_edu {
    return tb_edu.init({
    code: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    client_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_client',
        key: 'code'
      }
    },
    type_code: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    const_type_code: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    subject: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    contents: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    exp_begin: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    exp_end: {
      type: DataTypes.STRING(10),
      allowNull: false
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
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
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
    },
    contents_type: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'tb_edu',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_edu_idx",
        fields: [
          { name: "client_code" },
          { name: "type_code" },
        ]
      },
      {
        name: "tb_edu_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
