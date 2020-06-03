import { SystemErrorCodeEnum } from '../enums/system-error-code.enum';

export class SystemException extends Error {
  constructor(private readonly code: SystemErrorCodeEnum, message: string) {
    super(message);
  }
}
