/*
Pasos
1. Importar dotenv
2. Configurar dotenv con su metodo config
3. Crear y exportar el objetivo ENV con las variables de entorno
*/
import dotenv from 'dotenv';

dotenv.config();

export const ENV = {
  PORT: Number(process.env.PORT) || 3000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DB: {
    HOST: process.env.DB_HOST || 'localhost',
    PORT: Number(process.env.DB_PORT) || 5432,
    USER: process.env.DB_USER || 'postgres',
    PASSWORD: process.env.DB_PASSWORD || 'postgres',
    NAME: process.env.DB_NAME || 'taskflow_db',
  },
};
