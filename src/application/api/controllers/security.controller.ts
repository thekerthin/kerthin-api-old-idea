import { ApiTags } from '@nestjs/swagger';
import { Controller, Post, Request, Body, Headers } from '@nestjs/common';
import { SignUpDto, SignInDto } from '../dtos/security';
import { SecurityService } from '../services/security.service';

@ApiTags('Security')
@Controller('security')
export default class SecurityController {
  constructor(private readonly securityService: SecurityService) {}

  @Post('/token')
  token(@Request() request: Request) {
    return request.body;
  }

  @Post('/sign-up')
  signUp(@Body() data: SignUpDto) {
    return this.securityService.signUp(data);
  }

  @Post('/sign-in')
  signIn(@Headers() headers) {
    // TODO: improve this
    const consumerId = headers['x-consumer-id'];
    return this.securityService.signIn({ consumerId });
  }
}
