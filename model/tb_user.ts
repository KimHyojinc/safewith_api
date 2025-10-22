import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_account, tb_accountId } from './tb_account';
import type { tb_auth, tb_authId } from './tb_auth';
import type { tb_banner, tb_bannerId } from './tb_banner';
import type { tb_client, tb_clientId } from './tb_client';
import type { tb_file_upload, tb_file_uploadId } from './tb_file_upload';
import type { tb_project_manager, tb_project_managerId } from './tb_project_manager';
import type { tb_site, tb_siteId } from './tb_site';
import type { tb_site_of_user, tb_site_of_userId } from './tb_site_of_user';

export interface tb_userAttributes {
  code: number;
  name: string;
  id: string;
  pw: string;
  client_code: number;
  auth_code: number;
  is_del?: string;
  reg_dt?: Date;
  update_dt?: Date;
  created_at?: Date;
  is_enable?: boolean;
  updated_at?: Date;
  full_name?: string;
  phone?: string;
  role?: string;
  avatar_id?: number;
  site_id?: number;
}

export type tb_userPk = "code";
export type tb_userId = tb_user[tb_userPk];
export type tb_userOptionalAttributes = "is_del" | "reg_dt" | "update_dt" | "created_at" | "is_enable" | "updated_at" | "full_name" | "phone" | "role" | "avatar_id" | "site_id";
export type tb_userCreationAttributes = Optional<tb_userAttributes, tb_userOptionalAttributes>;

export class tb_user extends Model<tb_userAttributes, tb_userCreationAttributes> implements tb_userAttributes {
  code!: number;
  name!: string;
  id!: string;
  pw!: string;
  client_code!: number;
  auth_code!: number;
  is_del?: string;
  reg_dt?: Date;
  update_dt?: Date;
  created_at?: Date;
  is_enable?: boolean;
  updated_at?: Date;
  full_name?: string;
  phone?: string;
  role?: string;
  avatar_id?: number;
  site_id?: number;

