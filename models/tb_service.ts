import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_client, tb_clientId } from './tb_client';

export interface tb_serviceAttributes {
  code: number;
  client_code: number;
  safewith?: string;
  psms?: string;
  iot?: string;
  reg_dt?: Date;
  update_dt?: Date;
}

export type tb_servicePk = "code";
export type tb_serviceId = tb_service[tb_servicePk];
export type tb_serviceOptionalAttributes = "safewith" | "psms" | "iot" | "reg_dt" | "update_dt";
export type tb_serviceCreationAttributes = Optional<tb_serviceAttributes, tb_serviceOptionalAttributes>;

export class tb_service extends Model<tb_serviceAttributes, tb_serviceCreationAttributes> implements tb_serviceAttributes {
  code!: number;
  client_code!: number;
  safewith?: string;
  psms?: string;
  iot?: string;
  reg_dt?: Date;
  update_dt?: Date;

  // tb_service belongsTo tb_client via client_code
  client_code_tb_client!: tb_client;
  getClient_code_tb_client!: Sequelize.BelongsToGetAssociationMixin<tb_client>;
  setClient_code_tb_client!: Sequelize.BelongsToSetAssociationMixin<tb_client, tb_clientId>;
  createClient_code_tb_client!: Sequelize.BelongsToCreateAssociationMixin<tb_client>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_service {
    return tb_service.init({
    code: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    client_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_client',
        key: 'code'
      }
    },
    safewith: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    psms: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    iot: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    reg_dt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    update_dt: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_service',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_service_idx",
        fields: [
          { name: "client_code" },
        ]
      },
      {
        name: "tb_service_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
