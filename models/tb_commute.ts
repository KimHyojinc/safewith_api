import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_account, tb_accountId } from './tb_account';
import type { tb_lib, tb_libId } from './tb_lib';
import type { tb_site, tb_siteId } from './tb_site';

export interface tb_commuteAttributes {
  code: number;
  site_code: number;
  account_code: number;
  state_code: number;
  in_dt?: Date;
  out_dt?: Date;
  reg_dt?: Date;
  update_dt?: Date;
  e_sign?: string;
  special_notes?: string;
  reason_code?: number;
  reason_cause?: string;
  doc_file?: string;
}

export type tb_commutePk = "code";
export type tb_commuteId = tb_commute[tb_commutePk];
export type tb_commuteOptionalAttributes = "in_dt" | "out_dt" | "reg_dt" | "update_dt" | "e_sign" | "special_notes" | "reason_code" | "reason_cause" | "doc_file";
export type tb_commuteCreationAttributes = Optional<tb_commuteAttributes, tb_commuteOptionalAttributes>;

export class tb_commute extends Model<tb_commuteAttributes, tb_commuteCreationAttributes> implements tb_commuteAttributes {
  code!: number;
  site_code!: number;
  account_code!: number;
  state_code!: number;
  in_dt?: Date;
  out_dt?: Date;
  reg_dt?: Date;
  update_dt?: Date;
  e_sign?: string;
  special_notes?: string;
  reason_code?: number;
  reason_cause?: string;
  doc_file?: string;

  // tb_commute belongsTo tb_account via account_code
  account_code_tb_account!: tb_account;
  getAccount_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setAccount_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createAccount_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_commute belongsTo tb_lib via state_code
  state_code_tb_lib!: tb_lib;
  getState_code_tb_lib!: Sequelize.BelongsToGetAssociationMixin<tb_lib>;
  setState_code_tb_lib!: Sequelize.BelongsToSetAssociationMixin<tb_lib, tb_libId>;
  createState_code_tb_lib!: Sequelize.BelongsToCreateAssociationMixin<tb_lib>;
  // tb_commute belongsTo tb_site via site_code
  site_code_tb_site!: tb_site;
  getSite_code_tb_site!: Sequelize.BelongsToGetAssociationMixin<tb_site>;
  setSite_code_tb_site!: Sequelize.BelongsToSetAssociationMixin<tb_site, tb_siteId>;
  createSite_code_tb_site!: Sequelize.BelongsToCreateAssociationMixin<tb_site>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_commute {
    return tb_commute.init({
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
    state_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_lib',
        key: 'code'
      }
    },
    in_dt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    out_dt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    reg_dt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    update_dt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    e_sign: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: ""
    },
    special_notes: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    },
    reason_code: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    reason_cause: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    doc_file: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_commute',
    schema: 'public',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "tb_commute_idx",
        fields: [
          { name: "account_code" },
          { name: "state_code" },
          { name: "reg_dt" },
        ]
      },
      {
        name: "tb_commute_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
