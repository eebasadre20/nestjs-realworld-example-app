import {MigrationInterface, QueryRunner} from "typeorm";

export class createPasswordResetRequestsTable1734668150546 implements MigrationInterface {
    name = 'createPasswordResetRequestsTable1734668150546'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "password_reset_requests" (
                "id" SERIAL PRIMARY KEY,
                "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                "reset_token" VARCHAR NOT NULL,
                "verified" BOOLEAN NOT NULL DEFAULT false,
                "user_id" INTEGER,
                CONSTRAINT "FK_user_id" FOREIGN KEY ("user_id") REFERENCES "user"("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "password_reset_requests"`);
    }
}