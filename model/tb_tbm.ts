import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_account, tb_accountId } from './tb_account';
import type { tb_site, tb_siteId } from './tb_site';
import type { tb_tbm_photo, tb_tbm_photoId } from './tb_tbm_photo';
import type { tb_tbm_state, tb_tbm_stateId } from './tb_tbm_state';

export interface tb_tbmAttributes {
  code: number;
  site_code: number;
  execute_dt: string;
  const_type: number;
  subject: string;
  work: string;
  action: string;
  is_sign?: number;
  register_code: number;
  reg_dt?: Date;
  updater_code: number;
  update_dt?: Date;
  const_code?: number;
  is_const_sign?: number;
  const_sign_dt?: Date;
  const_esign?: string;
  app_code?: number;
  is_app_sign?: number;
  app_sign_dt?: Date;
  app_esign?: string;
  mgr_code?: number;
  is_mgr_sign?: number;
  mgr_sign_dt?: Date;
  mgr_esign?: string;
  sign_state?: number;
}

export type tb_tbmPk = "code";
export type tb_tbmId = tb_tbm[tb_tbmPk];
export type tb_tbmOptionalAttributes = "is_sign" | "reg_dt" | "update_dt" | "const_code" | "is_const_sign" | "const_sign_dt" | "const_esign" | "app_code" | "is_app_sign" | "app_sign_dt" | "app_esign" | "mgr_code" | "is_mgr_sign" | "mgr_sign_dt" | "mgr_esign" | "sign_state";
export type tb_tbmCreationAttributes = Optional<tb_tbmAttributes, tb_tbmOptionalAttributes>;

export class tb_tbm extends Model<tb_tbmAttributes, tb_tbmCreationAttributes> implements tb_tbmAttributes {
  code!: number;
  site_code!: number;
  execute_dt!: string;
  const_type!: number;
  subject!: string;
  work!: string;
  action!: string;
  is_sign?: number;
  register_code!: number;
  reg_dt?: Date;
  updater_code!: number;
  update_dt?: Date;
  const_code?: number;
  is_const_sign?: number;
  const_sign_dt?: Date;
  const_esign?: string;
  app_code?: number;
  is_app_sign?: number;
  app_sign_dt?: Date;
  app_esign?: string;
  mgr_code?: number;
  is_mgr_sign?: number;
  mgr_sign_dt?: Date;
  mgr_esign?: string;
  sign_state?: number;

  // tb_tbm belongsTo tb_account via register_code
  register_code_tb_account!: tb_account;
  getRegister_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setRegister_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createRegister_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_tbm belongsTo tb_account via updater_code
  updater_code_tb_account!: tb_account;
  getUpdater_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setUpdater_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createUpdater_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_tbm belongsTo tb_site via site_code
  site_code_tb_site!: tb_site;
  getSite_code_tb_site!: Sequelize.BelongsToGetAssociationMixin<tb_site>;
  setSite_code_tb_site!: Sequelize.BelongsToSetAssociationMixin<tb_site, tb_siteId>;
  createSite_code_tb_site!: Sequelize.BelongsToCreateAssociationMixin<tb_site>;
  // tb_tbm hasMany tb_tbm_photo via tbm_code
  tb_tbm_photos!: tb_tbm_photo[];
  getTb_tbm_photos!: Sequelize.HasManyGetAssociationsMixin<tb_tbm_photo>;
  setTb_tbm_photos!: Sequelize.HasManySetAssociationsMixin<tb_tbm_photo, tb_tbm_photoId>;
  addTb_tbm_photo!: Sequelize.HasManyAddAssociationMixin<tb_tbm_photo, tb_tbm_photoId>;
  addTb_tbm_photos!: Sequelize.HasManyAddAssociationsMixin<tb_tbm_photo, tb_tbm_photoId>;
  createTb_tbm_photo!: Sequelize.HasManyCreateAssociationMixin<tb_tbm_photo>;
  removeTb_tbm_photo!: Sequelize.HasManyRemoveAssociationMixin<tb_tbm_photo, tb_tbm_photoId>;
  removeTb_tbm_photos!: Sequelize.HasManyRemoveAssociationsMixin<tb_tbm_photo, tb_tbm_photoId>;
  hasTb_tbm_photo!: Sequelize.HasManyHasAssociationMixin<tb_tbm_photo, tb_tbm_photoId>;
  hasTb_tbm_photos!: Sequelize.HasManyHasAssociationsMixin<tb_tbm_photo, tb_tbm_photoId>;
  countTb_tbm_photos!: Sequelize.HasManyCountAssociationsMixin;
  // tb_tbm hasMany tb_tbm_state via tbm_code
  tb_tbm_states!: tb_tbm_state[];
  getTb_tbm_states!: Sequelize.HasManyGetAssociationsMixin<tb_tbm_state>;
  setTb_tbm_states!: Sequelize.HasManySetAssociationsMixin<tb_tbm_state, tb_tbm_stateId>;
  addTb_tbm_state!: Sequelize.HasManyAddAssociationMixin<tb_tbm_state, tb_tbm_stateId>;
  addTb_tbm_states!: Sequelize.HasManyAddAssociationsMixin<tb_tbm_state, tb_tbm_stateId>;
  createTb_tbm_state!: Sequelize.HasManyCreateAssociationMixin<tb_tbm_state>;
  removeTb_tbm_state!: Sequelize.HasManyRemoveAssociationMixin<tb_tbm_state, tb_tbm_stateId>;
  removeTb_tbm_states!: Sequelize.HasManyRemoveAssociationsMixin<tb_tbm_state, tb_tbm_stateId>;
  hasTb_tbm_state!: Sequelize.HasManyHasAssociationMixin<tb_tbm_state, tb_tbm_stateId>;
  hasTb_tbm_states!: Sequelize.HasManyHasAssociationsMixin<tb_tbm_state, tb_tbm_stateId>;
  countTb_tbm_states!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_tbm {
    return tb_tbm.init({
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
    execute_dt: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    const_type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    subject: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    work: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    action: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    is_sign: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
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
    const_code: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    is_const_sign: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    const_sign_dt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    const_esign: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: ""
    },
    app_code: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    is_app_sign: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    app_sign_dt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    app_esign: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: ""
    },
    mgr_code: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    is_mgr_sign: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    mgr_sign_dt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    mgr_esign: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: ""
    },
    sign_state: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_tbm',
    schema: 'public',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "tb_tbm_idx",
        fields: [
          { name: "site_code" },
        ]
      },
      {
        name: "tb_tbm_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
