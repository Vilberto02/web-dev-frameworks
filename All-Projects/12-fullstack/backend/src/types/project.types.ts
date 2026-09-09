// src/types/project.types.ts

export type ProjectStatus = "ACTIVO" | "ARCHIVADO";

export interface Project {
  id: string;
  name: string;
  description: string | null;
  status: ProjectStatus;
  created_at: Date;
  updated_at: Date;
}

// Data Transfer Object para creacion (lo que envia el cliente)
export interface CreateProjectDTO {
  name: string;
  description?: string;
}

// Data Transfer Object para actualizacion parcial
export interface UpdateProjectDTO {
  name?: string;
  description?: string;
  status?: ProjectStatus;
}

// Informacion agregada de metricas
export interface ProjectMetrics {
  project_id: string;
  project_name: string;
  total_tasks: number;
  completed_tasks: number;
  in_progress_tasks: number;
  pending_tasks: number;
  completion_percentage: number;
}
