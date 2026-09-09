import { create } from "zustand";
import type { CreateTaskDTO, Task, UpdateTaskDTO } from "../types/task.type";
import { createTask, getAllTasks, updateTask } from "../api/task.api";

interface TaskStore {
  tasks: Task[],
  isLoading: boolean,
  error: null | string,
  fetchTasks: () => Promise<void>,
  addTask: (data: CreateTaskDTO) => Promise<void>,
  updateTask: (id: string, data: UpdateTaskDTO) => Promise<void>
}

export const useTaskStore = create<TaskStore>((set, get) => ({
  tasks: [],
  isLoading: false,
  error: null,

  fetchTasks: async () => {
    set({isLoading: true, error: null});

    try {
      const data = await getAllTasks();
      set({ tasks: data, isLoading: false});
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Error al cargar las tareas";
      set({error: message, isLoading: false}); 
    }
  },

  addTask: async (data: CreateTaskDTO) => {
    set({isLoading: true, error: null});

    try {
      const newTask = await createTask(data);
      set({tasks: [newTask, ...get().tasks], isLoading: false})
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Error al crear la tarea";
      set({error: message, isLoading: false})
    }
  },

  updateTask: async (id: string, data: UpdateTaskDTO) => {
    set({isLoading: true, error: null});

    try {
      const updated = await updateTask(id, data);
      set({tasks: get().tasks.map((task) => (task.id === id ? updated : task)) ,isLoading: false})
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Error al actualizar la tarea";
      set({error: message, isLoading: false})
    }
  }
}))