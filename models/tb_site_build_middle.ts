import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_account, tb_accountId } from './tb_account';
import type { tb_site_build_sub, tb_site_build_subId } from './tb_site_build_sub';
import type { tb_site_sch_work_major, tb_site_sch_work_majorId } from './tb_site_sch_work_major';

export interface tb_site_build_middleAttributes {
  code: number;
  major_code: number;
  view_text: string;
  register_code: number;
  reg_dt?: Date;
  updater_code: number;
  update_dt?: Date;
}

export type tb_site_build_middlePk = "code";
export type tb_site_build_middleId = tb_site_build_middle[tb_site_build_middlePk];
export type tb_site_build_middleOptionalAttributes = "reg_dt" | "update_dt";
export type tb_site_build_middleCreationAttributes = Optional<tb_site_build_middleAttributes, tb_site_build_middleOptionalAttributes>;

export class tb_site_build_middle extends Model<tb_site_build_middleAttributes, tb_site_build_middleCreationAttributes> implements tb_site_build_middleAttributes {
  code!: number;
  major_code!: number;
  view_text!: string;
  register_code!: number;
  reg_dt?: Date;
  updater_code!: number;
  update_dt?: Date;

  // tb_site_build_middle belongsTo tb_account via register_code
  register_code_tb_account!: tb_account;
  getRegister_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setRegister_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createRegister_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_site_build_middle belongsTo tb_account via updater_code
  updater_code_tb_account!: tb_account;
  getUpdater_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setUpdater_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createUpdater_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_site_build_middle hasMany tb_site_build_sub via middle_code
  tb_site_build_subs!: tb_site_build_sub[];
  getTb_site_build_subs!: Sequelize.HasManyGetAssociationsMixin<tb_site_build_sub>;
  setTb_site_build_subs!: Sequelize.HasManySetAssociationsMixin<tb_site_build_sub, tb_site_build_subId>;
  addTb_site_build_sub!: Sequelize.HasManyAddAssociationMixin<tb_site_build_sub, tb_site_build_subId>;
  addTb_site_build_subs!: Sequelize.HasManyAddAssociationsMixin<tb_site_build_sub, tb_site_build_subId>;
  createTb_site_build_sub!: Sequelize.HasManyCreateAssociationMixin<tb_site_build_sub>;
  removeTb_site_build_sub!: Sequelize.HasManyRemoveAssociationMixin<tb_site_build_sub, tb_site_build_subId>;
  removeTb_site_build_subs!: Sequelize.HasManyRemoveAssociationsMixin<tb_site_build_sub, tb_site_build_subId>;
  hasTb_site_build_sub!: Sequelize.HasManyHasAssociationMixin<tb_site_build_sub, tb_site_build_subId>;
  hasTb_site_build_subs!: Sequelize.HasManyHasAssociationsMixin<tb_site_build_sub, tb_site_build_subId>;
  countTb_site_build_subs!: Sequelize.HasManyCountAssociationsMixin;
  // tb_site_build_middle belongsTo tb_site_sch_work_major via major_code
  major_code_tb_site_sch_work_major!: tb_site_sch_work_major;
  getMajor_code_tb_site_sch_work_major!: Sequelize.BelongsToGetAssociationMixin<tb_site_sch_work_major>;
  setMajor_code_tb_site_sch_work_major!: Sequelize.BelongsToSetAssociationMixin<tb_site_sch_work_major, tb_site_sch_work_majorId>;
  createMajor_code_tb_site_sch_work_major!: Sequelize.BelongsToCreateAssociationMixin<tb_site_sch_work_major>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_site_build_middle {
    return tb_site_build_middle.init({
    code: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    major_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_site_sch_work_major',
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
    tableName: 'tb_site_build_middle',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_site_build_middle_idx",
        fields: [
          { name: "major_code" },
        ]
      },
      {
        name: "tb_site_build_middle_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
