// src/middlewares/errorHandler.middleware.ts
import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/appErrors.js";

export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  // 1. Error de negocio controlado (AppError: 400, 404, 409)
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  }

  // 2. Error nativo de PostgreSQL (ej. codigo 23505 = violacion de unicidad)
  if ((err as any).code === "23505") {
    return res.status(409).json({
      success: false,
      message:
        "Ya existe un registro con este identificador unico en la base de datos",
    });
  }

  // 3. Error no esperado del sistema (Bug o caida de base de datos)
  console.error("[Unhandled Internal Error]:", err);

  return res.status(500).json({
    success: false,
    message: "Error interno del servidor. Por favor intenta mas tarde.",
  });
}
