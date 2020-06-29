import { Query } from '@kerthin/microservice';
import { FindAllPostDto } from '../../dtos/post';

export class FindAllPostQuery extends Query<FindAllPostDto> {
  public readonly action = 'findAllPost';
  public readonly context = 'post';
}
