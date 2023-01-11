import { Body, HttpCode, HttpException, HttpStatus, Injectable, Put } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
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

    async findByNome(nome: string): Promise<Grupo[]> {
        return await this.grupoRepository.find({
            where:{
                nome: ILike(`%${nome}`)
            }
        })
    }

    async create(grupo: Grupo): Promise<Grupo> {
        return await this.grupoRepository.save(grupo)
    }

    async update(grupo: Grupo): Promise<Grupo> {

        const buscaGrupo: Grupo = await this.findById(grupo.id);

        if (!buscaGrupo || !grupo.id)
            throw new HttpException('Grupo não encontrado!', HttpStatus.NOT_FOUND);
        
        return await this.grupoRepository.save(grupo);
    }

    async delete(id: number): Promise<DeleteResult> {

        const buscaGrupo = await this.findById(id);

        if(!buscaGrupo)
            throw new HttpException('Grupo não encontrado!', HttpStatus.NOT_FOUND);

        return await this.grupoRepository.delete(id);
    }

    
}