import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { User } from './user.models/users.shema';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor( private userService : UsersService ){}

    @Get()
    findAll(): Promise<User[]>{
        return this.userService.findAll();
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
}
