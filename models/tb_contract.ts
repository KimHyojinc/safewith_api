import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_account, tb_accountId } from './tb_account';
import type { tb_partner, tb_partnerId } from './tb_partner';
import type { tb_self_care, tb_self_careId } from './tb_self_care';
import type { tb_site, tb_siteId } from './tb_site';

export interface tb_contractAttributes {
  code: number;
  site_code: number;
  account_code: number;
  partner_code: number;
  job_type: number;
  contract_type: number;
  const_type_code: number;
  unit_price?: number;
  payment_code: number;
  bank_code: number;
  bank_num: string;
  period_begin_dt: string;
  period_end_dt: string;
  alcohol?: string;
  smoked?: string;
  illness?: string;
  is_confirm?: number;
  is_approval?: number;
  approval_dt?: Date;
  approver_code?: number;
  reg_dt?: Date;
  update_dt?: Date;
  legal_addr?: string;
  detail_addr?: string;
  blood_code?: number;
  approval_e_sign?: string;
  family_contact?: string;
  pno1?: string;
  pno2?: string;
  is_rh_min?: number;
  doc_file?: string;
}

export type tb_contractPk = "code";
export type tb_contractId = tb_contract[tb_contractPk];
export type tb_contractOptionalAttributes = "unit_price" | "alcohol" | "smoked" | "illness" | "is_confirm" | "is_approval" | "approval_dt" | "approver_code" | "reg_dt" | "update_dt" | "legal_addr" | "detail_addr" | "blood_code" | "approval_e_sign" | "family_contact" | "pno1" | "pno2" | "is_rh_min" | "doc_file";
export type tb_contractCreationAttributes = Optional<tb_contractAttributes, tb_contractOptionalAttributes>;

export class tb_contract extends Model<tb_contractAttributes, tb_contractCreationAttributes> implements tb_contractAttributes {
  code!: number;
  site_code!: number;
  account_code!: number;
  partner_code!: number;
  job_type!: number;
  contract_type!: number;
  const_type_code!: number;
  unit_price?: number;
  payment_code!: number;
  bank_code!: number;
  bank_num!: string;
  period_begin_dt!: string;
  period_end_dt!: string;
  alcohol?: string;
  smoked?: string;
  illness?: string;
  is_confirm?: number;
  is_approval?: number;
  approval_dt?: Date;
  approver_code?: number;
  reg_dt?: Date;
  update_dt?: Date;
  legal_addr?: string;
  detail_addr?: string;
  blood_code?: number;
  approval_e_sign?: string;
  family_contact?: string;
  pno1?: string;
  pno2?: string;
  is_rh_min?: number;
  doc_file?: string;

  // tb_contract belongsTo tb_account via account_code
  account_code_tb_account!: tb_account;
  getAccount_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setAccount_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createAccount_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_contract hasMany tb_self_care via contract_code
  tb_self_cares!: tb_self_care[];
  getTb_self_cares!: Sequelize.HasManyGetAssociationsMixin<tb_self_care>;
  setTb_self_cares!: Sequelize.HasManySetAssociationsMixin<tb_self_care, tb_self_careId>;
  addTb_self_care!: Sequelize.HasManyAddAssociationMixin<tb_self_care, tb_self_careId>;
  addTb_self_cares!: Sequelize.HasManyAddAssociationsMixin<tb_self_care, tb_self_careId>;
  createTb_self_care!: Sequelize.HasManyCreateAssociationMixin<tb_self_care>;
  removeTb_self_care!: Sequelize.HasManyRemoveAssociationMixin<tb_self_care, tb_self_careId>;
  removeTb_self_cares!: Sequelize.HasManyRemoveAssociationsMixin<tb_self_care, tb_self_careId>;
  hasTb_self_care!: Sequelize.HasManyHasAssociationMixin<tb_self_care, tb_self_careId>;
  hasTb_self_cares!: Sequelize.HasManyHasAssociationsMixin<tb_self_care, tb_self_careId>;
  countTb_self_cares!: Sequelize.HasManyCountAssociationsMixin;
  // tb_contract belongsTo tb_partner via partner_code
  partner_code_tb_partner!: tb_partner;
  getPartner_code_tb_partner!: Sequelize.BelongsToGetAssociationMixin<tb_partner>;
  setPartner_code_tb_partner!: Sequelize.BelongsToSetAssociationMixin<tb_partner, tb_partnerId>;
  createPartner_code_tb_partner!: Sequelize.BelongsToCreateAssociationMixin<tb_partner>;
  // tb_contract belongsTo tb_site via site_code
  site_code_tb_site!: tb_site;
  getSite_code_tb_site!: Sequelize.BelongsToGetAssociationMixin<tb_site>;
  setSite_code_tb_site!: Sequelize.BelongsToSetAssociationMixin<tb_site, tb_siteId>;
  createSite_code_tb_site!: Sequelize.BelongsToCreateAssociationMixin<tb_site>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_contract {
    return tb_contract.init({
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
    partner_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_partner',
        key: 'code'
      }
    },
    job_type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    contract_type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    const_type_code: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    unit_price: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    payment_code: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    bank_code: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    bank_num: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    period_begin_dt: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    period_end_dt: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    alcohol: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    },
    smoked: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    },
    illness: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    },
    is_confirm: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
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
    approver_code: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
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
    legal_addr: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    detail_addr: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    },
    blood_code: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    approval_e_sign: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    family_contact: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    pno1: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    },
    pno2: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    },
    is_rh_min: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    doc_file: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_contract',
    schema: 'public',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "tb_contract_idx",
        fields: [
          { name: "site_code" },
          { name: "partner_code" },
          { name: "job_type" },
        ]
      },
      {
        name: "tb_contract_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
