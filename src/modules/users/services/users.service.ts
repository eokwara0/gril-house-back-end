import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, type UserDocument } from "../user.models/users.shema";
import { Queries } from "../../../domain/interfaces/query.interface";
import { AuthenticationService } from "../../authentication/services/authentication.service";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  // Adding a new user to the database
  async createUser(user: User): Promise<User> {
    const user1 = new this.userModel(user);
    return user1.save();
  }

  // Find user by id
  async findUserById(id: string): Promise<User> {
    const user: User = await this.userModel.findById(id);
    return user;
  }

  // Find user by username
  async findByUserName(username: string): Promise<User> {
    return this.userModel.findOne({ username });
  }

  // TODO ::: add support for updating a user password
  async updateUserPassword(data: Record<string, string>) {
    const result = await this.userModel.updateOne(
      {
        _id: data.id,
      },
      {
        password: data.newpassword,
      }
    );

    const { upsertedId, upsertedCount, ..._result } = result;

    return _result;
  }

  /**
   * Valiates if a user exists
   * @param options
   * @returns {boolean}
   */
  async checkUser(options: Record<string, unknown>): Promise<User> {
    const user = this.userModel.findOne(options);
    return user;
  }

  /**
   * Returns a list of users that match the given queries
   * @param option
   * @returns {User[]}
   */
  async findAll(option: Queries): Promise<User[]> {
    return this.userModel.find(option);
  }

  /**
   * Deletes a user by id
   * @param id
   * @returns Record<any,any>
   */
  async deleteUserById(
    id: string
  ): Promise<{ acknowledged: boolean; deletedCount: number }> {
    return this.userModel.deleteOne({ _id: id }).exec();
  }
}
