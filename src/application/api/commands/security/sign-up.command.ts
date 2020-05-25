import { Command } from '@kerthin/microservice';
import { SignUpDto } from '../../dtos/security/sign-up.dto';

export class SignUpCommand extends Command<SignUpDto> {
  public readonly action = 'signUp';
  public readonly context = 'security';
}
