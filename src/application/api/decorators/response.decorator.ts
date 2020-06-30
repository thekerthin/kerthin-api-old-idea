import {
  ApiProperty,
  ApiResponse as ApiResponseNest,
  ApiResponseOptions,
} from '@nestjs/swagger';
import { Class } from '@kerthin/utils';

export function ApiResponse(
  metadata: { status: number; type: Class } & ApiResponseOptions,
) {
  class ResponseDto {
    @ApiProperty({ type: metadata.type })
    data: any;
  }

  Object.defineProperty(ResponseDto, 'name', {
    value: `${metadata.type.name}Response`,
  });

  metadata.type = ResponseDto;

  const _decorator = ApiResponseNest(metadata);

  return function (target, key?, descriptor?: PropertyDescriptor) {
    return _decorator(target, key, descriptor);
  };
}
