import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tb_user_deviceAttributes {
  code: number;
  account_code: number;
  device_id: string;
  device_token: string;
  status: boolean;
  is_push: boolean;
  platform: string;
  type: string;
  create_at: Date;
  update_at?: Date;
  is_siren: boolean;
}

export type tb_user_devicePk = "code";
export type tb_user_deviceId = tb_user_device[tb_user_devicePk];
export type tb_user_deviceOptionalAttributes = "status" | "is_push" | "create_at" | "update_at" | "is_siren";
export type tb_user_deviceCreationAttributes = Optional<tb_user_deviceAttributes, tb_user_deviceOptionalAttributes>;

export class tb_user_device extends Model<tb_user_deviceAttributes, tb_user_deviceCreationAttributes> implements tb_user_deviceAttributes {
  code!: number;
  account_code!: number;
  device_id!: string;
  device_token!: string;
  status!: boolean;
  is_push!: boolean;
  platform!: string;
  type!: string;
  create_at!: Date;
  update_at?: Date;
  is_siren!: boolean;


  static initModel(sequelize: Sequelize.Sequelize): typeof tb_user_device {
    return tb_user_device.init({
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
    device_id: {
      type: DataTypes.STRING(225),
      allowNull: false,
      comment: "device id login app"
    },
    device_token: {
      type: DataTypes.STRING(225),
      allowNull: false,
      comment: "token of device register fcm"
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    is_push: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      comment: "seting on off push notifcation to device"
    },
    platform: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "android , ios , web"
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "employee , manager , web"
    },
    create_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    update_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    is_siren: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    sequelize,
    tableName: 'tb_user_device',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_user_device_account_code_idx",
        fields: [
          { name: "account_code" },
        ]
      },
      {
        name: "tb_user_device_pk",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
