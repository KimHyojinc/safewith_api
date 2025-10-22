import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_account, tb_accountId } from './tb_account';

export interface tb_worker_locationAttributes {
  code: number;
  worker_code: number;
  lat: number;
  lon: number;
  reg_dt?: Date;
}

export type tb_worker_locationPk = "code";
export type tb_worker_locationId = tb_worker_location[tb_worker_locationPk];
export type tb_worker_locationOptionalAttributes = "reg_dt";
export type tb_worker_locationCreationAttributes = Optional<tb_worker_locationAttributes, tb_worker_locationOptionalAttributes>;

export class tb_worker_location extends Model<tb_worker_locationAttributes, tb_worker_locationCreationAttributes> implements tb_worker_locationAttributes {
  code!: number;
  worker_code!: number;
  lat!: number;
  lon!: number;
  reg_dt?: Date;

  // tb_worker_location belongsTo tb_account via worker_code
  worker_code_tb_account!: tb_account;
  getWorker_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setWorker_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createWorker_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_worker_location {
    return tb_worker_location.init({
    code: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    worker_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_account',
        key: 'code'
      }
    },
    lat: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    lon: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    reg_dt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    }
  }, {
    sequelize,
    tableName: 'tb_worker_location',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_worker_location_idx",
        fields: [
          { name: "worker_code" },
          { name: "reg_dt" },
        ]
      },
      {
        name: "tb_worker_location_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
