import { QueryHandler, IQueryHandler } from '@kerthin/microservice';
import { FindAllPostQuery } from '@application/api/queries/post';
import { PostService } from '../../services/post.service';

@QueryHandler(FindAllPostQuery)
export class FindAllPostHandler implements IQueryHandler<FindAllPostQuery> {
  constructor(private readonly postService: PostService) {}

  handle(query: FindAllPostQuery) {
    return this.postService.findAll();
  }
}
