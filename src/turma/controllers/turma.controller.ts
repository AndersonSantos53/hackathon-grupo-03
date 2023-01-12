/* eslint-disable prettier/prettier */
import {Put, Post, Body, Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Delete } from "@nestjs/common";
import { TurmaService } from "../services/turma.service";
import { Turma } from "../entities/turma.entity";


@Controller('/turmas')
export class TurmaController {
    constructor( private readonly turmaService:TurmaService) { }

    @Get()
    @HttpCode (HttpStatus.OK)
    findAll(): Promise<Turma[]> {
        return this.turmaService.findAll();
    }

    @Get('/:id')
    @HttpCode (HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Turma> {
        return this.turmaService.findById(id)
    }

    @Get('/nome/:nomeTurma')
    @HttpCode(HttpStatus.OK)
    findByNomeTurma(@Param('nomeTurma')nomeTurma: string): Promise <Turma[]> {
        return this.turmaService.findByNomeTurma(nomeTurma)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() turma: Turma): Promise<Turma> {
        return this.turmaService.create(turma);
    }

    @Put()
    @HttpCode (HttpStatus.OK)
    update(@Body()projeto:Turma): Promise <Turma> {
        return this.turmaService.update(turma)
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id:number) {
        return this.turmaService.delete(id);
    }
}