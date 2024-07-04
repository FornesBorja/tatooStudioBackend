import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Appointment1720113580950 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "appointment",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "appointment_date",
            type: "datetime",
            isNullable: false,
          },
          {
            name: "user_id",
            type: "int",
          },
          {
            name: "service_id",
            type: "int",
          },
        ],
        foreignKeys: [
          {
            columnNames: ["user_id"],
            referencedTableName: "user",
            referencedColumnNames: ["id"],
          },
          {
            columnNames: ["service_id"],
            referencedTableName: "service",
            referencedColumnNames: ["id"],
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("appointment");
  }
}
