import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, AfterLoad } from 'typeorm';
import { Roles as Role } from '../../roles/entities/role.entity'

@Entity()
export class Users {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password?: string;

  @Column()
  image?: string;

  @Column({ default: null, type:"datetime"})
  created_at?:  Date;

  @Column({ default: null, type:"datetime"})
  updated_at?:  Date;

  @ManyToOne(() => Role, role => role.users)
  role: Role;

  @AfterLoad()
    loaded() {
      this.image = `${process.env.APP_URL}/users/profileimg/${this.image}`
    }
}