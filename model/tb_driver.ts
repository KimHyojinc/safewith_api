import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_trip, tb_tripId } from './tb_trip';

export interface tb_driverAttributes {
  id: number;
  created_at?: Date;
  is_enable?: boolean;
  updated_at?: Date;
  name: string;
  phone: string;
  vehicle_number: string;
}

export type tb_driverPk = "id";
export type tb_driverId = tb_driver[tb_driverPk];
export type tb_driverOptionalAttributes = "created_at" | "is_enable" | "updated_at";
export type tb_driverCreationAttributes = Optional<tb_driverAttributes, tb_driverOptionalAttributes>;

export class tb_driver extends Model<tb_driverAttributes, tb_driverCreationAttributes> implements tb_driverAttributes {
  id!: number;
  created_at?: Date;
  is_enable?: boolean;
  updated_at?: Date;
  name!: string;
  phone!: string;
  vehicle_number!: string;

  // tb_driver hasMany tb_trip via driver_id
  tb_trips!: tb_trip[];
  getTb_trips!: Sequelize.HasManyGetAssociationsMixin<tb_trip>;
  setTb_trips!: Sequelize.HasManySetAssociationsMixin<tb_trip, tb_tripId>;
  addTb_trip!: Sequelize.HasManyAddAssociationMixin<tb_trip, tb_tripId>;
  addTb_trips!: Sequelize.HasManyAddAssociationsMixin<tb_trip, tb_tripId>;
  createTb_trip!: Sequelize.HasManyCreateAssociationMixin<tb_trip>;
  removeTb_trip!: Sequelize.HasManyRemoveAssociationMixin<tb_trip, tb_tripId>;
  removeTb_trips!: Sequelize.HasManyRemoveAssociationsMixin<tb_trip, tb_tripId>;
  hasTb_trip!: Sequelize.HasManyHasAssociationMixin<tb_trip, tb_tripId>;
  hasTb_trips!: Sequelize.HasManyHasAssociationsMixin<tb_trip, tb_tripId>;
  countTb_trips!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_driver {
    return tb_driver.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    is_enable: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "ukjs8mwn8x1g9qxr1j1eo8ut2g0"
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "ukjs8mwn8x1g9qxr1j1eo8ut2g0"
    },
    vehicle_number: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "ukjs8mwn8x1g9qxr1j1eo8ut2g0"
    }
  }, {
    sequelize,
    tableName: 'tb_driver',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_driver_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "ukjs8mwn8x1g9qxr1j1eo8ut2g0",
        unique: true,
        fields: [
          { name: "name" },
          { name: "vehicle_number" },
          { name: "phone" },
        ]
      },
    ]
  });
  }
}
