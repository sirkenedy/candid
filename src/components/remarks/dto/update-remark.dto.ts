import { PartialType } from '@nestjs/mapped-types';
import { Validate, IsEmail, IsNotEmpty, IsOptional } from 'class-validator';
import { OmitType } from '@nestjs/mapped-types';
import { CreateRemarkDto } from './create-remark.dto';

export class UpdateRemarkDto extends OmitType(CreateRemarkDto, [] as const) {
    @IsNotEmpty()
    id: number

}
