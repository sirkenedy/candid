import { Controller, Request, Post, UseGuards, Get, Body, HttpCode } from '@nestjs/common';
import { LocalAuthGuard } from './guard/local-auth.guard';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guard/jwt-auth.guard';
import { CreateUserDto } from '../users/dto/create-user.dto'

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req) {
        return this.authService.login(req);
    }

    @Post('register')
    async register(@Body() req : CreateUserDto) {
        return this.authService.register(req);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }

    @UseGuards(JwtAuthGuard)
    @HttpCode(200)
    @Post('logout')
    logout(@Request() req) {
        return this.authService.logout(req);
    }
}
