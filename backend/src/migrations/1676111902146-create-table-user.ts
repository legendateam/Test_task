import { MigrationInterface, QueryRunner } from 'typeorm';

export class createTableUser1676111902146 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS User (
                id INT PRIMARY KEY NOT NULL,
                name CHARACTER VARYING(255) NOT NULL,
                email CHARACTER VARYING(255) UNIQUE NOT NULL,
                password CHARACTER VARYING(255) NOT NULL,
                created_at TIMESTAMP DEFAULT NOW() NOT NULL,
                updated_at TIMESTAMP DEFAULT NOW() ON UPDATE CURRENT_TIMESTAMP() NOT NULL,
                is_deleted BOOLEAN DEFAULT false
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE IF EXISTS USER
        `);
    }
}
