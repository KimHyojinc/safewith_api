import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_account, tb_accountId } from './tb_account';
import type { tb_site, tb_siteId } from './tb_site';

export interface tb_edu_boardAttributes {
  code: number;
  site_code?: number;
  subject?: string;
  contents?: string;
  register_code?: number;
  reg_dt?: Date;
  updater_code?: number;
  update_dt?: Date;
}

export type tb_edu_boardPk = "code";
export type tb_edu_boardId = tb_edu_board[tb_edu_boardPk];
export type tb_edu_boardOptionalAttributes = "site_code" | "subject" | "contents" | "register_code" | "reg_dt" | "updater_code" | "update_dt";
export type tb_edu_boardCreationAttributes = Optional<tb_edu_boardAttributes, tb_edu_boardOptionalAttributes>;

export class tb_edu_board extends Model<tb_edu_boardAttributes, tb_edu_boardCreationAttributes> implements tb_edu_boardAttributes {
  code!: number;
  site_code?: number;
  subject?: string;
  contents?: string;
  register_code?: number;
  reg_dt?: Date;
  updater_code?: number;
  update_dt?: Date;

  // tb_edu_board belongsTo tb_account via register_code
  register_code_tb_account!: tb_account;
  getRegister_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setRegister_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createRegister_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_edu_board belongsTo tb_account via updater_code
  updater_code_tb_account!: tb_account;
  getUpdater_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setUpdater_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createUpdater_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_edu_board belongsTo tb_site via site_code
  site_code_tb_site!: tb_site;
  getSite_code_tb_site!: Sequelize.BelongsToGetAssociationMixin<tb_site>;
  setSite_code_tb_site!: Sequelize.BelongsToSetAssociationMixin<tb_site, tb_siteId>;
  createSite_code_tb_site!: Sequelize.BelongsToCreateAssociationMixin<tb_site>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_edu_board {
    return tb_edu_board.init({
    code: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    site_code: {
      type: DataTypes.INTEGER,
      allowNull: true,
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
    }
  }, {
    sequelize,
    tableName: 'tb_edu_board',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_edu_board_idx",
        fields: [
          { name: "site_code" },
        ]
      },
      {
        name: "tb_edu_board_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
