import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFiles, UseInterceptors, UseGuards } from '@nestjs/common';
import { editFileName, fileFilter, imageFileFilter, fileDestination } from './../../utils/uploads/image-upload.utils';
import { AddFilesToBody, AddParamToBody, transformToTypeTypes } from 'src/utils/decorators';
import { diskStorage } from  'multer';
import { FileFieldsInterceptor } from '@nestjs/platform-express'
import { GuardsService } from './guards.service';
import { CreateGuardDto } from './dto/create-guard.dto';
import { UpdateGuardDto } from './dto/update-guard.dto';
import { JwtAuthGuard } from './../auth/guard/jwt-auth.guard';

@Controller('guards')
export class GuardsController {
  constructor(private readonly guardsService: GuardsService) {}

  @UseGuards(JwtAuthGuard)
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
  create(@UploadedFiles() files: { image?: Express.Multer.File[], signature?: Express.Multer.File[] }, @AddFilesToBody({
    paramName: ['image', 'signature']
}) @Body() createGuardDto: CreateGuardDto) {
    return this.guardsService.create(createGuardDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.guardsService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.guardsService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
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
}) @Body() updateGuardDto: UpdateGuardDto) {
    return this.guardsService.update(+id, updateGuardDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.guardsService.remove(+id);
  }
}
