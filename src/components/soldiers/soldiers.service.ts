import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Soldiers as Soldier } from './entities/soldier.entity';
import { CreateSoldierDto } from './dto/create-soldier.dto';
import { UpdateSoldierDto } from './dto/update-soldier.dto';

@Injectable()
export class SoldiersService {
  constructor(
    @InjectRepository(Soldier)
    private soldiersRepository: Repository<Soldier>,
  ) {}

  async create(data: object)  {
    return await this.soldiersRepository.save(data).then(res => res);
  }

  findAll(): Promise<Soldier[]> {
    return this.soldiersRepository.find()
  }

  async findOne(id: number): Promise<Soldier> {
    return await this.soldiersRepository.findOneOrFail(id).then(res => res).catch (e => {
      throw new NotFoundException(e)
    });
  }

  async update(id:number, data: object): Promise<Soldier | UpdateResult | undefined> {
    this.findOne(id)
    return await this.soldiersRepository.update(id, data).then(res => res);
  }

  async remove(id: number) {
    this.findOne(id)
    return await this.soldiersRepository.delete(id);
  }
}
