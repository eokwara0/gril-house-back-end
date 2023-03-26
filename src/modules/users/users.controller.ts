import { Body, Controller, Delete, Get, Param, Post, Query, Req, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { JwtAuthGuard } from '../authentication/guards/jwt-auth-guard';
import { Queries } from '../interfaces/query.interface';
import { User } from './user.models/users.shema';
import { UsersService } from './users.service';

@UseGuards(JwtAuthGuard)
@Controller('user')
export class UsersController {
    constructor( private userService : UsersService ){}

    @Get()
    @UsePipes( new ValidationPipe(
        {
            skipMissingProperties : true , 
            forbidUnknownValues : true ,
            forbidNonWhitelisted : true ,
        }
    ))
    findAll(@Query() queries : Queries): Promise<User[]>{
        return this.userService.findAll( queries );
    }

    @Post()
    @UsePipes( new ValidationPipe({ 
        transform : true , 
        skipMissingProperties : true , 
        skipNullProperties : true , 
        skipUndefinedProperties : true , 
    }))
    addUser(@Body() user: User): Promise<User>{
        return this.userService.createUser( user );
    }

    @Get(':id')
    findById( @Param('id') id: string ): Promise<User>{
        return this.userService.findUserById(id);
    }

    @Delete(':id')
    deleteById(@Param('id') id : string ) : Promise<object>{
        return this.userService.deleteUserById( id );
    }
}
