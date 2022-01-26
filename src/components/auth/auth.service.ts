import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { Cache } from 'cache-manager'
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService, 
    private jwtService: JwtService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne({"email":email});
    if (user && bcrypt.compare(user.password, await bcrypt.hash(pass, 10))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { 
        user : {
            id: user.user.id, 
            email: user.user.email, 
            name: user.user.name, 
            created_at: user.user.created_at, 
            updated_at: user.user.updated_at 
        }
    };
    // console.log({payload});
    return {
      access_token: this.jwtService.sign(payload),
      user : {
        name : user.user.name,
        email: user.user.email,
      }
    };

  }

    async register(data) {
        data.password = await bcrypt.hash(data.password, 10)
        let response = await this.usersService.create(data);
        if (response) {
            const { password, ...result } = response;
            return result;
        }
    }

    async logout(request) {
      const token:string = (request.headers['authorization']).split(" ")[1];

      const payload = this.decodeToken(token)
      const expired_at:number = payload.exp;
      const current_time:number = Math.floor(Date.now()/1000);
      console.log(expired_at, current_time)
      const ttl:number = expired_at - current_time;
      const value = await this.cacheManager.set(token, true, { ttl });
      console.log(token, `=> ${ttl}`)
    }

  decodeToken(token) : any {
    return this.jwtService.decode(token)
  }
}