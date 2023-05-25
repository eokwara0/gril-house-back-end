import { Test, TestingModule } from "@nestjs/testing";
import { MenuController } from "./menu.controller";
import mongoose from "mongoose";
import { Menu, MenuSchema } from "../model/menu.model";
import { MenuService } from "../services/menu.service";
import { getModelToken } from "@nestjs/mongoose";
import { MenuItem, MenuItemSchema } from "../model/menu.item.model";
import { MenuItemService } from "../services/menu.item.service";

describe("MenuController", () => {
  let controller: MenuController;

  beforeEach(async () => {
    const menuModel = mongoose.model("menuModel", MenuSchema);
    const menuItemModel = mongoose.model("menuItemModel", MenuItemSchema);
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MenuController],
      providers: [
        MenuService,
        MenuItemService,
        { provide: getModelToken(Menu.name), useValue: menuModel },
        {
          provide: getModelToken(MenuItem.name),
          useValue: menuItemModel,
        },
      ],
    }).compile();

    controller = module.get<MenuController>(MenuController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
