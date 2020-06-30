import { CommandHandler, ICommandHandler } from '@kerthin/microservice';
import { CreateBlogCommand } from '@application/api/commands/blog';
import { BlogService } from '../../services/blog.service';

@CommandHandler(CreateBlogCommand)
export class CreateBlogHandler implements ICommandHandler<CreateBlogCommand> {
  constructor(private readonly blogService: BlogService) {}

  handle(command: CreateBlogCommand) {
    return this.blogService.create(command.data);
  }
}
