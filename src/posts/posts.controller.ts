import { AuthenticatedGuard } from './../auth/auth.singned.guard';
import { LocalAuthGuard } from '../auth/auth.validate.guard';
import { AuthGuard } from '@nestjs/passport';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
  UnauthorizedException,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './template/create-post.dto';
import { UpdatePostDto } from './template/update-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }
  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(+id);
  }
  @UseGuards(AuthenticatedGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(+id, updatePostDto);
  }
  @UseGuards(AuthenticatedGuard)
  @Delete(':id')
  remove(@Param('id') id: string, @Request() req) {
    return this.postsService.remove(+id);
  }
}
