import { Guarantors as Guarantor } from './entities/guarantor.entity';
import { Injectable, NotFoundException, HttpStatus, HttpException } from '@nestjs/common';
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
    throw new HttpException({
      status: HttpStatus.BAD_REQUEST,
      error: 'This gurads already has two gurantors',
    }, HttpStatus.BAD_REQUEST);
  }

  async findAll(): Promise<Guarantor[]> {
    return await this.guarantorsRepository.find()
  }

  async find(options: object): Promise<Guarantor[]> {
    return await this.guarantorsRepository.find({
      where : [options],
      order: {
        id: "DESC",
    },
    })
  }

  async findOne(options: object): Promise<void | Guarantor> {
    return await this.guarantorsRepository.findOneOrFail(options).then(res => res).catch (e => {
      throw new NotFoundException()
    });
  }

  async update(options: object, updateGuarantorDto: UpdateGuarantorDto): Promise<Guarantor | UpdateResult | undefined> {
    this.findOne(options);
    return await this.guarantorsRepository.update(options, updateGuarantorDto).then(res => res);
  }

  async  remove(options: object) {
    this.findOne(options);
    return await this.guarantorsRepository.delete(options);
  }

  async count(options : object) : Promise<number> {
    return this.guarantorsRepository.count(options)
  }
}
