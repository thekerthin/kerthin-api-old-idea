import { Command } from '@kerthin/microservice';
import { SignInDto } from '../../dtos/security';

export class SignInCommand extends Command<SignInDto> {
  public readonly action = 'signIn';
  public readonly context = 'security';
}
