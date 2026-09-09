import { z } from "zod";

export const createTaskSchema = z.object({
  titulo: z.string({message: "El titulo es obligatorio."}).trim().min(3, "El titulo debe tener al menos 3 caracteres"),
  descripcion: z.string().trim().optional(),
  autor: z.string({message: "El autor es obligatorio."}).trim(),
  prioridad: z.enum(["Baja", "Media", "Alta"] as const),
  estado: z.enum(["Pendiente", "En progreso", "Resuelto"] as const),
})

export const updateTaskSchema = z.object({
  titulo: z
    .string({ message: "El titulo es obligatorio." })
    .trim()
    .min(3, "El titulo debe tener al menos 3 caracteres"),
  descripcion: z.string().trim().optional(),
  prioridad: z.enum(["Baja", "Media", "Alta"] as const),
  estado: z.enum(["Pendiente", "En progreso", "Resuelto"] as const),
});

export const uuidParamSchema = z.object({
  id: z.string().uuid("El parametro ID debe de ser un UUID válido")
})