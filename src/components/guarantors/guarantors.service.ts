import { Guarantors as Guarantor } from './entities/guarantor.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGuarantorDto } from './dto/create-guarantor.dto';
import { UpdateGuarantorDto } from './dto/update-guarantor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class GuarantorsService {
  constructor(
    @InjectRepository(Guarantor)
    private guarantorsRepository: Repository<Guarantor>,
  ) {}

  async create(createGuarantorDto: CreateGuarantorDto): Promise<Guarantor> {
    return await this.guarantorsRepository.save(createGuarantorDto).then(res => res);
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
}
