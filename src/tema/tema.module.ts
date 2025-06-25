import { TemaService } from './services/tema.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tema } from './entities/tema.entity';
import { TemaController } from './controllers/tema.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Tema])],
  providers: [TemaController],
  controllers: [TemaService],
  exports: [TemaService],
})
export class TemaModule {}
