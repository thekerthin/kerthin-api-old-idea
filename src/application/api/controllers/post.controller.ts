import { ApiTags } from '@nestjs/swagger';
import { Controller, Post, Body, Get } from '@nestjs/common';

import { CreatePostDto, PostDto } from '../dtos/post';
import { PostService } from '../services/post.service';
import { ApiPaginationResponse, ApiResponse } from '../decorators';

@ApiTags('Post')
@Controller('posts')
export default class PostController {
  constructor(private readonly postService: PostService) {}

  @Post('/')
  @ApiResponse({ status: 201, type: PostDto })
  create(@Body() data: CreatePostDto) {
    return this.postService.create(data);
  }

  @Get('/')
  @ApiPaginationResponse({ status: 200, type: PostDto })
  findAll() {
    return this.postService.findAll();
  }
}
