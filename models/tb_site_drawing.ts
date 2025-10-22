import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_account, tb_accountId } from './tb_account';
import type { tb_site_build_sub, tb_site_build_subId } from './tb_site_build_sub';
import type { tb_site_work_drawing, tb_site_work_drawingId } from './tb_site_work_drawing';
import type { tb_site_work_drawing2, tb_site_work_drawing2Id } from './tb_site_work_drawing2';

export interface tb_site_drawingAttributes {
  code: number;
  sub_code: number;
  file_type?: number;
  file_name: string;
  file_path: string;
  register_code: number;
  reg_dt?: Date;
  updater_code: number;
  update_dt?: Date;
}

export type tb_site_drawingPk = "code";
export type tb_site_drawingId = tb_site_drawing[tb_site_drawingPk];
export type tb_site_drawingOptionalAttributes = "file_type" | "reg_dt" | "update_dt";
export type tb_site_drawingCreationAttributes = Optional<tb_site_drawingAttributes, tb_site_drawingOptionalAttributes>;

export class tb_site_drawing extends Model<tb_site_drawingAttributes, tb_site_drawingCreationAttributes> implements tb_site_drawingAttributes {
  code!: number;
  sub_code!: number;
  file_type?: number;
  file_name!: string;
  file_path!: string;
  register_code!: number;
  reg_dt?: Date;
  updater_code!: number;
  update_dt?: Date;

  // tb_site_drawing belongsTo tb_account via register_code
  register_code_tb_account!: tb_account;
  getRegister_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setRegister_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createRegister_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_site_drawing belongsTo tb_account via updater_code
  updater_code_tb_account!: tb_account;
  getUpdater_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setUpdater_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createUpdater_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_site_drawing belongsTo tb_site_build_sub via sub_code
  sub_code_tb_site_build_sub!: tb_site_build_sub;
  getSub_code_tb_site_build_sub!: Sequelize.BelongsToGetAssociationMixin<tb_site_build_sub>;
  setSub_code_tb_site_build_sub!: Sequelize.BelongsToSetAssociationMixin<tb_site_build_sub, tb_site_build_subId>;
  createSub_code_tb_site_build_sub!: Sequelize.BelongsToCreateAssociationMixin<tb_site_build_sub>;
  // tb_site_drawing hasMany tb_site_work_drawing via drawing_code
  tb_site_work_drawings!: tb_site_work_drawing[];
  getTb_site_work_drawings!: Sequelize.HasManyGetAssociationsMixin<tb_site_work_drawing>;
  setTb_site_work_drawings!: Sequelize.HasManySetAssociationsMixin<tb_site_work_drawing, tb_site_work_drawingId>;
  addTb_site_work_drawing!: Sequelize.HasManyAddAssociationMixin<tb_site_work_drawing, tb_site_work_drawingId>;
  addTb_site_work_drawings!: Sequelize.HasManyAddAssociationsMixin<tb_site_work_drawing, tb_site_work_drawingId>;
  createTb_site_work_drawing!: Sequelize.HasManyCreateAssociationMixin<tb_site_work_drawing>;
  removeTb_site_work_drawing!: Sequelize.HasManyRemoveAssociationMixin<tb_site_work_drawing, tb_site_work_drawingId>;
  removeTb_site_work_drawings!: Sequelize.HasManyRemoveAssociationsMixin<tb_site_work_drawing, tb_site_work_drawingId>;
  hasTb_site_work_drawing!: Sequelize.HasManyHasAssociationMixin<tb_site_work_drawing, tb_site_work_drawingId>;
  hasTb_site_work_drawings!: Sequelize.HasManyHasAssociationsMixin<tb_site_work_drawing, tb_site_work_drawingId>;
  countTb_site_work_drawings!: Sequelize.HasManyCountAssociationsMixin;
  // tb_site_drawing hasMany tb_site_work_drawing2 via drawing_code
  tb_site_work_drawing2s!: tb_site_work_drawing2[];
  getTb_site_work_drawing2s!: Sequelize.HasManyGetAssociationsMixin<tb_site_work_drawing2>;
  setTb_site_work_drawing2s!: Sequelize.HasManySetAssociationsMixin<tb_site_work_drawing2, tb_site_work_drawing2Id>;
  addTb_site_work_drawing2!: Sequelize.HasManyAddAssociationMixin<tb_site_work_drawing2, tb_site_work_drawing2Id>;
  addTb_site_work_drawing2s!: Sequelize.HasManyAddAssociationsMixin<tb_site_work_drawing2, tb_site_work_drawing2Id>;
  createTb_site_work_drawing2!: Sequelize.HasManyCreateAssociationMixin<tb_site_work_drawing2>;
  removeTb_site_work_drawing2!: Sequelize.HasManyRemoveAssociationMixin<tb_site_work_drawing2, tb_site_work_drawing2Id>;
  removeTb_site_work_drawing2s!: Sequelize.HasManyRemoveAssociationsMixin<tb_site_work_drawing2, tb_site_work_drawing2Id>;
  hasTb_site_work_drawing2!: Sequelize.HasManyHasAssociationMixin<tb_site_work_drawing2, tb_site_work_drawing2Id>;
  hasTb_site_work_drawing2s!: Sequelize.HasManyHasAssociationsMixin<tb_site_work_drawing2, tb_site_work_drawing2Id>;
  countTb_site_work_drawing2s!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_site_drawing {
    return tb_site_drawing.init({
    code: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sub_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_site_build_sub',
        key: 'code'
      }
    },
    file_type: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    file_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    file_path: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    register_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_account',
        key: 'code'
      }
    },
    reg_dt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    updater_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_account',
        key: 'code'
      }
    },
    update_dt: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_site_drawing',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_site_drawing_idx",
        fields: [
          { name: "sub_code" },
        ]
      },
      {
        name: "tb_site_drawing_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
