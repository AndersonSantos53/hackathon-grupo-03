import { TypeOrmModule } from "@nestjs/typeorm";
import {Module} from "@nestjs/common"
import { Grupo } from "./entities/grupo.entity";
import { GrupoService } from "./services/grupo.service";
import { GrupoController } from "./controllers/grupo.controller";


@Module({
    imports: [TypeOrmModule.forFeature([Grupo])],
    providers: [GrupoService],
    controllers: [GrupoController],
    exports: [TypeOrmModule]
})

export class GrupoModule{}