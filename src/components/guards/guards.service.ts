import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Guards as Guard } from './entities/guard.entity';
import { CreateGuardDto } from './dto/create-guard.dto';
import { UpdateGuardDto } from './dto/update-guard.dto';

@Injectable()
export class GuardsService {
  constructor(
    @InjectRepository(Guard)
    private guardsRepository: Repository<Guard>,
  ) {}

  async create(createGuardDto: CreateGuardDto): Promise<Guard> {
    return await this.guardsRepository.save(createGuardDto).then(res => res).catch();
  }

  async findAll(): Promise<Guard[]> {
    return await this.guardsRepository.find()
  }

  async findOne(id: number): Promise<void | Guard> {
    console.log(id)
    return await this.guardsRepository.findOneOrFail(id).then(res => res).catch (e => {
      throw new NotFoundException()
    });
  }

  async update(id: number, updateGuardDto: UpdateGuardDto): Promise<Guard | UpdateResult | undefined> {
    this.findOne(id);
    return await this.guardsRepository.update(id, updateGuardDto).then(res => res);
  }

  async remove(id: number) {
    this.findOne(id);
    return await this.guardsRepository.delete(id);
  }
}
