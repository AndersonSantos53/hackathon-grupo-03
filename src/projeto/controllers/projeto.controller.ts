import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common";
import { Projeto } from "../entities/projeto.entity";
import { ProjetoService } from "../services/projeto.service";


@Controller()
export class ProjetoController {
    constructor( private readonly projetoService:ProjetoService) { }

    @Get()
    @HttpCode (HttpStatus.OK)
    findAll(): Promise<Projeto[]> {
        return this.projetoService.findAll();
    }
}