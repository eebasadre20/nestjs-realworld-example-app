import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class updateCategoriesTable1736382648873 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn('categories', 'name', new TableColumn({
            name: 'name',
            type: 'varchar',
            length: '255',
            isUnique: true,
            isNullable: false
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn('categories', 'name', new TableColumn({
            name: 'name',
            type: 'varchar',
            isNullable: true
        }));
    }
}
