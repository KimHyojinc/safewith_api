import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_account, tb_accountId } from './tb_account';
import type { tb_contract, tb_contractId } from './tb_contract';
import type { tb_danger_mat_use_plan, tb_danger_mat_use_planId } from './tb_danger_mat_use_plan';
import type { tb_partner_contract, tb_partner_contractId } from './tb_partner_contract';

export interface tb_partnerAttributes {
  code: number;
  name: string;
  addr?: string;
  manager?: string;
  contact?: string;
  register_code: number;
  reg_dt?: Date;
  updater_code: number;
  update_dt?: Date;
}

export type tb_partnerPk = "code";
export type tb_partnerId = tb_partner[tb_partnerPk];
export type tb_partnerOptionalAttributes = "addr" | "manager" | "contact" | "reg_dt" | "update_dt";
export type tb_partnerCreationAttributes = Optional<tb_partnerAttributes, tb_partnerOptionalAttributes>;

export class tb_partner extends Model<tb_partnerAttributes, tb_partnerCreationAttributes> implements tb_partnerAttributes {
  code!: number;
  name!: string;
  addr?: string;
  manager?: string;
  contact?: string;
  register_code!: number;
  reg_dt?: Date;
  updater_code!: number;
  update_dt?: Date;

  // tb_partner belongsTo tb_account via register_code
  register_code_tb_account!: tb_account;
  getRegister_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setRegister_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createRegister_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_partner belongsTo tb_account via updater_code
  updater_code_tb_account!: tb_account;
  getUpdater_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setUpdater_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createUpdater_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_partner hasMany tb_contract via partner_code
  tb_contracts!: tb_contract[];
  getTb_contracts!: Sequelize.HasManyGetAssociationsMixin<tb_contract>;
  setTb_contracts!: Sequelize.HasManySetAssociationsMixin<tb_contract, tb_contractId>;
  addTb_contract!: Sequelize.HasManyAddAssociationMixin<tb_contract, tb_contractId>;
  addTb_contracts!: Sequelize.HasManyAddAssociationsMixin<tb_contract, tb_contractId>;
  createTb_contract!: Sequelize.HasManyCreateAssociationMixin<tb_contract>;
  removeTb_contract!: Sequelize.HasManyRemoveAssociationMixin<tb_contract, tb_contractId>;
  removeTb_contracts!: Sequelize.HasManyRemoveAssociationsMixin<tb_contract, tb_contractId>;
  hasTb_contract!: Sequelize.HasManyHasAssociationMixin<tb_contract, tb_contractId>;
  hasTb_contracts!: Sequelize.HasManyHasAssociationsMixin<tb_contract, tb_contractId>;
  countTb_contracts!: Sequelize.HasManyCountAssociationsMixin;
  // tb_partner hasMany tb_danger_mat_use_plan via partner_code
  tb_danger_mat_use_plans!: tb_danger_mat_use_plan[];
  getTb_danger_mat_use_plans!: Sequelize.HasManyGetAssociationsMixin<tb_danger_mat_use_plan>;
  setTb_danger_mat_use_plans!: Sequelize.HasManySetAssociationsMixin<tb_danger_mat_use_plan, tb_danger_mat_use_planId>;
  addTb_danger_mat_use_plan!: Sequelize.HasManyAddAssociationMixin<tb_danger_mat_use_plan, tb_danger_mat_use_planId>;
  addTb_danger_mat_use_plans!: Sequelize.HasManyAddAssociationsMixin<tb_danger_mat_use_plan, tb_danger_mat_use_planId>;
  createTb_danger_mat_use_plan!: Sequelize.HasManyCreateAssociationMixin<tb_danger_mat_use_plan>;
  removeTb_danger_mat_use_plan!: Sequelize.HasManyRemoveAssociationMixin<tb_danger_mat_use_plan, tb_danger_mat_use_planId>;
  removeTb_danger_mat_use_plans!: Sequelize.HasManyRemoveAssociationsMixin<tb_danger_mat_use_plan, tb_danger_mat_use_planId>;
  hasTb_danger_mat_use_plan!: Sequelize.HasManyHasAssociationMixin<tb_danger_mat_use_plan, tb_danger_mat_use_planId>;
  hasTb_danger_mat_use_plans!: Sequelize.HasManyHasAssociationsMixin<tb_danger_mat_use_plan, tb_danger_mat_use_planId>;
  countTb_danger_mat_use_plans!: Sequelize.HasManyCountAssociationsMixin;
  // tb_partner hasMany tb_partner_contract via partner_code
  tb_partner_contracts!: tb_partner_contract[];
  getTb_partner_contracts!: Sequelize.HasManyGetAssociationsMixin<tb_partner_contract>;
  setTb_partner_contracts!: Sequelize.HasManySetAssociationsMixin<tb_partner_contract, tb_partner_contractId>;
  addTb_partner_contract!: Sequelize.HasManyAddAssociationMixin<tb_partner_contract, tb_partner_contractId>;
  addTb_partner_contracts!: Sequelize.HasManyAddAssociationsMixin<tb_partner_contract, tb_partner_contractId>;
  createTb_partner_contract!: Sequelize.HasManyCreateAssociationMixin<tb_partner_contract>;
  removeTb_partner_contract!: Sequelize.HasManyRemoveAssociationMixin<tb_partner_contract, tb_partner_contractId>;
  removeTb_partner_contracts!: Sequelize.HasManyRemoveAssociationsMixin<tb_partner_contract, tb_partner_contractId>;
  hasTb_partner_contract!: Sequelize.HasManyHasAssociationMixin<tb_partner_contract, tb_partner_contractId>;
  hasTb_partner_contracts!: Sequelize.HasManyHasAssociationsMixin<tb_partner_contract, tb_partner_contractId>;
  countTb_partner_contracts!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_partner {
    return tb_partner.init({
    code: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    addr: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    },
    manager: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    },
    contact: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
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
    tableName: 'tb_partner',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_partner_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
