// src/routes/project.routes.ts
import { Router } from "express";
import { ProjectController } from "../controllers/project.controller.js";
import {
  validateBody,
  validateParams,
} from "../middlewares/validate.middleware.js";
import {
  createProjectSchema,
  updateProjectSchema,
  uuidParamSchema,
} from "../schemas/project.schema.js";

const router = Router();
const controller = new ProjectController();

// Rutas base: /api/projects
router.get("/", controller.getAll);
router.post("/", validateBody(createProjectSchema), controller.create);

// Rutas por ID
router.get("/:id", validateParams(uuidParamSchema), controller.getById);
router.patch(
  "/:id",
  validateParams(uuidParamSchema),
  validateBody(updateProjectSchema),
  controller.update,
);
router.delete("/:id", validateParams(uuidParamSchema), controller.delete);
router.get(
  "/:id/metrics",
  validateParams(uuidParamSchema),
  controller.getMetrics,
);

export default router;
