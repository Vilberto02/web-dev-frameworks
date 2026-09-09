// src/controllers/project.controller.ts
import { Request, Response, NextFunction } from "express";
import { ProjectService } from "../services/project.service.js";

export class ProjectController {
  private projectService: ProjectService;

  constructor() {
    this.projectService = new ProjectService();
  }

  // GET /api/projects
  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const projects = await this.projectService.getAllProjects();
      return res.status(200).json({
        success: true,
        data: projects,
      });
    } catch (error) {
      next(error);
    }
  };

  // GET /api/projects/:id
  getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id as string;
      const project = await this.projectService.getProjectById(id);
      return res.status(200).json({
        success: true,
        data: project,
      });
    } catch (error) {
      next(error);
    }
  };

  // POST /api/projects
  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const newProject = await this.projectService.createProject(req.body);
      return res.status(201).json({
        success: true,
        message: "Proyecto creado exitosamente",
        data: newProject,
      });
    } catch (error) {
      next(error);
    }
  };

  // PATCH /api/projects/:id
  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id as string;
      const updated = await this.projectService.updateProject(id, req.body);
      return res.status(200).json({
        success: true,
        message: "Proyecto actualizado exitosamente",
        data: updated,
      });
    } catch (error) {
      next(error);
    }
  };

  // GET /api/projects/:id/metrics
  getMetrics = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id as string;
      const metrics = await this.projectService.getProjectMetrics(id);
      return res.status(200).json({
        success: true,
        data: metrics,
      });
    } catch (error) {
      next(error);
    }
  };

  // DELETE /api/projects/:id
  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id as string;
      await this.projectService.deleteProject(id);
      return res.status(200).json({
        success: true,
        message: "Proyecto eliminado exitosamente",
      });
    } catch (error) {
      next(error);
    }
  };
}
