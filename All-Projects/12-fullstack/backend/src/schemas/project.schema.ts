import { z } from "zod";

export const createProjectSchema = z.object({
  name: z
    .string({ message: "El nombre es obligatorio" })
    .trim()
    .min(3, "El nombre debe tener al menos 3 caracteres")
    .max(80, "El nombre no puede superar los 80 caracteres"),
  description: z
    .string()
    .trim()
    .max(500, "La descripcion no puede superar los 500 caracteres")
    .optional(),
});

export const updateProjectSchema = z.object({
  name: z.string().trim().min(3).max(80).optional(),
  description: z.string().trim().max(500).optional(),
  status: z
    .enum(["ACTIVO", "ARCHIVADO"] as const, {
      message: "El estado debe ser ACTIVO o ARCHIVADO",
    })
    .optional(),
});

// Validador de formato UUID para params
export const uuidParamSchema = z.object({
  id: z.string().uuid("El parametro ID debe ser un UUID valido"),
});
