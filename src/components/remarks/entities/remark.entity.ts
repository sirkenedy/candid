import { Guards as Guard } from '../../guards/entities/guard.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class Remarks {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type:"json"})
    pictures: JSON;

    @Column()
    comment: string;
    
    @Column({ default: null, type:"datetime"})
    created_at?:  Date;

    @Column({ default: null, type:"datetime"})
    updated_at?:  Date;

    @OneToOne(() => Guard, guard => guard.remark) // specify inverse side as a second parameter
    @JoinColumn()
    guard: Guard;
}
