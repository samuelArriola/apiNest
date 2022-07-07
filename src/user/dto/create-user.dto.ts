import {  IsDateString, IsEmail, IsNotEmpty, IsString, Min, MinLength } from "class-validator";


export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @MinLength(5,{ message: 'Apellido demaciado corto, minimo 5 caracteres '})
    last_name: string;

    @Min(1)
    @IsNotEmpty()
    edad: number;

    @IsNotEmpty()
    @MinLength(3)
    type:string;

    @IsEmail()
    mail: string;

    @IsNotEmpty()
    @MinLength(5)
    password: string;

    @IsDateString()
    date_birth: string;
}
