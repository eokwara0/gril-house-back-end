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

    // find user by id
    async findUserById( id : string ) : Promise<User>{
        return this.userModel.findById(id);
    }

    // Find user by username
    async findByUserName( username : string ) : Promise<any>{
        return this.userModel.findOne({ username : username }).exec();
    }

    // TODO ::: add support for updating a user 
    async updateUser( user : User )  {
        this.userModel.findOneAndUpdate()
    }

    // getting all the users in the database
    async findAll( option : object ) : Promise<User[]>{
        return this.userModel.find(option,).exec();
    }

    // delete user from the database
    async deleteUserById( id  : string ) : Promise<{ acknowledged : boolean , deletedCount : number }>{
        return this.userModel.deleteOne({ _id : id }).exec();
    }
}
