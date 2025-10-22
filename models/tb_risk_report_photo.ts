import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_risk_report, tb_risk_reportId } from './tb_risk_report';

export interface tb_risk_report_photoAttributes {
  code: number;
  report_code: number;
  photo: string;
}

export type tb_risk_report_photoPk = "code";
export type tb_risk_report_photoId = tb_risk_report_photo[tb_risk_report_photoPk];
export type tb_risk_report_photoCreationAttributes = tb_risk_report_photoAttributes;

export class tb_risk_report_photo extends Model<tb_risk_report_photoAttributes, tb_risk_report_photoCreationAttributes> implements tb_risk_report_photoAttributes {
  code!: number;
  report_code!: number;
  photo!: string;

  // tb_risk_report_photo belongsTo tb_risk_report via report_code
  report_code_tb_risk_report!: tb_risk_report;
  getReport_code_tb_risk_report!: Sequelize.BelongsToGetAssociationMixin<tb_risk_report>;
  setReport_code_tb_risk_report!: Sequelize.BelongsToSetAssociationMixin<tb_risk_report, tb_risk_reportId>;
  createReport_code_tb_risk_report!: Sequelize.BelongsToCreateAssociationMixin<tb_risk_report>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_risk_report_photo {
    return tb_risk_report_photo.init({
    code: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    report_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_risk_report',
        key: 'code'
      }
    },
    photo: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tb_risk_report_photo',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_risk_report_photo_idx",
        fields: [
          { name: "report_code" },
        ]
      },
      {
        name: "tb_risk_report_photo_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
