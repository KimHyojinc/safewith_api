import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_commute, tb_commuteId } from './tb_commute';
import type { tb_mat_pur, tb_mat_purId } from './tb_mat_pur';

export interface tb_libAttributes {
  code: number;
  group_name: string;
  view_text: string;
}

export type tb_libPk = "code";
export type tb_libId = tb_lib[tb_libPk];
export type tb_libCreationAttributes = tb_libAttributes;

export class tb_lib extends Model<tb_libAttributes, tb_libCreationAttributes> implements tb_libAttributes {
  code!: number;
  group_name!: string;
  view_text!: string;

  // tb_lib hasMany tb_commute via state_code
  tb_commutes!: tb_commute[];
  getTb_commutes!: Sequelize.HasManyGetAssociationsMixin<tb_commute>;
  setTb_commutes!: Sequelize.HasManySetAssociationsMixin<tb_commute, tb_commuteId>;
  addTb_commute!: Sequelize.HasManyAddAssociationMixin<tb_commute, tb_commuteId>;
  addTb_commutes!: Sequelize.HasManyAddAssociationsMixin<tb_commute, tb_commuteId>;
  createTb_commute!: Sequelize.HasManyCreateAssociationMixin<tb_commute>;
  removeTb_commute!: Sequelize.HasManyRemoveAssociationMixin<tb_commute, tb_commuteId>;
  removeTb_commutes!: Sequelize.HasManyRemoveAssociationsMixin<tb_commute, tb_commuteId>;
  hasTb_commute!: Sequelize.HasManyHasAssociationMixin<tb_commute, tb_commuteId>;
  hasTb_commutes!: Sequelize.HasManyHasAssociationsMixin<tb_commute, tb_commuteId>;
  countTb_commutes!: Sequelize.HasManyCountAssociationsMixin;
  // tb_lib hasMany tb_mat_pur via mat_type
  tb_mat_purs!: tb_mat_pur[];
  getTb_mat_purs!: Sequelize.HasManyGetAssociationsMixin<tb_mat_pur>;
  setTb_mat_purs!: Sequelize.HasManySetAssociationsMixin<tb_mat_pur, tb_mat_purId>;
  addTb_mat_pur!: Sequelize.HasManyAddAssociationMixin<tb_mat_pur, tb_mat_purId>;
  addTb_mat_purs!: Sequelize.HasManyAddAssociationsMixin<tb_mat_pur, tb_mat_purId>;
  createTb_mat_pur!: Sequelize.HasManyCreateAssociationMixin<tb_mat_pur>;
  removeTb_mat_pur!: Sequelize.HasManyRemoveAssociationMixin<tb_mat_pur, tb_mat_purId>;
  removeTb_mat_purs!: Sequelize.HasManyRemoveAssociationsMixin<tb_mat_pur, tb_mat_purId>;
  hasTb_mat_pur!: Sequelize.HasManyHasAssociationMixin<tb_mat_pur, tb_mat_purId>;
  hasTb_mat_purs!: Sequelize.HasManyHasAssociationsMixin<tb_mat_pur, tb_mat_purId>;
  countTb_mat_purs!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_lib {
    return tb_lib.init({
    code: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    group_name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    view_text: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tb_lib',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_lib_idx",
        fields: [
          { name: "group_name" },
        ]
      },
      {
        name: "tb_lib_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
