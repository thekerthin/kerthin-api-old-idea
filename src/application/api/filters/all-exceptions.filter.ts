import { Catch, ArgumentsHost, HttpStatus } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { SystemErrorCodeEnum } from '../../../shared/utils';

@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    let status = HttpStatus.INTERNAL_SERVER_ERROR;

    if (exception.response) {
      response.status(exception.status).json(exception.response);
    }

    // TODO: change this for a mapper
    switch (exception.code) {
      case SystemErrorCodeEnum.CONSUMER_EXIST:
        status = HttpStatus.CONFLICT;
        break;
      default:
        status = HttpStatus.INTERNAL_SERVER_ERROR;
        break;
    }

    response.status(status).json({
      statusCode: status,
      error: exception.error,
    });
  }
}
