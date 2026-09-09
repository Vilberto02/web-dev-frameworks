import { Router } from "express";
import taskRoutes from "./task.routes"

const router = Router();

router.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    status: "online",
    timestamp: new Date().toISOString()
  })
})


router.use("/tasks", taskRoutes);

export default router;