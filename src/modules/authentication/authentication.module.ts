import { Module } from "@nestjs/common";
import { AuthenticationController } from "./authentication.controller";
import { UsersModule } from "../users/users.module";
import { PassportModule } from "@nestjs/passport";
import { JwtAuthGuard } from "./guards/jwt.authentication.guard";
import { jwtStrategy } from "./strategies/jwt.global.strategy";
import { LocalStrategy } from "./strategies/local.authentication.strategy";
import { ResetPasswordGuard } from "./guards/reset.password.guard";
import { MailService } from "./services/email.service";
import { JwtModule } from "@nestjs/jwt";
import { AuthenticationService } from "./services/authentication.service";
import {
  IJwtService,
  LoginJwtService,
  resetJwtService,
} from "./services/jwt.services";
import { RolesGuard } from "./guards/roles.guard";

//
@Module({
  imports: [
    UsersModule,
    PassportModule.register({}),
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.SECRET_KEY,
        signOptions: {
          expiresIn: process.env.JWT_EXPIRATION,
        },
      }),
    }),
  ],
  providers: [
    AuthenticationService,
    MailService,
    LocalStrategy,
    JwtAuthGuard,
    ResetPasswordGuard,
    jwtStrategy,
    RolesGuard,
    IJwtService,
    LoginJwtService,
    resetJwtService,
  ],
  controllers: [AuthenticationController],
  exports: [
    AuthenticationService,
    JwtAuthGuard,
    RolesGuard,
    MailService,
    IJwtService,
    LoginJwtService,
    resetJwtService,
  ],
})
export class AuthenticationModule {}
