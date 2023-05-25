import { Test, type TestingModule } from "@nestjs/testing";
import { AuthenticationController } from "./authentication.controller";
import { AuthenticationModule } from "./authentication.module";
import { AuthenticationService } from "./services/authentication.service";
import { UsersService } from "../users/services/users.service";
import { LoginJwtService, resetJwtService } from "./services/jwt.services";
import { MailService } from "./services/email.service";
import { ConfigModule } from "@nestjs/config";
import { CacheModule } from "@nestjs/common";
import mongoose from "mongoose";
import { User, UserSchema } from "../users/user.models/users.shema";
import { getModelToken } from "@nestjs/mongoose";

describe("AuthenticationController", () => {
  let controller: AuthenticationController;

  beforeEach(async () => {
    const userModel = mongoose.model("userModel", UserSchema);

    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthenticationController],
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
        {
          provide: getModelToken(User.name),
          useValue: userModel,
        },
      ],
    }).compile();

    controller = module.get<AuthenticationController>(AuthenticationController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
