import { MigrationInterface, QueryRunner } from "typeorm";

export class DevMigrations1702562810496 implements MigrationInterface {
    name = 'DevMigrations1702562810496'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Tracks" ALTER COLUMN "artist_pop" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Tracks" ALTER COLUMN "artist_pop" SET NOT NULL`);
    }

}
