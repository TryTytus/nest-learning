import { LocalAuthGuard } from './auth.validate.guard';
import { AuthService } from './auth.service';
import { UserDto } from '../users/template/UserDto';
import { Body, Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private AuthService: AuthService) {}
  @Post('/signup')
  signUp(@Body() UserDto): Promise<UserDto> {
    return this.AuthService.signUp(UserDto);
  }
  @UseGuards(LocalAuthGuard)
  @Post('/signin')
  signIn(@Request() req): Promise<any> {
    return req.user;
  }
}
