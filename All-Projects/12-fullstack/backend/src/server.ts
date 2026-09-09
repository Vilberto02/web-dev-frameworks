// src/server.ts
import app from "./app.js";
import { ENV } from "./config/env.js";

const server = app.listen(ENV.PORT, () => {
  console.log(
    `[Server]: Servidor HTTP corriendo en http://localhost:${ENV.PORT}`,
  );
  console.log(`[Server]: Ambiente: ${ENV.NODE_ENV}`);
});

// Cierre ordenado del servidor (Graceful Shutdown)
process.on("SIGTERM", () => {
  console.log("[Server]: Senal SIGTERM recibida. Cerrando servidor...");
  server.close(() => {
    console.log("[Server]: Proceso finalizado limpiamente.");
  });
});
