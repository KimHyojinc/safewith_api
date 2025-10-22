import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_site_of_user, tb_site_of_userId } from './tb_site_of_user';
import type { tb_user, tb_userId } from './tb_user';

export interface tb_authAttributes {
  code: number;
  auth_code: number;
  auth_name?: string;
  desc?: string;
}

export type tb_authPk = "code";
export type tb_authId = tb_auth[tb_authPk];
export type tb_authOptionalAttributes = "auth_name" | "desc";
export type tb_authCreationAttributes = Optional<tb_authAttributes, tb_authOptionalAttributes>;

export class tb_auth extends Model<tb_authAttributes, tb_authCreationAttributes> implements tb_authAttributes {
  code!: number;
  auth_code!: number;
  auth_name?: string;
  desc?: string;

  // tb_auth hasMany tb_site_of_user via auth_code
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
  // tb_auth hasMany tb_user via auth_code
  tb_users!: tb_user[];
  getTb_users!: Sequelize.HasManyGetAssociationsMixin<tb_user>;
  setTb_users!: Sequelize.HasManySetAssociationsMixin<tb_user, tb_userId>;
  addTb_user!: Sequelize.HasManyAddAssociationMixin<tb_user, tb_userId>;
  addTb_users!: Sequelize.HasManyAddAssociationsMixin<tb_user, tb_userId>;
  createTb_user!: Sequelize.HasManyCreateAssociationMixin<tb_user>;
  removeTb_user!: Sequelize.HasManyRemoveAssociationMixin<tb_user, tb_userId>;
  removeTb_users!: Sequelize.HasManyRemoveAssociationsMixin<tb_user, tb_userId>;
  hasTb_user!: Sequelize.HasManyHasAssociationMixin<tb_user, tb_userId>;
  hasTb_users!: Sequelize.HasManyHasAssociationsMixin<tb_user, tb_userId>;
  countTb_users!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_auth {
    return tb_auth.init({
    code: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    auth_code: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    auth_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    desc: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_auth',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_auth_idx",
        fields: [
          { name: "code" },
        ]
      },
      {
        name: "tb_auth_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
