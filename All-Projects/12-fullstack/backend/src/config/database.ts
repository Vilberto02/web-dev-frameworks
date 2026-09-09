/*
Pasos:
1. Importar pool y querys de pg e ENV
2. Crear una instancia de pool con la configuración de ENV
3. Exportar la instancia de pool para usarla en otros archivos
4. Crear una función para conectarse a la base de datos y manejar  en funciones flecha
5. 
*/

import {Pool, QueryResult, QueryResultRow} from "pg";
import {ENV} from "./env.js";

export const pool = new Pool({
  host: ENV.DB.HOST,
  port: ENV.DB.PORT,
  user: ENV.DB.USER,
  password: ENV.DB.PASSWORD,
  database: ENV.DB.NAME,
})

pool.on('connect', () => {
  console.log("Conexión establecida con el pool de PostgreSQL");
})

pool.on('error', (err) => {
  console.error("Error inesperado", err);
})

// Helper generico para consultas con tipado de retorno
export async function query<T extends QueryResultRow = any>(
  text: string,
  params?: any[]
): Promise<QueryResult<T>> {
  return pool.query<T>(text, params);
}