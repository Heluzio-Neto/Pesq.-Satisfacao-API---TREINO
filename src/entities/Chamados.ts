import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    Generated,
    JoinColumn,
    OneToMany,
    ManyToOne,
  } from "typeorm";

  import { Tecnicos } from "./Tecnicos";
@Entity("Chamados")
class Chamados{
    
    @PrimaryGeneratedColumn()
    @Generated("increment")
    id: number;
    
    @Column()
    cod_chamado: string;

    @Column()
    cliente: string;

    @Column()
    id_tecnico: number;

    @JoinColumn({ name: "id_tecnico" })
    @ManyToOne(() => Tecnicos)
    idTecnico: Tecnicos

    @Column()
    nota: number;

    @CreateDateColumn()
    created_at: Date;
}

export { Chamados };