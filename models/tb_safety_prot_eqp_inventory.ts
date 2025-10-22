import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_account, tb_accountId } from './tb_account';
import type { tb_site, tb_siteId } from './tb_site';

export interface tb_safety_prot_eqp_inventoryAttributes {
  code: number;
  site_code: number;
  prot_eqp_code: number;
  issue_dt?: string;
  purchase_count?: number;
  issue_count?: number;
  stock_count?: number;
  tot_purchase_count?: number;
  tot_issue_count?: number;
  tot_stock_count?: number;
  register_code: number;
  reg_dt?: Date;
  updater_code: number;
  update_dt?: Date;
  comment?: string;
}

export type tb_safety_prot_eqp_inventoryPk = "code";
export type tb_safety_prot_eqp_inventoryId = tb_safety_prot_eqp_inventory[tb_safety_prot_eqp_inventoryPk];
export type tb_safety_prot_eqp_inventoryOptionalAttributes = "issue_dt" | "purchase_count" | "issue_count" | "stock_count" | "tot_purchase_count" | "tot_issue_count" | "tot_stock_count" | "reg_dt" | "update_dt" | "comment";
export type tb_safety_prot_eqp_inventoryCreationAttributes = Optional<tb_safety_prot_eqp_inventoryAttributes, tb_safety_prot_eqp_inventoryOptionalAttributes>;

export class tb_safety_prot_eqp_inventory extends Model<tb_safety_prot_eqp_inventoryAttributes, tb_safety_prot_eqp_inventoryCreationAttributes> implements tb_safety_prot_eqp_inventoryAttributes {
  code!: number;
  site_code!: number;
  prot_eqp_code!: number;
  issue_dt?: string;
  purchase_count?: number;
  issue_count?: number;
  stock_count?: number;
  tot_purchase_count?: number;
  tot_issue_count?: number;
  tot_stock_count?: number;
  register_code!: number;
  reg_dt?: Date;
  updater_code!: number;
  update_dt?: Date;
  comment?: string;

  // tb_safety_prot_eqp_inventory belongsTo tb_account via register_code
  register_code_tb_account!: tb_account;
  getRegister_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setRegister_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createRegister_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_safety_prot_eqp_inventory belongsTo tb_account via updater_code
  updater_code_tb_account!: tb_account;
  getUpdater_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setUpdater_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createUpdater_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_safety_prot_eqp_inventory belongsTo tb_site via site_code
  site_code_tb_site!: tb_site;
  getSite_code_tb_site!: Sequelize.BelongsToGetAssociationMixin<tb_site>;
  setSite_code_tb_site!: Sequelize.BelongsToSetAssociationMixin<tb_site, tb_siteId>;
  createSite_code_tb_site!: Sequelize.BelongsToCreateAssociationMixin<tb_site>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_safety_prot_eqp_inventory {
    return tb_safety_prot_eqp_inventory.init({
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
    prot_eqp_code: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    issue_dt: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    purchase_count: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    issue_count: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    stock_count: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tot_purchase_count: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tot_issue_count: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tot_stock_count: {
      type: DataTypes.INTEGER,
      allowNull: true
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
    },
    comment: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_safety_prot_eqp_inventory',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_safety_prot_eqp_inventory_idx",
        fields: [
          { name: "code" },
        ]
      },
      {
        name: "tb_safety_prot_eqp_inventory_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
