import { create } from "zustand";
import {
  getProjects,
  createProject,
  updateProject as apiUpdateProject,
  deleteProject as apiDeleteProject,
} from "../api/projects.api";
import type {
  Project,
  CreateProjectDTO,
  UpdateProjectDTO,
} from "../types/project.types";

interface ProjectStore {
  projects: Project[];
  isLoading: boolean;
  error: string | null;
  fetchProjects: () => Promise<void>;
  addProject: (data: CreateProjectDTO) => Promise<void>;
  updateProject: (id: string, data: UpdateProjectDTO) => Promise<void>;
  deleteProject: (id: string) => Promise<void>;
}

export const useProjectStore = create<ProjectStore>((set, get) => ({
  projects: [],
  isLoading: false,
  error: null,

  fetchProjects: async () => {
    set({ isLoading: true, error: null });
    try {
      const data = await getProjects();
      set({ projects: data, isLoading: false });
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Error al cargar los proyectos";
      set({ error: message, isLoading: false });
    }
  },

  addProject: async (data: CreateProjectDTO) => {
    set({ isLoading: true, error: null });
    try {
      const newProject = await createProject(data);
      set({
        projects: [newProject, ...get().projects],
        isLoading: false,
      });
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Error al crear el proyecto";
      set({ error: message, isLoading: false });
      throw err;
    }
  },

  updateProject: async (id: string, data: UpdateProjectDTO) => {
    try {
      const updated = await apiUpdateProject(id, data);
      set({
        projects: get().projects.map((p) => (p.id === id ? updated : p)),
      });
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Error al actualizar el proyecto";
      set({ error: message });
      throw err;
    }
  },

  deleteProject: async (id: string) => {
    try {
      await apiDeleteProject(id);
      set({
        projects: get().projects.filter((p) => p.id !== id),
      });
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Error al eliminar el proyecto";
      set({ error: message });
      throw err;
    }
  },
}));
