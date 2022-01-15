import { IsNotEmpty, IsEmail, IsDate, IsBoolean, IsNumber } from 'class-validator';
import { Remarks as Remark } from '../entities/remark.entity';

export class CreateRemarkDto {
    id: number;

    @IsNotEmpty({"message" : "Enter your remarks"})
    comment: string;

    // @IsNotEmpty({"message" : "selected user onsite photo for review"})
    // pictures: JSON;
    
}
