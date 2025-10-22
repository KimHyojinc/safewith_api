import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface test_tableAttributes {
  uid: number;
  name?: string;
}

export type test_tablePk = "uid";
export type test_tableId = test_table[test_tablePk];
export type test_tableOptionalAttributes = "uid" | "name";
export type test_tableCreationAttributes = Optional<test_tableAttributes, test_tableOptionalAttributes>;

export class test_table extends Model<test_tableAttributes, test_tableCreationAttributes> implements test_tableAttributes {
  uid!: number;
  name?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof test_table {
    return test_table.init({
    uid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'test_table',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "test_table_pkey",
        unique: true,
        fields: [
          { name: "uid" },
        ]
      },
    ]
  });
  }
}
