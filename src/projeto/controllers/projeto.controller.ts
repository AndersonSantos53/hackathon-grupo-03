/* eslint-disable prettier/prettier */
import {Put, Post, Body, Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe } from "@nestjs/common";
import { Projeto } from "../entities/projeto.entity";
import { ProjetoService } from "../services/projeto.service";


@Controller('/projeto')
export class ProjetoController {
    constructor( private readonly projetoService:ProjetoService) { }

    @Get()
    @HttpCode (HttpStatus.OK)
    findAll(): Promise<Projeto[]> {
        return this.projetoService.findAll();
    }

    @Get('/:id')
    @HttpCode (HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Projeto> {
        return this.projetoService.findById(id)
    }

    @Get('/nome/:nomeProjeto')
    @HttpCode(HttpStatus.OK)
    findByNomeProjeto(@Param('nomeProjeto')nomeProjeto: string): Promise <Projeto[]> {
        return this.projetoService.findByNomeProjeto(nomeProjeto)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() projeto: Projeto): Promise<Projeto> {
        return this.projetoService.create(projeto);
    }

    @Put()
    @HttpCode (HttpStatus.OK)
    update(@Body()projeto:Projeto): Promise <Projeto> {
        return this.projetoService.update(projeto)
    }

}