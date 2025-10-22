import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_danger_mat, tb_danger_matId } from './tb_danger_mat';
import type { tb_edu, tb_eduId } from './tb_edu';
import type { tb_listof_dayoff, tb_listof_dayoffId } from './tb_listof_dayoff';
import type { tb_service, tb_serviceId } from './tb_service';
import type { tb_site, tb_siteId } from './tb_site';
import type { tb_site_of_client, tb_site_of_clientId } from './tb_site_of_client';
import type { tb_user, tb_userId } from './tb_user';

export interface tb_clientAttributes {
  code: number;
  name: string;
  logo_file_name?: string;
  logo_path?: string;
  contact?: string;
  is_no_limit?: number;
  s_begin_dt?: string;
  s_end_dt?: string;
  reg_dt?: Date;
  update_dt?: Date;
  addr?: string;
  post?: string;
  addr_doro?: string;
  addr_detail?: string;
  is_del?: string;
}

export type tb_clientPk = "code";
export type tb_clientId = tb_client[tb_clientPk];
export type tb_clientOptionalAttributes = "logo_file_name" | "logo_path" | "contact" | "is_no_limit" | "s_begin_dt" | "s_end_dt" | "reg_dt" | "update_dt" | "addr" | "post" | "addr_doro" | "addr_detail" | "is_del";
export type tb_clientCreationAttributes = Optional<tb_clientAttributes, tb_clientOptionalAttributes>;

export class tb_client extends Model<tb_clientAttributes, tb_clientCreationAttributes> implements tb_clientAttributes {
  code!: number;
  name!: string;
  logo_file_name?: string;
  logo_path?: string;
  contact?: string;
  is_no_limit?: number;
  s_begin_dt?: string;
  s_end_dt?: string;
  reg_dt?: Date;
  update_dt?: Date;
  addr?: string;
  post?: string;
  addr_doro?: string;
  addr_detail?: string;
  is_del?: string;

