import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    Generated,
    JoinColumn,
    ManyToOne,
  } from "typeorm";

  import { Tecnicos } from "./Tecnicos";
@Entity("chamados")
class Chamados{
    
    @PrimaryGeneratedColumn()
    @Generated("increment")
    id: number;
    
    @Column()
    cod_chamado: string;

    @Column()
    cliente: string;

    @Column()
    telefone: string;

    @Column()
    descricao: string;

    @Column()
    technical_id: string;

    @JoinColumn({ name: "technical_id" })
    @ManyToOne(() => Tecnicos)
    technicalIdentification: Tecnicos

    @Column()
    nota: number;

    @CreateDateColumn()
    created_at: Date;
}

export { Chamados };