import { Query } from '@kerthin/microservice';
import { FindBlogByIdDto } from '../../dtos/blog';

export class FindBlogByIdQuery extends Query<FindBlogByIdDto> {
  public readonly action = 'findBlogById';
  public readonly context = 'blog';
}
