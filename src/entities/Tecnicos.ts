import {
    Entity,
    PrimaryColumn,
    Generated,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
  } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("technical")
class Tecnicos{
    
    @PrimaryColumn()
    id: string;
    
    @Column()
    name: string;

    @Column()
    email: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
    if (!this.id) {
      this.id = uuid();
    }
    
}
}

export { Tecnicos };