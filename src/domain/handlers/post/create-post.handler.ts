import { CommandHandler, ICommandHandler } from '@kerthin/microservice';
import { CreatePostCommand } from '@application/api/commands/post';
import { PostService } from '../../services/post.service';

@CommandHandler(CreatePostCommand)
export class SignInHandler implements ICommandHandler<CreatePostCommand> {
  constructor(private readonly postService: PostService) {}

  handle(command: CreatePostCommand) {
    return this.postService.create(command.data);
  }
}
