import { Module } from '@nestjs/common';
import { SecurityModule, KongConsumerAdapter } from '@kerthin/security';
import { getPrototypesForDI } from '@kerthin/utils';

import { DatabaseModule } from '@infrastructure/database/module';

const handlers = getPrototypesForDI(
  `${__dirname}/handlers/**/*.handler{.ts,.js}`,
);
const services = getPrototypesForDI(`${__dirname}/services/*.service{.ts,.js}`);

@Module({
  imports: [
    DatabaseModule,
    SecurityModule.withConfig({
      consumer: KongConsumerAdapter,
    }),
  ],
  providers: [...handlers, ...services],
})
export class DomainModule {}
