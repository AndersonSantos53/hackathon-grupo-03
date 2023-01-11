import { Injectable } from "@nestjs/common";
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
}