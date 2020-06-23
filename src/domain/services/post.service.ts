import { Injectable } from '@nestjs/common';
import PostRepository from '@infrastructure/database/repositories/post.repository';
import { CreatePostDto } from '@application/api/dtos/post';

@Injectable()
export class PostService {
  constructor(private readonly postRepository: PostRepository) {}

  create(data: CreatePostDto) {
    return this.postRepository.save(this.postRepository.create(data));
  }

  findAll() {
    return this.postRepository.find();
  }
}
