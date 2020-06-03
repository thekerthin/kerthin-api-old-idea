import { HttpStatus } from '@nestjs/common';
import { SystemErrorCodeEnum } from '../enums';

class SystemErrorCode extends Map<SystemErrorCodeEnum, HttpStatus> {}

export const SystemErrorCodeMap = new SystemErrorCode([
  [SystemErrorCodeEnum.CONSUMER_EXIST, HttpStatus.CONFLICT],
]);
