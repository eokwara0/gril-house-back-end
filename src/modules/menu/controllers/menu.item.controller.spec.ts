import { Test, TestingModule } from "@nestjs/testing";
import mongoose from "mongoose";
import { getModelToken } from "@nestjs/mongoose";
import { MenuItem, MenuItemSchema } from "../model/menu.item.model";
import { MenuItemService } from "../services/menu.item.service";
import MenuItemController from "./menu.item.controller";

describe("MenuItemController", () => {
  let controller: MenuItemController;
  let service: MenuItemService;
  let menuItemModel: mongoose.Model<MenuItem>;
  beforeEach(async () => {
    menuItemModel = mongoose.model("menuItemModel", MenuItemSchema);
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MenuItemController],
      providers: [
        MenuItemService,
        {
          provide: getModelToken(MenuItem.name),
          useValue: menuItemModel,
        },
      ],
    }).compile();

    controller = module.get<MenuItemController>(MenuItemController);
    service = module.get<MenuItemService>(MenuItemService);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  it("getMenuItems", async () => {
    const items = [
      new menuItemModel(MenuItem.empty()),
      new menuItemModel(MenuItem.empty()),
      new menuItemModel(MenuItem.empty()),
    ];
    expect(controller).toBeDefined();
    jest.spyOn(service, "getMenuItems").mockImplementation(async () => items);
    expect(await controller.getMenuItems()).toBe(items);
  });
});
