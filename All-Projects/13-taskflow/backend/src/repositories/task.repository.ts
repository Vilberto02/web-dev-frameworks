import { query } from "../config/database"
import {
  Task,
  CreateTaskDTO,
  UpdateTaskDTO
} from "../types/task.types"

export class TaskRepository {

  async findAll(): Promise<Task[]> {
    const text = `
      SELECT id, titulo, descripcion, autor, prioridad, estado, fecha_creacion FROM tasks
      ORDER BY fecha_creacion DESC;
    `;
    const result = await query<Task>(text);
    return result.rows;
  }

  async create(data: CreateTaskDTO): Promise<Task> {
    const text = `
      INSERT INTO tasks(titulo, descripcion, autor, prioridad, estado)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id, titulo, descripcion, autor, prioridad, estado, fecha_creacion;
    `;
    const values = [
      data.titulo.trim(),
      data.descripcion ? data.descripcion.trim() : null,
      data.autor.trim(),
      data.prioridad,
      data.estado
    ];
    const result = await query<Task>(text, values);
    return result.rows[0];
  }

  async update(id: string, data: UpdateTaskDTO): Promise<Task | null> {
    const text = `
      UPDATE tasks
      SET 
        titulo = COALESCE($1, titulo),
        descripcion = COALESCE($2, descripcion),
        prioridad = COALESCE($3, prioridad),
        estado = COALESCE($4, estado)
      WHERE id = $5
      RETURNING id, titulo, descripcion, autor, prioridad, estado, fecha_creacion;
    `;
    const values = [
      data.titulo !== undefined ? data.titulo.trim() : null,
      data.descripcion !== undefined ? (data.descripcion ? data.descripcion.trim() : null) : null,
      data.prioridad !== undefined ? data.prioridad : null,
      data.estado !== undefined ? data.estado : null,
      id
    ];
    const result = await query<Task>(text, values);
    return result.rows[0] || null;
  }
}