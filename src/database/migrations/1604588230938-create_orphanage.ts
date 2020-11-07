import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createOrphanage1604588230938 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "orphanages",
        columns: [
          {
            name: "id",
            type: "int",
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment"
          },
          { name: "name", type: "varchar" },
          { name: "latitude", type: "DOUBLE" },
          { name: "longitude", type: "DOUBLE" },
          { name: "about", type: "text" },
          { name: "instructions", type: "text" },
          { name: "opening_hours", type: "varchar" },
          { name: "open_on_weekends", type: "boolean", default: false },
        ],
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("orphanages")
  }

}
