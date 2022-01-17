import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class GuarantorMigration1641972991377 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "guarantors",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: "guardId",
                    type: "int",
                    isNullable: false,
                },
                {
                    name: "surname",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "otherName",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "phoneNumber",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "image",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "dob",
                    type: "date",
                    isNullable: false,
                },
                {
                    name: "age",
                    type: "int",
                    isNullable: false,
                },
                {
                    name: "spouseName",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "residentialAddress",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "religion",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "profession",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "businessName",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "positionHeld",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "officeAddress",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "officePhoneNumber",
                    type: "bigInt",
                    isNullable: false,
                },
                {
                    name: "applicantRelationship",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "signature",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "nationality",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()',
                }
            ]
        }), true)

        await queryRunner.createForeignKey("guarantors", new TableForeignKey({
            columnNames: ["guardId"],
            referencedColumnNames: ["id"],
            referencedTableName: "guards",
            onDelete: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("guarantors");
        const guardForeignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf("guardId") !== -1);
        await queryRunner.dropForeignKey("guarantors", guardForeignKey);
        await queryRunner.dropTable("guarantors");
    }

}
