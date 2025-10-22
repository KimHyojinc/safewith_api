import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_banner, tb_bannerCreationAttributes, tb_bannerId } from './tb_banner';
import type { tb_user, tb_userCreationAttributes, tb_userId } from './tb_user';

export interface tb_file_uploadAttributes {
  id: number;
  created_at?: Date;
  is_enable?: boolean;
  updated_at?: Date;
  file_data: any;
  file_name: string;
  file_type: string;
}

export type tb_file_uploadPk = "id";
export type tb_file_uploadId = tb_file_upload[tb_file_uploadPk];
export type tb_file_uploadOptionalAttributes = "created_at" | "is_enable" | "updated_at";
export type tb_file_uploadCreationAttributes = Optional<tb_file_uploadAttributes, tb_file_uploadOptionalAttributes>;

export class tb_file_upload extends Model<tb_file_uploadAttributes, tb_file_uploadCreationAttributes> implements tb_file_uploadAttributes {
  id!: number;
  created_at?: Date;
  is_enable?: boolean;
  updated_at?: Date;
  file_data!: any;
  file_name!: string;
  file_type!: string;

  // tb_file_upload hasOne tb_banner via banner_image_id
  tb_banner!: tb_banner;
  getTb_banner!: Sequelize.HasOneGetAssociationMixin<tb_banner>;
  setTb_banner!: Sequelize.HasOneSetAssociationMixin<tb_banner, tb_bannerId>;
  createTb_banner!: Sequelize.HasOneCreateAssociationMixin<tb_banner>;
  // tb_file_upload hasOne tb_user via avatar_id
  tb_user!: tb_user;
  getTb_user!: Sequelize.HasOneGetAssociationMixin<tb_user>;
  setTb_user!: Sequelize.HasOneSetAssociationMixin<tb_user, tb_userId>;
  createTb_user!: Sequelize.HasOneCreateAssociationMixin<tb_user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_file_upload {
    return tb_file_upload.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    is_enable: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    file_data: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    file_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    file_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tb_file_upload',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_file_upload_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
