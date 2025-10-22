import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_danger_mat, tb_danger_matId } from './tb_danger_mat';
import type { tb_danger_parts, tb_danger_partsId } from './tb_danger_parts';

export interface tb_danger_mat_parts_itemsAttributes {
  code: number;
  danger_mat_code: number;
  danger_parts_code: number;
}

export type tb_danger_mat_parts_itemsPk = "code";
export type tb_danger_mat_parts_itemsId = tb_danger_mat_parts_items[tb_danger_mat_parts_itemsPk];
export type tb_danger_mat_parts_itemsCreationAttributes = tb_danger_mat_parts_itemsAttributes;

export class tb_danger_mat_parts_items extends Model<tb_danger_mat_parts_itemsAttributes, tb_danger_mat_parts_itemsCreationAttributes> implements tb_danger_mat_parts_itemsAttributes {
  code!: number;
  danger_mat_code!: number;
  danger_parts_code!: number;

  // tb_danger_mat_parts_items belongsTo tb_danger_mat via danger_mat_code
  danger_mat_code_tb_danger_mat!: tb_danger_mat;
  getDanger_mat_code_tb_danger_mat!: Sequelize.BelongsToGetAssociationMixin<tb_danger_mat>;
  setDanger_mat_code_tb_danger_mat!: Sequelize.BelongsToSetAssociationMixin<tb_danger_mat, tb_danger_matId>;
  createDanger_mat_code_tb_danger_mat!: Sequelize.BelongsToCreateAssociationMixin<tb_danger_mat>;
  // tb_danger_mat_parts_items belongsTo tb_danger_parts via danger_parts_code
  danger_parts_code_tb_danger_part!: tb_danger_parts;
  getDanger_parts_code_tb_danger_part!: Sequelize.BelongsToGetAssociationMixin<tb_danger_parts>;
  setDanger_parts_code_tb_danger_part!: Sequelize.BelongsToSetAssociationMixin<tb_danger_parts, tb_danger_partsId>;
  createDanger_parts_code_tb_danger_part!: Sequelize.BelongsToCreateAssociationMixin<tb_danger_parts>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_danger_mat_parts_items {
    return tb_danger_mat_parts_items.init({
    code: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    danger_mat_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_danger_mat',
        key: 'code'
      }
    },
    danger_parts_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_danger_parts',
        key: 'code'
      }
    }
  }, {
    sequelize,
    tableName: 'tb_danger_mat_parts_items',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_danger_mat_parts_items_idx",
        fields: [
          { name: "code" },
        ]
      },
      {
        name: "tb_danger_mat_parts_items_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
