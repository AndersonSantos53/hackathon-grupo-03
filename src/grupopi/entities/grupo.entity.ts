import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({name:"tb_grupos"})
export  class Grupo {
    
    @PrimaryGeneratedColumn()
    id:number

    @IsNotEmpty()
    @Column({length:100, nullable: false})
    numeroGrupo:number

    @IsNotEmpty()
    @Column({length:5000, nullable:false})
    maisInfos:string
    
}