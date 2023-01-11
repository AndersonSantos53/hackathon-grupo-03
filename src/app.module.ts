/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Projeto } from './projeto/entities/projeto.entity';
import { Grupo } from './grupopi/entities/grupo.entity';
import { ProjetoModule } from './projeto/projeto.module';
import { GrupoModule } from './grupopi/grupo.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_hackathon',
      entities: [Projeto, Grupo],
      synchronize: true,
    }),
    ProjetoModule,
    GrupoModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
