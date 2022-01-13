import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Remarks as Remark } from './entities/remark.entity';
import { CreateRemarkDto } from './dto/create-remark.dto';
import { UpdateRemarkDto } from './dto/update-remark.dto';

@Injectable()
export class RemarksService {
  constructor(
    @InjectRepository(Remark)
    private remarksRepository: Repository<Remark>,
  ) {}

  async create(createRemarkDto: CreateRemarkDto): Promise<Remark> {
    return await this.remarksRepository.save(createRemarkDto).then(res => res);
  }

  async findAll(): Promise<Remark[]> {
    return await this.remarksRepository.find()
  }

  async findOne(id: number): Promise<void | Remark> {
    return await this.remarksRepository.findOneOrFail(id).then(res => res).catch (e => {
      throw new NotFoundException()
    });
  }

  async update(id: number, updateRemarkDto: UpdateRemarkDto): Promise<Remark | UpdateResult | undefined> {
    this.findOne(id);
    return await this.remarksRepository.update(id, updateRemarkDto).then(res => res);
  }

  async remove(id: number) {
    this.findOne(id);
    return await this.remarksRepository.delete(id);
  }
}
