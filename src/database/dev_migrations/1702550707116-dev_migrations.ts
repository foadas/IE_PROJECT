import { MigrationInterface, QueryRunner } from "typeorm";

export class DevMigrations1702550707116 implements MigrationInterface {
    name = 'DevMigrations1702550707116'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Tracks" ("id" SERIAL NOT NULL, "names" character varying NOT NULL, "artist_names" character varying NOT NULL, "artist_pop" integer NOT NULL, "albums" character varying NOT NULL, "track_pop" character varying NOT NULL, "durations_ms" character varying NOT NULL, "playlist_name" character varying NOT NULL, CONSTRAINT "PK_540a00bd092404355e461ece1c3" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Tracks"`);
    }

}
