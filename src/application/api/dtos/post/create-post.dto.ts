import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @ApiProperty()
  content: string;

  @IsUUID(4)
  @ApiProperty()
  owner: string;

  @IsUUID(4)
  @ApiProperty()
  associatedTo: string;
}
