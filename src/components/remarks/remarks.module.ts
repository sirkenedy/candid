import { Module } from '@nestjs/common';
import { RemarksService } from './remarks.service';
import { RemarksController } from './remarks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Remarks as Remark } from './entities/remark.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Remark])],
  exports: [TypeOrmModule],
  controllers: [RemarksController],
  providers: [RemarksService]
})
export class RemarksModule {}
