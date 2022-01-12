import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GuarantorsService } from './guarantors.service';
import { CreateGuarantorDto } from './dto/create-guarantor.dto';
import { UpdateGuarantorDto } from './dto/update-guarantor.dto';

@Controller('guarantors')
export class GuarantorsController {
  constructor(private readonly guarantorsService: GuarantorsService) {}

  @Post()
  create(@Body() createGuarantorDto: CreateGuarantorDto) {
    return this.guarantorsService.create(createGuarantorDto);
  }

  @Get()
  findAll() {
    return this.guarantorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.guarantorsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGuarantorDto: UpdateGuarantorDto) {
    return this.guarantorsService.update(+id, updateGuarantorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.guarantorsService.remove(+id);
  }
}
