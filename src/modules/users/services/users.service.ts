import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import {
  User,
  userAccess,
  type UserDocument,
} from "../user.models/users.shema";
import { Queries } from "../../../domain/interfaces/query.interface";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  // Adding a new user to the database
  async createUser(user: User): Promise<User> {
    try {
      const user1 = new this.userModel(user);
      const data = await user1.save();
      return data;
    } catch (err) {
      const key = Object.keys(err.keyPattern)[0];
      throw new HttpException(
        `${key} exsists in the system , Please pick a different ${key}`,
        HttpStatus.BAD_REQUEST,
        {
          cause: err,
        }
      );
    }
  }

  // Find user by id
  async findUserById(id: string): Promise<User> {
    const user: User = await this.userModel.findById(id);
    return user;
  }

  // Find user by userna
  async findByUserName(username: string): Promise<User> {
    return this.userModel.findOne({ username });
  }

  // TODO ::: add support for updating a user password
  async updateUserPassword(data: Record<string, string>) {
    try {
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
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async grantAccess(id: string): Promise<any> {
    return await this.userModel.findByIdAndUpdate(id, {
      $set: { access: userAccess.ACTIVE },
    });
  }

  async revokeAccess(id: string): Promise<any> {
    return await this.userModel.findByIdAndUpdate(id, {
      $set: { access: userAccess.REVOKED },
    });
  }

  async changePassword(id: string, password: string): Promise<any> {
    try {
      if (id && password) {
        return await this.userModel.findByIdAndUpdate(id, {
          $set: { password: password },
        });
      }
      throw new Error("Invalid parameters");
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  /**
   * Valiates if a user exists
   * @param options
   * @returns {boolean}
   */
  async checkUser(options: Record<string, unknown>): Promise<User> {
    try {
      if (Object.keys(options).length == 0) {
        throw new HttpException(
          "Search parameters have not been provided",
          HttpStatus.BAD_REQUEST
        );
      } else {
        const user = this.userModel.findOne(options);
        return user;
      }
    } catch (error) {
      throw new HttpException(
        "Internal Server Error",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  /**
   * Returns a list of users that match the given queries
   * @param option
   * @returns {User[]}
   */
  async findAll(option: Queries): Promise<User[]> {
    try {
      return this.userModel.find(option);
    } catch (error) {
      throw new HttpException(
        "Internal Server Error",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
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
