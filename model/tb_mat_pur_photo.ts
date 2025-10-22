import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_mat_pur, tb_mat_purId } from './tb_mat_pur';

export interface tb_mat_pur_photoAttributes {
  code: number;
  pur_code: number;
  photo: string;
}

export type tb_mat_pur_photoPk = "code";
export type tb_mat_pur_photoId = tb_mat_pur_photo[tb_mat_pur_photoPk];
export type tb_mat_pur_photoCreationAttributes = tb_mat_pur_photoAttributes;

export class tb_mat_pur_photo extends Model<tb_mat_pur_photoAttributes, tb_mat_pur_photoCreationAttributes> implements tb_mat_pur_photoAttributes {
  code!: number;
  pur_code!: number;
  photo!: string;

  // tb_mat_pur_photo belongsTo tb_mat_pur via pur_code
  pur_code_tb_mat_pur!: tb_mat_pur;
  getPur_code_tb_mat_pur!: Sequelize.BelongsToGetAssociationMixin<tb_mat_pur>;
  setPur_code_tb_mat_pur!: Sequelize.BelongsToSetAssociationMixin<tb_mat_pur, tb_mat_purId>;
  createPur_code_tb_mat_pur!: Sequelize.BelongsToCreateAssociationMixin<tb_mat_pur>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_mat_pur_photo {
    return tb_mat_pur_photo.init({
    code: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pur_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_mat_pur',
        key: 'code'
      }
    },
    photo: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tb_mat_pur_photo',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_mat_pur_photo_idx",
        fields: [
          { name: "pur_code" },
        ]
      },
      {
        name: "tb_mat_pur_photo_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
