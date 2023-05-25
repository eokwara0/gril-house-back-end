import { Test, TestingModule } from "@nestjs/testing";
import { MenuItemService } from "./menu.item.service";
import mongoose from "mongoose";
import { MenuItem, MenuItemSchema } from "../model/menu.item.model";
import { getModelToken } from "@nestjs/mongoose";

describe("MenuItemService", () => {
  let service: MenuItemService;
  let model: mongoose.Model<MenuItem>;

  beforeEach(async () => {
    model = mongoose.model("menuItem", MenuItemSchema);
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MenuItemService,
        { provide: getModelToken(MenuItem.name), useValue: model },
      ],
    }).compile();

    service = module.get<MenuItemService>(MenuItemService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("getMenuItems", async () => {
    const items = [MenuItem.empty()];
    jest.spyOn(service, "getMenuItems").mockImplementation(async () => items);
    expect(await service.getMenuItems()).toBe(items);
  });

  it("createMenuItem", async () => {
    const items = [MenuItem.empty()];
    const itemDocument = new model(items[0]);
    jest
      .spyOn(service, "createMenuItem")
      .mockImplementation(async () => itemDocument);
    expect((await service.createMenuItem(items[0])).item).toBe(
      itemDocument.item
    );
  });

  it("menuItemWordSearch", async () => {
    const items = [MenuItem.empty()];
    // const itemDocument = new model(items[0]);
    jest
      .spyOn(service, "menuItemWordSearch")
      .mockImplementation(async () => items);
    expect(await service.menuItemWordSearch("da")).toBe(items);
  });
});
