import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: "tb_turma"})
export class Turma {

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({length: 5000, nullable: false})
    descricao: string

    @IsNotEmpty()
    isAtivo: boolean
}