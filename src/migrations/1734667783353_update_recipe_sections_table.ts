import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class updateRecipeSectionsTable1734667783353 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns('recipe_sections', [
            new TableColumn({
                name: 'recipe_id',
                type: 'int',
                isNullable: false
            }),
            new TableColumn({
                name: 'section_id',
                type: 'int',
                isNullable: false
            })
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('recipe_sections', 'recipe_id');
        await queryRunner.dropColumn('recipe_sections', 'section_id');
    }
}