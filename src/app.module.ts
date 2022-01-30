import { Module, CacheInterceptor, CacheModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './components/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './components/users/users.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { RolesModule } from './components/roles/roles.module';
import { Unique } from './validators/unique'
import { Exist } from './validators/exist'
import { GuardsModule } from './components/guards/guards.module';
import { GuarantorsModule } from './components/guarantors/guarantors.module';
import { RemarksModule } from './components/remarks/remarks.module';
import { SoldiersModule } from './components/soldiers/soldiers.module';
import "reflect-metadata";

@Module({
  imports: [
    AuthModule, 
    UsersModule,
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRoot(),
    RolesModule,
    GuardsModule,
    GuarantorsModule,
    RemarksModule,
    CacheModule.register({
      ttl: 5, // seconds
      max: 10, // maximum number of items in cache
      isGlobal: true,
    }),
    SoldiersModule,
  ],
  controllers: [AppController],
  providers: [AppService, Unique, Exist, {
    provide: APP_INTERCEPTOR,
    useClass: AuthInterceptor,
  },
  {
    provide: APP_INTERCEPTOR,
    useClass: CacheInterceptor,
  },
],
})
export class AppModule {}
