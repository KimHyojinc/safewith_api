import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_area_count_trip, tb_area_count_tripCreationAttributes, tb_area_count_tripId } from './tb_area_count_trip';
import type { tb_project_area, tb_project_areaId } from './tb_project_area';
import type { tb_trip, tb_tripId } from './tb_trip';

export interface tb_areaAttributes {
  id: number;
  created_at?: Date;
  is_enable?: boolean;
  updated_at?: Date;
  address?: string;
  description?: string;
  latitude?: number;
  longitude?: number;
  name: string;
  radius?: number;
  symbol?: string;
  type_function?: string;
}

export type tb_areaPk = "id";
export type tb_areaId = tb_area[tb_areaPk];
export type tb_areaOptionalAttributes = "created_at" | "is_enable" | "updated_at" | "address" | "description" | "latitude" | "longitude" | "radius" | "symbol" | "type_function";
export type tb_areaCreationAttributes = Optional<tb_areaAttributes, tb_areaOptionalAttributes>;

export class tb_area extends Model<tb_areaAttributes, tb_areaCreationAttributes> implements tb_areaAttributes {
  id!: number;
  created_at?: Date;
  is_enable?: boolean;
  updated_at?: Date;
  address?: string;
  description?: string;
  latitude?: number;
  longitude?: number;
  name!: string;
  radius?: number;
  symbol?: string;
  type_function?: string;

  // tb_area hasOne tb_area_count_trip via area_id
  tb_area_count_trip!: tb_area_count_trip;
  getTb_area_count_trip!: Sequelize.HasOneGetAssociationMixin<tb_area_count_trip>;
  setTb_area_count_trip!: Sequelize.HasOneSetAssociationMixin<tb_area_count_trip, tb_area_count_tripId>;
  createTb_area_count_trip!: Sequelize.HasOneCreateAssociationMixin<tb_area_count_trip>;
  // tb_area hasMany tb_project_area via area_id
  tb_project_areas!: tb_project_area[];
  getTb_project_areas!: Sequelize.HasManyGetAssociationsMixin<tb_project_area>;
  setTb_project_areas!: Sequelize.HasManySetAssociationsMixin<tb_project_area, tb_project_areaId>;
  addTb_project_area!: Sequelize.HasManyAddAssociationMixin<tb_project_area, tb_project_areaId>;
  addTb_project_areas!: Sequelize.HasManyAddAssociationsMixin<tb_project_area, tb_project_areaId>;
  createTb_project_area!: Sequelize.HasManyCreateAssociationMixin<tb_project_area>;
  removeTb_project_area!: Sequelize.HasManyRemoveAssociationMixin<tb_project_area, tb_project_areaId>;
  removeTb_project_areas!: Sequelize.HasManyRemoveAssociationsMixin<tb_project_area, tb_project_areaId>;
  hasTb_project_area!: Sequelize.HasManyHasAssociationMixin<tb_project_area, tb_project_areaId>;
  hasTb_project_areas!: Sequelize.HasManyHasAssociationsMixin<tb_project_area, tb_project_areaId>;
  countTb_project_areas!: Sequelize.HasManyCountAssociationsMixin;
  // tb_area hasMany tb_trip via loading_area_id
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
  // tb_area hasMany tb_trip via unloading_area_id
  unloading_area_tb_trips!: tb_trip[];
  getUnloading_area_tb_trips!: Sequelize.HasManyGetAssociationsMixin<tb_trip>;
  setUnloading_area_tb_trips!: Sequelize.HasManySetAssociationsMixin<tb_trip, tb_tripId>;
  addUnloading_area_tb_trip!: Sequelize.HasManyAddAssociationMixin<tb_trip, tb_tripId>;
  addUnloading_area_tb_trips!: Sequelize.HasManyAddAssociationsMixin<tb_trip, tb_tripId>;
  createUnloading_area_tb_trip!: Sequelize.HasManyCreateAssociationMixin<tb_trip>;
  removeUnloading_area_tb_trip!: Sequelize.HasManyRemoveAssociationMixin<tb_trip, tb_tripId>;
  removeUnloading_area_tb_trips!: Sequelize.HasManyRemoveAssociationsMixin<tb_trip, tb_tripId>;
  hasUnloading_area_tb_trip!: Sequelize.HasManyHasAssociationMixin<tb_trip, tb_tripId>;
  hasUnloading_area_tb_trips!: Sequelize.HasManyHasAssociationsMixin<tb_trip, tb_tripId>;
  countUnloading_area_tb_trips!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_area {
    return tb_area.init({
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
    address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    latitude: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    longitude: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "uk3hxiy06cy88wvmeedv7wfomjq"
    },
    radius: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    symbol: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    type_function: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_area',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_area_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "uk3hxiy06cy88wvmeedv7wfomjq",
        unique: true,
        fields: [
          { name: "name" },
        ]
      },
    ]
  });
  }
}
