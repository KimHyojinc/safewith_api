import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_file_upload, tb_file_uploadId } from './tb_file_upload';
import type { tb_user, tb_userId } from './tb_user';

export interface tb_bannerAttributes {
  id: number;
  created_at?: Date;
  is_enable?: boolean;
  updated_at?: Date;
  is_active?: boolean;
  priority?: number;
  title?: string;
  url?: string;
  author_id: number;
  banner_image_id?: number;
}

export type tb_bannerPk = "id";
export type tb_bannerId = tb_banner[tb_bannerPk];
export type tb_bannerOptionalAttributes = "created_at" | "is_enable" | "updated_at" | "is_active" | "priority" | "title" | "url" | "banner_image_id";
export type tb_bannerCreationAttributes = Optional<tb_bannerAttributes, tb_bannerOptionalAttributes>;

export class tb_banner extends Model<tb_bannerAttributes, tb_bannerCreationAttributes> implements tb_bannerAttributes {
  id!: number;
  created_at?: Date;
  is_enable?: boolean;
  updated_at?: Date;
  is_active?: boolean;
  priority?: number;
  title?: string;
  url?: string;
  author_id!: number;
  banner_image_id?: number;

  // tb_banner belongsTo tb_file_upload via banner_image_id
  banner_image!: tb_file_upload;
  getBanner_image!: Sequelize.BelongsToGetAssociationMixin<tb_file_upload>;
  setBanner_image!: Sequelize.BelongsToSetAssociationMixin<tb_file_upload, tb_file_uploadId>;
  createBanner_image!: Sequelize.BelongsToCreateAssociationMixin<tb_file_upload>;
  // tb_banner belongsTo tb_user via author_id
  author!: tb_user;
  getAuthor!: Sequelize.BelongsToGetAssociationMixin<tb_user>;
  setAuthor!: Sequelize.BelongsToSetAssociationMixin<tb_user, tb_userId>;
  createAuthor!: Sequelize.BelongsToCreateAssociationMixin<tb_user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_banner {
    return tb_banner.init({
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
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    author_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'tb_user',
        key: 'code'
      }
    },
    banner_image_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'tb_file_upload',
        key: 'id'
      },
      unique: "uks5c4lulg29trcuwoidccsl27q"
    }
  }, {
    sequelize,
    tableName: 'tb_banner',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_banner_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "uks5c4lulg29trcuwoidccsl27q",
        unique: true,
        fields: [
          { name: "banner_image_id" },
        ]
      },
    ]
  });
  }
}
