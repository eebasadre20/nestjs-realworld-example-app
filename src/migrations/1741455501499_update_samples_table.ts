import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class updateSamplesTable1741455501499 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('samples', new TableColumn({
            name: 'uuid',
            type: 'varchar',
            length: '255',
            isNullable: true,
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('samples', 'uuid');
    }
}