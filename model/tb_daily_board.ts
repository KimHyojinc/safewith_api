import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_account, tb_accountId } from './tb_account';
import type { tb_site, tb_siteId } from './tb_site';

export interface tb_daily_boardAttributes {
  code: number;
  site_code: number;
  subject?: string;
  contents?: string;
  register_code?: number;
  reg_dt?: Date;
  updater_code?: number;
  update_dt?: Date;
  s_begin_dt?: string;
  s_end_dt?: string;
}

export type tb_daily_boardPk = "code";
export type tb_daily_boardId = tb_daily_board[tb_daily_boardPk];
export type tb_daily_boardOptionalAttributes = "subject" | "contents" | "register_code" | "reg_dt" | "updater_code" | "update_dt" | "s_begin_dt" | "s_end_dt";
export type tb_daily_boardCreationAttributes = Optional<tb_daily_boardAttributes, tb_daily_boardOptionalAttributes>;

export class tb_daily_board extends Model<tb_daily_boardAttributes, tb_daily_boardCreationAttributes> implements tb_daily_boardAttributes {
  code!: number;
  site_code!: number;
  subject?: string;
  contents?: string;
  register_code?: number;
  reg_dt?: Date;
  updater_code?: number;
  update_dt?: Date;
  s_begin_dt?: string;
  s_end_dt?: string;

  // tb_daily_board belongsTo tb_account via register_code
  register_code_tb_account!: tb_account;
  getRegister_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setRegister_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createRegister_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_daily_board belongsTo tb_account via updater_code
  updater_code_tb_account!: tb_account;
  getUpdater_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setUpdater_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createUpdater_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_daily_board belongsTo tb_site via site_code
  site_code_tb_site!: tb_site;
  getSite_code_tb_site!: Sequelize.BelongsToGetAssociationMixin<tb_site>;
  setSite_code_tb_site!: Sequelize.BelongsToSetAssociationMixin<tb_site, tb_siteId>;
  createSite_code_tb_site!: Sequelize.BelongsToCreateAssociationMixin<tb_site>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_daily_board {
    return tb_daily_board.init({
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
    subject: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    contents: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    register_code: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tb_account',
        key: 'code'
      }
    },
    reg_dt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updater_code: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tb_account',
        key: 'code'
      }
    },
    update_dt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    s_begin_dt: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    s_end_dt: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_daily_board',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_daily_board_idx",
        fields: [
          { name: "site_code" },
        ]
      },
      {
        name: "tb_daily_board_pk",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
