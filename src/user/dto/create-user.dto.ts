import {  IsDate, IsEmail, IsNotEmpty, MinLength } from "class-validator";


export class CreateUserDto {
    @IsNotEmpty()
    name: string;

    @MinLength(5)
    last_name: string;

    @IsEmail()
    mail: string;

    @IsNotEmpty()
    password: string;

    @IsDate()
    date_birth: string;
}
