import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersModule } from "./modules/users/users.module";
import { AuthenticationModule } from "./modules/authentication/authentication.module";
import { ConfigModule } from "@nestjs/config";

//
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [".env.development"],
    }),
    UsersModule,
    MongooseModule.forRoot(process.env.MONGO_URL),
    AuthenticationModule,
  ],
})
export class AppModule {}
