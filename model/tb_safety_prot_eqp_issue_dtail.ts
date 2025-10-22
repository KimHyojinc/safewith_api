import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_safety_prot_eqp_issue, tb_safety_prot_eqp_issueId } from './tb_safety_prot_eqp_issue';

export interface tb_safety_prot_eqp_issue_dtailAttributes {
  code: number;
  safety_prot_eqp_issue_code: number;
  prot_eqp_code: number;
  count: number;
}

export type tb_safety_prot_eqp_issue_dtailPk = "code";
export type tb_safety_prot_eqp_issue_dtailId = tb_safety_prot_eqp_issue_dtail[tb_safety_prot_eqp_issue_dtailPk];
export type tb_safety_prot_eqp_issue_dtailCreationAttributes = tb_safety_prot_eqp_issue_dtailAttributes;

export class tb_safety_prot_eqp_issue_dtail extends Model<tb_safety_prot_eqp_issue_dtailAttributes, tb_safety_prot_eqp_issue_dtailCreationAttributes> implements tb_safety_prot_eqp_issue_dtailAttributes {
  code!: number;
  safety_prot_eqp_issue_code!: number;
  prot_eqp_code!: number;
  count!: number;

  // tb_safety_prot_eqp_issue_dtail belongsTo tb_safety_prot_eqp_issue via safety_prot_eqp_issue_code
  safety_prot_eqp_issue_code_tb_safety_prot_eqp_issue!: tb_safety_prot_eqp_issue;
  getSafety_prot_eqp_issue_code_tb_safety_prot_eqp_issue!: Sequelize.BelongsToGetAssociationMixin<tb_safety_prot_eqp_issue>;
  setSafety_prot_eqp_issue_code_tb_safety_prot_eqp_issue!: Sequelize.BelongsToSetAssociationMixin<tb_safety_prot_eqp_issue, tb_safety_prot_eqp_issueId>;
  createSafety_prot_eqp_issue_code_tb_safety_prot_eqp_issue!: Sequelize.BelongsToCreateAssociationMixin<tb_safety_prot_eqp_issue>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_safety_prot_eqp_issue_dtail {
    return tb_safety_prot_eqp_issue_dtail.init({
    code: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    safety_prot_eqp_issue_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_safety_prot_eqp_issue',
        key: 'code'
      }
    },
    prot_eqp_code: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tb_safety_prot_eqp_issue_dtail',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_safety_prot_eqp_issue_detail_idx",
        fields: [
          { name: "code" },
        ]
      },
      {
        name: "tb_safety_prot_eqp_issue_dtail_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
