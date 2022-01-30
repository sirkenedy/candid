import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Users as User } from '../../users/entities/user.entity'

@Entity()
export class Soldiers {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  age: string;

  @Column()
  state_of_origin: string;

  @Column({ default: null, type:"datetime"})
  created_at?:  Date;

  @Column({ default: null, type:"datetime"})
  updated_at?:  Date;
}