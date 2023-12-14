import { MigrationInterface, QueryRunner } from "typeorm";

export class DevMigrations1702563899635 implements MigrationInterface {
    name = 'DevMigrations1702563899635'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Tracks" ("id" SERIAL NOT NULL, "trackId" integer NOT NULL, "names" character varying NOT NULL, "artist_names" character varying NOT NULL, "artist_pop" character varying, "albums" character varying NOT NULL, "track_pop" character varying, "durations_ms" character varying NOT NULL, "playlist_name" character varying NOT NULL, CONSTRAINT "UQ_ba6a9728b85e58d5d7918bd9d30" UNIQUE ("trackId"), CONSTRAINT "PK_540a00bd092404355e461ece1c3" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Tracks"`);
    }

}
