import { Body, Controller, Delete, Get, Param, Post, Query, Req, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBearerAuth, ApiHeader, ApiQuery } from '@nestjs/swagger';
import { Roles } from '../authentication/decorators/roles.decorator';
import { JwtAuthGuard } from '../authentication/guards/jwt-auth-guard';
import { RolesGuard } from '../authentication/guards/roles.guard';
import { Queries } from '../interfaces/query.interface';
import { ROLES } from '../interfaces/roles.enum';
import { User } from './user.models/users.shema';
import { UsersService } from './users.service';

@Controller('user')
@UseGuards(JwtAuthGuard , RolesGuard)
export class UsersController {
    constructor( private userService : UsersService ){}

    @ApiBearerAuth()
    @UsePipes( 
        new ValidationPipe(
            {
                skipMissingProperties : true , 
                forbidUnknownValues : true ,
                forbidNonWhitelisted : true ,
            }
    ))
    @Roles()
    @Get()
    // @ApiQuery( { type : Queries })
    findAll(@Query() queries : Queries): Promise<User[]>{
        return this.userService.findAll( queries );
    }


    @Roles(ROLES.ADMIN, ROLES.MANAGER)
    @ApiBearerAuth()
    @UsePipes( new ValidationPipe({ 
        transform : true , 
        skipMissingProperties : true , 
        skipNullProperties : true , 
        skipUndefinedProperties : true , 
    }))
    @Post()
    addUser(@Body() user: User): Promise<User>{
        return this.userService.createUser( user );
    }

    @Get(':id')
    @Roles()
    @ApiBearerAuth()
    findById( @Param('id') id: string ): Promise<User>{
        return this.userService.findUserById(id);
    }

    @Delete(':id')
    @ApiBearerAuth()
    @Roles(ROLES.ADMIN, ROLES.MANAGER)
    deleteById(@Param('id') id : string ) : Promise<object>{
        return this.userService.deleteUserById( id );
    }
}
