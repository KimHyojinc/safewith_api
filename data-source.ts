import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import { initModels } from './models/init-models';

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME || '',
  process.env.DB_USER || '',
  process.env.DB_PASSWORD || '',
  {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 5432,
    dialect: 'postgres',
    logging: false,
  }
);

var models = initModels(sequelize);

// ✅ 전역에서 한 번만 호출될 초기화 함수
async function initDb() {
  try {
    await sequelize.authenticate();
    console.log('✅ DB 연결 성공');
  } catch (error) {
    console.error('❌ DB 연결 실패:', error);
    throw error;
  }
}


export {sequelize, models, initDb};
