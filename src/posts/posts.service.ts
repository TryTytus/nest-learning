import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostDto } from './template/create-post.dto';
import { UpdatePostDto } from './template/update-post.dto';
import { PostsRepo } from './repo/post.repo';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostsRepo)
    private PostsRepo: PostsRepo,
  ) {}
  create(createPostDto: CreatePostDto) {
    return this.PostsRepo.createNew(createPostDto);
  }

  findAll() {
    return this.PostsRepo.getAll();
  }

  findOne(id: number) {
    return this.PostsRepo.getById(id);
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return this.PostsRepo.updatePost(updatePostDto, id);
  }

  remove(id: number) {
    return this.PostsRepo.deletePost(id);
  }
}
