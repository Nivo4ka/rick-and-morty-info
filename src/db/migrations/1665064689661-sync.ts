import { MigrationInterface, QueryRunner } from "typeorm";

export class sync1665064689661 implements MigrationInterface {
    name = 'sync1665064689661'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "review" (
                "id" SERIAL NOT NULL,
                "first_name" character varying NOT NULL,
                "last_name" character varying NOT NULL,
                "notes" character varying NOT NULL,
                "rating" integer NOT NULL,
                "agree" boolean NOT NULL,
                CONSTRAINT "PK_2e4299a343a81574217255c00ca" PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "review"
        `);
    }

}
