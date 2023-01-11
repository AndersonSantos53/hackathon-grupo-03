import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { Grupo } from "../entities/grupo.entity";
import { GrupoService } from "../services/grupo.service";


@Controller("/grupos")
export class GrupoController {
    constructor (private readonly grupoService: GrupoService) {  }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Grupo[]> {
        return this.grupoService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Grupo> {
        return this.grupoService.findById(id)
    }

    @Get('/nome/:nome')
    @HttpCode(HttpStatus.OK)
    findByNome(@Param('nome') nome: string): Promise<Grupo[]> {
        return this.grupoService.findByNome(nome)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() grupo: Grupo): Promise<Grupo> {
        return this.grupoService.create(grupo);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() grupo: Grupo): Promise<Grupo> {
        return this.grupoService.update(grupo); 
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.grupoService.delete(id);
    }
}