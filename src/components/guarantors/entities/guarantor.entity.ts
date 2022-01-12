import { Guards as Guard } from '../../guards/entities/guard.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Guarantors {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @ManyToOne(() => Guard, guard => guard.guarantors)
    guard: Guard;
}
