import { Pool } from "pg";
import fs from "node:fs";
import path from "node:path";
import { ENV } from "./env";

async function initDatabase() {
  console.log("[initDb]: Iniciando proceso de configuración de la base de datos...");

  // 1. Conexión a la base 'postgres' para verificar/crear tasks_db
  const adminPool = new Pool({
    host: ENV.DB.HOST,
    port: ENV.DB.PORT,
    user: ENV.DB.USER,
    password: ENV.DB.PASSWORD,
    database: "postgres",
  });

  try {
    const checkDb = await adminPool.query(
      "SELECT 1 FROM pg_database WHERE datname = $1",
      [ENV.DB.NAME]
    );

    if (checkDb.rows.length === 0) {
      console.log(`[initDb]: Creando base de datos '${ENV.DB.NAME}'...`);
      await adminPool.query(`CREATE DATABASE "${ENV.DB.NAME}";`);
      console.log(`[initDb]: Base de datos '${ENV.DB.NAME}' creada con éxito.`);
    } else {
      console.log(`[initDb]: La base de datos '${ENV.DB.NAME}' ya existe.`);
    }
  } catch (error) {
    console.error("[initDb]: Error al verificar o crear la base de datos:", error);
    throw error;
  } finally {
    await adminPool.end();
  }

  // 2. Conexión a tasks_db para crear la tabla tasks
  const appPool = new Pool({
    host: ENV.DB.HOST,
    port: ENV.DB.PORT,
    user: ENV.DB.USER,
    password: ENV.DB.PASSWORD,
    database: ENV.DB.NAME,
  });

  try {
    const schemaPath = path.resolve(__dirname, "../../database/schema.sql");
    const schemaSql = fs.readFileSync(schemaPath, "utf-8");

    console.log("[initDb]: Ejecutando DDL desde schema.sql...");
    await appPool.query(schemaSql);
    console.log("[initDb]: Tablas e índices creados correctamente en la base de datos.");
  } catch (error) {
    console.error("[initDb]: Error al ejecutar schema.sql:", error);
    throw error;
  } finally {
    await appPool.end();
  }

  console.log("[initDb]: Proceso finalizado exitosamente.");
}

initDatabase().catch((err) => {
  console.error("[initDb]: Falló la inicialización de la base de datos:", err);
  process.exit(1);
});
