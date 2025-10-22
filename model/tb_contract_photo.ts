import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tb_contract_photoAttributes {
  code: number;
  account_code: number;
  contract_code: number;
  photo?: string;
}

export type tb_contract_photoOptionalAttributes = "photo";
export type tb_contract_photoCreationAttributes = Optional<tb_contract_photoAttributes, tb_contract_photoOptionalAttributes>;

export class tb_contract_photo extends Model<tb_contract_photoAttributes, tb_contract_photoCreationAttributes> implements tb_contract_photoAttributes {
  code!: number;
  account_code!: number;
  contract_code!: number;
  photo?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof tb_contract_photo {
    return tb_contract_photo.init({
    code: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    account_code: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    contract_code: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    photo: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_contract_photo',
    schema: 'public',
    timestamps: false
  });
  }
}
