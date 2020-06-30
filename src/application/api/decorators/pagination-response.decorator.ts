import { ApiResponse, ApiResponseOptions, ApiProperty } from '@nestjs/swagger';
import { Class } from '@kerthin/utils';

export function ApiPaginationResponse(
  metadata: { status: number; type: Class } & ApiResponseOptions,
) {
  class Meta {
    @ApiProperty()
    count: number;

    @ApiProperty()
    page: number;

    @ApiProperty()
    limit: number;

    @ApiProperty()
    totalPages: number;
  }

  class PaginationResponse {
    @ApiProperty({ type: metadata.type, isArray: true })
    data: any[];

    @ApiProperty({ type: Meta })
    meta: Meta;
  }

  Object.defineProperty(PaginationResponse, 'name', {
    value: `${metadata.type.name}PaginationResponse`,
  });

  metadata.type = PaginationResponse;

  const _decorator = ApiResponse(metadata);

  return function (target, key?, descriptor?: PropertyDescriptor) {
    return _decorator(target, key, descriptor);
  };
}
