import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_account, tb_accountId } from './tb_account';
import type { tb_site, tb_siteId } from './tb_site';

export interface tb_health_alcohol_histAttributes {
  code: number;
  site_code: number;
  account_code: number;
  measures: number;
  measure_dt: string;
  reg_dt?: Date;
}

export type tb_health_alcohol_histPk = "code";
export type tb_health_alcohol_histId = tb_health_alcohol_hist[tb_health_alcohol_histPk];
export type tb_health_alcohol_histOptionalAttributes = "reg_dt";
export type tb_health_alcohol_histCreationAttributes = Optional<tb_health_alcohol_histAttributes, tb_health_alcohol_histOptionalAttributes>;

export class tb_health_alcohol_hist extends Model<tb_health_alcohol_histAttributes, tb_health_alcohol_histCreationAttributes> implements tb_health_alcohol_histAttributes {
  code!: number;
  site_code!: number;
  account_code!: number;
  measures!: number;
  measure_dt!: string;
  reg_dt?: Date;

  // tb_health_alcohol_hist belongsTo tb_account via account_code
  account_code_tb_account!: tb_account;
  getAccount_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setAccount_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createAccount_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_health_alcohol_hist belongsTo tb_site via site_code
  site_code_tb_site!: tb_site;
  getSite_code_tb_site!: Sequelize.BelongsToGetAssociationMixin<tb_site>;
  setSite_code_tb_site!: Sequelize.BelongsToSetAssociationMixin<tb_site, tb_siteId>;
  createSite_code_tb_site!: Sequelize.BelongsToCreateAssociationMixin<tb_site>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_health_alcohol_hist {
    return tb_health_alcohol_hist.init({
    code: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
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
    measures: {
      type: DataTypes.DOUBLE,
      allowNull: false
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
    tableName: 'tb_health_alcohol_hist',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_health_alcohol_hist_idx",
        fields: [
          { name: "code" },
        ]
      },
      {
        name: "tb_health_alcohol_hist_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
