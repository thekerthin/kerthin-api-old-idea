import { Injectable } from '@nestjs/common';
import { isEmptyOrNil } from '@kerthin/utils';
import { SystemException } from '@shared/exceptions';
import BlogRepository from '@infrastructure/database/repositories/blog.repository';
import {
  CreateBlogDto,
  UpdateBlogDto,
  FindBlogByIdDto,
} from '@application/api/dtos/blog';
import { SystemErrorCodeEnum } from '@shared/enums';

@Injectable()
export class BlogService {
  constructor(private readonly blogRepository: BlogRepository) {}

  create(data: CreateBlogDto) {
    return this.blogRepository.save(this.blogRepository.create(data));
  }

  async update(data: UpdateBlogDto) {
    // TODO: refactor, create functional function to validate this scenario
    const blog = await this.findById(data.id);
    if (isEmptyOrNil(blog)) {
      throw new SystemException(
        SystemErrorCodeEnum.BLOG_NOT_EXIST,
        `Blog with id ${data.id} does not exist`,
      );
    }

    return this.blogRepository.save(this.blogRepository.create(data));
  }

  findById(id: string) {
    return this.blogRepository.findOne({ id });
  }
}
