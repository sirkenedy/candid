import { PartialType } from '@nestjs/mapped-types';
import { CreateGuarantorDto } from './create-guarantor.dto';

export class UpdateGuarantorDto extends PartialType(CreateGuarantorDto) {}
