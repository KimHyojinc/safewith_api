import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_area, tb_areaId } from './tb_area';
import type { tb_project, tb_projectId } from './tb_project';

export interface tb_project_areaAttributes {
  id: number;
  created_at?: Date;
  is_enable?: boolean;
  updated_at?: Date;
  area_id: number;
  project_id: number;
}

export type tb_project_areaPk = "id";
export type tb_project_areaId = tb_project_area[tb_project_areaPk];
export type tb_project_areaOptionalAttributes = "created_at" | "is_enable" | "updated_at";
export type tb_project_areaCreationAttributes = Optional<tb_project_areaAttributes, tb_project_areaOptionalAttributes>;

export class tb_project_area extends Model<tb_project_areaAttributes, tb_project_areaCreationAttributes> implements tb_project_areaAttributes {
  id!: number;
  created_at?: Date;
  is_enable?: boolean;
  updated_at?: Date;
  area_id!: number;
  project_id!: number;

  // tb_project_area belongsTo tb_area via area_id
  area!: tb_area;
  getArea!: Sequelize.BelongsToGetAssociationMixin<tb_area>;
  setArea!: Sequelize.BelongsToSetAssociationMixin<tb_area, tb_areaId>;
  createArea!: Sequelize.BelongsToCreateAssociationMixin<tb_area>;
  // tb_project_area belongsTo tb_project via project_id
  project!: tb_project;
  getProject!: Sequelize.BelongsToGetAssociationMixin<tb_project>;
  setProject!: Sequelize.BelongsToSetAssociationMixin<tb_project, tb_projectId>;
  createProject!: Sequelize.BelongsToCreateAssociationMixin<tb_project>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_project_area {
    return tb_project_area.init({
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
    area_id: {
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
    }
  }, {
    sequelize,
    tableName: 'tb_project_area',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_project_area_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
