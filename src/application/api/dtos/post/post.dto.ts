import { ApiProperty } from '@nestjs/swagger';

export class PostDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  content: string;

  @ApiProperty()
  owner: string;

  @ApiProperty()
  associatedTo: string;
}
