import { Controller, HttpCode, Res, HttpStatus, UseGuards, Post, Body, UseInterceptors, UploadedFiles, Param, Get  } from '@nestjs/common';
import { JwtAuthGuard } from './../auth/guard/jwt-auth.guard';
import { UserImageUploadDto } from './dto/user-image-upload.dto';
import { UsersService } from './users.service';
import { editFileName, fileFilter, imageFileFilter, fileDestination } from './../../utils/uploads/image-upload.utils';
import { AddFilesToBody, AddParamToBody, transformToTypeTypes } from 'src/utils/decorators';
import { diskStorage } from  'multer';
import { FileFieldsInterceptor } from '@nestjs/platform-express'
import { AddHeaderToBody } from 'src/utils/decorators/add-header.decorator';
import { Response } from 'express';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @UseGuards(JwtAuthGuard)
    @Post('upload/profile')
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'image', maxCount: 1 },
      ], {
        storage:diskStorage({
            destination: './files/user-images',
            filename: editFileName,
          }),
        fileFilter : fileFilter, //create an exception file to be thrown if file format is not supported
      }))
    uploadImage(@UploadedFiles() files: { image?: Express.Multer.File[] }, @AddFilesToBody({
        paramName: ['image']
    }) @AddHeaderToBody({
        paramName: "user"
    }) @Body() imageUpload : UserImageUploadDto, @Res() res: Response) {
        this.usersService.imageUpload(imageUpload);
        res.status(HttpStatus.OK).json({"message" : "Profile image uploaded successfully"});
    }

    @Get('profileimg/:imgpath')
    seeUploadedImage(@Param('imgpath') image, @Res() res) {
        return res.sendFile(image, { root: './files/user-images' });
    }
}
