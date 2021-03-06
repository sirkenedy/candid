import { IsNotEmpty, IsEmail, IsDate, IsBoolean, IsNumber } from 'class-validator';
import { Guarantors as Guarantor } from '../entities/guarantor.entity';
import { Validate } from 'class-validator';
import { Unique } from 'src/validators';

export class CreateGuarantorDto {
    id: number;

    @IsNotEmpty({"message" : "Surname field cannot be empty"})
    surname: string;

    @IsNotEmpty({"message" : "Othername field cannot be empty"})
    otherName: string;

    @IsNotEmpty({"message" : "date of birth field must be of type date"})
    dob: string;
    
    @IsNotEmpty({"message" : "Enter your age"})
    age: string;
    
    @IsNotEmpty({"message" : "specify your phone numbere"})
    phoneNumber: string;
    
    @IsNotEmpty({"message" : "upload an image"})
    image: string;
    
    @IsNotEmpty({"message" : "Enter spouse name"})
    spouseName: string;
    
    @IsNotEmpty({"message" : "Enter your residential address"})
    residentialAddress: string;
    
    @IsNotEmpty({"message" : "no religion selected"})
    religion: string;
    
    @IsNotEmpty({"message" : "enter your profession"})
    profession: string;
    
    @IsNotEmpty({"message" : "specify you business or office name"})
    businessName: string;
    
    @IsNotEmpty({"message" : "Enter position help in your company"})
    positionHeld: string;
    
    @IsNotEmpty({"message" : "Enter your home address"})
    officeAddress: string;
    
    @IsNotEmpty({"message" : "phone number field cannot be empty"})
    officePhoneNumber: string;
    
    @IsNotEmpty({"message" : "relationship with applicant not specified"})
    applicantRelationship: string;
    
    @IsNotEmpty({"message" : "upload your signature"})
    signature: string;
    
    @IsNotEmpty({"message" : "specify your nationality"})
    nationality  : string;

}