  // tb_user belongsTo tb_auth via auth_code
  auth_code_tb_auth!: tb_auth;
  getAuth_code_tb_auth!: Sequelize.BelongsToGetAssociationMixin<tb_auth>;
  setAuth_code_tb_auth!: Sequelize.BelongsToSetAssociationMixin<tb_auth, tb_authId>;
  createAuth_code_tb_auth!: Sequelize.BelongsToCreateAssociationMixin<tb_auth>;
  // tb_user belongsTo tb_client via client_code
  client_code_tb_client!: tb_client;
  getClient_code_tb_client!: Sequelize.BelongsToGetAssociationMixin<tb_client>;
  setClient_code_tb_client!: Sequelize.BelongsToSetAssociationMixin<tb_client, tb_clientId>;
  createClient_code_tb_client!: Sequelize.BelongsToCreateAssociationMixin<tb_client>;
  // tb_user belongsTo tb_file_upload via avatar_id
  avatar!: tb_file_upload;
  getAvatar!: Sequelize.BelongsToGetAssociationMixin<tb_file_upload>;
  setAvatar!: Sequelize.BelongsToSetAssociationMixin<tb_file_upload, tb_file_uploadId>;
  createAvatar!: Sequelize.BelongsToCreateAssociationMixin<tb_file_upload>;
  // tb_user belongsTo tb_site via site_id
  site!: tb_site;
  getSite!: Sequelize.BelongsToGetAssociationMixin<tb_site>;
  setSite!: Sequelize.BelongsToSetAssociationMixin<tb_site, tb_siteId>;
  createSite!: Sequelize.BelongsToCreateAssociationMixin<tb_site>;
  // tb_user hasMany tb_account via user_code
  tb_accounts!: tb_account[];
  getTb_accounts!: Sequelize.HasManyGetAssociationsMixin<tb_account>;
  setTb_accounts!: Sequelize.HasManySetAssociationsMixin<tb_account, tb_accountId>;
  addTb_account!: Sequelize.HasManyAddAssociationMixin<tb_account, tb_accountId>;
  addTb_accounts!: Sequelize.HasManyAddAssociationsMixin<tb_account, tb_accountId>;
  createTb_account!: Sequelize.HasManyCreateAssociationMixin<tb_account>;
  removeTb_account!: Sequelize.HasManyRemoveAssociationMixin<tb_account, tb_accountId>;
  removeTb_accounts!: Sequelize.HasManyRemoveAssociationsMixin<tb_account, tb_accountId>;
  hasTb_account!: Sequelize.HasManyHasAssociationMixin<tb_account, tb_accountId>;
  hasTb_accounts!: Sequelize.HasManyHasAssociationsMixin<tb_account, tb_accountId>;
  countTb_accounts!: Sequelize.HasManyCountAssociationsMixin;
  // tb_user hasMany tb_banner via author_id
  tb_banners!: tb_banner[];
  getTb_banners!: Sequelize.HasManyGetAssociationsMixin<tb_banner>;
  setTb_banners!: Sequelize.HasManySetAssociationsMixin<tb_banner, tb_bannerId>;
  addTb_banner!: Sequelize.HasManyAddAssociationMixin<tb_banner, tb_bannerId>;
  addTb_banners!: Sequelize.HasManyAddAssociationsMixin<tb_banner, tb_bannerId>;
  createTb_banner!: Sequelize.HasManyCreateAssociationMixin<tb_banner>;
  removeTb_banner!: Sequelize.HasManyRemoveAssociationMixin<tb_banner, tb_bannerId>;
  removeTb_banners!: Sequelize.HasManyRemoveAssociationsMixin<tb_banner, tb_bannerId>;
  hasTb_banner!: Sequelize.HasManyHasAssociationMixin<tb_banner, tb_bannerId>;
  hasTb_banners!: Sequelize.HasManyHasAssociationsMixin<tb_banner, tb_bannerId>;
  countTb_banners!: Sequelize.HasManyCountAssociationsMixin;
  // tb_user hasMany tb_project_manager via manager_id
  tb_project_managers!: tb_project_manager[];
  getTb_project_managers!: Sequelize.HasManyGetAssociationsMixin<tb_project_manager>;
  setTb_project_managers!: Sequelize.HasManySetAssociationsMixin<tb_project_manager, tb_project_managerId>;
  addTb_project_manager!: Sequelize.HasManyAddAssociationMixin<tb_project_manager, tb_project_managerId>;
  addTb_project_managers!: Sequelize.HasManyAddAssociationsMixin<tb_project_manager, tb_project_managerId>;
  createTb_project_manager!: Sequelize.HasManyCreateAssociationMixin<tb_project_manager>;
  removeTb_project_manager!: Sequelize.HasManyRemoveAssociationMixin<tb_project_manager, tb_project_managerId>;
  removeTb_project_managers!: Sequelize.HasManyRemoveAssociationsMixin<tb_project_manager, tb_project_managerId>;
  hasTb_project_manager!: Sequelize.HasManyHasAssociationMixin<tb_project_manager, tb_project_managerId>;
  hasTb_project_managers!: Sequelize.HasManyHasAssociationsMixin<tb_project_manager, tb_project_managerId>;
  countTb_project_managers!: Sequelize.HasManyCountAssociationsMixin;
  // tb_user hasMany tb_site_of_user via user_code
  tb_site_of_users!: tb_site_of_user[];
  getTb_site_of_users!: Sequelize.HasManyGetAssociationsMixin<tb_site_of_user>;
  setTb_site_of_users!: Sequelize.HasManySetAssociationsMixin<tb_site_of_user, tb_site_of_userId>;
  addTb_site_of_user!: Sequelize.HasManyAddAssociationMixin<tb_site_of_user, tb_site_of_userId>;
  addTb_site_of_users!: Sequelize.HasManyAddAssociationsMixin<tb_site_of_user, tb_site_of_userId>;
  createTb_site_of_user!: Sequelize.HasManyCreateAssociationMixin<tb_site_of_user>;
  removeTb_site_of_user!: Sequelize.HasManyRemoveAssociationMixin<tb_site_of_user, tb_site_of_userId>;
  removeTb_site_of_users!: Sequelize.HasManyRemoveAssociationsMixin<tb_site_of_user, tb_site_of_userId>;
  hasTb_site_of_user!: Sequelize.HasManyHasAssociationMixin<tb_site_of_user, tb_site_of_userId>;
  hasTb_site_of_users!: Sequelize.HasManyHasAssociationsMixin<tb_site_of_user, tb_site_of_userId>;
  countTb_site_of_users!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_user {
    return tb_user.init({
    code: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    id: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    pw: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    client_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_client',
        key: 'code'
      }
    },
    auth_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_auth',
        key: 'code'
      }
    },
    is_del: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    reg_dt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    update_dt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    is_enable: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    full_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    role: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    avatar_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'tb_file_upload',
        key: 'id'
      },
      unique: "ukpbfw78kxet1f65w2d06n09m9x"
    },
    site_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'tb_site',
        key: 'code'
      }
    }
  }, {
    sequelize,
    tableName: 'tb_user',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_usdt_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
      {
        name: "tb_user_idx",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "ukpbfw78kxet1f65w2d06n09m9x",
        unique: true,
        fields: [
          { name: "avatar_id" },
        ]
      },
    ]
  });
  }
}
