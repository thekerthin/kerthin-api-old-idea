import { CommandHandler, ICommandHandler } from '@kerthin/microservice';
import { UpdateBlogCommand } from '@application/api/commands/blog';
import { BlogService } from '../../services/blog.service';

@CommandHandler(UpdateBlogCommand)
export class UpdateBlogHandler implements ICommandHandler<UpdateBlogCommand> {
  constructor(private readonly blogService: BlogService) {}

  handle(command: UpdateBlogCommand) {
    return this.blogService.update(command.data);
  }
}
