import { Module } from '@nestjs/common';
import { Consumer, KongConsumerAdapter } from './adapters';

// TODO: please make more elaborated security module
const consumerProvider = {
  provide: Consumer,
  useClass: KongConsumerAdapter,
};

@Module({
  providers: [consumerProvider],
  exports: [consumerProvider],
})
export class SecurityModule {}
