import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_account, tb_accountId } from './tb_account';
import type { tb_lib, tb_libId } from './tb_lib';
import type { tb_mat_pur_photo, tb_mat_pur_photoId } from './tb_mat_pur_photo';
import type { tb_site, tb_siteId } from './tb_site';

export interface tb_mat_purAttributes {
  code: number;
  site_code: number;
  mat_type: number;
  subject: string;
  contents: string;
  register_code: number;
  reg_dt?: Date;
  updater_code: number;
  update_dt?: Date;
  sign_code: number;
  is_sign?: number;
  sign_dt?: Date;
  e_sign?: string;
  state?: number;
}

export type tb_mat_purPk = "code";
export type tb_mat_purId = tb_mat_pur[tb_mat_purPk];
export type tb_mat_purOptionalAttributes = "reg_dt" | "update_dt" | "sign_code" | "is_sign" | "sign_dt" | "e_sign" | "state";
export type tb_mat_purCreationAttributes = Optional<tb_mat_purAttributes, tb_mat_purOptionalAttributes>;

export class tb_mat_pur extends Model<tb_mat_purAttributes, tb_mat_purCreationAttributes> implements tb_mat_purAttributes {
  code!: number;
  site_code!: number;
  mat_type!: number;
  subject!: string;
  contents!: string;
  register_code!: number;
  reg_dt?: Date;
  updater_code!: number;
  update_dt?: Date;
  sign_code!: number;
  is_sign?: number;
  sign_dt?: Date;
  e_sign?: string;
  state?: number;

  // tb_mat_pur belongsTo tb_account via register_code
  register_code_tb_account!: tb_account;
  getRegister_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setRegister_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createRegister_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_mat_pur belongsTo tb_account via updater_code
  updater_code_tb_account!: tb_account;
  getUpdater_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setUpdater_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createUpdater_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_mat_pur belongsTo tb_lib via mat_type
  mat_type_tb_lib!: tb_lib;
  getMat_type_tb_lib!: Sequelize.BelongsToGetAssociationMixin<tb_lib>;
  setMat_type_tb_lib!: Sequelize.BelongsToSetAssociationMixin<tb_lib, tb_libId>;
  createMat_type_tb_lib!: Sequelize.BelongsToCreateAssociationMixin<tb_lib>;
  // tb_mat_pur hasMany tb_mat_pur_photo via pur_code
  tb_mat_pur_photos!: tb_mat_pur_photo[];
  getTb_mat_pur_photos!: Sequelize.HasManyGetAssociationsMixin<tb_mat_pur_photo>;
  setTb_mat_pur_photos!: Sequelize.HasManySetAssociationsMixin<tb_mat_pur_photo, tb_mat_pur_photoId>;
  addTb_mat_pur_photo!: Sequelize.HasManyAddAssociationMixin<tb_mat_pur_photo, tb_mat_pur_photoId>;
  addTb_mat_pur_photos!: Sequelize.HasManyAddAssociationsMixin<tb_mat_pur_photo, tb_mat_pur_photoId>;
  createTb_mat_pur_photo!: Sequelize.HasManyCreateAssociationMixin<tb_mat_pur_photo>;
  removeTb_mat_pur_photo!: Sequelize.HasManyRemoveAssociationMixin<tb_mat_pur_photo, tb_mat_pur_photoId>;
  removeTb_mat_pur_photos!: Sequelize.HasManyRemoveAssociationsMixin<tb_mat_pur_photo, tb_mat_pur_photoId>;
  hasTb_mat_pur_photo!: Sequelize.HasManyHasAssociationMixin<tb_mat_pur_photo, tb_mat_pur_photoId>;
  hasTb_mat_pur_photos!: Sequelize.HasManyHasAssociationsMixin<tb_mat_pur_photo, tb_mat_pur_photoId>;
  countTb_mat_pur_photos!: Sequelize.HasManyCountAssociationsMixin;
  // tb_mat_pur belongsTo tb_site via site_code
  site_code_tb_site!: tb_site;
  getSite_code_tb_site!: Sequelize.BelongsToGetAssociationMixin<tb_site>;
  setSite_code_tb_site!: Sequelize.BelongsToSetAssociationMixin<tb_site, tb_siteId>;
  createSite_code_tb_site!: Sequelize.BelongsToCreateAssociationMixin<tb_site>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_mat_pur {
    return tb_mat_pur.init({
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
    mat_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_lib',
        key: 'code'
      }
    },
    subject: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    contents: {
      type: DataTypes.STRING(255),
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
    },
    sign_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    is_sign: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    sign_dt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    e_sign: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: ""
    },
    state: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'tb_mat_pur',
    schema: 'public',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "tb_mat_pur_idx",
        fields: [
          { name: "site_code" },
        ]
      },
      {
        name: "tb_mat_pur_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
