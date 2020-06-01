import { CommandHandler, ICommandHandler } from '@kerthin/microservice';
import { SignInCommand } from '@application/api/commands/security/sign-in.command';
import SecurityService from '../../services/security.service';

@CommandHandler(SignInCommand)
export default class SignInHandler implements ICommandHandler<SignInCommand> {
  constructor(private readonly securityService: SecurityService) {}

  handle(command: SignInCommand) {
    return this.securityService.signIn(command.data);
  }
}
