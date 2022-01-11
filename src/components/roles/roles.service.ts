import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Roles as Role } from './entities/role.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private RolesRepository: Repository<Role>,
  ) {}

  async create(data: object)  {
    return await this.RolesRepository.save(data).then(res => res);
  }

  findAll(): Promise<Role[]> {
    return this.RolesRepository.find()
  }

  findOne(id: number): Promise<Role> {
    return this.RolesRepository.findOne(id);
  }

  async update(id:number, data: object): Promise<Role | UpdateResult | undefined> {
    const Role = await this.findOne(id).then(res =>res);
    if(Role) return await this.RolesRepository.update(id, data).then(res => res);
    return ;
  }

  async remove(id: number) {
    return await this.RolesRepository.delete(id);
  }
}
