import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tb_holidayAttributes {
  code: number;
  year?: string;
  month?: string;
  days?: number;
  comment?: string;
}

export type tb_holidayOptionalAttributes = "year" | "month" | "days" | "comment";
export type tb_holidayCreationAttributes = Optional<tb_holidayAttributes, tb_holidayOptionalAttributes>;

export class tb_holiday extends Model<tb_holidayAttributes, tb_holidayCreationAttributes> implements tb_holidayAttributes {
  code!: number;
  year?: string;
  month?: string;
  days?: number;
  comment?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof tb_holiday {
    return tb_holiday.init({
    code: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    year: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    month: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    days: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    comment: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_holiday',
    schema: 'public',
    timestamps: false
  });
  }
}
