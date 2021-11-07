import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { UserRepo } from './users/repo/user.repo';

@Module({
  imports: [
    PostsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'nest',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: '1719',
      synchronize: true,
      autoLoadEntities: true,
    }),
    AuthModule,
    UsersModule,
    TypeOrmModule.forFeature([UserRepo]),
  ],
  controllers: [AppController],
  providers: [AppService, UsersService],
})
export class AppModule {}
