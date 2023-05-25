import { Test, type TestingModule } from "@nestjs/testing";
import { UsersService } from "./users.service";
import { User, UserSchema, userAccess } from "../user.models/users.shema";
import { ROLES } from "../../../domain/interfaces/roles.enum";
import mongoose from "mongoose";
import { getModelToken } from "@nestjs/mongoose";

describe("UsersService", () => {
  let service: UsersService;

  beforeEach(async () => {
    const model = mongoose.model("User", UserSchema);
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        { provide: getModelToken(User.name), useValue: model },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  describe("findAll", () => {
    it("empty result", async () => {
      const result = [
        new User(
          ROLES.ADMIN,
          "e@gmail.com",
          "+2749534534",
          "eokwara",
          "joshua",
          "jpMORGan@@22",
          "jokie",
          userAccess.ACTIVE
        ),
      ];
      jest.spyOn(service, "findAll").mockImplementation(async () => result);
      expect(service).toBeDefined();
      expect(
        await service.findAll({
          firstname: "",
          lastname: "",
          role: "",
          username: "",
          email: "",
        })
      ).toBe(result);
    });
  });

  // TODO: create user
  describe("create User", () => {
    it("should return a valid user", async () => {
      const result = [
        new User(
          ROLES.ADMIN,
          "e@gmail.com",
          "+2749534534",
          "eokwara",
          "joshua",
          "jpMORGan@@22",
          "jokie",
          userAccess.ACTIVE
        ),
      ];

      jest
        .spyOn(service, "createUser")
        .mockImplementation(async () => result[0]);
      expect(service).toBeDefined();
      expect(await service.createUser(result[0])).toBe(result[0]);
    });
  });
});
