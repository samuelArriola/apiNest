import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id_product: number;

    @Column()
    nombre: string;

    @Column()
    precio: string;

}
