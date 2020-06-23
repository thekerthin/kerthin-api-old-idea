import { Command } from '@kerthin/microservice';
import { CreatePostDto } from '../../dtos/post';

export class CreatePostCommand extends Command<CreatePostDto> {
  public readonly action = 'create';
  public readonly context = 'post';
}
