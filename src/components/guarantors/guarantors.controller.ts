import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { editFileName, fileFilter, imageFileFilter, fileDestination } from './../../utils/uploads/image-upload.utils';
import { AddFilesToBody, AddParamToBody, transformToTypeTypes } from 'src/utils/decorators';
import { diskStorage } from  'multer';
import { FileFieldsInterceptor } from '@nestjs/platform-express'
import { GuarantorsService } from './guarantors.service';
import { CreateGuarantorDto } from './dto/create-guarantor.dto';
import { UpdateGuarantorDto } from './dto/update-guarantor.dto';

@Controller('guards/:guardId/guarantors')
export class GuarantorsController {
  constructor(private readonly guarantorsService: GuarantorsService) {}

  @Post()
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'image', maxCount: 1 },
    { name: 'signature', maxCount: 1 },
  ], {
    storage:diskStorage({
        destination: fileDestination,
        filename: editFileName,
      }),
    fileFilter : fileFilter, //create an exception file to be thrown if file format is not supported
  }))
  create(@Param('guardId') guardId: number, @UploadedFiles() files: { image?: Express.Multer.File[], signature?: Express.Multer.File[] }, @AddFilesToBody({
    paramName: ['image', 'signature']
}) @Body() createGuarantorDto: CreateGuarantorDto) {
    return this.guarantorsService.create(guardId, createGuarantorDto);
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
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'image', maxCount: 1 },
    { name: 'signature', maxCount: 1 },
  ], {
    storage:diskStorage({
        destination: fileDestination,
        filename: editFileName,
      }),
    fileFilter : fileFilter, //create an exception file to be thrown if file format is not supported
  }))
  update(@Param('id') id: string, @AddParamToBody({
    paramName: 'id',
    transformTo: transformToTypeTypes.INT
}) @Body() updateGuarantorDto: UpdateGuarantorDto) {
    return this.guarantorsService.update(+id, updateGuarantorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.guarantorsService.remove(+id);
  }
}
