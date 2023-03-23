import { Body, Controller, Delete, Get, Param, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { Queries } from '../misce/query.interface';
import { User } from './user.models/users.shema';
import { UsersService } from './users.service';

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
    findAll(@Query() queries : Queries ): Promise<User[]>{
        console.log( queries );
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
