import { MigrationInterface, QueryRunner } from "typeorm";

export class DevMigrations1702550787583 implements MigrationInterface {
    name = 'DevMigrations1702550787583'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Tracks" ADD "trackId" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Tracks" ADD CONSTRAINT "UQ_ba6a9728b85e58d5d7918bd9d30" UNIQUE ("trackId")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Tracks" DROP CONSTRAINT "UQ_ba6a9728b85e58d5d7918bd9d30"`);
        await queryRunner.query(`ALTER TABLE "Tracks" DROP COLUMN "trackId"`);
    }

}
