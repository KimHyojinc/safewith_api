import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_trip, tb_tripId } from './tb_trip';

export interface tb_gps_trackingAttributes {
  id: number;
  created_at?: Date;
  is_enable?: boolean;
  updated_at?: Date;
  distance?: number;
  latitude_encrypt?: string;
  longitude_encrypt?: string;
  speed?: number;
  trip_id?: number;
}

export type tb_gps_trackingPk = "id";
export type tb_gps_trackingId = tb_gps_tracking[tb_gps_trackingPk];
export type tb_gps_trackingOptionalAttributes = "created_at" | "is_enable" | "updated_at" | "distance" | "latitude_encrypt" | "longitude_encrypt" | "speed" | "trip_id";
export type tb_gps_trackingCreationAttributes = Optional<tb_gps_trackingAttributes, tb_gps_trackingOptionalAttributes>;

export class tb_gps_tracking extends Model<tb_gps_trackingAttributes, tb_gps_trackingCreationAttributes> implements tb_gps_trackingAttributes {
  id!: number;
  created_at?: Date;
  is_enable?: boolean;
  updated_at?: Date;
  distance?: number;
  latitude_encrypt?: string;
  longitude_encrypt?: string;
  speed?: number;
  trip_id?: number;

  // tb_gps_tracking belongsTo tb_trip via trip_id
  trip!: tb_trip;
  getTrip!: Sequelize.BelongsToGetAssociationMixin<tb_trip>;
  setTrip!: Sequelize.BelongsToSetAssociationMixin<tb_trip, tb_tripId>;
  createTrip!: Sequelize.BelongsToCreateAssociationMixin<tb_trip>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_gps_tracking {
    return tb_gps_tracking.init({
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
    distance: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    latitude_encrypt: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    longitude_encrypt: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    speed: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    trip_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'tb_trip',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'tb_gps_tracking',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_gps_tracking_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
