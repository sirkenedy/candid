import { IsNotEmpty, IsEmail } from 'class-validator';
import { Soldiers as Soldier } from '../entities/soldier.entity';
import { Validate } from 'class-validator';
import { Unique } from 'src/validators';

export class CreateSoldierDto {
    @IsNotEmpty({"message" : "Name field cannot be empty"})
    name: string;

    @IsNotEmpty({"message" : "Name field cannot be empty"})
    @Validate(Unique, [Soldier, "email"])
    email: string;
    
    @IsNotEmpty({"message" : "Age field cannot be empty"})
    age: number;

    @IsNotEmpty({"message" : "state of origin field cannot be empty"})
    state_of_origin: number;

    @IsNotEmpty({"message" : "local goverment field cannot be empty"})
    local_govt: number;
    
    visibility: boolean;
}
