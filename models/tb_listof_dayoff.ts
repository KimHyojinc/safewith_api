import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_client, tb_clientId } from './tb_client';

export interface tb_listof_dayoffAttributes {
  code: number;
  year?: string;
  month?: string;
  day?: number;
  client_code: number;
  comment?: string;
}

export type tb_listof_dayoffPk = "code";
export type tb_listof_dayoffId = tb_listof_dayoff[tb_listof_dayoffPk];
export type tb_listof_dayoffOptionalAttributes = "year" | "month" | "day" | "comment";
export type tb_listof_dayoffCreationAttributes = Optional<tb_listof_dayoffAttributes, tb_listof_dayoffOptionalAttributes>;

export class tb_listof_dayoff extends Model<tb_listof_dayoffAttributes, tb_listof_dayoffCreationAttributes> implements tb_listof_dayoffAttributes {
  code!: number;
  year?: string;
  month?: string;
  day?: number;
  client_code!: number;
  comment?: string;

  // tb_listof_dayoff belongsTo tb_client via client_code
  client_code_tb_client!: tb_client;
  getClient_code_tb_client!: Sequelize.BelongsToGetAssociationMixin<tb_client>;
  setClient_code_tb_client!: Sequelize.BelongsToSetAssociationMixin<tb_client, tb_clientId>;
  createClient_code_tb_client!: Sequelize.BelongsToCreateAssociationMixin<tb_client>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_listof_dayoff {
    return tb_listof_dayoff.init({
    code: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    year: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    month: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    day: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    client_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_client',
        key: 'code'
      }
    },
    comment: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_listof_dayoff',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_listof_dayoff_idx",
        fields: [
          { name: "code" },
        ]
      },
      {
        name: "tb_listof_dayoff_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
