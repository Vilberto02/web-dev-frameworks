import { Router } from "express";
import { TaskController } from "../controllers/task.controller";
import { validateBody, validateParams } from "../middlewares/validate.middleware";
import { createTaskSchema, updateTaskSchema, uuidParamSchema } from "../schemas/task.schema";

const router = Router();
const controller = new TaskController();

// Ruta base
router.get("/", controller.getAll)
router.post("/", validateBody(createTaskSchema), controller.create);

router.patch("/:id", validateParams(uuidParamSchema), validateBody(updateTaskSchema), controller.update)

export default router;