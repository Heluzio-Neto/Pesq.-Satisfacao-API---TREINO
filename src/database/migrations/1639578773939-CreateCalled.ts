import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCalled1639578773939 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({ 
                name: "chamados",
                columns: [
                    {
                        name:"id",
                        type:"uuid",
                        isPrimary: true
                    },
                    {
                        name:"cod_chamado",
                        type:"varchar",
                    },
                    {
                        name:"cliente",
                        type:"varchar",
                    },
                    {
                        name:"id_tecnico",
                        type:"varchar",
                    },
                    {
                        name:"nota",
                        type:"number"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                      },
                ],
                foreignKeys: [
                    {
                      name: "FKTecnico",
                      referencedTableName: "tecnico",
                      referencedColumnNames: ["id"],
                      columnNames: ["id_tecnico"],
                      onDelete: "SET NULL",
                      onUpdate: "SET NULL",
                    }
                  ],
            })
        )  
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("chamados")
    }
}
