import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tb_accountAttributes {
  code: number;
  name: string;
  id: string;
  pw: string;
  photo?: string;
  mobile: string;
  family_contact?: string;
  pno1?: string;
  pno2?: string;
  addr_doro?: string;
  addr_etc?: string;
  blood_code?: number;
  is_rh_min?: number;
  e_sign?: string;
  client_code?: number;
  auth_code?: number;
  last_site_code?: number;
  allowed_code?: number;
  permit_code?: number;
  permit_dt?: Date;
  state_code?: number;
  leave_dt?: Date;
  reg_dt?: Date;
  update_dt?: Date;
  is_enabled?: number;
  bank_code?: number;
  bank_num?: string;
  health_check_cycle?: number;
  illness_state?: number;
  illness_info?: string;
  admin_site_code?: number;
  face?: string;
  user_code?: number;
  is_bp_doctor_note?: number;
  bp_doctor_note?: string;
  health_bp_check_cycle?: number;
  health_al_check_cycle?: number;
  is_face?: number;
  email?: string;
}

export type tb_accountPk = "code";
export type tb_accountId = tb_account[tb_accountPk];
export type tb_accountOptionalAttributes = "photo" | "family_contact" | "pno1" | "pno2" | "addr_doro" | "addr_etc" | "blood_code" | "is_rh_min" | "e_sign" | "client_code" | "auth_code" | "last_site_code" | "allowed_code" | "permit_code" | "permit_dt" | "state_code" | "leave_dt" | "reg_dt" | "update_dt" | "is_enabled" | "bank_code" | "bank_num" | "health_check_cycle" | "illness_state" | "illness_info" | "admin_site_code" | "face" | "user_code" | "is_bp_doctor_note" | "bp_doctor_note" | "health_bp_check_cycle" | "health_al_check_cycle" | "is_face" | "email";
export type tb_accountCreationAttributes = Optional<tb_accountAttributes, tb_accountOptionalAttributes>;

export class tb_account extends Model<tb_accountAttributes, tb_accountCreationAttributes> implements tb_accountAttributes {
  code!: number;
  name!: string;
  id!: string;
  pw!: string;
  photo?: string;
  mobile!: string;
  family_contact?: string;
  pno1?: string;
  pno2?: string;
  addr_doro?: string;
  addr_etc?: string;
  blood_code?: number;
  is_rh_min?: number;
  e_sign?: string;
  client_code?: number;
  auth_code?: number;
  last_site_code?: number;
  allowed_code?: number;
  permit_code?: number;
  permit_dt?: Date;
  state_code?: number;
  leave_dt?: Date;
  reg_dt?: Date;
  update_dt?: Date;
  is_enabled?: number;
  bank_code?: number;
  bank_num?: string;
  health_check_cycle?: number;
  illness_state?: number;
  illness_info?: string;
  admin_site_code?: number;
  face?: string;
  user_code?: number;
  is_bp_doctor_note?: number;
  bp_doctor_note?: string;
  health_bp_check_cycle?: number;
  health_al_check_cycle?: number;
  is_face?: number;
  email?: string;

  static initModel(sequelize: Sequelize.Sequelize): typeof tb_account {
    return tb_account.init({
    code: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    id: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    pw: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    photo: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: ""
    },
    mobile: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    family_contact: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    pno1: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    },
    pno2: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    },
    addr_doro: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    },
    addr_etc: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    },
    blood_code: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    is_rh_min: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    e_sign: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: ""
    },
    client_code: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    auth_code: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    last_site_code: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    allowed_code: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    permit_code: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    permit_dt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    state_code: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    leave_dt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    reg_dt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    update_dt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    is_enabled: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    bank_code: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    bank_num: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    },
    health_check_cycle: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    illness_state: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    illness_info: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    },
    admin_site_code: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    face: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    user_code: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tb_user',
        key: 'code'
      }
    },
    is_bp_doctor_note: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    bp_doctor_note: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    health_bp_check_cycle: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    health_al_check_cycle: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_face: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tb_account',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tb_account_idx",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "tb_account_pkey",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
