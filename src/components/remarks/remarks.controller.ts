import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { RemarksService } from './remarks.service';
import { CreateRemarkDto } from './dto/create-remark.dto';
import { UpdateRemarkDto } from './dto/update-remark.dto';
import { diskStorage } from  'multer';
import { FilesInterceptor } from '@nestjs/platform-express'
import { editFileName, fileFilter, imageFileFilter, fileDestination } from './../../utils/uploads/image-upload.utils';

@Controller('guards/:guardId/remarks')
export class RemarksController {
  constructor(private readonly remarksService: RemarksService) {}

  @Post()
  @UseInterceptors(FilesInterceptor('pictures',10, {
    storage:diskStorage({
      destination: fileDestination,
      filename: editFileName,
    }),
  fileFilter : fileFilter,
  }))
  create(@UploadedFiles() pictures: Array<Express.Multer.File>, @Body() createRemarkDto: CreateRemarkDto) {
    console.log("working",JSON.stringify(pictures));
    return this.remarksService.create(createRemarkDto);
  }

  @Get()
  findAll() {
    return this.remarksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Param('guardId') guardId: string) {
    return this.remarksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRemarkDto: UpdateRemarkDto) {
    return this.remarksService.update(+id, updateRemarkDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.remarksService.remove(+id);
  }
}
