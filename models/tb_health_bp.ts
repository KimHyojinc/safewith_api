import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_account, tb_accountId } from './tb_account';
import type { tb_site, tb_siteId } from './tb_site';

export interface tb_health_bpAttributes {
  code: number;
  site_code: number;
  account_code: number;
  bp_max?: number;
  bp_min?: number;
  measure_dt: string;
  reg_dt?: Date;
}

export type tb_health_bpPk = "code";
export type tb_health_bpId = tb_health_bp[tb_health_bpPk];
export type tb_health_bpOptionalAttributes = "bp_max" | "bp_min" | "reg_dt";
export type tb_health_bpCreationAttributes = Optional<tb_health_bpAttributes, tb_health_bpOptionalAttributes>;

export class tb_health_bp extends Model<tb_health_bpAttributes, tb_health_bpCreationAttributes> implements tb_health_bpAttributes {
  code!: number;
  site_code!: number;
  account_code!: number;
  bp_max?: number;
  bp_min?: number;
  measure_dt!: string;
  reg_dt?: Date;

  // tb_health_bp belongsTo tb_account via account_code
  account_code_tb_account!: tb_account;
  getAccount_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setAccount_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createAccount_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_health_bp belongsTo tb_site via site_code
  site_code_tb_site!: tb_site;
  getSite_code_tb_site!: Sequelize.BelongsToGetAssociationMixin<tb_site>;
  setSite_code_tb_site!: Sequelize.BelongsToSetAssociationMixin<tb_site, tb_siteId>;
  createSite_code_tb_site!: Sequelize.BelongsToCreateAssociationMixin<tb_site>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_health_bp {
    return tb_health_bp.init({
    code: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    site_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_site',
        key: 'code'
      }
    },
    account_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_account',
        key: 'code'
      }
    },
    bp_max: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    bp_min: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    measure_dt: {
      type: DataTypes.STRING(19),
      allowNull: false
    },
    reg_dt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    }
  }, {
    sequelize,
    tableName: 'tb_health_bp',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_health_bp_idx",
        fields: [
          { name: "site_code" },
          { name: "account_code" },
          { name: "reg_dt" },
        ]
      },
      {
        name: "tb_health_bp_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
