import { Controller, Post, Request } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    @Post('login')
    async login(@Request() req) {
        // return this.authService.login(req);
    }
    
    @Post('register') 
    register() {}
}
