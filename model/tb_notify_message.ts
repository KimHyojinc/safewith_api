import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tb_notify_messageAttributes {
  code: number;
  time?: Date;
  client_code?: number;
  site_code?: number;
  admin_code?: number;
  msg_type?: string;
  title?: string;
  contents?: string;
  is_read?: number;
  alarm_type?: number;
  last_code?: number;
}

export type tb_notify_messageOptionalAttributes = "time" | "client_code" | "site_code" | "admin_code" | "msg_type" | "title" | "contents" | "is_read" | "alarm_type" | "last_code";
export type tb_notify_messageCreationAttributes = Optional<tb_notify_messageAttributes, tb_notify_messageOptionalAttributes>;

export class tb_notify_message extends Model<tb_notify_messageAttributes, tb_notify_messageCreationAttributes> implements tb_notify_messageAttributes {
  code!: number;
  time?: Date;
  client_code?: number;
  site_code?: number;
  admin_code?: number;
  msg_type?: string;
  title?: string;
  contents?: string;
  is_read?: number;
  alarm_type?: number;
  last_code?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof tb_notify_message {
    return tb_notify_message.init({
    code: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    client_code: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    site_code: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    admin_code: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    msg_type: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    contents: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    is_read: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    alarm_type: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    last_code: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_notify_message',
    schema: 'public',
    timestamps: false
  });
  }
}
