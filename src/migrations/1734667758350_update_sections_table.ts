import { MigrationInterface, QueryRunner } from 'typeorm';

export class updateSectionsTable1734667758350 implements MigrationInterface {
    name = 'updateSectionsTable1734667758350'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sections" ADD "name" varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sections" DROP COLUMN "name"`);
    }
}