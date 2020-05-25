import { Module } from '@nestjs/common';
import { ApiModule } from '@application/api/module';
import { DomainModule } from '@domain/module';
import {
  MicroserviceModule,
  ManagerAdapterBus,
  LocalBusAdapter,
} from '@kerthin/microservice';

@Module({
  imports: [
    ApiModule,
    DomainModule,
    MicroserviceModule.withConfig({
      adapter: ManagerAdapterBus.getInstance(LocalBusAdapter).build(),
    }),
  ],
})
export class AppModule {}
