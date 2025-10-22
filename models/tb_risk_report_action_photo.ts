import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_risk_report_action, tb_risk_report_actionId } from './tb_risk_report_action';

export interface tb_risk_report_action_photoAttributes {
  code: number;
  action_code: number;
  photo: string;
}

export type tb_risk_report_action_photoPk = "code";
export type tb_risk_report_action_photoId = tb_risk_report_action_photo[tb_risk_report_action_photoPk];
export type tb_risk_report_action_photoCreationAttributes = tb_risk_report_action_photoAttributes;

export class tb_risk_report_action_photo extends Model<tb_risk_report_action_photoAttributes, tb_risk_report_action_photoCreationAttributes> implements tb_risk_report_action_photoAttributes {
  code!: number;
  action_code!: number;
  photo!: string;

  // tb_risk_report_action_photo belongsTo tb_risk_report_action via action_code
  action_code_tb_risk_report_action!: tb_risk_report_action;
  getAction_code_tb_risk_report_action!: Sequelize.BelongsToGetAssociationMixin<tb_risk_report_action>;
  setAction_code_tb_risk_report_action!: Sequelize.BelongsToSetAssociationMixin<tb_risk_report_action, tb_risk_report_actionId>;
  createAction_code_tb_risk_report_action!: Sequelize.BelongsToCreateAssociationMixin<tb_risk_report_action>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_risk_report_action_photo {
    return tb_risk_report_action_photo.init({
    code: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    action_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_risk_report_action',
        key: 'code'
      }
    },
    photo: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tb_risk_report_action_photo',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_risk_report_action_photo_idx",
        fields: [
          { name: "action_code" },
        ]
      },
      {
        name: "tb_risk_report_action_photo_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
