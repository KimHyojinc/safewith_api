import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tb_site_work_area_kindAttributes {
  code: number;
  kind_code: number;
  name: string;
}

export type tb_site_work_area_kindPk = "code";
export type tb_site_work_area_kindId = tb_site_work_area_kind[tb_site_work_area_kindPk];
export type tb_site_work_area_kindCreationAttributes = tb_site_work_area_kindAttributes;

export class tb_site_work_area_kind extends Model<tb_site_work_area_kindAttributes, tb_site_work_area_kindCreationAttributes> implements tb_site_work_area_kindAttributes {
  code!: number;
  kind_code!: number;
  name!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof tb_site_work_area_kind {
    return tb_site_work_area_kind.init({
    code: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    kind_code: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tb_site_work_area_kind',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_site_work_area_kind_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
