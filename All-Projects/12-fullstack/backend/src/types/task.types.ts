// src/types/task.types.ts

export type TaskPriority = "BAJA" | "MEDIA" | "ALTA";
export type TaskStatus = "PENDIENTE" | "EN_PROCESO" | "COMPLETADA";

export interface Task {
  id: string;
  project_id: string;
  title: string;
  description: string | null;
  priority: TaskPriority;
  status: TaskStatus;
  due_date: string | null;
  completed_at: Date | null;
  created_at: Date;
  updated_at: Date;
}

export interface CreateTaskDTO {
  project_id: string;
  title: string;
  description?: string;
  priority?: TaskPriority;
  due_date?: string;
  tag_ids?: string[];
}
