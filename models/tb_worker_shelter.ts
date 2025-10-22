import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_account, tb_accountId } from './tb_account';
import type { tb_shelter, tb_shelterId } from './tb_shelter';
import type { tb_site, tb_siteId } from './tb_site';

export interface tb_worker_shelterAttributes {
  code: number;
  site_code: number;
  shelter_code: number;
  worker_code: number;
  reg_dt?: Date;
}

export type tb_worker_shelterPk = "code";
export type tb_worker_shelterId = tb_worker_shelter[tb_worker_shelterPk];
export type tb_worker_shelterOptionalAttributes = "reg_dt";
export type tb_worker_shelterCreationAttributes = Optional<tb_worker_shelterAttributes, tb_worker_shelterOptionalAttributes>;

export class tb_worker_shelter extends Model<tb_worker_shelterAttributes, tb_worker_shelterCreationAttributes> implements tb_worker_shelterAttributes {
  code!: number;
  site_code!: number;
  shelter_code!: number;
  worker_code!: number;
  reg_dt?: Date;

  // tb_worker_shelter belongsTo tb_account via worker_code
  worker_code_tb_account!: tb_account;
  getWorker_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setWorker_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createWorker_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_worker_shelter belongsTo tb_shelter via shelter_code
  shelter_code_tb_shelter!: tb_shelter;
  getShelter_code_tb_shelter!: Sequelize.BelongsToGetAssociationMixin<tb_shelter>;
  setShelter_code_tb_shelter!: Sequelize.BelongsToSetAssociationMixin<tb_shelter, tb_shelterId>;
  createShelter_code_tb_shelter!: Sequelize.BelongsToCreateAssociationMixin<tb_shelter>;
  // tb_worker_shelter belongsTo tb_site via site_code
  site_code_tb_site!: tb_site;
  getSite_code_tb_site!: Sequelize.BelongsToGetAssociationMixin<tb_site>;
  setSite_code_tb_site!: Sequelize.BelongsToSetAssociationMixin<tb_site, tb_siteId>;
  createSite_code_tb_site!: Sequelize.BelongsToCreateAssociationMixin<tb_site>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_worker_shelter {
    return tb_worker_shelter.init({
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
    shelter_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_shelter',
        key: 'code'
      }
    },
    worker_code: {
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
    }
  }, {
    sequelize,
    tableName: 'tb_worker_shelter',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_worker_shelter_idx",
        fields: [
          { name: "site_code" },
          { name: "shelter_code" },
          { name: "worker_code" },
          { name: "reg_dt" },
        ]
      },
      {
        name: "tb_worker_shelter_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
