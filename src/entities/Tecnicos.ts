import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    Generated,
  } from "typeorm";
@Entity("technical")
class Tecnicos{
    
    @PrimaryGeneratedColumn()
    @Generated("increment")
    id: number;
    
    @Column()
    name: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export { Tecnicos };