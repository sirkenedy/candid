import { Guarantors as Guarantor } from './../../guarantors/entities/guarantor.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Guards {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @OneToMany(() => Guarantor, guarantor => guarantor.guard)
    guarantors?: Guarantor[];
}
