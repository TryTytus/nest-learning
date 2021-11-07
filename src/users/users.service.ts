import { UserDto } from './template/UserDto';
import { UserRepo } from './repo/user.repo';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepo)
    private UserRepo: UserRepo,
  ) {}
  async createUser(UserDto: UserDto): Promise<UserDto> {
    return this.UserRepo.createUser(UserDto);
  }
  async findOne(username: string): Promise<User | undefined> {
    return await this.UserRepo.findOne({
      where: {
        username,
      },
    });
  }
}
