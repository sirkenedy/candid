import { Remarks as Remark } from './../../remarks/entities/remark.entity';
import { Guarantors as Guarantor } from './../../guarantors/entities/guarantor.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, OneToOne } from 'typeorm';

@Entity()
export class Guards {
    @PrimaryGeneratedColumn('increment')
    id: number;

    // @Column({default: false})
    // vetStatus: boolean;

    @Column()
    surname: string;

    @Column()
    otherName: string;

    @Column()
    email: string;

    @Column()
    image: string;

    @Column()
    stateOfOrigin: string;

    @Column()
    lga: string;

    @Column()
    dob: string;

    @Column()
    age: string;

    @Column()
    bloodGroup: string;

    @Column()
    address: string;

    @Column()
    sex: string;

    @Column()
    religion: string;

    @Column()
    maritalStatus: string;

    @Column()
    phoneNo: number;

    @Column()
    wifeName: string;

    @Column()
    wifePhoneNumber: number;

    @Column()
    nextOfKin: string;

    @Column()
    nextOfKinPhoneNumber: number;

    @Column()
    eduQualification: string;

    @Column()
    previousEmployer: string;

    @Column()
    previousEmployerAddress: string;

    @Column()
    resignationReason: string;

    @Column()
    medicalCondition: string;

    @Column()
    fatherName: string;

    @Column()
    fatherNameAddress: string;

    @Column()
    fatherNamePhoneNumber: number;

    @Column()
    motherName: string;

    @Column()
    motherNameAddress: string;

    @Column()
    motherNamePhoneNumber: number;

    @Column()
    bodyMark: boolean;

    @Column()
    bodyMarkPart: string;

    @Column()
    society: string;

    @Column()
    signature: string;

    @Column({ default: null, type:"datetime"})
    created_at?:  Date;

    @Column({ default: null, type:"datetime"})
    updated_at?:  Date;

    @OneToMany(() => Guarantor, guarantor => guarantor.guard)
    guarantors?: Guarantor[];

    @OneToOne(() => Remark, remark => remark.guard)
    // @JoinColumn()
    remark: Remark;
}
