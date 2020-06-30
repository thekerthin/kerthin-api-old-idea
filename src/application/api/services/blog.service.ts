import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Broker } from '@kerthin/microservice';
import * as R from 'ramda';

import { CreateBlogDto, UpdateBlogDto, FindBlogByIdDto } from '../dtos/blog';
import { CreateBlogCommand, UpdateBlogCommand } from '../commands/blog';
import { FindBlogByIdQuery } from '../queries/blog';

@Injectable()
export class BlogService {
  constructor(private readonly broker: Broker) {}

  create(data: CreateBlogDto) {
    return this.broker
      .start()
      .add(new CreateBlogCommand(data))
      .end()
      .then(R.prop('data'));
  }

  update(data: UpdateBlogDto) {
    return this.broker
      .start()
      .add(new UpdateBlogCommand(data))
      .end()
      .then(R.prop('data'));
  }

  findById(params: FindBlogByIdDto) {
    return this.broker
      .start()
      .add(new FindBlogByIdQuery(params))
      .end()
      .then(R.prop('data'));
  }
}
