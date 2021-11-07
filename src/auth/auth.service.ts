import { UsersService } from './../users/users.service';
import { UserDto } from '../users/template/UserDto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(private UsersService: UsersService) {}
  async signUp(UserDto: UserDto): Promise<UserDto> {
    return this.UsersService.createUser(UserDto);
  }
  async signIn(username: string, password: string): Promise<any> {
    const user = await this.UsersService.findOne(username);

    if (user && password === user.password) {
      const { id, username } = user;
      return { id, username };
    }
    return null;
  }
}
