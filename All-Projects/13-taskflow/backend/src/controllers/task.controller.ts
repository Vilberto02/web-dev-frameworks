import { Request, Response, NextFunction } from "express";
import { TaskService } from "../services/task.service";
import { CreateTaskDTO } from "../types/task.types";

export class TaskController {
  private taskService: TaskService;

  constructor() {
    this.taskService = new TaskService();
  }

  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const tasks = await this.taskService.getAllTasks();
      return res.status(200).json({
        success: true,
        data: tasks,
      });
    } catch (error) {
      next(error);
    }
  };

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const newTask = await this.taskService.createTask(req.body);
      return res.status(201).json({
        success: true,
        message: "Tarea creada correctamente.",
        data: newTask,
      });
    } catch (error) {
      next(error);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id as string;
      const updated = await this.taskService.updateTask(id, req.body);
      return res.status(200).json({
        success: true,
        message: "Tarea actualizada correctamente.",
        data: updated,
      })
    } catch (error) {
      next(error)
    }
  };
}