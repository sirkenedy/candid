import { IsNotEmpty, IsEmail, IsDate, IsBoolean, IsNumber } from 'class-validator';
import { Guards as Guard } from '../entities/guard.entity';
import { Validate } from 'class-validator';
import { Unique } from 'src/validators';
export class CreateGuardDto {
    id: number;

    // @IsNotEmpty({"message" : "vetstatus field cannot be empty"})
    // vetStatus: string;

    @IsNotEmpty({"message" : "Name field cannot be empty"})
    surname: string;

    @IsNotEmpty({"message" : "Othername field cannot be empty"})
    otherName: string;
    
    @IsEmail({"message" : "Enter a valid email adress"})
    @Validate(Unique, [Guard, "email"])
    email: string;
    
    @IsNotEmpty({"message" : "upload an image"})
    image: string;

    @IsNotEmpty({"message" : "date of birth field must be of type date"})
    dob: string; // Date
    
    @IsNotEmpty({"message" : "specify your age"})
    // @IsNumber()
    age: string;
    
    @IsNotEmpty({"message" : "blood group field cannot be empty"})
    bloodGroup: string;
    
    @IsNotEmpty({"message" : "Adress field cannot be empty"})
    address: string;
    
    @IsNotEmpty({"message" : "select your sex"})
    sex: string;
    
    @IsNotEmpty({"message" : "select your religion"})
    religion: string;
    
    @IsNotEmpty({"message" : "marital status field cannot be empty"})
    maritalStatus: string;
    
    @IsNotEmpty({"message" : "phone number field cannot be empty"})
    phoneNo: number;
    
    @IsNotEmpty({"message" : "Enter spouse name"})
    wifeName: string;
    
    @IsNotEmpty({"message" : "spouse/wife phone number field cannot be empty"})
    wifePhoneNumber: number;
    
    @IsNotEmpty({"message" : "next of kin name cannot be empty"})
    nextOfKin: string;
    
    @IsNotEmpty({"message" : "next of kin phone number field cannot be empty"})
    nextOfKinPhoneNumber: number;
    
    @IsNotEmpty({"message" : "education qualification field cannot be empty"})
    eduQualification: string;
    
    @IsNotEmpty({"message" : "specify your previous employer"})
    previousEmployer: string;
    
    @IsNotEmpty({"message" : "specify your previous employer address"})
    previousEmployerAddress: string;
    
    @IsNotEmpty({"message" : "let us know why you leave/leaving your previous job"})
    resignationReason: string;
    
    @IsNotEmpty({"message" : "specify any medical conditions"})
    medicalCondition: string;
    
    @IsNotEmpty({"message" : "Enter your father name"})
    fatherName: string;
    
    @IsNotEmpty({"message" : "Enter your father address"})
    fatherNameAddress: string;
    
    @IsNotEmpty({"message" : "Enter your father phone number"})
    fatherNamePhoneNumber: number;
    
    @IsNotEmpty({"message" : "Enter your mother name"})
    motherName: string;
    
    @IsNotEmpty({"message" : "Enter your mother address"})
    motherNameAddress: string;
    
    @IsNotEmpty({"message" : "Enter your mother phone number"})
    motherNamePhoneNumber: number;
    
    @IsNotEmpty({"message" : "body mark field must either be true or false"})
    bodyMark: boolean;
    
    @IsNotEmpty({"message" : "Enter the part of the body where mark is located"})
    bodyMarkPart: string;
    
    @IsNotEmpty({"message" : "please, specify the society you belong to"})
    society: string;
    
    @IsNotEmpty({"message" : "upload your signature"})
    signature: string;
}
