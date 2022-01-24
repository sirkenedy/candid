import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Remarks as Remark } from './entities/remark.entity';
import { CreateRemarkDto } from './dto/create-remark.dto';
import { UpdateRemarkDto } from './dto/update-remark.dto';
import { GuardsService } from './../guards/guards.service'

@Injectable()
export class RemarksService {
  constructor(
    @InjectRepository(Remark)
    private remarksRepository: Repository<Remark>,
    private guardsService: GuardsService,
  ) {}

  async create(pics:any, data: any): Promise<Remark> {
    data.pictures = JSON.stringify(pics.map(picture => picture.path))
    data.guard = await this.guardsService.findOne(data.guardId).then(res=> res)
    return await this.remarksRepository.save(data).then(res => res).catch(e=> console.log("vee", e));
  }

  async findAll(): Promise<Remark[]> {
    return await this.remarksRepository.find();
  }

  async find(options: object): Promise<Remark[]> {
    return await this.remarksRepository.find({
      where : [options],
      order: {
        id: "DESC",
    },
    })
  }

  async findOne(id: number|string): Promise<void | Remark> {
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
