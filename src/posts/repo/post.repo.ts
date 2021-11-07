import { UpdatePostDto } from '../template/update-post.dto';
import { NotFoundException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreatePostDto } from '../template/create-post.dto';
import { Post } from '../entities/post.entity';

@EntityRepository(Post)
export class PostsRepo extends Repository<Post> {
  async createNew(CreatePostDto: CreatePostDto): Promise<CreatePostDto> {
    const { title, content, user } = CreatePostDto;
    const post = await this.create({
      title,
      content,
      user,
    });
    await this.save(post);
    return post;
  }
  async getById(id: number): Promise<Post> {
    const post = await this.findOne(id);
    if (!post) throw new NotFoundException();
    return post;
  }

  async getAll(): Promise<Post[]> {
    const posts = await this.find({ order: { id: 'ASC' } });
    return posts;
  }

  async updatePost(UpdatePostDto: UpdatePostDto, id): Promise<Post> {
    const post = await this.getById(id);
    post.title = UpdatePostDto.title;
    post.content = UpdatePostDto.content;
    this.save(post);
    return post;
  }

  async deletePost(id: number): Promise<void> {
    const post = await this.getById(id);
    await this.delete(post);
  }
}
