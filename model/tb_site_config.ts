import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_account, tb_accountId } from './tb_account';
import type { tb_site, tb_siteId } from './tb_site';

export interface tb_site_configAttributes {
  code: number;
  site_code: number;
  bp_range_type1_higher_max?: number;
  bp_range_type1_higher_min?: number;
  bp_range_type1_lower_max?: number;
  bp_range_type1_lower_min?: number;
  bp_range_type2_max?: number;
  bp_range_type2_min?: number;
  map_zoom_no?: number;
  register_code: number;
  reg_dt?: Date;
  updater_code: number;
  update_dt?: Date;
  max_age?: number;
  is_io_b?: number;
  is_io_a?: number;
  is_io_e?: number;
}

export type tb_site_configPk = "code";
export type tb_site_configId = tb_site_config[tb_site_configPk];
export type tb_site_configOptionalAttributes = "bp_range_type1_higher_max" | "bp_range_type1_higher_min" | "bp_range_type1_lower_max" | "bp_range_type1_lower_min" | "bp_range_type2_max" | "bp_range_type2_min" | "map_zoom_no" | "reg_dt" | "update_dt" | "max_age" | "is_io_b" | "is_io_a" | "is_io_e";
export type tb_site_configCreationAttributes = Optional<tb_site_configAttributes, tb_site_configOptionalAttributes>;

export class tb_site_config extends Model<tb_site_configAttributes, tb_site_configCreationAttributes> implements tb_site_configAttributes {
  code!: number;
  site_code!: number;
  bp_range_type1_higher_max?: number;
  bp_range_type1_higher_min?: number;
  bp_range_type1_lower_max?: number;
  bp_range_type1_lower_min?: number;
  bp_range_type2_max?: number;
  bp_range_type2_min?: number;
  map_zoom_no?: number;
  register_code!: number;
  reg_dt?: Date;
  updater_code!: number;
  update_dt?: Date;
  max_age?: number;
  is_io_b?: number;
  is_io_a?: number;
  is_io_e?: number;

  // tb_site_config belongsTo tb_account via register_code
  register_code_tb_account!: tb_account;
  getRegister_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setRegister_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createRegister_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_site_config belongsTo tb_account via updater_code
  updater_code_tb_account!: tb_account;
  getUpdater_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setUpdater_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createUpdater_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_site_config belongsTo tb_site via site_code
  site_code_tb_site!: tb_site;
  getSite_code_tb_site!: Sequelize.BelongsToGetAssociationMixin<tb_site>;
  setSite_code_tb_site!: Sequelize.BelongsToSetAssociationMixin<tb_site, tb_siteId>;
  createSite_code_tb_site!: Sequelize.BelongsToCreateAssociationMixin<tb_site>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_site_config {
    return tb_site_config.init({
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
    bp_range_type1_higher_max: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    bp_range_type1_higher_min: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    bp_range_type1_lower_max: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    bp_range_type1_lower_min: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    bp_range_type2_max: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    bp_range_type2_min: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    map_zoom_no: {
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
      allowNull: true
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
    max_age: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 65
    },
    is_io_b: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    is_io_a: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    is_io_e: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'tb_site_config',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_site_config_idx",
        fields: [
          { name: "site_code" },
        ]
      },
      {
        name: "tb_site_config_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
