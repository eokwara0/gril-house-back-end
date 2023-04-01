import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { ROLES } from '../interfaces/roles.enum';
import { User } from '../users/user.models/users.shema';
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
    @Post('login')
    @UseGuards(LocalAuthGuard)
    async login( @Req() req){
        return this.authservice.login(req.user);
    }

    @Roles(
        ROLES.ADMIN, 
        ROLES.MANAGER
    )
    @UseGuards(JwtAuthGuard,RolesGuard)
    @Roles()
    @Get('profile')
    getProfile(@Req() req ){
        return req.user;
    }




}
