import * as dotenvSafe from 'dotenv-safe';
dotenvSafe.config();

!process[Symbol.for('ts-node.register.instance')] &&
  require('module-alias/register');

import { NestFactory, HttpAdapterHost } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AllExceptionsFilter } from '@application/api/filters';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(
    new AllExceptionsFilter(app.get(HttpAdapterHost).httpAdapter),
  );

  const options = new DocumentBuilder()
    .setTitle('Kerthin API')
    .setDescription('kerthin-api')
    .setVersion('0.0.1')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.SERVICE_PORT);
}

bootstrap();
