import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_account, tb_accountId } from './tb_account';
import type { tb_site, tb_siteId } from './tb_site';

export interface tb_site_schAttributes {
  code: number;
  site_code: number;
  m_begin_dt: string;
  m_end_dt: string;
  c_begin_dt: string;
  c_end_dt: string;
  is_approval?: number;
  approval_dt?: Date;
  register_code: number;
  reg_dt?: Date;
  updater_code: number;
  update_dt?: Date;
}

export type tb_site_schPk = "code";
export type tb_site_schId = tb_site_sch[tb_site_schPk];
export type tb_site_schOptionalAttributes = "is_approval" | "approval_dt" | "reg_dt" | "update_dt";
export type tb_site_schCreationAttributes = Optional<tb_site_schAttributes, tb_site_schOptionalAttributes>;

export class tb_site_sch extends Model<tb_site_schAttributes, tb_site_schCreationAttributes> implements tb_site_schAttributes {
  code!: number;
  site_code!: number;
  m_begin_dt!: string;
  m_end_dt!: string;
  c_begin_dt!: string;
  c_end_dt!: string;
  is_approval?: number;
  approval_dt?: Date;
  register_code!: number;
  reg_dt?: Date;
  updater_code!: number;
  update_dt?: Date;

  // tb_site_sch belongsTo tb_account via register_code
  register_code_tb_account!: tb_account;
  getRegister_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setRegister_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createRegister_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_site_sch belongsTo tb_account via updater_code
  updater_code_tb_account!: tb_account;
  getUpdater_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setUpdater_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createUpdater_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_site_sch belongsTo tb_site via site_code
  site_code_tb_site!: tb_site;
  getSite_code_tb_site!: Sequelize.BelongsToGetAssociationMixin<tb_site>;
  setSite_code_tb_site!: Sequelize.BelongsToSetAssociationMixin<tb_site, tb_siteId>;
  createSite_code_tb_site!: Sequelize.BelongsToCreateAssociationMixin<tb_site>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_site_sch {
    return tb_site_sch.init({
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
    m_begin_dt: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    m_end_dt: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    c_begin_dt: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    c_end_dt: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    is_approval: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    approval_dt: {
      type: DataTypes.DATE,
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
    tableName: 'tb_site_sch',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_site_sch_idx",
        fields: [
          { name: "site_code" },
        ]
      },
      {
        name: "tb_site_sch_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
