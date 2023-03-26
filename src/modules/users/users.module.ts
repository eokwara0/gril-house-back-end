import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user.models/users.shema';
import { AuthenticationModule } from '../authentication/authentication.module';

@Module({
  imports : [
    MongooseModule.forFeature([{
      name : User.name , 
      schema : UserSchema,
    }]),
  ],
  providers: [UsersService],
  controllers: [UsersController],
  exports : [UsersService]
})
export class UsersModule {}
