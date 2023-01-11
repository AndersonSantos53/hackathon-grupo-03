import { TypeOrmModule } from "@nestjs/typeorm";
import {Module} from "@nestjs/common"
import { Grupo } from "./entities/grupo.entity";


@Module({
    imports: [TypeOrmModule.forFeature([Grupo])],
    providers: [],
    controllers: [],
    exports: [TypeOrmModule]
})

export class GrupoModule{}