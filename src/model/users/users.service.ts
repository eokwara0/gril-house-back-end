import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.models/users.shema';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel : Model<UserDocument>){}

    // Adding a new user to the database
    async createUser( user : User) : Promise<User>{
        const user1 = new this.userModel( user );
        return user1.save();

    }

    /**
     * TODO :: add support for udpating a user 
     */ 
    async updateUser( user : User )  {
        this.userModel.updateOne( { })
    }

    // getting all the users in the database
    async findAll() : Promise<User[]>{
        return this.userModel.find().exec();
    }
}
