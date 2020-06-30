import { QueryHandler, IQueryHandler } from '@kerthin/microservice';
import { FindBlogByIdQuery } from '@application/api/queries/blog';
import { BlogService } from '../../services/blog.service';

@QueryHandler(FindBlogByIdQuery)
export class FindBlogByIdHandler implements IQueryHandler<FindBlogByIdQuery> {
  constructor(private readonly blogService: BlogService) {}

  handle(query: FindBlogByIdQuery) {
    return this.blogService.findById(query.data.id);
  }
}
