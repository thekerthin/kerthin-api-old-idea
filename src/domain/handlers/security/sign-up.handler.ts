import { CommandHandler, ICommandHandler } from '@addapptables/microservice';
import { SignUpCommand } from '@application/api/commands/security/sign-up.command';
import SecurityService from '../../services/security.service';

@CommandHandler(SignUpCommand)
export default class SignUpHandler implements ICommandHandler<SignUpCommand> {
  constructor(private readonly securityService: SecurityService) {}

  handle(command: SignUpCommand) {
    return this.securityService.signUp(command.data);
  }
}
