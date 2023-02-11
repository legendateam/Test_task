import { MigrationInterface, QueryRunner } from 'typeorm';

export class createTableCommonFields1676129373728 implements MigrationInterface {
    name = 'createTableCommonFields1676129373728';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "common_fields" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "is_deleted" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_173d3d2a663d8f98a9fc3841357" PRIMARY KEY ("id"))`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "common_fields"`);
    }
}
