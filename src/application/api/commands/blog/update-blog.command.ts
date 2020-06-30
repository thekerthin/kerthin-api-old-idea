import { Command } from '@kerthin/microservice';
import { UpdateBlogDto } from '../../dtos/blog';

export class UpdateBlogCommand extends Command<UpdateBlogDto> {
  public readonly action = 'update';
  public readonly context = 'blog';
}
