import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class updateCategoriesTable1736382619019 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('categories', new TableColumn({
            name: 'name',
            type: 'varchar',
            length: '255',
            isUnique: true,
            isNullable: false
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('categories', 'name');
    }
}