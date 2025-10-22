import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_area, tb_areaId } from './tb_area';
import type { tb_driver, tb_driverId } from './tb_driver';
import type { tb_gps_tracking, tb_gps_trackingId } from './tb_gps_tracking';
import type { tb_project, tb_projectId } from './tb_project';

export interface tb_tripAttributes {
  id: number;
  created_at?: Date;
  is_enable?: boolean;
  updated_at?: Date;
  end_time?: Date;
  material?: string;
  reason?: string;
  start_time?: Date;
  status?: string;
  title?: string;
  driver_id?: number;
  loading_area_id: number;
  project_id: number;
  unloading_area_id: number;
}

export type tb_tripPk = "id";
export type tb_tripId = tb_trip[tb_tripPk];
export type tb_tripOptionalAttributes = "created_at" | "is_enable" | "updated_at" | "end_time" | "material" | "reason" | "start_time" | "status" | "title" | "driver_id";
export type tb_tripCreationAttributes = Optional<tb_tripAttributes, tb_tripOptionalAttributes>;

export class tb_trip extends Model<tb_tripAttributes, tb_tripCreationAttributes> implements tb_tripAttributes {
  id!: number;
  created_at?: Date;
  is_enable?: boolean;
  updated_at?: Date;
  end_time?: Date;
  material?: string;
  reason?: string;
  start_time?: Date;
  status?: string;
  title?: string;
  driver_id?: number;
  loading_area_id!: number;
  project_id!: number;
  unloading_area_id!: number;

  // tb_trip belongsTo tb_area via loading_area_id
  loading_area!: tb_area;
  getLoading_area!: Sequelize.BelongsToGetAssociationMixin<tb_area>;
  setLoading_area!: Sequelize.BelongsToSetAssociationMixin<tb_area, tb_areaId>;
  createLoading_area!: Sequelize.BelongsToCreateAssociationMixin<tb_area>;
  // tb_trip belongsTo tb_area via unloading_area_id
  unloading_area!: tb_area;
  getUnloading_area!: Sequelize.BelongsToGetAssociationMixin<tb_area>;
  setUnloading_area!: Sequelize.BelongsToSetAssociationMixin<tb_area, tb_areaId>;
  createUnloading_area!: Sequelize.BelongsToCreateAssociationMixin<tb_area>;
  // tb_trip belongsTo tb_driver via driver_id
  driver!: tb_driver;
  getDriver!: Sequelize.BelongsToGetAssociationMixin<tb_driver>;
  setDriver!: Sequelize.BelongsToSetAssociationMixin<tb_driver, tb_driverId>;
  createDriver!: Sequelize.BelongsToCreateAssociationMixin<tb_driver>;
  // tb_trip belongsTo tb_project via project_id
  project!: tb_project;
  getProject!: Sequelize.BelongsToGetAssociationMixin<tb_project>;
  setProject!: Sequelize.BelongsToSetAssociationMixin<tb_project, tb_projectId>;
  createProject!: Sequelize.BelongsToCreateAssociationMixin<tb_project>;
  // tb_trip hasMany tb_gps_tracking via trip_id
  tb_gps_trackings!: tb_gps_tracking[];
  getTb_gps_trackings!: Sequelize.HasManyGetAssociationsMixin<tb_gps_tracking>;
  setTb_gps_trackings!: Sequelize.HasManySetAssociationsMixin<tb_gps_tracking, tb_gps_trackingId>;
  addTb_gps_tracking!: Sequelize.HasManyAddAssociationMixin<tb_gps_tracking, tb_gps_trackingId>;
  addTb_gps_trackings!: Sequelize.HasManyAddAssociationsMixin<tb_gps_tracking, tb_gps_trackingId>;
  createTb_gps_tracking!: Sequelize.HasManyCreateAssociationMixin<tb_gps_tracking>;
  removeTb_gps_tracking!: Sequelize.HasManyRemoveAssociationMixin<tb_gps_tracking, tb_gps_trackingId>;
  removeTb_gps_trackings!: Sequelize.HasManyRemoveAssociationsMixin<tb_gps_tracking, tb_gps_trackingId>;
  hasTb_gps_tracking!: Sequelize.HasManyHasAssociationMixin<tb_gps_tracking, tb_gps_trackingId>;
  hasTb_gps_trackings!: Sequelize.HasManyHasAssociationsMixin<tb_gps_tracking, tb_gps_trackingId>;
  countTb_gps_trackings!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_trip {
    return tb_trip.init({
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
    end_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    material: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    reason: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    driver_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'tb_driver',
        key: 'id'
      }
    },
    loading_area_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'tb_area',
        key: 'id'
      }
    },
    project_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'tb_project',
        key: 'id'
      }
    },
    unloading_area_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'tb_area',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'tb_trip',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_trip_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
