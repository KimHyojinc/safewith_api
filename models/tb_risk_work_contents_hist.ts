import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tb_risk_work_contents_histAttributes {
  code: number;
  work_code: number;
  factor: string;
  action: string;
  register_code: number;
  reg_dt?: Date;
  updater_code: number;
  update_dt?: Date;
  const_name?: string;
  work_name?: string;
}

export type tb_risk_work_contents_histPk = "code";
export type tb_risk_work_contents_histId = tb_risk_work_contents_hist[tb_risk_work_contents_histPk];
export type tb_risk_work_contents_histOptionalAttributes = "reg_dt" | "update_dt" | "const_name" | "work_name";
export type tb_risk_work_contents_histCreationAttributes = Optional<tb_risk_work_contents_histAttributes, tb_risk_work_contents_histOptionalAttributes>;

export class tb_risk_work_contents_hist extends Model<tb_risk_work_contents_histAttributes, tb_risk_work_contents_histCreationAttributes> implements tb_risk_work_contents_histAttributes {
  code!: number;
  work_code!: number;
  factor!: string;
  action!: string;
  register_code!: number;
  reg_dt?: Date;
  updater_code!: number;
  update_dt?: Date;
  const_name?: string;
  work_name?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof tb_risk_work_contents_hist {
    return tb_risk_work_contents_hist.init({
    code: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    work_code: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    factor: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    action: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    register_code: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    reg_dt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    updater_code: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    update_dt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    const_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    work_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_risk_work_contents_hist',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_risk_work_contents_hist_idx",
        fields: [
          { name: "code" },
        ]
      },
      {
        name: "tb_risk_work_contents_hist_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
