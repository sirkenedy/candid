import { Guarantors as Guarantor } from './entities/guarantor.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGuarantorDto } from './dto/create-guarantor.dto';
import { UpdateGuarantorDto } from './dto/update-guarantor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { GuardsService } from './../guards/guards.service'

@Injectable()
export class GuarantorsService {
  constructor(
    @InjectRepository(Guarantor)
    private guarantorsRepository: Repository<Guarantor>,
    private guardsService: GuardsService,
  ) {}

  async create(guardId:number, data): Promise<Guarantor> {
    const count = await this.count({ guardId });
    if(count < 2) {
      data.guard = await this.guardsService.findOne(guardId).then(res=>res);
      return await this.guarantorsRepository.save(data).then(res => res);
    }
  }

  async findAll(): Promise<Guarantor[]> {
    return await this.guarantorsRepository.find()
  }

  async findOne(id: number): Promise<void | Guarantor> {
    return await this.guarantorsRepository.findOneOrFail(id).then(res => res).catch (e => {
      throw new NotFoundException()
    });
  }

  async update(id: number, updateGuarantorDto: UpdateGuarantorDto): Promise<Guarantor | UpdateResult | undefined> {
    this.findOne(id);
    return await this.guarantorsRepository.update(id, updateGuarantorDto).then(res => res);
  }

  async  remove(id: number) {
    this.findOne(id);
    return await this.guarantorsRepository.delete(id);
  }

  async count(options : object) : Promise<number> {
    return this.guarantorsRepository.count(options)
  }
}
