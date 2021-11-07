import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { PostsRepo } from './repo/post.repo';

@Module({
  imports: [TypeOrmModule.forFeature([PostsRepo])],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
