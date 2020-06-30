import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Broker } from '@kerthin/microservice';
import * as R from 'ramda';

import { CreatePostDto, PostDto } from '../dtos/post';
import { CreatePostCommand } from '../commands/post';
import { FindAllPostQuery } from '../queries/post';

@Injectable()
export class PostService {
  constructor(private readonly broker: Broker) {}

  async create(data: CreatePostDto) {
    return this.broker
      .start()
      .add(new CreatePostCommand(data))
      .end<any>()
      .then(R.prop('data'));
  }

  async findAll(): Promise<PostDto[]> {
    return this.broker
      .start()
      .add(new FindAllPostQuery({}))
      .end()
      .then<PostDto[]>(R.prop('data'));
  }
}
