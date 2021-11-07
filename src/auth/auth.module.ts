import { SessionSerializer } from './session.serialize';
import { UsersModule } from './../users/users.module';
import { LocalStrategy } from './local.strategy';
import { UserRepo } from '../users/repo/user.repo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PassportModule.register({ session: true }), UsersModule],
  providers: [AuthService, LocalStrategy, SessionSerializer],
  controllers: [AuthController],
})
export class AuthModule {}
