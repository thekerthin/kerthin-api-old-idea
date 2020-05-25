import * as dotenvSafe from 'dotenv-safe';
dotenvSafe.config();

!process[Symbol.for('ts-node.register.instance')] &&
  require('module-alias/register');

import { NestFactory, HttpAdapterHost } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from '@application/api/filters';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(
    new AllExceptionsFilter(app.get(HttpAdapterHost).httpAdapter),
  );

  const options = new DocumentBuilder()
    .setTitle('Kerthin')
    .setDescription('Kerthin App')
    .setVersion('0.0.1')
    .addTag('health')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.SERVICE_PORT);
}

bootstrap();
