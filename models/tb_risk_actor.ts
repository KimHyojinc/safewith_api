import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tb_account, tb_accountId } from './tb_account';
import type { tb_risk_work_contents, tb_risk_work_contentsId } from './tb_risk_work_contents';

export interface tb_risk_actorAttributes {
  code: number;
  content_code: number;
  actor_code: number;
  actor_type?: number;
}

export type tb_risk_actorPk = "code";
export type tb_risk_actorId = tb_risk_actor[tb_risk_actorPk];
export type tb_risk_actorOptionalAttributes = "actor_type";
export type tb_risk_actorCreationAttributes = Optional<tb_risk_actorAttributes, tb_risk_actorOptionalAttributes>;

export class tb_risk_actor extends Model<tb_risk_actorAttributes, tb_risk_actorCreationAttributes> implements tb_risk_actorAttributes {
  code!: number;
  content_code!: number;
  actor_code!: number;
  actor_type?: number;

  // tb_risk_actor belongsTo tb_account via actor_code
  actor_code_tb_account!: tb_account;
  getActor_code_tb_account!: Sequelize.BelongsToGetAssociationMixin<tb_account>;
  setActor_code_tb_account!: Sequelize.BelongsToSetAssociationMixin<tb_account, tb_accountId>;
  createActor_code_tb_account!: Sequelize.BelongsToCreateAssociationMixin<tb_account>;
  // tb_risk_actor belongsTo tb_risk_work_contents via content_code
  content_code_tb_risk_work_content!: tb_risk_work_contents;
  getContent_code_tb_risk_work_content!: Sequelize.BelongsToGetAssociationMixin<tb_risk_work_contents>;
  setContent_code_tb_risk_work_content!: Sequelize.BelongsToSetAssociationMixin<tb_risk_work_contents, tb_risk_work_contentsId>;
  createContent_code_tb_risk_work_content!: Sequelize.BelongsToCreateAssociationMixin<tb_risk_work_contents>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_risk_actor {
    return tb_risk_actor.init({
    code: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    content_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_risk_work_contents',
        key: 'code'
      }
    },
    actor_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tb_account',
        key: 'code'
      }
    },
    actor_type: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'tb_risk_actor',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_risk_actor_idx",
        fields: [
          { name: "content_code" },
          { name: "actor_type" },
        ]
      },
      {
        name: "tb_risk_actor_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
