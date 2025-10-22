import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_project, tb_projectId } from './tb_project';
import type { tb_user, tb_userId } from './tb_user';

export interface tb_project_managerAttributes {
  id: number;
  created_at?: Date;
  is_enable?: boolean;
  updated_at?: Date;
  manager_id: number;
  project_id: number;
}

export type tb_project_managerPk = "id";
export type tb_project_managerId = tb_project_manager[tb_project_managerPk];
export type tb_project_managerOptionalAttributes = "created_at" | "is_enable" | "updated_at";
export type tb_project_managerCreationAttributes = Optional<tb_project_managerAttributes, tb_project_managerOptionalAttributes>;

export class tb_project_manager extends Model<tb_project_managerAttributes, tb_project_managerCreationAttributes> implements tb_project_managerAttributes {
  id!: number;
  created_at?: Date;
  is_enable?: boolean;
  updated_at?: Date;
  manager_id!: number;
  project_id!: number;

  // tb_project_manager belongsTo tb_project via project_id
  project!: tb_project;
  getProject!: Sequelize.BelongsToGetAssociationMixin<tb_project>;
  setProject!: Sequelize.BelongsToSetAssociationMixin<tb_project, tb_projectId>;
  createProject!: Sequelize.BelongsToCreateAssociationMixin<tb_project>;
  // tb_project_manager belongsTo tb_user via manager_id
  manager!: tb_user;
  getManager!: Sequelize.BelongsToGetAssociationMixin<tb_user>;
  setManager!: Sequelize.BelongsToSetAssociationMixin<tb_user, tb_userId>;
  createManager!: Sequelize.BelongsToCreateAssociationMixin<tb_user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_project_manager {
    return tb_project_manager.init({
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
    manager_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'tb_user',
        key: 'code'
      }
    },
    project_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'tb_project',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'tb_project_manager',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_project_manager_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
