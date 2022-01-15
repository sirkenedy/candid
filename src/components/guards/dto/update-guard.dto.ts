// import { PartialType } from '@nestjs/mapped-types';
import { CreateGuardDto } from './create-guard.dto';
import { Guards as Guard } from '../entities/guard.entity';
import { Validate, IsEmail, IsNotEmpty, IsOptional } from 'class-validator';
import { OmitType } from '@nestjs/mapped-types';
import { Unique } from 'src/validators';
 
export class UpdateGuardDto extends OmitType(CreateGuardDto, ['id', 'email','image', 'signature'] as const) {
    @IsNotEmpty()
    id: number

    @IsEmail({"message" : "Enter a valid email adress"})
    @Validate(Unique, [Guard, "email", "id"])
    email: string;

    @IsOptional()
    image: string;

    @IsOptional()
    signature: string;
}
