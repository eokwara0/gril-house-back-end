import { Test, type TestingModule } from "@nestjs/testing";
import { AuthenticationService } from "./authentication.service";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { CacheInterceptor, CacheModule } from "@nestjs/common";
import { UsersService } from "../../../modules/users/services/users.service";
import { LoginJwtService, resetJwtService } from "./jwt.services";
import { MailService } from "./email.service";
import { ConfigModule } from "@nestjs/config";
import mongoose from "mongoose";
import {
  User,
  UserSchema,
} from "../../../modules/users/user.models/users.shema";
import { getModelToken } from "@nestjs/mongoose";

describe("AuthenticationService", () => {
  let service: AuthenticationService;

  beforeEach(async () => {
    const userModel = mongoose.model("userModel", UserSchema);
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          envFilePath: [".env.development"],
        }),
        CacheModule.register({
          isGlobal: true,
        }),
      ],
      providers: [
        AuthenticationService,
        UsersService,
        LoginJwtService,
        resetJwtService,
        MailService,
        { provide: getModelToken(User.name), useValue: userModel },
        {
          provide: APP_INTERCEPTOR,
          useClass: CacheInterceptor,
        },
      ],
    }).compile();

    service = module.get<AuthenticationService>(AuthenticationService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
