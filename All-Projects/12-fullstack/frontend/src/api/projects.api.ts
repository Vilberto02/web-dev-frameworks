import { apiClient } from "./client";
import type {
  Project,
  ProjectMetrics,
  CreateProjectDTO,
  UpdateProjectDTO,
} from "../types/project.types";

export const getProjects = () => apiClient<Project[]>("/projects");

export const getProjectMetrics = (id: string) =>
  apiClient<ProjectMetrics>(`/projects/${id}/metrics`);

export const createProject = (data: CreateProjectDTO) =>
  apiClient<Project>("/projects", {
    method: "POST",
    body: JSON.stringify(data),
  });

export const updateProject = (id: string, data: UpdateProjectDTO) =>
  apiClient<Project>(`/projects/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
  });

export const deleteProject = (id: string) =>
  apiClient<{ success: boolean; message: string }>(`/projects/${id}`, {
    method: "DELETE",
  });
