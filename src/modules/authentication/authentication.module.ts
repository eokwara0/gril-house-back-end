import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AuthenticationController } from './authentication.controller';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './secret.constants';
import { JwtAuthGuard } from './guards/jwt-auth-guard';
import { jwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { RolesGuard } from './guards/roles.guard';

@Module({
  imports : [UsersModule, PassportModule.register({}), JwtModule.register({
    secret : jwtConstants.secret,
    signOptions : {
      expiresIn : '1h',
    }
  })],
  providers: [
    AuthenticationService , 
    LocalStrategy , 
    JwtAuthGuard , 
    jwtStrategy,
    RolesGuard
  ],
  controllers: [AuthenticationController],
  exports : [JwtAuthGuard , RolesGuard]
})
export class AuthenticationModule {}
