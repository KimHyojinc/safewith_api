import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_account, tb_accountId } from './tb_account';
import type { tb_site, tb_siteId } from './tb_site';
import type { tb_site_sch_work_middle, tb_site_sch_work_middleId } from './tb_site_sch_work_middle';

export interface tb_site_sch_workAttributes {
  code: number;
  site_code: number;
  middle_code: number;
  work_name: string;
  plan_begin_dt: string;
  plan_end_dt: string;
  const_begin_dt?: string;
  const_end_dt?: string;
  register_code: number;
  reg_dt?: Date;
  updater_code: number;
  update_dt?: Date;
}

export type tb_site_sch_workPk = "code";
export type tb_site_sch_workId = tb_site_sch_work[tb_site_sch_workPk];
export type tb_site_sch_workOptionalAttributes = "const_begin_dt" | "const_end_dt" | "reg_dt" | "update_dt";
export type tb_site_sch_workCreationAttributes = Optional<tb_site_sch_workAttributes, tb_site_sch_workOptionalAttributes>;

export class tb_site_sch_work extends Model<tb_site_sch_workAttributes, tb_site_sch_workCreationAttributes> implements tb_site_sch_workAttributes {
  code!: number;
  site_code!: number;
  middle_code!: number;
  work_name!: string;
  plan_begin_dt!: string;
  plan_end_dt!: string;
  const_begin_dt?: string;
  const_end_dt?: string;
  register_code!: number;
  reg_dt?: Date;
  updater_code!: number;
  update_dt?: Date;

  // tb_site_sch_work belongsTo tb_account via register_code
  register_code_tb_account!: tb_account;
  getRegister_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setRegister_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createRegister_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_site_sch_work belongsTo tb_account via updater_code
  updater_code_tb_account!: tb_account;
  getUpdater_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setUpdater_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createUpdater_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_site_sch_work belongsTo tb_site via site_code
  site_code_tb_site!: tb_site;
  getSite_code_tb_site!: Sequelize.BelongsToGetAssociationMixin<tb_site>;
  setSite_code_tb_site!: Sequelize.BelongsToSetAssociationMixin<tb_site, tb_siteId>;
  createSite_code_tb_site!: Sequelize.BelongsToCreateAssociationMixin<tb_site>;
  // tb_site_sch_work belongsTo tb_site_sch_work_middle via middle_code
  middle_code_tb_site_sch_work_middle!: tb_site_sch_work_middle;
  getMiddle_code_tb_site_sch_work_middle!: Sequelize.BelongsToGetAssociationMixin<tb_site_sch_work_middle>;
  setMiddle_code_tb_site_sch_work_middle!: Sequelize.BelongsToSetAssociationMixin<tb_site_sch_work_middle, tb_site_sch_work_middleId>;
  createMiddle_code_tb_site_sch_work_middle!: Sequelize.BelongsToCreateAssociationMixin<tb_site_sch_work_middle>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_site_sch_work {
    return tb_site_sch_work.init({
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
    middle_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_site_sch_work_middle',
        key: 'code'
      }
    },
    work_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    plan_begin_dt: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    plan_end_dt: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    const_begin_dt: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: ""
    },
    const_end_dt: {
      type: DataTypes.STRING(10),
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
    tableName: 'tb_site_sch_work',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_site_sch_work_idx",
        fields: [
          { name: "site_code" },
          { name: "middle_code" },
        ]
      },
      {
        name: "tb_site_sch_work_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
