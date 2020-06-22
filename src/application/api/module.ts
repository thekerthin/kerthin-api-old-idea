import { Module } from '@nestjs/common';
import { getPrototypes, getPrototypesForDI } from '@kerthin/utils';

const controllers = getPrototypes(
  `${__dirname}/controllers/*.controller{.ts,.js}`,
);
const services = getPrototypesForDI(`${__dirname}/services/*.service{.ts,.js}`);

@Module({
  controllers: [...controllers],
  providers: [...services],
})
export class ApiModule {}
