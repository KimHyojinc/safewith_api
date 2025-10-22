import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_account, tb_accountId } from './tb_account';
import type { tb_site, tb_siteId } from './tb_site';

export interface tb_safety_prot_eqp_purch_detailAttributes {
  code: number;
  site_code: number;
  prot_eqp_code: number;
  count?: number;
  issue_dt?: string;
  register_code: number;
  reg_dt?: Date;
  updater_code: number;
  update_dt?: Date;
}

export type tb_safety_prot_eqp_purch_detailPk = "code";
export type tb_safety_prot_eqp_purch_detailId = tb_safety_prot_eqp_purch_detail[tb_safety_prot_eqp_purch_detailPk];
export type tb_safety_prot_eqp_purch_detailOptionalAttributes = "count" | "issue_dt" | "reg_dt" | "update_dt";
export type tb_safety_prot_eqp_purch_detailCreationAttributes = Optional<tb_safety_prot_eqp_purch_detailAttributes, tb_safety_prot_eqp_purch_detailOptionalAttributes>;

export class tb_safety_prot_eqp_purch_detail extends Model<tb_safety_prot_eqp_purch_detailAttributes, tb_safety_prot_eqp_purch_detailCreationAttributes> implements tb_safety_prot_eqp_purch_detailAttributes {
  code!: number;
  site_code!: number;
  prot_eqp_code!: number;
  count?: number;
  issue_dt?: string;
  register_code!: number;
  reg_dt?: Date;
  updater_code!: number;
  update_dt?: Date;

  // tb_safety_prot_eqp_purch_detail belongsTo tb_account via register_code
  register_code_tb_account!: tb_account;
  getRegister_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setRegister_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createRegister_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_safety_prot_eqp_purch_detail belongsTo tb_account via updater_code
  updater_code_tb_account!: tb_account;
  getUpdater_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setUpdater_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createUpdater_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_safety_prot_eqp_purch_detail belongsTo tb_site via site_code
  site_code_tb_site!: tb_site;
  getSite_code_tb_site!: Sequelize.BelongsToGetAssociationMixin<tb_site>;
  setSite_code_tb_site!: Sequelize.BelongsToSetAssociationMixin<tb_site, tb_siteId>;
  createSite_code_tb_site!: Sequelize.BelongsToCreateAssociationMixin<tb_site>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_safety_prot_eqp_purch_detail {
    return tb_safety_prot_eqp_purch_detail.init({
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
    count: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    issue_dt: {
      type: DataTypes.STRING(10),
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
    }
  }, {
    sequelize,
    tableName: 'tb_safety_prot_eqp_purch_detail',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_safety_prot_eqp_issue_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
      {
        name: "tb_safety_prot_eqp_purch_detail_idx",
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
