import { TaskRepository } from "../repositories/task.repository"
import { CreateTaskDTO, UpdateTaskDTO, Task } from "../types/task.types"
import { NotFoundError } from "../middlewares/appErros"

export class TaskService {
  private taskRepo: TaskRepository;

  constructor(){
    this.taskRepo = new TaskRepository();
  }

  async getAllTasks(): Promise<Task[]>{
    return this.taskRepo.findAll();
  }

  async createTask(data: CreateTaskDTO): Promise<Task> {
    return this.taskRepo.create(data);
  }

  async updateTask(id: string, data: UpdateTaskDTO): Promise<Task> {
    const updated = await this.taskRepo.update(id, data);
    if (!updated) {
      throw new NotFoundError(`No se encontró la tarea con ID: ${id}`);
    }
    return updated;
  }
}