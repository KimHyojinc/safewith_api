import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tb_notificationsAttributes {
  code: number;
  account_code: number;
  title: string;
  body: string;
  is_read: boolean;
  create_at: Date;
  read_at?: Date;
  type?: string;
  send_to?: string;
  icon?: string;
  feature_type?: string;
  feature_code: number;
  temp_code?: string;
  site_code: number;
  site_name?: string;
}

export type tb_notificationsPk = "code";
export type tb_notificationsId = tb_notifications[tb_notificationsPk];
export type tb_notificationsOptionalAttributes = "create_at" | "read_at" | "type" | "send_to" | "icon" | "feature_type" | "feature_code" | "temp_code" | "site_code" | "site_name";
export type tb_notificationsCreationAttributes = Optional<tb_notificationsAttributes, tb_notificationsOptionalAttributes>;

export class tb_notifications extends Model<tb_notificationsAttributes, tb_notificationsCreationAttributes> implements tb_notificationsAttributes {
  code!: number;
  account_code!: number;
  title!: string;
  body!: string;
  is_read!: boolean;
  create_at!: Date;
  read_at?: Date;
  type?: string;
  send_to?: string;
  icon?: string;
  feature_type?: string;
  feature_code!: number;
  temp_code?: string;
  site_code!: number;
  site_name?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof tb_notifications {
    return tb_notifications.init({
    code: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    account_code: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(225),
      allowNull: false
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    is_read: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    create_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    read_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "normal",
      comment: "type of notification normal - alert"
    },
    send_to: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "app, web , all"
    },
    icon: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    feature_type: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "display open when click noti"
    },
    feature_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "code in detail feature_type to open record"
    },
    temp_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    site_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    site_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_notifications',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_notifications_account_code_idx",
        fields: [
          { name: "account_code" },
        ]
      },
      {
        name: "tb_notifications_pk",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
