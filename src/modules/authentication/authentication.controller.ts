import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { ROLES } from '../interfaces/roles.enum';
import { AuthenticationService } from './authentication.service';
import { Roles } from './decorators/roles.decorator';
import { JwtAuthGuard } from './guards/jwt-auth-guard';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { RolesGuard } from './guards/roles.guard';

@Controller('auth')
export class AuthenticationController {

    // AuthenticationController
    constructor( private authservice : AuthenticationService){}

    // login endpoint a user has to provide a valid user
    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login( @Req() req){
        return this.authservice.login(req.user);
    }

    @Roles(
        ROLES.ADMIN, 
        ROLES.MANAGER
    )
    @UseGuards(JwtAuthGuard,RolesGuard)
    @Get('profile')
    getProfile(@Req() req ){
        return req.user;
    }




}
