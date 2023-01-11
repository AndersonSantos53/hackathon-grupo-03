import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Grupo } from "../entities/grupo.entity";


@Injectable()
export class GrupoService {
    constructor (
        @InjectRepository(Grupo)
        private grupoRepository: Repository<Grupo>
    ) {  }

    async findAll(): Promise<Grupo[]> {
        return await this.grupoRepository.find();
    }

    async findById(id: number): Promise<Grupo> {

        let grupo = await this.grupoRepository.findOne({
            where: {
                id
            }
        });

        if(!grupo)
            throw new HttpException('Grupo não encontrado!', HttpStatus.NOT_FOUND);
        
        return grupo;
    }
}