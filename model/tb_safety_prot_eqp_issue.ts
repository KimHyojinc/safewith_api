import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_account, tb_accountId } from './tb_account';
import type { tb_safety_prot_eqp_issue_dtail, tb_safety_prot_eqp_issue_dtailId } from './tb_safety_prot_eqp_issue_dtail';
import type { tb_site, tb_siteId } from './tb_site';

export interface tb_safety_prot_eqp_issueAttributes {
  code: number;
  site_code: number;
  worker_code: number;
  is_sign?: number;
  sign_dt?: Date;
  e_sign?: string;
  issue_dt?: string;
  register_code: number;
  reg_dt?: Date;
  updater_code: number;
  update_dt?: Date;
  comment?: string;
  etc_eqp_name?: string;
}

export type tb_safety_prot_eqp_issuePk = "code";
export type tb_safety_prot_eqp_issueId = tb_safety_prot_eqp_issue[tb_safety_prot_eqp_issuePk];
export type tb_safety_prot_eqp_issueOptionalAttributes = "is_sign" | "sign_dt" | "e_sign" | "issue_dt" | "reg_dt" | "update_dt" | "comment" | "etc_eqp_name";
export type tb_safety_prot_eqp_issueCreationAttributes = Optional<tb_safety_prot_eqp_issueAttributes, tb_safety_prot_eqp_issueOptionalAttributes>;

export class tb_safety_prot_eqp_issue extends Model<tb_safety_prot_eqp_issueAttributes, tb_safety_prot_eqp_issueCreationAttributes> implements tb_safety_prot_eqp_issueAttributes {
  code!: number;
  site_code!: number;
  worker_code!: number;
  is_sign?: number;
  sign_dt?: Date;
  e_sign?: string;
  issue_dt?: string;
  register_code!: number;
  reg_dt?: Date;
  updater_code!: number;
  update_dt?: Date;
  comment?: string;
  etc_eqp_name?: string;

  // tb_safety_prot_eqp_issue belongsTo tb_account via register_code
  register_code_tb_account!: tb_account;
  getRegister_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setRegister_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createRegister_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_safety_prot_eqp_issue belongsTo tb_account via updater_code
  updater_code_tb_account!: tb_account;
  getUpdater_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setUpdater_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createUpdater_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_safety_prot_eqp_issue belongsTo tb_account via worker_code
  worker_code_tb_account!: tb_account;
  getWorker_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setWorker_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createWorker_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_safety_prot_eqp_issue hasMany tb_safety_prot_eqp_issue_dtail via safety_prot_eqp_issue_code
  tb_safety_prot_eqp_issue_dtails!: tb_safety_prot_eqp_issue_dtail[];
  getTb_safety_prot_eqp_issue_dtails!: Sequelize.HasManyGetAssociationsMixin<tb_safety_prot_eqp_issue_dtail>;
  setTb_safety_prot_eqp_issue_dtails!: Sequelize.HasManySetAssociationsMixin<tb_safety_prot_eqp_issue_dtail, tb_safety_prot_eqp_issue_dtailId>;
  addTb_safety_prot_eqp_issue_dtail!: Sequelize.HasManyAddAssociationMixin<tb_safety_prot_eqp_issue_dtail, tb_safety_prot_eqp_issue_dtailId>;
  addTb_safety_prot_eqp_issue_dtails!: Sequelize.HasManyAddAssociationsMixin<tb_safety_prot_eqp_issue_dtail, tb_safety_prot_eqp_issue_dtailId>;
  createTb_safety_prot_eqp_issue_dtail!: Sequelize.HasManyCreateAssociationMixin<tb_safety_prot_eqp_issue_dtail>;
  removeTb_safety_prot_eqp_issue_dtail!: Sequelize.HasManyRemoveAssociationMixin<tb_safety_prot_eqp_issue_dtail, tb_safety_prot_eqp_issue_dtailId>;
  removeTb_safety_prot_eqp_issue_dtails!: Sequelize.HasManyRemoveAssociationsMixin<tb_safety_prot_eqp_issue_dtail, tb_safety_prot_eqp_issue_dtailId>;
  hasTb_safety_prot_eqp_issue_dtail!: Sequelize.HasManyHasAssociationMixin<tb_safety_prot_eqp_issue_dtail, tb_safety_prot_eqp_issue_dtailId>;
  hasTb_safety_prot_eqp_issue_dtails!: Sequelize.HasManyHasAssociationsMixin<tb_safety_prot_eqp_issue_dtail, tb_safety_prot_eqp_issue_dtailId>;
  countTb_safety_prot_eqp_issue_dtails!: Sequelize.HasManyCountAssociationsMixin;
  // tb_safety_prot_eqp_issue belongsTo tb_site via site_code
  site_code_tb_site!: tb_site;
  getSite_code_tb_site!: Sequelize.BelongsToGetAssociationMixin<tb_site>;
  setSite_code_tb_site!: Sequelize.BelongsToSetAssociationMixin<tb_site, tb_siteId>;
  createSite_code_tb_site!: Sequelize.BelongsToCreateAssociationMixin<tb_site>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_safety_prot_eqp_issue {
    return tb_safety_prot_eqp_issue.init({
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
    worker_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_account',
        key: 'code'
      }
    },
    is_sign: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sign_dt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    e_sign: {
      type: DataTypes.TEXT,
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
    },
    comment: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    etc_eqp_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_safety_prot_eqp_issue',
    schema: 'public',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "tb_safety_prot_eqp_issue_idx",
        fields: [
          { name: "code" },
        ]
      },
      {
        name: "tb_safety_prot_eqp_issue_pkey1",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
