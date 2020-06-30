import { ApiTags } from '@nestjs/swagger';
import { Controller, Post, Body, Get, Patch, Param } from '@nestjs/common';

import {
  CreateBlogDto,
  UpdateBlogDto,
  FindBlogByIdDto,
  BlogDto,
} from '../dtos/blog';
import { BlogService } from '../services/blog.service';
import { ApiResponse } from '../decorators';

@ApiTags('Blog')
@Controller('blogs')
export default class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Post('/')
  @ApiResponse({ status: 201, type: BlogDto })
  create(@Body() data: CreateBlogDto) {
    return this.blogService.create(data);
  }

  @Patch('/:id')
  @ApiResponse({ status: 200, type: BlogDto })
  update(@Param('id') id: string, @Body() data: UpdateBlogDto) {
    return this.blogService.update({ ...data, id });
  }

  @Get('/:id')
  @ApiResponse({ status: 200, type: BlogDto })
  findById(@Param() params: FindBlogByIdDto) {
    return this.blogService.findById(params);
  }
}
