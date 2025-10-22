import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_account, tb_accountId } from './tb_account';
import type { tb_partner, tb_partnerId } from './tb_partner';
import type { tb_site, tb_siteId } from './tb_site';

export interface tb_partner_contractAttributes {
  code: number;
  partner_code: number;
  site_code: number;
  mgr_contact?: string;
  period_begin: string;
  period_end: string;
  register_code: number;
  reg_dt?: Date;
  updater_code: number;
  update_dt?: Date;
}

export type tb_partner_contractPk = "code";
export type tb_partner_contractId = tb_partner_contract[tb_partner_contractPk];
export type tb_partner_contractOptionalAttributes = "mgr_contact" | "reg_dt" | "update_dt";
export type tb_partner_contractCreationAttributes = Optional<tb_partner_contractAttributes, tb_partner_contractOptionalAttributes>;

export class tb_partner_contract extends Model<tb_partner_contractAttributes, tb_partner_contractCreationAttributes> implements tb_partner_contractAttributes {
  code!: number;
  partner_code!: number;
  site_code!: number;
  mgr_contact?: string;
  period_begin!: string;
  period_end!: string;
  register_code!: number;
  reg_dt?: Date;
  updater_code!: number;
  update_dt?: Date;

  // tb_partner_contract belongsTo tb_account via register_code
  register_code_tb_account!: tb_account;
  getRegister_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setRegister_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createRegister_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_partner_contract belongsTo tb_account via updater_code
  updater_code_tb_account!: tb_account;
  getUpdater_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setUpdater_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createUpdater_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_partner_contract belongsTo tb_partner via partner_code
  partner_code_tb_partner!: tb_partner;
  getPartner_code_tb_partner!: Sequelize.BelongsToGetAssociationMixin<tb_partner>;
  setPartner_code_tb_partner!: Sequelize.BelongsToSetAssociationMixin<tb_partner, tb_partnerId>;
  createPartner_code_tb_partner!: Sequelize.BelongsToCreateAssociationMixin<tb_partner>;
  // tb_partner_contract belongsTo tb_site via site_code
  site_code_tb_site!: tb_site;
  getSite_code_tb_site!: Sequelize.BelongsToGetAssociationMixin<tb_site>;
  setSite_code_tb_site!: Sequelize.BelongsToSetAssociationMixin<tb_site, tb_siteId>;
  createSite_code_tb_site!: Sequelize.BelongsToCreateAssociationMixin<tb_site>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_partner_contract {
    return tb_partner_contract.init({
    code: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    partner_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_partner',
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
    mgr_contact: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    },
    period_begin: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    period_end: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    register_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_account',
        key: 'code'
      }
    },
    reg_dt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    updater_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_account',
        key: 'code'
      }
    },
    update_dt: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_partner_contract',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_partner_contract_idx",
        fields: [
          { name: "partner_code" },
          { name: "site_code" },
        ]
      },
      {
        name: "tb_partner_contract_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
