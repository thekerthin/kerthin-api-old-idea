import { Module } from '@nestjs/common';
import { SecurityModule, KongConsumerAdapter } from '@kerthin/security';

import SignUpHandler from './handlers/security/sign-up.handler';
import SignInHandler from './handlers/security/sign-in.handler';
import SecurityService from './services/security.service';
import { DatabaseModule } from '@infrastructure/database/module';

@Module({
  imports: [
    DatabaseModule,
    SecurityModule.withConfig({
      consumer: KongConsumerAdapter,
    }),
  ],
  providers: [SignUpHandler, SignInHandler, SecurityService],
})
export class DomainModule {}
