import { Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe } from "@nestjs/common";
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
}