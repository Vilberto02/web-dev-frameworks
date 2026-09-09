import type { CreateTaskDTO, Task, UpdateTaskDTO } from "../types/task.type";
import { apiClient } from "./client";

export const getAllTasks = () => apiClient<Task[]>("/tasks");

export const createTask = (data: CreateTaskDTO) => apiClient<Task>("/tasks", {
  method: "POST",
  body: JSON.stringify(data)
})

export const updateTask = (id:string, data: UpdateTaskDTO) => apiClient<Task>(`/tasks/${id}`, {
  method: "PATCH",
  body: JSON.stringify(data)
})