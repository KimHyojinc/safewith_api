import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_project_area, tb_project_areaId } from './tb_project_area';
import type { tb_project_manager, tb_project_managerId } from './tb_project_manager';
import type { tb_site, tb_siteId } from './tb_site';
import type { tb_trip, tb_tripId } from './tb_trip';

export interface tb_projectAttributes {
  id: number;
  created_at?: Date;
  is_enable?: boolean;
  updated_at?: Date;
  address?: string;
  name: string;
  phone?: string;
  site_id?: number;
}

export type tb_projectPk = "id";
export type tb_projectId = tb_project[tb_projectPk];
export type tb_projectOptionalAttributes = "created_at" | "is_enable" | "updated_at" | "address" | "phone" | "site_id";
export type tb_projectCreationAttributes = Optional<tb_projectAttributes, tb_projectOptionalAttributes>;

export class tb_project extends Model<tb_projectAttributes, tb_projectCreationAttributes> implements tb_projectAttributes {
  id!: number;
  created_at?: Date;
  is_enable?: boolean;
  updated_at?: Date;
  address?: string;
  name!: string;
  phone?: string;
  site_id?: number;

  // tb_project hasMany tb_project_area via project_id
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
  // tb_project hasMany tb_project_manager via project_id
  tb_project_managers!: tb_project_manager[];
  getTb_project_managers!: Sequelize.HasManyGetAssociationsMixin<tb_project_manager>;
  setTb_project_managers!: Sequelize.HasManySetAssociationsMixin<tb_project_manager, tb_project_managerId>;
  addTb_project_manager!: Sequelize.HasManyAddAssociationMixin<tb_project_manager, tb_project_managerId>;
  addTb_project_managers!: Sequelize.HasManyAddAssociationsMixin<tb_project_manager, tb_project_managerId>;
  createTb_project_manager!: Sequelize.HasManyCreateAssociationMixin<tb_project_manager>;
  removeTb_project_manager!: Sequelize.HasManyRemoveAssociationMixin<tb_project_manager, tb_project_managerId>;
  removeTb_project_managers!: Sequelize.HasManyRemoveAssociationsMixin<tb_project_manager, tb_project_managerId>;
  hasTb_project_manager!: Sequelize.HasManyHasAssociationMixin<tb_project_manager, tb_project_managerId>;
  hasTb_project_managers!: Sequelize.HasManyHasAssociationsMixin<tb_project_manager, tb_project_managerId>;
  countTb_project_managers!: Sequelize.HasManyCountAssociationsMixin;
  // tb_project hasMany tb_trip via project_id
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
  // tb_project belongsTo tb_site via site_id
  site!: tb_site;
  getSite!: Sequelize.BelongsToGetAssociationMixin<tb_site>;
  setSite!: Sequelize.BelongsToSetAssociationMixin<tb_site, tb_siteId>;
  createSite!: Sequelize.BelongsToCreateAssociationMixin<tb_site>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_project {
    return tb_project.init({
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
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    site_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'tb_site',
        key: 'code'
      }
    }
  }, {
    sequelize,
    tableName: 'tb_project',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_project_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
