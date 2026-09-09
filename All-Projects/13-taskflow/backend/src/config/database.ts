import { Pool, QueryResult, QueryResultRow } from "pg";
import { ENV } from "./env.js";

export const pool = new Pool({
  host: ENV.DB.HOST,
  port: ENV.DB.PORT,
  user: ENV.DB.USER,
  password: ENV.DB.PASSWORD,
  database: ENV.DB.NAME,
});

pool.on("connect", () => {
  console.log("Conexión establecida con el pool de PostgreSQL");
});

pool.on("error", (err) => {
  console.error("Error inesperado", err);
});

// Helper generico para consultas con tipado de retorno
export async function query<T extends QueryResultRow = any>(
  text: string,
  params?: any[],
): Promise<QueryResult<T>> {
  return pool.query<T>(text, params);
}