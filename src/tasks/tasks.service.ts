/* eslint-disable prettier/prettier */
import { TaskRepo } from "./task.repo";
import { UpdateTaskDto } from "./dto/updateTaskDto";
import { CreateTaskDto } from "./dto/createTaskDto";
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Task } from "./task.entity";

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepo)
    private TaskRepo: TaskRepo
  ) {}
  // async getTasks(): Promise<Task[]>{

  // }
  async postTask(CreateTaskDto: CreateTaskDto): Promise<Task> {
    const { name, surname } = CreateTaskDto;
    const task = this.TaskRepo.create({
      name,
      surname,
    });
    await this.TaskRepo.save(task);
    return task;
  }
  async getTaskById(id: number): Promise<Task> {
    const found = await this.TaskRepo.findOne(id);
    if (!found) {
      throw new NotFoundException();
    }
    return found;
  }

  async deleteById(id: number): Promise<void> {
    const result = await this.TaskRepo.delete(id);
    if (result.affected === 0){
      throw new NotFoundException;
    }
  }
    async updateById(id:number, UpdateTaskDto: UpdateTaskDto): Promise<Task> {
      const { name, surname } = UpdateTaskDto;
      const task = await this.getTaskById(id);
      task.name = name;
      task.surname = surname;
      await this.TaskRepo.save(task)
      return task;
    }
}
