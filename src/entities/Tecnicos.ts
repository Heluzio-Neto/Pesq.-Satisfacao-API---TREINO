import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    Generated,
  } from "typeorm";
import { v4 as uuid } from "uuid";

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

    // constructor() {
    //   if (!this.id) {
    //     this.id = uuid();
    //   }
    // }
}

export { Tecnicos };