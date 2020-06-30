import { ApiProperty } from '@nestjs/swagger';

export class BlogDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  content: string;

  @ApiProperty()
  owner: string;
}
