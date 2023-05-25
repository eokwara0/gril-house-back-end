import { Test, type TestingModule } from "@nestjs/testing";
import { UsersController } from "./users.controller";
import { getModelToken } from "@nestjs/mongoose";
import { User, UserSchema } from "../user.models/users.shema";
import mongoose from "mongoose";
import { UsersService } from "../services/users.service";

describe("UsersController", () => {
  let controller: UsersController;

  beforeEach(async () => {
    const model = mongoose.model("User", UserSchema);

    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        UsersService,
        { provide: getModelToken(User.name), useValue: model },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