  // tb_client hasMany tb_danger_mat via client_code
  tb_danger_mats!: tb_danger_mat[];
  getTb_danger_mats!: Sequelize.HasManyGetAssociationsMixin<tb_danger_mat>;
  setTb_danger_mats!: Sequelize.HasManySetAssociationsMixin<tb_danger_mat, tb_danger_matId>;
  addTb_danger_mat!: Sequelize.HasManyAddAssociationMixin<tb_danger_mat, tb_danger_matId>;
  addTb_danger_mats!: Sequelize.HasManyAddAssociationsMixin<tb_danger_mat, tb_danger_matId>;
  createTb_danger_mat!: Sequelize.HasManyCreateAssociationMixin<tb_danger_mat>;
  removeTb_danger_mat!: Sequelize.HasManyRemoveAssociationMixin<tb_danger_mat, tb_danger_matId>;
  removeTb_danger_mats!: Sequelize.HasManyRemoveAssociationsMixin<tb_danger_mat, tb_danger_matId>;
  hasTb_danger_mat!: Sequelize.HasManyHasAssociationMixin<tb_danger_mat, tb_danger_matId>;
  hasTb_danger_mats!: Sequelize.HasManyHasAssociationsMixin<tb_danger_mat, tb_danger_matId>;
  countTb_danger_mats!: Sequelize.HasManyCountAssociationsMixin;
  // tb_client hasMany tb_edu via client_code
  tb_edus!: tb_edu[];
  getTb_edus!: Sequelize.HasManyGetAssociationsMixin<tb_edu>;
  setTb_edus!: Sequelize.HasManySetAssociationsMixin<tb_edu, tb_eduId>;
  addTb_edu!: Sequelize.HasManyAddAssociationMixin<tb_edu, tb_eduId>;
  addTb_edus!: Sequelize.HasManyAddAssociationsMixin<tb_edu, tb_eduId>;
  createTb_edu!: Sequelize.HasManyCreateAssociationMixin<tb_edu>;
  removeTb_edu!: Sequelize.HasManyRemoveAssociationMixin<tb_edu, tb_eduId>;
  removeTb_edus!: Sequelize.HasManyRemoveAssociationsMixin<tb_edu, tb_eduId>;
  hasTb_edu!: Sequelize.HasManyHasAssociationMixin<tb_edu, tb_eduId>;
  hasTb_edus!: Sequelize.HasManyHasAssociationsMixin<tb_edu, tb_eduId>;
  countTb_edus!: Sequelize.HasManyCountAssociationsMixin;
  // tb_client hasMany tb_listof_dayoff via client_code
  tb_listof_dayoffs!: tb_listof_dayoff[];
  getTb_listof_dayoffs!: Sequelize.HasManyGetAssociationsMixin<tb_listof_dayoff>;
  setTb_listof_dayoffs!: Sequelize.HasManySetAssociationsMixin<tb_listof_dayoff, tb_listof_dayoffId>;
  addTb_listof_dayoff!: Sequelize.HasManyAddAssociationMixin<tb_listof_dayoff, tb_listof_dayoffId>;
  addTb_listof_dayoffs!: Sequelize.HasManyAddAssociationsMixin<tb_listof_dayoff, tb_listof_dayoffId>;
  createTb_listof_dayoff!: Sequelize.HasManyCreateAssociationMixin<tb_listof_dayoff>;
  removeTb_listof_dayoff!: Sequelize.HasManyRemoveAssociationMixin<tb_listof_dayoff, tb_listof_dayoffId>;
  removeTb_listof_dayoffs!: Sequelize.HasManyRemoveAssociationsMixin<tb_listof_dayoff, tb_listof_dayoffId>;
  hasTb_listof_dayoff!: Sequelize.HasManyHasAssociationMixin<tb_listof_dayoff, tb_listof_dayoffId>;
  hasTb_listof_dayoffs!: Sequelize.HasManyHasAssociationsMixin<tb_listof_dayoff, tb_listof_dayoffId>;
  countTb_listof_dayoffs!: Sequelize.HasManyCountAssociationsMixin;
  // tb_client hasMany tb_service via client_code
  tb_services!: tb_service[];
  getTb_services!: Sequelize.HasManyGetAssociationsMixin<tb_service>;
  setTb_services!: Sequelize.HasManySetAssociationsMixin<tb_service, tb_serviceId>;
  addTb_service!: Sequelize.HasManyAddAssociationMixin<tb_service, tb_serviceId>;
  addTb_services!: Sequelize.HasManyAddAssociationsMixin<tb_service, tb_serviceId>;
  createTb_service!: Sequelize.HasManyCreateAssociationMixin<tb_service>;
  removeTb_service!: Sequelize.HasManyRemoveAssociationMixin<tb_service, tb_serviceId>;
  removeTb_services!: Sequelize.HasManyRemoveAssociationsMixin<tb_service, tb_serviceId>;
  hasTb_service!: Sequelize.HasManyHasAssociationMixin<tb_service, tb_serviceId>;
  hasTb_services!: Sequelize.HasManyHasAssociationsMixin<tb_service, tb_serviceId>;
  countTb_services!: Sequelize.HasManyCountAssociationsMixin;
  // tb_client hasMany tb_site via client_code
  tb_sites!: tb_site[];
  getTb_sites!: Sequelize.HasManyGetAssociationsMixin<tb_site>;
  setTb_sites!: Sequelize.HasManySetAssociationsMixin<tb_site, tb_siteId>;
  addTb_site!: Sequelize.HasManyAddAssociationMixin<tb_site, tb_siteId>;
  addTb_sites!: Sequelize.HasManyAddAssociationsMixin<tb_site, tb_siteId>;
  createTb_site!: Sequelize.HasManyCreateAssociationMixin<tb_site>;
  removeTb_site!: Sequelize.HasManyRemoveAssociationMixin<tb_site, tb_siteId>;
  removeTb_sites!: Sequelize.HasManyRemoveAssociationsMixin<tb_site, tb_siteId>;
  hasTb_site!: Sequelize.HasManyHasAssociationMixin<tb_site, tb_siteId>;
  hasTb_sites!: Sequelize.HasManyHasAssociationsMixin<tb_site, tb_siteId>;
  countTb_sites!: Sequelize.HasManyCountAssociationsMixin;
  // tb_client hasMany tb_site_of_client via client_code
  tb_site_of_clients!: tb_site_of_client[];
  getTb_site_of_clients!: Sequelize.HasManyGetAssociationsMixin<tb_site_of_client>;
  setTb_site_of_clients!: Sequelize.HasManySetAssociationsMixin<tb_site_of_client, tb_site_of_clientId>;
  addTb_site_of_client!: Sequelize.HasManyAddAssociationMixin<tb_site_of_client, tb_site_of_clientId>;
  addTb_site_of_clients!: Sequelize.HasManyAddAssociationsMixin<tb_site_of_client, tb_site_of_clientId>;
  createTb_site_of_client!: Sequelize.HasManyCreateAssociationMixin<tb_site_of_client>;
  removeTb_site_of_client!: Sequelize.HasManyRemoveAssociationMixin<tb_site_of_client, tb_site_of_clientId>;
  removeTb_site_of_clients!: Sequelize.HasManyRemoveAssociationsMixin<tb_site_of_client, tb_site_of_clientId>;
  hasTb_site_of_client!: Sequelize.HasManyHasAssociationMixin<tb_site_of_client, tb_site_of_clientId>;
  hasTb_site_of_clients!: Sequelize.HasManyHasAssociationsMixin<tb_site_of_client, tb_site_of_clientId>;
  countTb_site_of_clients!: Sequelize.HasManyCountAssociationsMixin;
  // tb_client hasMany tb_user via client_code
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

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_client {
    return tb_client.init({
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
    logo_file_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    },
    logo_path: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: ""
    },
    contact: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    },
    is_no_limit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    s_begin_dt: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "NULL"
    },
    s_end_dt: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "NULL"
    },
    reg_dt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    update_dt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    addr: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    },
    post: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "우편번호"
    },
    addr_doro: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "도로주소"
    },
    addr_detail: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "상세주소"
    },
    is_del: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      comment: "삭제여부 'Y'  'N'"
    }
  }, {
    sequelize,
    tableName: 'tb_client',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_client_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
