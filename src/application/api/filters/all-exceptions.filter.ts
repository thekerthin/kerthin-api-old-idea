import { Catch, ArgumentsHost, HttpStatus } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { SystemErrorCodeMap } from '@shared/maps';

@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    if (exception.response) {
      response.status(exception.status).json(exception.response);
      return;
    }

    const statusCode =
      SystemErrorCodeMap.get(exception.code) ||
      HttpStatus.INTERNAL_SERVER_ERROR;

    response.status(statusCode).json({
      statusCode,
      error: exception.error,
    });
  }
}
