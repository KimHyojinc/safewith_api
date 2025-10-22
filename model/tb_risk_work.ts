import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_risk, tb_riskId } from './tb_risk';
import type { tb_risk_work_contents, tb_risk_work_contentsId } from './tb_risk_work_contents';

export interface tb_risk_workAttributes {
  code: number;
  risk_code: number;
  name: string;
}

export type tb_risk_workPk = "code";
export type tb_risk_workId = tb_risk_work[tb_risk_workPk];
export type tb_risk_workCreationAttributes = tb_risk_workAttributes;

export class tb_risk_work extends Model<tb_risk_workAttributes, tb_risk_workCreationAttributes> implements tb_risk_workAttributes {
  code!: number;
  risk_code!: number;
  name!: string;

  // tb_risk_work belongsTo tb_risk via risk_code
  risk_code_tb_risk!: tb_risk;
  getRisk_code_tb_risk!: Sequelize.BelongsToGetAssociationMixin<tb_risk>;
  setRisk_code_tb_risk!: Sequelize.BelongsToSetAssociationMixin<tb_risk, tb_riskId>;
  createRisk_code_tb_risk!: Sequelize.BelongsToCreateAssociationMixin<tb_risk>;
  // tb_risk_work hasMany tb_risk_work_contents via work_code
  tb_risk_work_contents!: tb_risk_work_contents[];
  getTb_risk_work_contents!: Sequelize.HasManyGetAssociationsMixin<tb_risk_work_contents>;
  setTb_risk_work_contents!: Sequelize.HasManySetAssociationsMixin<tb_risk_work_contents, tb_risk_work_contentsId>;
  addTb_risk_work_content!: Sequelize.HasManyAddAssociationMixin<tb_risk_work_contents, tb_risk_work_contentsId>;
  addTb_risk_work_contents!: Sequelize.HasManyAddAssociationsMixin<tb_risk_work_contents, tb_risk_work_contentsId>;
  createTb_risk_work_content!: Sequelize.HasManyCreateAssociationMixin<tb_risk_work_contents>;
  removeTb_risk_work_content!: Sequelize.HasManyRemoveAssociationMixin<tb_risk_work_contents, tb_risk_work_contentsId>;
  removeTb_risk_work_contents!: Sequelize.HasManyRemoveAssociationsMixin<tb_risk_work_contents, tb_risk_work_contentsId>;
  hasTb_risk_work_content!: Sequelize.HasManyHasAssociationMixin<tb_risk_work_contents, tb_risk_work_contentsId>;
  hasTb_risk_work_contents!: Sequelize.HasManyHasAssociationsMixin<tb_risk_work_contents, tb_risk_work_contentsId>;
  countTb_risk_work_contents!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_risk_work {
    return tb_risk_work.init({
    code: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    risk_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_risk',
        key: 'code'
      }
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tb_risk_work',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_risk_work_idx",
        fields: [
          { name: "risk_code" },
        ]
      },
      {
        name: "tb_risk_work_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
