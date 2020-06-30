import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsUUID } from 'class-validator';

export class CreateBlogDto {
  @IsString()
  @ApiProperty()
  title: string;

  @IsString()
  @ApiPropertyOptional()
  description?: string;

  @IsString()
  @ApiProperty()
  content: string;

  @IsUUID()
  @ApiProperty()
  owner: string;
}
