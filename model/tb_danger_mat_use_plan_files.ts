import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_danger_mat_use_plan, tb_danger_mat_use_planId } from './tb_danger_mat_use_plan';

export interface tb_danger_mat_use_plan_filesAttributes {
  code: number;
  danger_mat_use_plan_code: number;
  file?: string;
}

export type tb_danger_mat_use_plan_filesPk = "code";
export type tb_danger_mat_use_plan_filesId = tb_danger_mat_use_plan_files[tb_danger_mat_use_plan_filesPk];
export type tb_danger_mat_use_plan_filesOptionalAttributes = "file";
export type tb_danger_mat_use_plan_filesCreationAttributes = Optional<tb_danger_mat_use_plan_filesAttributes, tb_danger_mat_use_plan_filesOptionalAttributes>;

export class tb_danger_mat_use_plan_files extends Model<tb_danger_mat_use_plan_filesAttributes, tb_danger_mat_use_plan_filesCreationAttributes> implements tb_danger_mat_use_plan_filesAttributes {
  code!: number;
  danger_mat_use_plan_code!: number;
  file?: string;

  // tb_danger_mat_use_plan_files belongsTo tb_danger_mat_use_plan via danger_mat_use_plan_code
  danger_mat_use_plan_code_tb_danger_mat_use_plan!: tb_danger_mat_use_plan;
  getDanger_mat_use_plan_code_tb_danger_mat_use_plan!: Sequelize.BelongsToGetAssociationMixin<tb_danger_mat_use_plan>;
  setDanger_mat_use_plan_code_tb_danger_mat_use_plan!: Sequelize.BelongsToSetAssociationMixin<tb_danger_mat_use_plan, tb_danger_mat_use_planId>;
  createDanger_mat_use_plan_code_tb_danger_mat_use_plan!: Sequelize.BelongsToCreateAssociationMixin<tb_danger_mat_use_plan>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_danger_mat_use_plan_files {
    return tb_danger_mat_use_plan_files.init({
    code: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    danger_mat_use_plan_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_danger_mat_use_plan',
        key: 'code'
      }
    },
    file: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_danger_mat_use_plan_files',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_danger_mat_use_plan_files_idx",
        fields: [
          { name: "code" },
        ]
      },
      {
        name: "tb_danger_mat_use_plan_files_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
