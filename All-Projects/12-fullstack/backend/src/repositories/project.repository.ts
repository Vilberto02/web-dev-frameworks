// src/repositories/project.repository.ts
import { query } from "../config/database.js";
import {
  Project,
  CreateProjectDTO,
  UpdateProjectDTO,
  ProjectMetrics,
} from "../types/project.types.js";

export class ProjectRepository {
  // 1. Obtener todos los proyectos
  async findAll(): Promise<Project[]> {
    const text = `
      SELECT id, name, description, status, created_at, updated_at
      FROM projects
      ORDER BY created_at DESC;
    `;
    const result = await query<Project>(text);
    return result.rows;
  }

  // 2. Buscar por ID
  async findById(id: string): Promise<Project | null> {
    const text = `
      SELECT id, name, description, status, created_at, updated_at
      FROM projects
      WHERE id = $1;
    `;
    const result = await query<Project>(text, [id]);
    return result.rows[0] || null;
  }

  // 3. Buscar por Nombre (util para validar duplicados antes de insertar)
  async findByName(name: string): Promise<Project | null> {
    const text = `
      SELECT id, name, description, status, created_at, updated_at
      FROM projects
      WHERE LOWER(name) = LOWER($1);
    `;
    const result = await query<Project>(text, [name]);
    return result.rows[0] || null;
  }

  // 4. Crear Proyecto
  async create(data: CreateProjectDTO): Promise<Project> {
    const text = `
      INSERT INTO projects (name, description)
      VALUES ($1, $2)
      RETURNING id, name, description, status, created_at, updated_at;
    `;
    const values = [
      data.name.trim(),
      data.description ? data.description.trim() : null,
    ];
    const result = await query<Project>(text, values);
    return result.rows[0];
  }

  // 5. Actualizar Proyecto
  async update(id: string, data: UpdateProjectDTO): Promise<Project | null> {
    const text = `
      UPDATE projects
      SET 
        name = COALESCE($1, name),
        description = COALESCE($2, description),
        status = COALESCE($3, status),
        updated_at = CURRENT_TIMESTAMP
      WHERE id = $4
      RETURNING id, name, description, status, created_at, updated_at;
    `;
    const values = [data.name, data.description, data.status, id];
    const result = await query<Project>(text, values);
    return result.rows[0] || null;
  }

  // 6. Consulta Avanzada: Metricas calculadas en PostgreSQL
  async getMetrics(id: string): Promise<ProjectMetrics | null> {
    const text = `
      SELECT 
        p.id AS project_id,
        p.name AS project_name,
        COUNT(t.id)::int AS total_tasks,
        COUNT(CASE WHEN t.status = 'COMPLETADA' THEN 1 END)::int AS completed_tasks,
        COUNT(CASE WHEN t.status = 'EN_PROCESO' THEN 1 END)::int AS in_progress_tasks,
        COUNT(CASE WHEN t.status = 'PENDIENTE' THEN 1 END)::int AS pending_tasks,
        ROUND(
          COALESCE(
            (COUNT(CASE WHEN t.status = 'COMPLETADA' THEN 1 END)::numeric / NULLIF(COUNT(t.id), 0)) * 100,
            0
          ), 1
        )::float AS completion_percentage
      FROM projects p
      LEFT JOIN tasks t ON p.id = t.project_id
      WHERE p.id = $1
      GROUP BY p.id, p.name;
    `;
    const result = await query<ProjectMetrics>(text, [id]);
    return result.rows[0] || null;
  }

  // 7. Eliminar Proyecto
  async delete(id: string): Promise<boolean> {
    const text = `
      DELETE FROM projects
      WHERE id = $1;
    `;
    const result = await query(text, [id]);
    return (result.rowCount ?? 0) > 0;
  }
}
