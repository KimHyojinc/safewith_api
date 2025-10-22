import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_account, tb_accountId } from './tb_account';
import type { tb_site, tb_siteId } from './tb_site';

export interface tb_site_work_area2Attributes {
  code: number;
  site_code: number;
  marker_type?: number;
  drawing_type?: number;
  coordinates?: string;
  register_code: number;
  reg_dt?: Date;
  updater_code: number;
  update_dt?: Date;
  comment?: string;
}

export type tb_site_work_area2Pk = "code";
export type tb_site_work_area2Id = tb_site_work_area2[tb_site_work_area2Pk];
export type tb_site_work_area2OptionalAttributes = "marker_type" | "drawing_type" | "coordinates" | "reg_dt" | "update_dt" | "comment";
export type tb_site_work_area2CreationAttributes = Optional<tb_site_work_area2Attributes, tb_site_work_area2OptionalAttributes>;

export class tb_site_work_area2 extends Model<tb_site_work_area2Attributes, tb_site_work_area2CreationAttributes> implements tb_site_work_area2Attributes {
  code!: number;
  site_code!: number;
  marker_type?: number;
  drawing_type?: number;
  coordinates?: string;
  register_code!: number;
  reg_dt?: Date;
  updater_code!: number;
  update_dt?: Date;
  comment?: string;

  // tb_site_work_area2 belongsTo tb_account via register_code
  register_code_tb_account!: tb_account;
  getRegister_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setRegister_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createRegister_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_site_work_area2 belongsTo tb_account via updater_code
  updater_code_tb_account!: tb_account;
  getUpdater_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setUpdater_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createUpdater_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_site_work_area2 belongsTo tb_site via site_code
  site_code_tb_site!: tb_site;
  getSite_code_tb_site!: Sequelize.BelongsToGetAssociationMixin<tb_site>;
  setSite_code_tb_site!: Sequelize.BelongsToSetAssociationMixin<tb_site, tb_siteId>;
  createSite_code_tb_site!: Sequelize.BelongsToCreateAssociationMixin<tb_site>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_site_work_area2 {
    return tb_site_work_area2.init({
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
    marker_type: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    drawing_type: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    coordinates: {
      type: DataTypes.STRING,
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
    },
    comment: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_site_work_area2',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_site_work_area_copy1_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
      {
        name: "tb_site_work_area_idx_copy1",
        fields: [
          { name: "site_code" },
        ]
      },
    ]
  });
  }
}
