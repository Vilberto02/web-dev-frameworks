/*
Pasos
1. Importar el repositorio de proyectos, las consultas
2. Importar los tipos de datos
3. Importar los errores de negocio
4. Crear la clase para el servicio de proyectos
5. Implementar el constructor para inicializar el repositorio, métodos asíncronos para cada operación de negocio.
6. Implementar el método para obtener todos los proyectos
7. Implementar el método para obtener un proyecto por ID
8. Implementar el método para crear un proyecto, validando que el nombre no se repita
9. Implementar el método para actualizar un proyecto, validando existencia y nombre
10. Implementar el método para obtener métricas de un proyecto, validando existencia

La clase de servicio está constituida por métodos que encapsulan la lógica de negocio y utilizan el repositorio para interactuar con la base de datos. Cada método maneja las validaciones necesarias y lanza errores específicos cuando se violan las reglas de negocio.
*/

import { ProjectRepository } from "../repositories/project.repository.js";
import {
  CreateProjectDTO,
  UpdateProjectDTO,
  Project,
  ProjectMetrics,
} from "../types/project.types.js";
import { ConflictError, NotFoundError } from "../errors/appErrors.js";

export class ProjectService {
  private projectRepo: ProjectRepository;

  constructor() {
    this.projectRepo = new ProjectRepository();
  }

  async getAllProjects(): Promise<Project[]> {
    return this.projectRepo.findAll();
  }

  async getProjectById(id: string): Promise<Project> {
    const project = await this.projectRepo.findById(id);
    if (!project) {
      throw new NotFoundError(`El proyecto con ID ${id} no existe`);
    }
    return project;
  }

  async createProject(data: CreateProjectDTO): Promise<Project> {
    // Regla de Negocio 1: El nombre no puede repetirse
    const existing = await this.projectRepo.findByName(data.name);
    if (existing) {
      throw new ConflictError(
        `Ya existe un proyecto registrado con el nombre: "${data.name}"`,
      );
    }

    return this.projectRepo.create(data);
  }

  async updateProject(id: string, data: UpdateProjectDTO): Promise<Project> {
    // Verificar existencia previa
    await this.getProjectById(id);

    // Si intenta cambiar nombre, validar que no choque con otro
    if (data.name) {
      const existing = await this.projectRepo.findByName(data.name);
      if (existing && existing.id !== id) {
        throw new ConflictError(
          `El nombre "${data.name}" ya esta en uso por otro proyecto`,
        );
      }
    }

    const updated = await this.projectRepo.update(id, data);
    return updated!;
  }

  async getProjectMetrics(id: string): Promise<ProjectMetrics> {
    // Verificar que el proyecto exista antes de calcular metricas
    await this.getProjectById(id);
    const metrics = await this.projectRepo.getMetrics(id);
    return metrics!;
  }

  async deleteProject(id: string): Promise<void> {
    // Verificar que el proyecto exista antes de eliminarlo
    await this.getProjectById(id);
    await this.projectRepo.delete(id);
  }
}
