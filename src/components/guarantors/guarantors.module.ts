import { GuardsModule } from './../guards/guards.module';
import { Module } from '@nestjs/common';
import { GuarantorsService } from './guarantors.service';
import { GuarantorsController } from './guarantors.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Guarantors as Guarantor } from './entities/guarantor.entity';

@Module({
  imports: [GuardsModule, TypeOrmModule.forFeature([Guarantor])],
  exports: [TypeOrmModule],
  controllers: [GuarantorsController],
  providers: [GuarantorsService]
})
export class GuarantorsModule {}
