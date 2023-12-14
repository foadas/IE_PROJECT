import { MigrationInterface, QueryRunner } from "typeorm";

export class DevMigrations1702562724084 implements MigrationInterface {
    name = 'DevMigrations1702562724084'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Tracks" ALTER COLUMN "track_pop" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Tracks" ALTER COLUMN "track_pop" SET NOT NULL`);
    }

}
