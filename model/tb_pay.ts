import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_account, tb_accountId } from './tb_account';
import type { tb_site, tb_siteId } from './tb_site';

export interface tb_payAttributes {
  code: number;
  site_code: number;
  account_code: number;
  amount?: number;
  gongsu?: number;
  working_day: string;
  is_pay?: number;
  pay_dt?: Date;
  register_code: number;
  reg_dt?: Date;
  updater_code: number;
  update_dt?: Date;
}

export type tb_payPk = "code";
export type tb_payId = tb_pay[tb_payPk];
export type tb_payOptionalAttributes = "amount" | "gongsu" | "is_pay" | "pay_dt" | "reg_dt" | "update_dt";
export type tb_payCreationAttributes = Optional<tb_payAttributes, tb_payOptionalAttributes>;

export class tb_pay extends Model<tb_payAttributes, tb_payCreationAttributes> implements tb_payAttributes {
  code!: number;
  site_code!: number;
  account_code!: number;
  amount?: number;
  gongsu?: number;
  working_day!: string;
  is_pay?: number;
  pay_dt?: Date;
  register_code!: number;
  reg_dt?: Date;
  updater_code!: number;
  update_dt?: Date;

  // tb_pay belongsTo tb_account via account_code
  account_code_tb_account!: tb_account;
  getAccount_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setAccount_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createAccount_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_pay belongsTo tb_account via register_code
  register_code_tb_account!: tb_account;
  getRegister_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setRegister_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createRegister_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_pay belongsTo tb_account via updater_code
  updater_code_tb_account!: tb_account;
  getUpdater_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setUpdater_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createUpdater_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_pay belongsTo tb_site via site_code
  site_code_tb_site!: tb_site;
  getSite_code_tb_site!: Sequelize.BelongsToGetAssociationMixin<tb_site>;
  setSite_code_tb_site!: Sequelize.BelongsToSetAssociationMixin<tb_site, tb_siteId>;
  createSite_code_tb_site!: Sequelize.BelongsToCreateAssociationMixin<tb_site>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_pay {
    return tb_pay.init({
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
    account_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_account',
        key: 'code'
      }
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    gongsu: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    working_day: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    is_pay: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    pay_dt: {
      type: DataTypes.DATE,
      allowNull: true
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
    tableName: 'tb_pay',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_pay_idx",
        fields: [
          { name: "site_code" },
          { name: "account_code" },
          { name: "working_day" },
        ]
      },
      {
        name: "tb_pay_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
