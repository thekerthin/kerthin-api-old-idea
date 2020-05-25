import { Module } from '@nestjs/common';

import SignUpHandler from './handlers/security/sign-up.handler';
import SignInHandler from './handlers/security/sign-in.handler';
import SecurityService from './services/security.service';
import { SecurityModule } from '@infrastructure/security/module';
import { DatabaseModule } from '@infrastructure/database/module';

@Module({
  imports: [SecurityModule, DatabaseModule],
  providers: [SignUpHandler, SignInHandler, SecurityService],
})
export class DomainModule {}
