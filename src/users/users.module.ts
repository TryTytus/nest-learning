import { UsersService } from './users.service';
import { Module } from '@nestjs/common';
import { UserRepo } from './repo/user.repo';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepo])],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
