import { Response, Request, NextFunction } from "express"
import { AppError } from "./appErros"

export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
){

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
    })
  }

  if ((err as any).code == "23505"){
    return res.status(409).json({
      success: false,
      message: "Ya existe un registro con ese dato en la base de datos."
    })
  }

  console.error("Error en el servidor: ", err);

  return res.status(500).json({
    success: false,
    message: "Error interno en el servidor."
  })
}