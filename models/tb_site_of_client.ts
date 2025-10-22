import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_client, tb_clientId } from './tb_client';
import type { tb_site, tb_siteId } from './tb_site';

export interface tb_site_of_clientAttributes {
  code: number;
  client_code: number;
  site_code: number;
  is_partner?: string;
}

export type tb_site_of_clientPk = "code";
export type tb_site_of_clientId = tb_site_of_client[tb_site_of_clientPk];
export type tb_site_of_clientOptionalAttributes = "is_partner";
export type tb_site_of_clientCreationAttributes = Optional<tb_site_of_clientAttributes, tb_site_of_clientOptionalAttributes>;

export class tb_site_of_client extends Model<tb_site_of_clientAttributes, tb_site_of_clientCreationAttributes> implements tb_site_of_clientAttributes {
  code!: number;
  client_code!: number;
  site_code!: number;
  is_partner?: string;

  // tb_site_of_client belongsTo tb_client via client_code
  client_code_tb_client!: tb_client;
  getClient_code_tb_client!: Sequelize.BelongsToGetAssociationMixin<tb_client>;
  setClient_code_tb_client!: Sequelize.BelongsToSetAssociationMixin<tb_client, tb_clientId>;
  createClient_code_tb_client!: Sequelize.BelongsToCreateAssociationMixin<tb_client>;
  // tb_site_of_client belongsTo tb_site via site_code
  site_code_tb_site!: tb_site;
  getSite_code_tb_site!: Sequelize.BelongsToGetAssociationMixin<tb_site>;
  setSite_code_tb_site!: Sequelize.BelongsToSetAssociationMixin<tb_site, tb_siteId>;
  createSite_code_tb_site!: Sequelize.BelongsToCreateAssociationMixin<tb_site>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_site_of_client {
    return tb_site_of_client.init({
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
    site_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_site',
        key: 'code'
      }
    },
    is_partner: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_site_of_client',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_site_of_client_idx",
        fields: [
          { name: "client_code" },
          { name: "site_code" },
        ]
      },
      {
        name: "tb_site_of_client_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
