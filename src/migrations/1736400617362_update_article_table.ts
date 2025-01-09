import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateArticleTable1736400617362 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Since no new columns or changes are specified, this migration ensures the integrity of the existing relationships.
        // This is a placeholder for any potential relationship or constraint updates.
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // This is a placeholder to revert any changes made in the up method.
    }
}