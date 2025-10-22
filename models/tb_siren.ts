import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_account, tb_accountId } from './tb_account';
import type { tb_siren_state, tb_siren_stateId } from './tb_siren_state';
import type { tb_site, tb_siteId } from './tb_site';

export interface tb_sirenAttributes {
  code: number;
  site_code: number;
  place: string;
  risk_type: number;
  register_code: number;
  reg_dt?: Date;
  updater_code: number;
  update_dt?: Date;
  is_off?: number;
}

export type tb_sirenPk = "code";
export type tb_sirenId = tb_siren[tb_sirenPk];
export type tb_sirenOptionalAttributes = "reg_dt" | "update_dt" | "is_off";
export type tb_sirenCreationAttributes = Optional<tb_sirenAttributes, tb_sirenOptionalAttributes>;

export class tb_siren extends Model<tb_sirenAttributes, tb_sirenCreationAttributes> implements tb_sirenAttributes {
  code!: number;
  site_code!: number;
  place!: string;
  risk_type!: number;
  register_code!: number;
  reg_dt?: Date;
  updater_code!: number;
  update_dt?: Date;
  is_off?: number;

  // tb_siren belongsTo tb_account via register_code
  register_code_tb_account!: tb_account;
  getRegister_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setRegister_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createRegister_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_siren belongsTo tb_account via updater_code
  updater_code_tb_account!: tb_account;
  getUpdater_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setUpdater_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createUpdater_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_siren hasMany tb_siren_state via siren_code
  tb_siren_states!: tb_siren_state[];
  getTb_siren_states!: Sequelize.HasManyGetAssociationsMixin<tb_siren_state>;
  setTb_siren_states!: Sequelize.HasManySetAssociationsMixin<tb_siren_state, tb_siren_stateId>;
  addTb_siren_state!: Sequelize.HasManyAddAssociationMixin<tb_siren_state, tb_siren_stateId>;
  addTb_siren_states!: Sequelize.HasManyAddAssociationsMixin<tb_siren_state, tb_siren_stateId>;
  createTb_siren_state!: Sequelize.HasManyCreateAssociationMixin<tb_siren_state>;
  removeTb_siren_state!: Sequelize.HasManyRemoveAssociationMixin<tb_siren_state, tb_siren_stateId>;
  removeTb_siren_states!: Sequelize.HasManyRemoveAssociationsMixin<tb_siren_state, tb_siren_stateId>;
  hasTb_siren_state!: Sequelize.HasManyHasAssociationMixin<tb_siren_state, tb_siren_stateId>;
  hasTb_siren_states!: Sequelize.HasManyHasAssociationsMixin<tb_siren_state, tb_siren_stateId>;
  countTb_siren_states!: Sequelize.HasManyCountAssociationsMixin;
  // tb_siren belongsTo tb_site via site_code
  site_code_tb_site!: tb_site;
  getSite_code_tb_site!: Sequelize.BelongsToGetAssociationMixin<tb_site>;
  setSite_code_tb_site!: Sequelize.BelongsToSetAssociationMixin<tb_site, tb_siteId>;
  createSite_code_tb_site!: Sequelize.BelongsToCreateAssociationMixin<tb_site>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_siren {
    return tb_siren.init({
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
    place: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    risk_type: {
      type: DataTypes.INTEGER,
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
    },
    is_off: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'tb_siren',
    schema: 'public',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "tb_siren_idx",
        fields: [
          { name: "site_code" },
          { name: "risk_type" },
        ]
      },
      {
        name: "tb_siren_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
