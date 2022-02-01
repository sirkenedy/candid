import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Users as User } from './entities/user.entity';
import { RolesService } from '../roles/roles.service';
import { CreateUserDto } from './dto/create-user.dto'

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
        private rolesService: RolesService
      ) {}

  async findOne(data: number | any): Promise<User | undefined> {
    return await this.usersRepository.findOne(data);
  }

  async create(data)  {
    if (data.roleId) {
        data.role = await this.rolesService.findOne(data.roleId).then(res =>res)
    }
    return await this.usersRepository.save(data).then(res => res).catch(e => { 
        throw new UnprocessableEntityException() });
  }

  async imageUpload(data) {
    this.findOne(data.user.id)
    const {user} = data;
    user.image = data.image;
    return await this.usersRepository.update(data.user.id, user).then(res => res);
  }
}
