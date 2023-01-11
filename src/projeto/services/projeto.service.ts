/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Projeto } from "../entities/projeto.entity";
import { Repository } from "typeorm";


@Injectable()
export class ProjetoService {
    constructor (
        @InjectRepository(Projeto)
        private projetoRepository: Repository <Projeto>

    ) {}

    async findAll (): Promise <Projeto[]>{
        return await this.projetoRepository.find();
    }

    async findById(id: number): Promise<Projeto> {
        const projeto = await this.projetoRepository.findOne({
            where: {
                id
            }
        });

        if (!projeto)
        throw new HttpException('Projeto não encontrado!', HttpStatus.NOT_FOUND);

        return projeto;
    }
}