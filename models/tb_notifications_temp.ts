import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tb_notifications_tempAttributes {
  code: number;
  name: string;
  description?: string;
  title: string;
  body: string;
  sent_to?: string;
  display_screen?: string;
  is_save_log: boolean;
  noti_type: string;
}

export type tb_notifications_tempPk = "code";
export type tb_notifications_tempId = tb_notifications_temp[tb_notifications_tempPk];
export type tb_notifications_tempOptionalAttributes = "description" | "sent_to" | "display_screen" | "is_save_log" | "noti_type";
export type tb_notifications_tempCreationAttributes = Optional<tb_notifications_tempAttributes, tb_notifications_tempOptionalAttributes>;

export class tb_notifications_temp extends Model<tb_notifications_tempAttributes, tb_notifications_tempCreationAttributes> implements tb_notifications_tempAttributes {
  code!: number;
  name!: string;
  description?: string;
  title!: string;
  body!: string;
  sent_to?: string;
  display_screen?: string;
  is_save_log!: boolean;
  noti_type!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof tb_notifications_temp {
    return tb_notifications_temp.init({
    code: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "name code of template",
      unique: "tb_notifications_temp_unique"
    },
    description: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(225),
      allowNull: false
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    sent_to: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "sms, manager_app , employee_app"
    },
    display_screen: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "display on which screen"
    },
    is_save_log: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    noti_type: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "normal",
      comment: "normal - alert"
    }
  }, {
    sequelize,
    tableName: 'tb_notifications_temp',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_notifications_temp_pk",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
      {
        name: "tb_notifications_temp_unique",
        unique: true,
        fields: [
          { name: "name" },
        ]
      },
    ]
  });
  }
}
