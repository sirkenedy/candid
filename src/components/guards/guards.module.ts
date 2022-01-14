import { Module } from '@nestjs/common';
import { GuardsService } from './guards.service';
import { GuardsController } from './guards.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Guards as Guard } from './entities/guard.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Guard])],
  exports: [TypeOrmModule, GuardsService],
  controllers: [GuardsController],
  providers: [GuardsService]
})
export class GuardsModule {}
