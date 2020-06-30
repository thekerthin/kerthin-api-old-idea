import { Command } from '@kerthin/microservice';
import { CreateBlogDto } from '../../dtos/blog';

export class CreateBlogCommand extends Command<CreateBlogDto> {
  public readonly action = 'create';
  public readonly context = 'blog';
}
