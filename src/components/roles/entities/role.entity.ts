import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Users as User } from '../../users/entities/user.entity'

@Entity()
export class Roles {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  visibility?: string;

  @Column({ default: null, type:"datetime"})
  created_at?:  Date;

  @Column({ default: null, type:"datetime"})
  updated_at?:  Date;

  @OneToMany(() => User, user => user.role)
    users?: User[];
}