import { MigrationInterface, QueryRunner } from 'typeorm';

export class updateRecipesTable1734667758350 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "recipes"
            ADD "title" text,
            ADD "description" text,
            ADD "user_id" integer;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "recipes"
            DROP COLUMN "title",
            DROP COLUMN "description",
            DROP COLUMN "user_id";
        `);
    }
}
