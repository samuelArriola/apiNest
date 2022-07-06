import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CreateUserDto } from "../dto/create-user.dto";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id_user: number;

    @Column()
    name: string;

    @Column()
    last_name: string;

    @Column()
    mail: string;

    @Column()
    password: string;

    @Column()
    date_birth: string;

    static create(data: CreateUserDto){
        const user = new User();
        user.mail = data.mail;
        user.last_name = data.last_name;
        user.password = data.password;
        user.date_birth = data.date_birth;

        return user;
    }
}
