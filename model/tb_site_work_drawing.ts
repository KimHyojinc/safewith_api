import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_site_drawing, tb_site_drawingId } from './tb_site_drawing';

export interface tb_site_work_drawingAttributes {
  code: number;
  work_area_code: number;
  drawing_code: number;
}

export type tb_site_work_drawingPk = "code";
export type tb_site_work_drawingId = tb_site_work_drawing[tb_site_work_drawingPk];
export type tb_site_work_drawingCreationAttributes = tb_site_work_drawingAttributes;

export class tb_site_work_drawing extends Model<tb_site_work_drawingAttributes, tb_site_work_drawingCreationAttributes> implements tb_site_work_drawingAttributes {
  code!: number;
  work_area_code!: number;
  drawing_code!: number;

  // tb_site_work_drawing belongsTo tb_site_drawing via drawing_code
  drawing_code_tb_site_drawing!: tb_site_drawing;
  getDrawing_code_tb_site_drawing!: Sequelize.BelongsToGetAssociationMixin<tb_site_drawing>;
  setDrawing_code_tb_site_drawing!: Sequelize.BelongsToSetAssociationMixin<tb_site_drawing, tb_site_drawingId>;
  createDrawing_code_tb_site_drawing!: Sequelize.BelongsToCreateAssociationMixin<tb_site_drawing>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_site_work_drawing {
    return tb_site_work_drawing.init({
    code: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    work_area_code: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    drawing_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_site_drawing',
        key: 'code'
      }
    }
  }, {
    sequelize,
    tableName: 'tb_site_work_drawing',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_site_work_drawing_idx",
        fields: [
          { name: "work_area_code" },
          { name: "drawing_code" },
        ]
      },
      {
        name: "tb_site_work_drawing_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
