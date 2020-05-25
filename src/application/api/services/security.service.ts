import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Broker } from '@kerthin/microservice';
import * as R from 'ramda';
import { SignUpDto, SignInDto } from '../dtos/security';
import { SignUpCommand } from '../commands/security/sign-up.command';
import { SignInCommand } from '../commands/security/sign-in.command';

@Injectable()
export default class SecurityService {
  constructor(private readonly broker: Broker) {}

  async signUp(data: SignUpDto) {
    return this.broker
      .start()
      .add(new SignUpCommand(data))
      .end<any>()
      .then(R.prop('data'));
  }

  async signIn(data: SignInDto) {
    return this.broker
      .start()
      .add(new SignInCommand(data))
      .end<any>()
      .then(R.prop('data'));
  }
}
