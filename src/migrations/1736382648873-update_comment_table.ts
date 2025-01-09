import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class updateCommentTable1736382648873 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('comment', new TableColumn({
            name: 'description',
            type: 'varchar',
            length: '255',
            isNullable: true
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('comment', 'description');
    }
}