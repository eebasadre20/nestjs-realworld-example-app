import { MigrationInterface, QueryRunner } from 'typeorm';

export class createTodoTable1748361320035 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "todo" (
                "id" SERIAL PRIMARY KEY,
                "title" VARCHAR NOT NULL,
                "description" TEXT,
                "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "todo";
        `);
    }
}