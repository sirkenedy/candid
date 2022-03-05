import { Injectable, NestInterceptor, ExecutionContext, CallHandler, CACHE_MANAGER, Inject, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../components/auth/auth.service';
import { UsersService } from '../components/users/users.service';
import { Cache } from 'cache-manager';

@Injectable()
export class AuthInterceptor implements NestInterceptor {
  constructor( 
    private authService: AuthService, 
    private usersService: UsersService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {}

  async intercept(context: ExecutionContext, next: CallHandler): Promise<any> {
    const req = context.switchToHttp().getRequest();
    let tokenArray = req.headers.authorization;
    if(tokenArray) {
      if(await this.cacheManager.get(tokenArray.split(" ")[1]).then(res=>res)) {
        console.log(await this.cacheManager.get(tokenArray.split(" ")[1]).then(res=>res))
        throw new UnauthorizedException('invalid/blacklisted token');
      }
    }
    if (tokenArray) {
      req.body["user"] = this.authService.decodeToken(tokenArray.split(" ")[1]).user;
    }

    return next
      .handle()
      .pipe(
        // tap(() => console.log(``)),
      );
  }
}