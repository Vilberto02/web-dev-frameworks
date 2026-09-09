export abstract class AppError extends Error {
  abstract readonly statusCode: number;

  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class NotFoundError extends AppError {
  readonly statusCode = 404;
  constructor(message: string = "Recurso no encontrado") {
    super(message);
  }
}

export class BadRequestError extends AppError {
  readonly statusCode = 400;
  constructor(message: string = "Solicitud invalida") {
    super(message);
  }
}

export class ConflictError extends AppError {
  readonly statusCode = 409;
  constructor(message: string = "Conflicto de recursos") {
    super(message);
  }
}
