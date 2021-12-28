import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCalled1639578773939 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({ 
                name: "chamados",
                columns: [
                    {   
                        name:"id",
                        type:"integer",
                        generationStrategy:"increment",
                        isGenerated:true,
                        isPrimary: true,
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
                        name:"telefone",
                        type:"varchar",
                    },
                    {
                        name:"descricao",
                        type:"varchar",
                    },
                    {
                        name:"technical_id",
                        type:"varchar",
                    },
                    {
                        name:"nota",
                        type:"integer"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
                foreignKeys: [
                    {
                      name: "FKTechnical_id",
                      referencedTableName: "technical",
                      referencedColumnNames: ["id"],
                      columnNames: ["technical_id"],
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
