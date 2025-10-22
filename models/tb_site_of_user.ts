import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_auth, tb_authId } from './tb_auth';
import type { tb_site, tb_siteId } from './tb_site';
import type { tb_user, tb_userId } from './tb_user';

export interface tb_site_of_userAttributes {
  code: number;
  user_code: number;
  site_code: number;
  auth_code: number;
}

export type tb_site_of_userPk = "code";
export type tb_site_of_userId = tb_site_of_user[tb_site_of_userPk];
export type tb_site_of_userCreationAttributes = tb_site_of_userAttributes;

export class tb_site_of_user extends Model<tb_site_of_userAttributes, tb_site_of_userCreationAttributes> implements tb_site_of_userAttributes {
  code!: number;
  user_code!: number;
  site_code!: number;
  auth_code!: number;

  // tb_site_of_user belongsTo tb_auth via auth_code
  auth_code_tb_auth!: tb_auth;
  getAuth_code_tb_auth!: Sequelize.BelongsToGetAssociationMixin<tb_auth>;
  setAuth_code_tb_auth!: Sequelize.BelongsToSetAssociationMixin<tb_auth, tb_authId>;
  createAuth_code_tb_auth!: Sequelize.BelongsToCreateAssociationMixin<tb_auth>;
  // tb_site_of_user belongsTo tb_site via site_code
  site_code_tb_site!: tb_site;
  getSite_code_tb_site!: Sequelize.BelongsToGetAssociationMixin<tb_site>;
  setSite_code_tb_site!: Sequelize.BelongsToSetAssociationMixin<tb_site, tb_siteId>;
  createSite_code_tb_site!: Sequelize.BelongsToCreateAssociationMixin<tb_site>;
  // tb_site_of_user belongsTo tb_user via user_code
  user_code_tb_user!: tb_user;
  getUser_code_tb_user!: Sequelize.BelongsToGetAssociationMixin<tb_user>;
  setUser_code_tb_user!: Sequelize.BelongsToSetAssociationMixin<tb_user, tb_userId>;
  createUser_code_tb_user!: Sequelize.BelongsToCreateAssociationMixin<tb_user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_site_of_user {
    return tb_site_of_user.init({
    code: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_user',
        key: 'code'
      }
    },
    site_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_site',
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
    }
  }, {
    sequelize,
    tableName: 'tb_site_of_user',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_site_of_user_idx",
        fields: [
          { name: "user_code" },
          { name: "site_code" },
          { name: "auth_code" },
        ]
      },
      {
        name: "tb_site_of_uset_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
