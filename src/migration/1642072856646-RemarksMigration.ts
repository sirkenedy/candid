import {MigrationInterface, QueryRunner, TableForeignKey, Table} from "typeorm";

export class RemarksMigration1642072856646 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "remarks",
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
                },
                {
                    name: "pictures",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "comment",
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

        await queryRunner.createForeignKey("remarks", new TableForeignKey({
            columnNames: ["guardId"],
            referencedColumnNames: ["id"],
            referencedTableName: "guards",
            onDelete: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("remarks");
        const guardForeignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf("guardId") !== -1);
        await queryRunner.dropForeignKey("remarks", guardForeignKey);
        await queryRunner.dropTable("remarks");
    }

}
