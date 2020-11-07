import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from "typeorm";

export class createImage1604694252938 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "images",
      columns: [
        {
          name: "id",
          type: "int",
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: "increment"
        },
        {
          name: "path",
          type: "varchar",
        },
      ],

    }), true);
    await queryRunner.addColumn("images", new TableColumn({
      name: "orphanage_id",
      type: "int"
    }));

    await queryRunner.createForeignKey("images", new TableForeignKey({
      columnNames: ["orphanage_id"],
      referencedColumnNames: ["id"],
      referencedTableName: "orphanages",
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    }));
  }


  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("images");
  }

}
