import { HttpException, HttpStatus } from "@nestjs/common";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import mongoose, { type HydratedDocument } from "mongoose";
import { ROLES } from "src/domain/interfaces/roles.enum";

export enum userAccess {
  ACTIVE = "ACTIVE",
  REVOKED = "REVOKED",
}
// User Interface
export type IUser = {
  role: ROLES;
  email: string;
  mobile: string;
  username: string;
  lastname: string;
  password: string;
  access: userAccess;
  firstname: string;
};

// User Interface concrete implementation
@Schema({
  id: true,
  _id: true,
  minimize: true,
  versionKey: false,
  timestamps: true,
})
export class User implements IUser {
  @ApiProperty({
    description: "User id",
  })
  @IsString()
  id: string;

  @ApiProperty({
    description: "User role",
  })
  @IsString()
  @Prop({
    name: "ROLE",
    type: mongoose.Schema.Types.String,
    validate: (data: string) =>
      Object.values(ROLES).filter((r) => r === data).length > 0,
    uppercase: true,
    required: true,
  })
  role: ROLES;

  @ApiProperty({
    description: "User Email",
  })
  @IsString()
  @Prop({
    name: "EMAIL",
    type: mongoose.Schema.Types.String,
    unique: true,
    required: true,
    index: true,
  })
  email: string;

  // vice

  @ApiProperty({ description: "User Phone Number" })
  @Prop({
    name: "MOBILE NUMBER",
    type: mongoose.Schema.Types.String,
    required: false,
  })
  @IsString()
  mobile: string;

  @ApiProperty({ description: "Username" })
  @Prop({
    name: "USERNAME",
    type: mongoose.Schema.Types.String,
    required: true,
    unique: true,
  })
  @IsString()
  username: string;

  @ApiProperty({ description: "Lastname" })
  @Prop({
    name: "Lastname",
    type: mongoose.Schema.Types.String,
    required: false,
    index: true,
  })
  @IsString()
  lastname: string;

  @ApiProperty({ description: "password" })
  @Prop({
    name: "PASSWORD",
    type: mongoose.Schema.Types.String,
    required: false,
  })
  @IsString()
  password: string;

  @ApiProperty({
    description: "Firstname",
  })
  @Prop({
    name: "FIRSTNAME",
    type: mongoose.Schema.Types.String,
    required: true,
    index: true,
  })
  @IsString()
  firstname: string;

  @ApiProperty({
    description: "access",
  })
  @Prop({
    name: "access",
    type: mongoose.Schema.Types.String,
    required: true,
    index: true,
    validate: (value) => {
      const values = Object.values(userAccess);

      for (const x of values) {
        if (x == value) {
          return true;
        }
      }
      throw new HttpException("Invalid Order Type", HttpStatus.BAD_REQUEST);
    },
  })
  @IsString()
  access: userAccess;

  // Constructor
  constructor(
    role: ROLES,
    email: string,
    mobile: string,
    username: string,
    lastname: string,
    password: string,
    firstname: string,
    access: userAccess
  ) {
    this.role = role;
    this.email = email;
    this.mobile = mobile;
    this.username = username;
    this.firstname = firstname;
    this.lastname = lastname;
    this.password = password;
    this.access = access;
  }
}

export type UserDocument = HydratedDocument<User>;
export const UserSchema = SchemaFactory.createForClass(User);
