/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Projeto } from "../entities/projeto.entity";
import { ILike, Repository } from "typeorm";


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

    async findByNomeProjeto(nomeProjeto: string): Promise <Projeto[]> {
        return await this.projetoRepository.find({
            where:{
                nomeProjeto: ILike(`%${nomeProjeto}%`)
            }
        })
    }

    async create (projeto: Projeto): Promise<Projeto> {
        return await this.projetoRepository.save(projeto);
    }
}