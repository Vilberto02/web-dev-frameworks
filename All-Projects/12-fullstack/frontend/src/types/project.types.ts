export type ProjectStatus = "ACTIVO" | "ARCHIVADO";

export const PROJECT_STATUS_OPTIONS: { value: ProjectStatus; label: string }[] = [
  { value: "ACTIVO", label: "Activo" },
  { value: "ARCHIVADO", label: "Archivado" },
];

export interface Project {
  id: string;
  name: string;
  description: string | null;
  status: ProjectStatus;
  created_at: string;
  updated_at: string;
}

export interface ProjectMetrics {
  project_id: string;
  project_name: string;
  total_tasks: number;
  completed_tasks: number;
  in_progress_tasks: number;
  pending_tasks: number;
  completion_percentage: number;
}

export interface CreateProjectDTO {
  name: string;
  description?: string;
}

export interface UpdateProjectDTO {
  name?: string;
  description?: string;
  status?: ProjectStatus;
}
