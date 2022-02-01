import { IsNotEmpty } from 'class-validator';

export class UserImageUploadDto {
    @IsNotEmpty({"message" : "select an image to upload"})
    image: string;

    @IsNotEmpty()
    user: object
}
