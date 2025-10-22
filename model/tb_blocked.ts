import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_account, tb_accountId } from './tb_account';
import type { tb_site, tb_siteId } from './tb_site';

export interface tb_blockedAttributes {
  code: number;
  account_code: number;
  site_code: number;
  partner_code?: number;
  contents?: string;
  state?: number;
  register_code: number;
  reg_dt?: Date;
  updater_code: number;
  update_dt?: Date;
}

export type tb_blockedPk = "code";
export type tb_blockedId = tb_blocked[tb_blockedPk];
export type tb_blockedOptionalAttributes = "partner_code" | "contents" | "state" | "reg_dt" | "update_dt";
export type tb_blockedCreationAttributes = Optional<tb_blockedAttributes, tb_blockedOptionalAttributes>;

export class tb_blocked extends Model<tb_blockedAttributes, tb_blockedCreationAttributes> implements tb_blockedAttributes {
  code!: number;
  account_code!: number;
  site_code!: number;
  partner_code?: number;
  contents?: string;
  state?: number;
  register_code!: number;
  reg_dt?: Date;
  updater_code!: number;
  update_dt?: Date;

  // tb_blocked belongsTo tb_account via account_code
  account_code_tb_account!: tb_account;
  getAccount_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setAccount_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createAccount_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_blocked belongsTo tb_site via site_code
  site_code_tb_site!: tb_site;
  getSite_code_tb_site!: Sequelize.BelongsToGetAssociationMixin<tb_site>;
  setSite_code_tb_site!: Sequelize.BelongsToSetAssociationMixin<tb_site, tb_siteId>;
  createSite_code_tb_site!: Sequelize.BelongsToCreateAssociationMixin<tb_site>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_blocked {
    return tb_blocked.init({
    code: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    account_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_account',
        key: 'code'
      }
    },
    site_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_site',
        key: 'code'
      }
    },
    partner_code: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    contents: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: ""
    },
    state: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
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
    }
  }, {
    sequelize,
    tableName: 'tb_blocked',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_blocked_idx",
        fields: [
          { name: "account_code" },
          { name: "site_code" },
          { name: "partner_code" },
          { name: "state" },
        ]
      },
      {
        name: "tb_blocked_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
