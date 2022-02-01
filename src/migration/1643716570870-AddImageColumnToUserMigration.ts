import {MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddImageColumnToUserMigration1643716570870 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("users", new TableColumn({
            name: "image",
            type: "varchar",
            isNullable: true,
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("users", "image");
    }

}
