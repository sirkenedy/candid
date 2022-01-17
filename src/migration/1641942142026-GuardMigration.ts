import {MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class GuardMigration1641942142026 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "guards",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
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
                    name: "email",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "image",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "lga",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "stateOfOrigin",
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
                    name: "bloodGroup",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "address",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "sex",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "religion",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "maritalStatus",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "phoneNo",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "wifeName",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "wifePhoneNumber",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "nextOfKin",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "nextOfKinPhoneNumber",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "eduQualification",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "previousEmployer",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "previousEmployerAddress",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "resignationReason",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "medicalCondition",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "fatherName",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "fatherNameAddress",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "fatherNamePhoneNumber",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "motherName",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "motherNameAddress",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "motherNamePhoneNumber",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "bodyMark",
                    type: "boolean",
                    isNullable: false,
                },
                {
                    name: "bodyMarkPart",
                    type: "varchar",
                    isNullable: true,
                },
                {
                    name: "society",
                    type: "varchar",
                    isNullable: true,
                },
                {
                    name: "signature",
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
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("guards");
    }

}
