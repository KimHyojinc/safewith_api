import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_account, tb_accountId } from './tb_account';
import type { tb_site, tb_siteId } from './tb_site';
import type { tb_site_build_middle, tb_site_build_middleId } from './tb_site_build_middle';
import type { tb_site_sch_work_middle, tb_site_sch_work_middleId } from './tb_site_sch_work_middle';

export interface tb_site_sch_work_majorAttributes {
  code: number;
  site_code: number;
  view_text: string;
  register_code: number;
  reg_dt?: Date;
  updater_code: number;
  update_dt?: Date;
}

export type tb_site_sch_work_majorPk = "code";
export type tb_site_sch_work_majorId = tb_site_sch_work_major[tb_site_sch_work_majorPk];
export type tb_site_sch_work_majorOptionalAttributes = "reg_dt" | "update_dt";
export type tb_site_sch_work_majorCreationAttributes = Optional<tb_site_sch_work_majorAttributes, tb_site_sch_work_majorOptionalAttributes>;

export class tb_site_sch_work_major extends Model<tb_site_sch_work_majorAttributes, tb_site_sch_work_majorCreationAttributes> implements tb_site_sch_work_majorAttributes {
  code!: number;
  site_code!: number;
  view_text!: string;
  register_code!: number;
  reg_dt?: Date;
  updater_code!: number;
  update_dt?: Date;

  // tb_site_sch_work_major belongsTo tb_account via register_code
  register_code_tb_account!: tb_account;
  getRegister_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setRegister_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createRegister_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_site_sch_work_major belongsTo tb_account via updater_code
  updater_code_tb_account!: tb_account;
  getUpdater_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setUpdater_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createUpdater_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_site_sch_work_major belongsTo tb_site via site_code
  site_code_tb_site!: tb_site;
  getSite_code_tb_site!: Sequelize.BelongsToGetAssociationMixin<tb_site>;
  setSite_code_tb_site!: Sequelize.BelongsToSetAssociationMixin<tb_site, tb_siteId>;
  createSite_code_tb_site!: Sequelize.BelongsToCreateAssociationMixin<tb_site>;
  // tb_site_sch_work_major hasMany tb_site_build_middle via major_code
  tb_site_build_middles!: tb_site_build_middle[];
  getTb_site_build_middles!: Sequelize.HasManyGetAssociationsMixin<tb_site_build_middle>;
  setTb_site_build_middles!: Sequelize.HasManySetAssociationsMixin<tb_site_build_middle, tb_site_build_middleId>;
  addTb_site_build_middle!: Sequelize.HasManyAddAssociationMixin<tb_site_build_middle, tb_site_build_middleId>;
  addTb_site_build_middles!: Sequelize.HasManyAddAssociationsMixin<tb_site_build_middle, tb_site_build_middleId>;
  createTb_site_build_middle!: Sequelize.HasManyCreateAssociationMixin<tb_site_build_middle>;
  removeTb_site_build_middle!: Sequelize.HasManyRemoveAssociationMixin<tb_site_build_middle, tb_site_build_middleId>;
  removeTb_site_build_middles!: Sequelize.HasManyRemoveAssociationsMixin<tb_site_build_middle, tb_site_build_middleId>;
  hasTb_site_build_middle!: Sequelize.HasManyHasAssociationMixin<tb_site_build_middle, tb_site_build_middleId>;
  hasTb_site_build_middles!: Sequelize.HasManyHasAssociationsMixin<tb_site_build_middle, tb_site_build_middleId>;
  countTb_site_build_middles!: Sequelize.HasManyCountAssociationsMixin;
  // tb_site_sch_work_major hasMany tb_site_sch_work_middle via major_code
  tb_site_sch_work_middles!: tb_site_sch_work_middle[];
  getTb_site_sch_work_middles!: Sequelize.HasManyGetAssociationsMixin<tb_site_sch_work_middle>;
  setTb_site_sch_work_middles!: Sequelize.HasManySetAssociationsMixin<tb_site_sch_work_middle, tb_site_sch_work_middleId>;
  addTb_site_sch_work_middle!: Sequelize.HasManyAddAssociationMixin<tb_site_sch_work_middle, tb_site_sch_work_middleId>;
  addTb_site_sch_work_middles!: Sequelize.HasManyAddAssociationsMixin<tb_site_sch_work_middle, tb_site_sch_work_middleId>;
  createTb_site_sch_work_middle!: Sequelize.HasManyCreateAssociationMixin<tb_site_sch_work_middle>;
  removeTb_site_sch_work_middle!: Sequelize.HasManyRemoveAssociationMixin<tb_site_sch_work_middle, tb_site_sch_work_middleId>;
  removeTb_site_sch_work_middles!: Sequelize.HasManyRemoveAssociationsMixin<tb_site_sch_work_middle, tb_site_sch_work_middleId>;
  hasTb_site_sch_work_middle!: Sequelize.HasManyHasAssociationMixin<tb_site_sch_work_middle, tb_site_sch_work_middleId>;
  hasTb_site_sch_work_middles!: Sequelize.HasManyHasAssociationsMixin<tb_site_sch_work_middle, tb_site_sch_work_middleId>;
  countTb_site_sch_work_middles!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_site_sch_work_major {
    return tb_site_sch_work_major.init({
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
    view_text: {
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
    }
  }, {
    sequelize,
    tableName: 'tb_site_sch_work_major',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_site_sch_work_major_idx",
        fields: [
          { name: "site_code" },
        ]
      },
      {
        name: "tb_site_sch_work_major_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
