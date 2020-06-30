import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class FindBlogByIdDto {
  @ApiProperty()
  id: string;
}
