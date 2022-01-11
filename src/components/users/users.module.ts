import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users as User } from './entities/user.entity';
import { RolesModule } from '../roles/roles.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), RolesModule],
  exports: [TypeOrmModule, UsersService],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
