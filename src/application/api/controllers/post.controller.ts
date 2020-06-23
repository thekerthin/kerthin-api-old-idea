import { ApiTags } from '@nestjs/swagger';
import { Controller, Post, Body } from '@nestjs/common';

import { CreatePostDto } from '../dtos/post/create-post.dto';
import { PostService } from '../services/post.service';

@ApiTags('Post')
@Controller('posts')
export default class PostController {
  constructor(private readonly postService: PostService) {}

  @Post('/')
  create(@Body() data: CreatePostDto) {
    return this.postService.create(data);
  }

  @Post('/')
  findAll() {
    return this.postService.findAll();
  }
}
