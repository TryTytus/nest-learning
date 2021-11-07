import { User } from '../entities/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { UserDto } from '../template/UserDto';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
@EntityRepository(User)
export class UserRepo extends Repository<User> {
  async createUser(UserDto: UserDto): Promise<UserDto> {
    const { username, password } = UserDto;
    const user = await this.create({
      username,
      password,
    });
    try {
      await this.save(user);
      return UserDto;
    } catch (err) {
      if (err.code == 23505) {
        throw new ConflictException('Username already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
