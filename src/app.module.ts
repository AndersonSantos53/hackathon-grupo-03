/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Projeto } from './projeto/entities/projeto.entity';
import { Grupo } from './grupopi/entities/grupo.entity';
import { ProjetoModule } from './projeto/projeto.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_hackathon',
      entities: [Projeto],
      synchronize: true,
    }),
    ProjetoModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
