import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './modules/users/users.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';

@Module({
  imports: [
    UsersModule ,
     MongooseModule.forRoot('mongodb://localhost/nest',)
     , AuthenticationModule, 
    ],
})
export class AppModule {}
