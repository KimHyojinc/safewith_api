import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tb_site_work_area_typeAttributes {
  code: number;
  type_code: number;
  name: string;
}

export type tb_site_work_area_typePk = "code";
export type tb_site_work_area_typeId = tb_site_work_area_type[tb_site_work_area_typePk];
export type tb_site_work_area_typeCreationAttributes = tb_site_work_area_typeAttributes;

export class tb_site_work_area_type extends Model<tb_site_work_area_typeAttributes, tb_site_work_area_typeCreationAttributes> implements tb_site_work_area_typeAttributes {
  code!: number;
  type_code!: number;
  name!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof tb_site_work_area_type {
    return tb_site_work_area_type.init({
    code: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    type_code: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tb_site_work_area_type',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_site_work_area_type_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
