/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from "typeorm";
import { Task } from "./task.entity";

@EntityRepository(Task)
export class TaskRepo extends Repository<Task> {}
