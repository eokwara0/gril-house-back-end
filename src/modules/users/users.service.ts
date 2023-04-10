import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {User, type UserDocument} from './user.models/users.shema';
import { Queries } from '../interfaces/query.interface';

@Injectable()
export class UsersService {
	constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) {}

	// Adding a new user to the database
	async createUser(user: User): Promise<User> {
		const user1   = new this.userModel(user);
		return user1.save();
	}

	// Find user by id
	async findUserById(id: string): Promise<User> {
		const user : User  = await this.userModel.findById(id);
		return user;
	}

	// Find user by username
	async findByUserName(username: string): Promise<User> {
		return this.userModel.findOne({username});
	}

	// TODO ::: add support for updating a user
	async updateUser(user: User) {
		this.userModel.findOneAndUpdate();
	}

	async checkUser(options: Record<string, unknown>): Promise<User> {
		const user = this.userModel.findOne(options);
        return user;
	}

	// Getting all the users in the database
	async findAll(option: Queries): Promise<User[]> {
		return this.userModel.find(option);
	}

	// Delete user from the database
	async deleteUserById(id: string): Promise<{acknowledged: boolean; deletedCount: number}> {
		return this.userModel.deleteOne({_id: id}).exec();
	}
}
