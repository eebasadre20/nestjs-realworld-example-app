import { MigrationInterface, QueryRunner } from 'typeorm';

export class updateFollowsTable1741455505147 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "follows"
            ADD "sample_id" integer;
        `);
        await queryRunner.query(`
            ALTER TABLE "follows"
            ADD CONSTRAINT "FK_sample_id" FOREIGN KEY ("sample_id") REFERENCES "samples"("id");
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "follows"
            DROP CONSTRAINT "FK_sample_id";
        `);
        await queryRunner.query(`
            ALTER TABLE "follows"
            DROP COLUMN "sample_id";
        `);
    }
}