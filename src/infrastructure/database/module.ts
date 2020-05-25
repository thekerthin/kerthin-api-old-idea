import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import UserRepository from './repositories/user.repository';

const dbConfig = TypeOrmModule.forRoot({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [__dirname + '/entities/*.entity{.ts,.js}'],
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
});

const providerRepositories = TypeOrmModule.forFeature([UserRepository]);

@Module({
  imports: [providerRepositories, dbConfig],
  providers: [UserRepository],
  exports: [providerRepositories],
})
export class DatabaseModule implements OnModuleInit {
  constructor(private readonly connection: Connection) {}

  async onModuleInit() {
    await this.connection.runMigrations();
  }
}
