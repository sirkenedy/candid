import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, UseGuards } from '@nestjs/common';
import { Response } from 'express';import { SoldiersService } from './soldiers.service';
import { Soldiers as Soldier } from './entities/soldier.entity';
import { JwtAuthGuard } from './../auth/guard/jwt-auth.guard';
import { CreateSoldierDto } from './dto/create-soldier.dto';
import { UpdateSoldierDto } from './dto/update-soldier.dto';

@Controller('soldiers')
export class SoldiersController {
  constructor(private readonly soldiersService: SoldiersService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() CreateSoldierDto: CreateSoldierDto) {
    return this.soldiersService.create(CreateSoldierDto);
  }

  @Get()
  findAll() {
    return this.soldiersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Soldier> {
    return this.soldiersService.findOne(+id)
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() UpdateSoldierDto: UpdateSoldierDto, @Res() res: Response) {
    const response = await this.soldiersService.update(+id, UpdateSoldierDto);
    if(response) return res.status(HttpStatus.OK).json({"message" : "Soldier information updated successfully"});
    return res.status(HttpStatus.NOT_FOUND).json({"error" : "The resource to be updated no longer exist"})
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    await this.soldiersService.remove(+id);
    res.status(HttpStatus.OK).json({"message" : "Soldier details deleted successfully"});
  }
}
