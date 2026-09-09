// src/routes/index.ts
import { Router } from "express";
import projectRoutes from "./project.routes.js";

const router = Router();

// Verificacion de salud de la API
router.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    status: "online",
    timestamp: new Date().toISOString(),
  });
});

// Registro de modulos
router.use("/projects", projectRoutes);

export default router;
