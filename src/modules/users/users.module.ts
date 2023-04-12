import { Module } from "@nestjs/common";
import { UsersService } from "./services/users.service";
import { UsersController } from "./controller/users.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "./user.models/users.shema";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
  ],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
