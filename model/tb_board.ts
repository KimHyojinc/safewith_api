import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_account, tb_accountId } from './tb_account';
import type { tb_board_photo, tb_board_photoId } from './tb_board_photo';
import type { tb_site, tb_siteId } from './tb_site';

export interface tb_boardAttributes {
  code: number;
  site_code: number;
  board_type?: number;
  subject: string;
  contents: string;
  is_import?: number;
  is_top_fixed?: number;
  register_code: number;
  reg_dt?: Date;
  updater_code: number;
  update_dt?: Date;
}

export type tb_boardPk = "code";
export type tb_boardId = tb_board[tb_boardPk];
export type tb_boardOptionalAttributes = "board_type" | "is_import" | "is_top_fixed" | "reg_dt" | "update_dt";
export type tb_boardCreationAttributes = Optional<tb_boardAttributes, tb_boardOptionalAttributes>;

export class tb_board extends Model<tb_boardAttributes, tb_boardCreationAttributes> implements tb_boardAttributes {
  code!: number;
  site_code!: number;
  board_type?: number;
  subject!: string;
  contents!: string;
  is_import?: number;
  is_top_fixed?: number;
  register_code!: number;
  reg_dt?: Date;
  updater_code!: number;
  update_dt?: Date;

  // tb_board belongsTo tb_account via register_code
  register_code_tb_account!: tb_account;
  getRegister_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setRegister_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createRegister_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_board belongsTo tb_account via updater_code
  updater_code_tb_account!: tb_account;
  getUpdater_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setUpdater_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createUpdater_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_board hasMany tb_board_photo via board_code
  tb_board_photos!: tb_board_photo[];
  getTb_board_photos!: Sequelize.HasManyGetAssociationsMixin<tb_board_photo>;
  setTb_board_photos!: Sequelize.HasManySetAssociationsMixin<tb_board_photo, tb_board_photoId>;
  addTb_board_photo!: Sequelize.HasManyAddAssociationMixin<tb_board_photo, tb_board_photoId>;
  addTb_board_photos!: Sequelize.HasManyAddAssociationsMixin<tb_board_photo, tb_board_photoId>;
  createTb_board_photo!: Sequelize.HasManyCreateAssociationMixin<tb_board_photo>;
  removeTb_board_photo!: Sequelize.HasManyRemoveAssociationMixin<tb_board_photo, tb_board_photoId>;
  removeTb_board_photos!: Sequelize.HasManyRemoveAssociationsMixin<tb_board_photo, tb_board_photoId>;
  hasTb_board_photo!: Sequelize.HasManyHasAssociationMixin<tb_board_photo, tb_board_photoId>;
  hasTb_board_photos!: Sequelize.HasManyHasAssociationsMixin<tb_board_photo, tb_board_photoId>;
  countTb_board_photos!: Sequelize.HasManyCountAssociationsMixin;
  // tb_board belongsTo tb_site via site_code
  site_code_tb_site!: tb_site;
  getSite_code_tb_site!: Sequelize.BelongsToGetAssociationMixin<tb_site>;
  setSite_code_tb_site!: Sequelize.BelongsToSetAssociationMixin<tb_site, tb_siteId>;
  createSite_code_tb_site!: Sequelize.BelongsToCreateAssociationMixin<tb_site>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_board {
    return tb_board.init({
    code: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    site_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_site',
        key: 'code'
      }
    },
    board_type: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    subject: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    contents: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    is_import: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    is_top_fixed: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
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
    tableName: 'tb_board',
    schema: 'public',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "tb_board_idx",
        fields: [
          { name: "site_code" },
          { name: "board_type" },
        ]
      },
      {
        name: "tb_board_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
