import { PartialType } from '@nestjs/mapped-types';
import { CreateGuarantorDto } from './create-guarantor.dto';
import { Validate, IsEmail, IsNotEmpty, IsOptional } from 'class-validator';
import { OmitType } from '@nestjs/mapped-types';

export class UpdateGuarantorDto extends OmitType(CreateGuarantorDto, ['id','image', 'signature'] as const) {
    @IsNotEmpty()
    id: number

}