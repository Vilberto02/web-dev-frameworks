import app from "./app"
import { ENV } from "./config/env"

const server = app.listen(ENV.PORT, () => {
  console.log(`Servidor HTTP corriendo en http://localhost:${ENV.PORT}`);
})

// Cierre ordenado del servidor (Graceful Shutdown)
process.on("SIGTERM", () => {
  console.log("[Server]: Senal SIGTERM recibida. Cerrando servidor...");
  server.close(() => {
    console.log("[Server]: Proceso finalizado limpiamente.");
  });
});