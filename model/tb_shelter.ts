import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_account, tb_accountId } from './tb_account';
import type { tb_worker_shelter, tb_worker_shelterId } from './tb_worker_shelter';

export interface tb_shelterAttributes {
  code: number;
  drawing_code: number;
  x: number;
  y: number;
  register_code: number;
  reg_dt?: Date;
  updater_code: number;
  update_dt?: Date;
  site_code?: number;
  shelter_name?: string;
}

export type tb_shelterPk = "code";
export type tb_shelterId = tb_shelter[tb_shelterPk];
export type tb_shelterOptionalAttributes = "reg_dt" | "update_dt" | "site_code" | "shelter_name";
export type tb_shelterCreationAttributes = Optional<tb_shelterAttributes, tb_shelterOptionalAttributes>;

export class tb_shelter extends Model<tb_shelterAttributes, tb_shelterCreationAttributes> implements tb_shelterAttributes {
  code!: number;
  drawing_code!: number;
  x!: number;
  y!: number;
  register_code!: number;
  reg_dt?: Date;
  updater_code!: number;
  update_dt?: Date;
  site_code?: number;
  shelter_name?: string;

  // tb_shelter belongsTo tb_account via register_code
  register_code_tb_account!: tb_account;
  getRegister_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setRegister_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createRegister_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_shelter belongsTo tb_account via updater_code
  updater_code_tb_account!: tb_account;
  getUpdater_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setUpdater_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createUpdater_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_shelter hasMany tb_worker_shelter via shelter_code
  tb_worker_shelters!: tb_worker_shelter[];
  getTb_worker_shelters!: Sequelize.HasManyGetAssociationsMixin<tb_worker_shelter>;
  setTb_worker_shelters!: Sequelize.HasManySetAssociationsMixin<tb_worker_shelter, tb_worker_shelterId>;
  addTb_worker_shelter!: Sequelize.HasManyAddAssociationMixin<tb_worker_shelter, tb_worker_shelterId>;
  addTb_worker_shelters!: Sequelize.HasManyAddAssociationsMixin<tb_worker_shelter, tb_worker_shelterId>;
  createTb_worker_shelter!: Sequelize.HasManyCreateAssociationMixin<tb_worker_shelter>;
  removeTb_worker_shelter!: Sequelize.HasManyRemoveAssociationMixin<tb_worker_shelter, tb_worker_shelterId>;
  removeTb_worker_shelters!: Sequelize.HasManyRemoveAssociationsMixin<tb_worker_shelter, tb_worker_shelterId>;
  hasTb_worker_shelter!: Sequelize.HasManyHasAssociationMixin<tb_worker_shelter, tb_worker_shelterId>;
  hasTb_worker_shelters!: Sequelize.HasManyHasAssociationsMixin<tb_worker_shelter, tb_worker_shelterId>;
  countTb_worker_shelters!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_shelter {
    return tb_shelter.init({
    code: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    drawing_code: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    x: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    y: {
      type: DataTypes.DOUBLE,
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
    site_code: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    shelter_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_shelter',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_shelter_idx",
        fields: [
          { name: "drawing_code" },
        ]
      },
      {
        name: "tb_shelter_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
