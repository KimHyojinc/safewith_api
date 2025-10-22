import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_board, tb_boardId } from './tb_board';

export interface tb_board_photoAttributes {
  code: number;
  board_code: number;
  photo: string;
}

export type tb_board_photoPk = "code";
export type tb_board_photoId = tb_board_photo[tb_board_photoPk];
export type tb_board_photoCreationAttributes = tb_board_photoAttributes;

export class tb_board_photo extends Model<tb_board_photoAttributes, tb_board_photoCreationAttributes> implements tb_board_photoAttributes {
  code!: number;
  board_code!: number;
  photo!: string;

  // tb_board_photo belongsTo tb_board via board_code
  board_code_tb_board!: tb_board;
  getBoard_code_tb_board!: Sequelize.BelongsToGetAssociationMixin<tb_board>;
  setBoard_code_tb_board!: Sequelize.BelongsToSetAssociationMixin<tb_board, tb_boardId>;
  createBoard_code_tb_board!: Sequelize.BelongsToCreateAssociationMixin<tb_board>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_board_photo {
    return tb_board_photo.init({
    code: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    board_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_board',
        key: 'code'
      }
    },
    photo: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tb_board_photo',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_board_photo_idx",
        fields: [
          { name: "board_code" },
        ]
      },
      {
        name: "tb_board_photo_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
