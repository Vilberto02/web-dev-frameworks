export type TaskStatus = "Pendiente" | "En progreso" | "Resuelto";
export type TaskPriority = "Baja" | "Media" | "Alta";

export interface Task {
  id: string;
  titulo: string;
  descripcion: string | null;
  autor: string;
  estado: TaskStatus;
  prioridad: TaskPriority;
  fecha_creacion: Date;
}

export interface CreateTaskDTO {
  titulo: string;
  descripcion?: string;
  autor: string;
  estado: TaskStatus;
  prioridad: TaskPriority;
}

export interface UpdateTaskDTO {
  titulo?: string;
  descripcion?: string;
  estado?: TaskStatus;
  prioridad?: TaskPriority;
}
