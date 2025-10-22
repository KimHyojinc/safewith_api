import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_area, tb_areaId } from './tb_area';

export interface tb_area_count_tripAttributes {
  id: number;
  created_at?: Date;
  is_enable?: boolean;
  updated_at?: Date;
  count: number;
  version: number;
  area_id?: number;
}

export type tb_area_count_tripPk = "id";
export type tb_area_count_tripId = tb_area_count_trip[tb_area_count_tripPk];
export type tb_area_count_tripOptionalAttributes = "created_at" | "is_enable" | "updated_at" | "area_id";
export type tb_area_count_tripCreationAttributes = Optional<tb_area_count_tripAttributes, tb_area_count_tripOptionalAttributes>;

export class tb_area_count_trip extends Model<tb_area_count_tripAttributes, tb_area_count_tripCreationAttributes> implements tb_area_count_tripAttributes {
  id!: number;
  created_at?: Date;
  is_enable?: boolean;
  updated_at?: Date;
  count!: number;
  version!: number;
  area_id?: number;

  // tb_area_count_trip belongsTo tb_area via area_id
  area!: tb_area;
  getArea!: Sequelize.BelongsToGetAssociationMixin<tb_area>;
  setArea!: Sequelize.BelongsToSetAssociationMixin<tb_area, tb_areaId>;
  createArea!: Sequelize.BelongsToCreateAssociationMixin<tb_area>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_area_count_trip {
    return tb_area_count_trip.init({
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
    count: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    version: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    area_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'tb_area',
        key: 'id'
      },
      unique: "uk8c7ib0eqh949vv6wfs3x1hmgu"
    }
  }, {
    sequelize,
    tableName: 'tb_area_count_trip',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_area_count_trip_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "uk8c7ib0eqh949vv6wfs3x1hmgu",
        unique: true,
        fields: [
          { name: "area_id" },
        ]
      },
    ]
  });
  }
}
