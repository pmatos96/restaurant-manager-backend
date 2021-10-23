import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateRestaurantTables1631841575109 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "restaurantTables",
                columns:[
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "restaurant_id",
                        type: "uuid",
                    },
                    {
                        name: "number_of_seats",
                        type: "int"
                    },
                    {
                        name: "table_number",
                        type: "int"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKRestaurant",
                        referencedTableName: "restaurant",
                        referencedColumnNames: ["id"],
                        columnNames: ["restaurant_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
