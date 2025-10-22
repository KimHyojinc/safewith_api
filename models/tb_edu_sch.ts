import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_account, tb_accountId } from './tb_account';
import type { tb_edu, tb_eduId } from './tb_edu';
import type { tb_edu_judge, tb_edu_judgeId } from './tb_edu_judge';
import type { tb_edu_sch_member, tb_edu_sch_memberId } from './tb_edu_sch_member';
import type { tb_site, tb_siteId } from './tb_site';

export interface tb_edu_schAttributes {
  code: number;
  site_code: number;
  edu_code: number;
  training_begin: string;
  training_end: string;
  register_code: number;
  reg_dt?: Date;
  updater_code: number;
  update_dt?: Date;
}

export type tb_edu_schPk = "code";
export type tb_edu_schId = tb_edu_sch[tb_edu_schPk];
export type tb_edu_schOptionalAttributes = "reg_dt" | "update_dt";
export type tb_edu_schCreationAttributes = Optional<tb_edu_schAttributes, tb_edu_schOptionalAttributes>;

export class tb_edu_sch extends Model<tb_edu_schAttributes, tb_edu_schCreationAttributes> implements tb_edu_schAttributes {
  code!: number;
  site_code!: number;
  edu_code!: number;
  training_begin!: string;
  training_end!: string;
  register_code!: number;
  reg_dt?: Date;
  updater_code!: number;
  update_dt?: Date;

  // tb_edu_sch belongsTo tb_account via updater_code
  updater_code_tb_account!: tb_account;
  getUpdater_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setUpdater_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createUpdater_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_edu_sch belongsTo tb_edu via edu_code
  edu_code_tb_edu!: tb_edu;
  getEdu_code_tb_edu!: Sequelize.BelongsToGetAssociationMixin<tb_edu>;
  setEdu_code_tb_edu!: Sequelize.BelongsToSetAssociationMixin<tb_edu, tb_eduId>;
  createEdu_code_tb_edu!: Sequelize.BelongsToCreateAssociationMixin<tb_edu>;
  // tb_edu_sch hasMany tb_edu_judge via edu_sch_code
  tb_edu_judges!: tb_edu_judge[];
  getTb_edu_judges!: Sequelize.HasManyGetAssociationsMixin<tb_edu_judge>;
  setTb_edu_judges!: Sequelize.HasManySetAssociationsMixin<tb_edu_judge, tb_edu_judgeId>;
  addTb_edu_judge!: Sequelize.HasManyAddAssociationMixin<tb_edu_judge, tb_edu_judgeId>;
  addTb_edu_judges!: Sequelize.HasManyAddAssociationsMixin<tb_edu_judge, tb_edu_judgeId>;
  createTb_edu_judge!: Sequelize.HasManyCreateAssociationMixin<tb_edu_judge>;
  removeTb_edu_judge!: Sequelize.HasManyRemoveAssociationMixin<tb_edu_judge, tb_edu_judgeId>;
  removeTb_edu_judges!: Sequelize.HasManyRemoveAssociationsMixin<tb_edu_judge, tb_edu_judgeId>;
  hasTb_edu_judge!: Sequelize.HasManyHasAssociationMixin<tb_edu_judge, tb_edu_judgeId>;
  hasTb_edu_judges!: Sequelize.HasManyHasAssociationsMixin<tb_edu_judge, tb_edu_judgeId>;
  countTb_edu_judges!: Sequelize.HasManyCountAssociationsMixin;
  // tb_edu_sch hasMany tb_edu_sch_member via edu_sch_code
  tb_edu_sch_members!: tb_edu_sch_member[];
  getTb_edu_sch_members!: Sequelize.HasManyGetAssociationsMixin<tb_edu_sch_member>;
  setTb_edu_sch_members!: Sequelize.HasManySetAssociationsMixin<tb_edu_sch_member, tb_edu_sch_memberId>;
  addTb_edu_sch_member!: Sequelize.HasManyAddAssociationMixin<tb_edu_sch_member, tb_edu_sch_memberId>;
  addTb_edu_sch_members!: Sequelize.HasManyAddAssociationsMixin<tb_edu_sch_member, tb_edu_sch_memberId>;
  createTb_edu_sch_member!: Sequelize.HasManyCreateAssociationMixin<tb_edu_sch_member>;
  removeTb_edu_sch_member!: Sequelize.HasManyRemoveAssociationMixin<tb_edu_sch_member, tb_edu_sch_memberId>;
  removeTb_edu_sch_members!: Sequelize.HasManyRemoveAssociationsMixin<tb_edu_sch_member, tb_edu_sch_memberId>;
  hasTb_edu_sch_member!: Sequelize.HasManyHasAssociationMixin<tb_edu_sch_member, tb_edu_sch_memberId>;
  hasTb_edu_sch_members!: Sequelize.HasManyHasAssociationsMixin<tb_edu_sch_member, tb_edu_sch_memberId>;
  countTb_edu_sch_members!: Sequelize.HasManyCountAssociationsMixin;
  // tb_edu_sch belongsTo tb_site via site_code
  site_code_tb_site!: tb_site;
  getSite_code_tb_site!: Sequelize.BelongsToGetAssociationMixin<tb_site>;
  setSite_code_tb_site!: Sequelize.BelongsToSetAssociationMixin<tb_site, tb_siteId>;
  createSite_code_tb_site!: Sequelize.BelongsToCreateAssociationMixin<tb_site>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_edu_sch {
    return tb_edu_sch.init({
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
    edu_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_edu',
        key: 'code'
      }
    },
    training_begin: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    training_end: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    register_code: {
      type: DataTypes.INTEGER,
      allowNull: false
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
    tableName: 'tb_edu_sch',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_edu_sch_idx",
        fields: [
          { name: "site_code" },
          { name: "edu_code" },
        ]
      },
      {
        name: "tb_edu_sch_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
