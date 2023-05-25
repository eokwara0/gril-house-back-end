import { Test, TestingModule } from "@nestjs/testing";
import { MenuService } from "./menu.service";
import mongoose from "mongoose";
import { Menu, MenuSchema } from "../model/menu.model";
import { getModelToken } from "@nestjs/mongoose";
import { MenuItemService } from "./menu.item.service";
import { MenuItem, MenuItemSchema } from "../model/menu.item.model";

describe("MenuService", () => {
  let service: MenuService;
  let model = mongoose.Model<Menu>;

  beforeEach(async () => {
    model = mongoose.model("Menu", MenuSchema);
    const menuItemModel = mongoose.model("MenuItemModel", MenuItemSchema);
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MenuService,
        MenuItemService,
        { provide: getModelToken(Menu.name), useValue: model },
        { provide: getModelToken(MenuItem.name), useValue: menuItemModel },
      ],
    }).compile();
    service = module.get<MenuService>(MenuService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("createMenu", async () => {
    expect(service).toBeDefined();

    const menu = new model(Menu.empty());
    jest.spyOn(service, "createMenu").mockReturnValue(menu);
    expect((await service.createMenu(Menu.empty()))["_userId"]).toBe("23");
  });

  it("delete Menu", async () => {
    expect(service).toBeDefined();

    const menu = new model(Menu.empty());
    jest.spyOn(service, "deleteMenuById").mockImplementation(async () => menu);
    expect(
      (await service.deleteMenuById("646cdf8fd974fe1488da0791"))["_id"]
    ).toBe(menu["_id"]);
  });
});
