import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_account, tb_accountId } from './tb_account';
import type { tb_site, tb_siteId } from './tb_site';

export interface tb_health_stressAttributes {
  code: number;
  site_code: number;
  account_code: number;
  measures: number;
  measure_dt: string;
  reg_dt?: Date;
}

export type tb_health_stressPk = "code";
export type tb_health_stressId = tb_health_stress[tb_health_stressPk];
export type tb_health_stressOptionalAttributes = "reg_dt";
export type tb_health_stressCreationAttributes = Optional<tb_health_stressAttributes, tb_health_stressOptionalAttributes>;

export class tb_health_stress extends Model<tb_health_stressAttributes, tb_health_stressCreationAttributes> implements tb_health_stressAttributes {
  code!: number;
  site_code!: number;
  account_code!: number;
  measures!: number;
  measure_dt!: string;
  reg_dt?: Date;

  // tb_health_stress belongsTo tb_account via account_code
  account_code_tb_account!: tb_account;
  getAccount_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setAccount_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createAccount_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_health_stress belongsTo tb_site via site_code
  site_code_tb_site!: tb_site;
  getSite_code_tb_site!: Sequelize.BelongsToGetAssociationMixin<tb_site>;
  setSite_code_tb_site!: Sequelize.BelongsToSetAssociationMixin<tb_site, tb_siteId>;
  createSite_code_tb_site!: Sequelize.BelongsToCreateAssociationMixin<tb_site>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_health_stress {
    return tb_health_stress.init({
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
    measures: {
      type: DataTypes.INTEGER,
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
    tableName: 'tb_health_stress',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_health_stress_idx",
        fields: [
          { name: "site_code" },
          { name: "account_code" },
          { name: "reg_dt" },
        ]
      },
      {
        name: "tb_health_stress_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
