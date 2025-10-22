import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_risk_action, tb_risk_actionId } from './tb_risk_action';
import type { tb_risk_actor, tb_risk_actorId } from './tb_risk_actor';
import type { tb_risk_work, tb_risk_workId } from './tb_risk_work';

export interface tb_risk_work_contentsAttributes {
  code: number;
  work_code: number;
  factor: string;
  action: string;
  level?: number;
  level_adjust?: number;
}

export type tb_risk_work_contentsPk = "code";
export type tb_risk_work_contentsId = tb_risk_work_contents[tb_risk_work_contentsPk];
export type tb_risk_work_contentsOptionalAttributes = "level" | "level_adjust";
export type tb_risk_work_contentsCreationAttributes = Optional<tb_risk_work_contentsAttributes, tb_risk_work_contentsOptionalAttributes>;

export class tb_risk_work_contents extends Model<tb_risk_work_contentsAttributes, tb_risk_work_contentsCreationAttributes> implements tb_risk_work_contentsAttributes {
  code!: number;
  work_code!: number;
  factor!: string;
  action!: string;
  level?: number;
  level_adjust?: number;

  // tb_risk_work_contents belongsTo tb_risk_work via work_code
  work_code_tb_risk_work!: tb_risk_work;
  getWork_code_tb_risk_work!: Sequelize.BelongsToGetAssociationMixin<tb_risk_work>;
  setWork_code_tb_risk_work!: Sequelize.BelongsToSetAssociationMixin<tb_risk_work, tb_risk_workId>;
  createWork_code_tb_risk_work!: Sequelize.BelongsToCreateAssociationMixin<tb_risk_work>;
  // tb_risk_work_contents hasMany tb_risk_action via content_code
  tb_risk_actions!: tb_risk_action[];
  getTb_risk_actions!: Sequelize.HasManyGetAssociationsMixin<tb_risk_action>;
  setTb_risk_actions!: Sequelize.HasManySetAssociationsMixin<tb_risk_action, tb_risk_actionId>;
  addTb_risk_action!: Sequelize.HasManyAddAssociationMixin<tb_risk_action, tb_risk_actionId>;
  addTb_risk_actions!: Sequelize.HasManyAddAssociationsMixin<tb_risk_action, tb_risk_actionId>;
  createTb_risk_action!: Sequelize.HasManyCreateAssociationMixin<tb_risk_action>;
  removeTb_risk_action!: Sequelize.HasManyRemoveAssociationMixin<tb_risk_action, tb_risk_actionId>;
  removeTb_risk_actions!: Sequelize.HasManyRemoveAssociationsMixin<tb_risk_action, tb_risk_actionId>;
  hasTb_risk_action!: Sequelize.HasManyHasAssociationMixin<tb_risk_action, tb_risk_actionId>;
  hasTb_risk_actions!: Sequelize.HasManyHasAssociationsMixin<tb_risk_action, tb_risk_actionId>;
  countTb_risk_actions!: Sequelize.HasManyCountAssociationsMixin;
  // tb_risk_work_contents hasMany tb_risk_actor via content_code
  tb_risk_actors!: tb_risk_actor[];
  getTb_risk_actors!: Sequelize.HasManyGetAssociationsMixin<tb_risk_actor>;
  setTb_risk_actors!: Sequelize.HasManySetAssociationsMixin<tb_risk_actor, tb_risk_actorId>;
  addTb_risk_actor!: Sequelize.HasManyAddAssociationMixin<tb_risk_actor, tb_risk_actorId>;
  addTb_risk_actors!: Sequelize.HasManyAddAssociationsMixin<tb_risk_actor, tb_risk_actorId>;
  createTb_risk_actor!: Sequelize.HasManyCreateAssociationMixin<tb_risk_actor>;
  removeTb_risk_actor!: Sequelize.HasManyRemoveAssociationMixin<tb_risk_actor, tb_risk_actorId>;
  removeTb_risk_actors!: Sequelize.HasManyRemoveAssociationsMixin<tb_risk_actor, tb_risk_actorId>;
  hasTb_risk_actor!: Sequelize.HasManyHasAssociationMixin<tb_risk_actor, tb_risk_actorId>;
  hasTb_risk_actors!: Sequelize.HasManyHasAssociationsMixin<tb_risk_actor, tb_risk_actorId>;
  countTb_risk_actors!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_risk_work_contents {
    return tb_risk_work_contents.init({
    code: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    work_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_risk_work',
        key: 'code'
      }
    },
    factor: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    action: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    level_adjust: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'tb_risk_work_contents',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_risk_work_contents_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
