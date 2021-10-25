import { UpdateTaskDto } from "./dto/updateTaskDto";
import { CreateTaskDto } from "./dto/createTaskDto";
import { TasksService } from "./tasks.service";
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Put,
} from "@nestjs/common";
import { Task } from "./task.entity";

@Controller("tasks")
export class TasksController {
  constructor(private TasksService: TasksService) {}
  // @Get()
  // getTasks() {
  //   return this.TasksService.getAllTasks();
  // }

  @Get("/:id")
  getTaskById(@Param("id") id: number): Promise<Task> {
    return this.TasksService.getTaskById(id);
  }
  @Post()
  postTask(@Body() CreateTaskDto: CreateTaskDto) {
    return this.TasksService.postTask(CreateTaskDto);
  }
  @Delete("/:id")
  deleteById(@Param("id") id: number): Promise<void> {
    return this.TasksService.deleteById(id);
  }
  @Put("/:id")
  updateById(
    @Param("id") id: number,
    @Body() UpdateTaskDto: UpdateTaskDto
  ): Promise<Task> {
    return this.TasksService.updateById(id, UpdateTaskDto);
  }
}
