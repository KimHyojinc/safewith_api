import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_account, tb_accountId } from './tb_account';
import type { tb_client, tb_clientId } from './tb_client';
import type { tb_danger_mat_parts_items, tb_danger_mat_parts_itemsId } from './tb_danger_mat_parts_items';
import type { tb_danger_mat_use_plan, tb_danger_mat_use_planId } from './tb_danger_mat_use_plan';

export interface tb_danger_matAttributes {
  code: number;
  client_code: number;
  prod_name?: string;
  maker?: string;
  maker_tel?: string;
  msmd?: string;
  register_code: number;
  reg_dt?: Date;
  updater_code: number;
  update_dt?: Date;
}

export type tb_danger_matPk = "code";
export type tb_danger_matId = tb_danger_mat[tb_danger_matPk];
export type tb_danger_matOptionalAttributes = "prod_name" | "maker" | "maker_tel" | "msmd" | "reg_dt" | "update_dt";
export type tb_danger_matCreationAttributes = Optional<tb_danger_matAttributes, tb_danger_matOptionalAttributes>;

export class tb_danger_mat extends Model<tb_danger_matAttributes, tb_danger_matCreationAttributes> implements tb_danger_matAttributes {
  code!: number;
  client_code!: number;
  prod_name?: string;
  maker?: string;
  maker_tel?: string;
  msmd?: string;
  register_code!: number;
  reg_dt?: Date;
  updater_code!: number;
  update_dt?: Date;

  // tb_danger_mat belongsTo tb_account via register_code
  register_code_tb_account!: tb_account;
  getRegister_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setRegister_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createRegister_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_danger_mat belongsTo tb_account via updater_code
  updater_code_tb_account!: tb_account;
  getUpdater_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setUpdater_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createUpdater_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_danger_mat belongsTo tb_client via client_code
  client_code_tb_client!: tb_client;
  getClient_code_tb_client!: Sequelize.BelongsToGetAssociationMixin<tb_client>;
  setClient_code_tb_client!: Sequelize.BelongsToSetAssociationMixin<tb_client, tb_clientId>;
  createClient_code_tb_client!: Sequelize.BelongsToCreateAssociationMixin<tb_client>;
  // tb_danger_mat hasMany tb_danger_mat_parts_items via danger_mat_code
  tb_danger_mat_parts_items!: tb_danger_mat_parts_items[];
  getTb_danger_mat_parts_items!: Sequelize.HasManyGetAssociationsMixin<tb_danger_mat_parts_items>;
  setTb_danger_mat_parts_items!: Sequelize.HasManySetAssociationsMixin<tb_danger_mat_parts_items, tb_danger_mat_parts_itemsId>;
  addTb_danger_mat_parts_item!: Sequelize.HasManyAddAssociationMixin<tb_danger_mat_parts_items, tb_danger_mat_parts_itemsId>;
  addTb_danger_mat_parts_items!: Sequelize.HasManyAddAssociationsMixin<tb_danger_mat_parts_items, tb_danger_mat_parts_itemsId>;
  createTb_danger_mat_parts_item!: Sequelize.HasManyCreateAssociationMixin<tb_danger_mat_parts_items>;
  removeTb_danger_mat_parts_item!: Sequelize.HasManyRemoveAssociationMixin<tb_danger_mat_parts_items, tb_danger_mat_parts_itemsId>;
  removeTb_danger_mat_parts_items!: Sequelize.HasManyRemoveAssociationsMixin<tb_danger_mat_parts_items, tb_danger_mat_parts_itemsId>;
  hasTb_danger_mat_parts_item!: Sequelize.HasManyHasAssociationMixin<tb_danger_mat_parts_items, tb_danger_mat_parts_itemsId>;
  hasTb_danger_mat_parts_items!: Sequelize.HasManyHasAssociationsMixin<tb_danger_mat_parts_items, tb_danger_mat_parts_itemsId>;
  countTb_danger_mat_parts_items!: Sequelize.HasManyCountAssociationsMixin;
  // tb_danger_mat hasMany tb_danger_mat_use_plan via danger_mat_code
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

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_danger_mat {
    return tb_danger_mat.init({
    code: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    client_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_client',
        key: 'code'
      }
    },
    prod_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    maker: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    maker_tel: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    msmd: {
      type: DataTypes.STRING(255),
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
    tableName: 'tb_danger_mat',
    schema: 'public',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "tb_danger_mat_idx",
        fields: [
          { name: "code" },
        ]
      },
      {
        name: "tb_danger_mat_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
