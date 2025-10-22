import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_account, tb_accountId } from './tb_account';
import type { tb_site_build_middle, tb_site_build_middleId } from './tb_site_build_middle';
import type { tb_site_drawing, tb_site_drawingId } from './tb_site_drawing';

export interface tb_site_build_subAttributes {
  code: number;
  middle_code: number;
  view_text: string;
  register_code: number;
  reg_dt?: Date;
  updater_code: number;
  update_dt?: Date;
}

export type tb_site_build_subPk = "code";
export type tb_site_build_subId = tb_site_build_sub[tb_site_build_subPk];
export type tb_site_build_subOptionalAttributes = "reg_dt" | "update_dt";
export type tb_site_build_subCreationAttributes = Optional<tb_site_build_subAttributes, tb_site_build_subOptionalAttributes>;

export class tb_site_build_sub extends Model<tb_site_build_subAttributes, tb_site_build_subCreationAttributes> implements tb_site_build_subAttributes {
  code!: number;
  middle_code!: number;
  view_text!: string;
  register_code!: number;
  reg_dt?: Date;
  updater_code!: number;
  update_dt?: Date;

  // tb_site_build_sub belongsTo tb_account via register_code
  register_code_tb_account!: tb_account;
  getRegister_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setRegister_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createRegister_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_site_build_sub belongsTo tb_account via updater_code
  updater_code_tb_account!: tb_account;
  getUpdater_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setUpdater_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createUpdater_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_site_build_sub belongsTo tb_site_build_middle via middle_code
  middle_code_tb_site_build_middle!: tb_site_build_middle;
  getMiddle_code_tb_site_build_middle!: Sequelize.BelongsToGetAssociationMixin<tb_site_build_middle>;
  setMiddle_code_tb_site_build_middle!: Sequelize.BelongsToSetAssociationMixin<tb_site_build_middle, tb_site_build_middleId>;
  createMiddle_code_tb_site_build_middle!: Sequelize.BelongsToCreateAssociationMixin<tb_site_build_middle>;
  // tb_site_build_sub hasMany tb_site_drawing via sub_code
  tb_site_drawings!: tb_site_drawing[];
  getTb_site_drawings!: Sequelize.HasManyGetAssociationsMixin<tb_site_drawing>;
  setTb_site_drawings!: Sequelize.HasManySetAssociationsMixin<tb_site_drawing, tb_site_drawingId>;
  addTb_site_drawing!: Sequelize.HasManyAddAssociationMixin<tb_site_drawing, tb_site_drawingId>;
  addTb_site_drawings!: Sequelize.HasManyAddAssociationsMixin<tb_site_drawing, tb_site_drawingId>;
  createTb_site_drawing!: Sequelize.HasManyCreateAssociationMixin<tb_site_drawing>;
  removeTb_site_drawing!: Sequelize.HasManyRemoveAssociationMixin<tb_site_drawing, tb_site_drawingId>;
  removeTb_site_drawings!: Sequelize.HasManyRemoveAssociationsMixin<tb_site_drawing, tb_site_drawingId>;
  hasTb_site_drawing!: Sequelize.HasManyHasAssociationMixin<tb_site_drawing, tb_site_drawingId>;
  hasTb_site_drawings!: Sequelize.HasManyHasAssociationsMixin<tb_site_drawing, tb_site_drawingId>;
  countTb_site_drawings!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_site_build_sub {
    return tb_site_build_sub.init({
    code: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    middle_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_site_build_middle',
        key: 'code'
      }
    },
    view_text: {
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
    tableName: 'tb_site_build_sub',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_site_build_sub_idx",
        fields: [
          { name: "middle_code" },
        ]
      },
      {
        name: "tb_site_build_sub_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
