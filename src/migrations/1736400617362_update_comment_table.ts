import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateCommentTable1736400617362 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comment" ADD "description" text`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comment" DROP COLUMN "description"`);
    }
}