import {MigrationInterface, QueryRunner} from "typeorm";

export class user1589659923643 implements MigrationInterface {
    name = 'user1589659923643'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "surname" character varying NOT NULL, "date_birth" TIMESTAMP NOT NULL, "username" character varying NOT NULL, "email" character varying NOT NULL, "phone" character varying, "cellphone" character varying, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`, undefined);
    }

}
