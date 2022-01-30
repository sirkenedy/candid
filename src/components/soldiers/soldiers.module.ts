import { Module } from '@nestjs/common';
import { SoldiersService } from './soldiers.service';
import { SoldiersController } from './soldiers.controller';
import { Soldiers as Soldier } from './entities/soldier.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Soldier])],
  exports: [TypeOrmModule, SoldiersService],
  controllers: [SoldiersController],
  providers: [SoldiersService]
})
export class SoldiersModule {}
