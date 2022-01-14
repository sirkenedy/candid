import { Guards as Guard } from '../../guards/entities/guard.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Guarantors {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    surname: string;

    @Column()
    otherName: string;

    @Column()
    phoneNumber: number;

    @Column()
    image: string;

    @Column()
    dob: Date;

    @Column()
    age: number;

    @Column()
    spouseName: string;

    @Column()
    residentialAddress: string;

    @Column()
    religion: string;

    @Column()
    profession: string;

    @Column()
    businessName: string;

    @Column()
    positionHeld: string;

    @Column()
    officeAddress: string;

    @Column()
    officePhoneNumber: number;

    @Column()
    applicantRelationship: string;

    @Column()
    signature: string;

    @Column()
    nationality: string;

    @Column({ default: null, type:"datetime"})
    created_at?:  Date;

    @Column({ default: null, type:"datetime"})
    updated_at?:  Date;

    @ManyToOne(() => Guard, guard => guard.guarantors)
    @JoinColumn({ name: "guardId" })
    guard?: Guard;
}
