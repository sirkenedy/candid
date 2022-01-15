import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFiles, UseInterceptors, HttpStatus, Res } from '@nestjs/common';
import { editFileName, fileFilter, imageFileFilter, fileDestination } from './../../utils/uploads/image-upload.utils';
import { Response } from 'express';
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
  findAll(@Param('guardId') guardId: number) {
    // return this.guarantorsService.find({guardId});
  }

  @Get(':id')
  findOne(@Param('guardId') guardId: number, @Param('id') id: number) {
    return this.guarantorsService.findOne({id, guardId});
  }

  @Patch(':id')
  @UseInterceptors(FileFieldsInterceptor([
  ], {//create an exception file to be thrown if file format is not supported
  }))
  update(@Param('id') id: string, @Param('guardId') guardId: string, @AddParamToBody({
    paramName: 'id',
    transformTo: transformToTypeTypes.INT
}) @Body() updateGuarantorDto: UpdateGuarantorDto, @Res() res: Response) {
    const response = this.guarantorsService.update({id, guardId }, updateGuarantorDto);
    if(response) return res.status(HttpStatus.OK).json({"message" : "guarantor information updated successfully"});
    return res.status(HttpStatus.NOT_FOUND).json({"error" : "The resource to be updated no longer exist"})
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Param('guardId') guardId: string) {
    return this.guarantorsService.remove({id, guardId});
  }
}
