/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Turma } from "../entities/turma.entity";


@Injectable()
export class TurmaService {
    turmaRepository: any;
    constructor (
        @InjectRepository(Turma)
        private projetoRepository: Repository <Turma>

    ) {}

    async findAll (): Promise <Turma[]>{
        return await this.turmaRepository.find();
    }

    async findById(id: number): Promise<Turma> {
        const turma = await this.turmaRepository.findOne({
            where: {
                id
            }
        });

        if (!turma)
        throw new HttpException('Turma não encontrada!', HttpStatus.NOT_FOUND);

        return turma;
    }

    async findByNomeTurma(nomeTurma: string): Promise <Turma[]> {
        return await this.turmaRepository.find({
            where:{
                nomeTurma: ILike(`%${nomeTurma}%`)
            }
        })
    }

    async create (turma: Turma): Promise<Turma> {
        return await this.turmaRepository.save(turma);
    }

    async update( turma: Turma): Promise <Turma> {
        const buscaTurma: Turma = await this.findById(turma.id);

        if(!buscaTurma || ! turma.id)
        throw new HttpException('Projeto não encontrado!', HttpStatus.NOT_FOUND);

        return await this.projetoRepository.save(turma);
    }

    async delete(id: number): Promise<DeleteResult> {
        const buscaTurma = await this.findById(id);

        if(!buscaTurma)
            throw new HttpException('Turma não encontrada!', HttpStatus.NOT_FOUND);

        return await this.turmaRepository.delete(id);
    }
}