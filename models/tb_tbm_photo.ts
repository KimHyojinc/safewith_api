import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_tbm, tb_tbmId } from './tb_tbm';

export interface tb_tbm_photoAttributes {
  code: number;
  tbm_code: number;
  photo: string;
}

export type tb_tbm_photoPk = "code";
export type tb_tbm_photoId = tb_tbm_photo[tb_tbm_photoPk];
export type tb_tbm_photoCreationAttributes = tb_tbm_photoAttributes;

export class tb_tbm_photo extends Model<tb_tbm_photoAttributes, tb_tbm_photoCreationAttributes> implements tb_tbm_photoAttributes {
  code!: number;
  tbm_code!: number;
  photo!: string;

  // tb_tbm_photo belongsTo tb_tbm via tbm_code
  tbm_code_tb_tbm!: tb_tbm;
  getTbm_code_tb_tbm!: Sequelize.BelongsToGetAssociationMixin<tb_tbm>;
  setTbm_code_tb_tbm!: Sequelize.BelongsToSetAssociationMixin<tb_tbm, tb_tbmId>;
  createTbm_code_tb_tbm!: Sequelize.BelongsToCreateAssociationMixin<tb_tbm>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_tbm_photo {
    return tb_tbm_photo.init({
    code: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tbm_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_tbm',
        key: 'code'
      }
    },
    photo: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tb_tbm_photo',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_tbm_photo_idx",
        fields: [
          { name: "tbm_code" },
        ]
      },
      {
        name: "tb_tbm_photo_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
