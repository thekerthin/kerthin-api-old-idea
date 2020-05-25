import { Module } from '@nestjs/common';

// TODO: load dynamically these dependencies

import HealthController from './controllers/health.controller';
import SecurityController from './controllers/security.controller';

import SecurityService from './services/security.service';

// const controllers = getPrototypes(`${__dirname}/controllers/*.controller{.ts,.js}`);
// const services = getPrototypes(`${__dirname}/services/*.service{.ts,.js}`);

@Module({
  controllers: [HealthController, SecurityController],
  providers: [SecurityService],
})
export class ApiModule {}
