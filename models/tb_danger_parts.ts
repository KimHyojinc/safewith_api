import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_danger_mat_parts_items, tb_danger_mat_parts_itemsId } from './tb_danger_mat_parts_items';

export interface tb_danger_partsAttributes {
  code: number;
  name?: string;
  cas_no?: string;
  is_substance?: number;
  is_perm_mng?: number;
  is_spec_mng?: number;
  check_cycle6?: number;
  check_cycle12?: number;
  comment?: string;
}

export type tb_danger_partsPk = "code";
export type tb_danger_partsId = tb_danger_parts[tb_danger_partsPk];
export type tb_danger_partsOptionalAttributes = "name" | "cas_no" | "is_substance" | "is_perm_mng" | "is_spec_mng" | "check_cycle6" | "check_cycle12" | "comment";
export type tb_danger_partsCreationAttributes = Optional<tb_danger_partsAttributes, tb_danger_partsOptionalAttributes>;

export class tb_danger_parts extends Model<tb_danger_partsAttributes, tb_danger_partsCreationAttributes> implements tb_danger_partsAttributes {
  code!: number;
  name?: string;
  cas_no?: string;
  is_substance?: number;
  is_perm_mng?: number;
  is_spec_mng?: number;
  check_cycle6?: number;
  check_cycle12?: number;
  comment?: string;

  // tb_danger_parts hasMany tb_danger_mat_parts_items via danger_parts_code
  tb_danger_mat_parts_items!: tb_danger_mat_parts_items[];
  getTb_danger_mat_parts_items!: Sequelize.HasManyGetAssociationsMixin<tb_danger_mat_parts_items>;
  setTb_danger_mat_parts_items!: Sequelize.HasManySetAssociationsMixin<tb_danger_mat_parts_items, tb_danger_mat_parts_itemsId>;
  addTb_danger_mat_parts_item!: Sequelize.HasManyAddAssociationMixin<tb_danger_mat_parts_items, tb_danger_mat_parts_itemsId>;
  addTb_danger_mat_parts_items!: Sequelize.HasManyAddAssociationsMixin<tb_danger_mat_parts_items, tb_danger_mat_parts_itemsId>;
  createTb_danger_mat_parts_item!: Sequelize.HasManyCreateAssociationMixin<tb_danger_mat_parts_items>;
  removeTb_danger_mat_parts_item!: Sequelize.HasManyRemoveAssociationMixin<tb_danger_mat_parts_items, tb_danger_mat_parts_itemsId>;
  removeTb_danger_mat_parts_items!: Sequelize.HasManyRemoveAssociationsMixin<tb_danger_mat_parts_items, tb_danger_mat_parts_itemsId>;
  hasTb_danger_mat_parts_item!: Sequelize.HasManyHasAssociationMixin<tb_danger_mat_parts_items, tb_danger_mat_parts_itemsId>;
  hasTb_danger_mat_parts_items!: Sequelize.HasManyHasAssociationsMixin<tb_danger_mat_parts_items, tb_danger_mat_parts_itemsId>;
  countTb_danger_mat_parts_items!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_danger_parts {
    return tb_danger_parts.init({
    code: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cas_no: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    is_substance: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_perm_mng: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_spec_mng: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    check_cycle6: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    check_cycle12: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    comment: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_danger_parts',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_danger_parts_idx",
        fields: [
          { name: "code" },
        ]
      },
      {
        name: "tb_danger_parts_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
