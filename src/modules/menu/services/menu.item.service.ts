import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { MenuItem, MenuItemDocument } from "../model/menu.item.model";
import { Model } from "mongoose";

@Injectable()
export class MenuItemService {
  constructor(
    @InjectModel(MenuItem.name) private menuItemModel: Model<MenuItemDocument>
  ) {}

  async createMenuItem(menuItem: MenuItem): Promise<MenuItemDocument> {
    const menuItemMdoel = new this.menuItemModel(menuItem);
    return menuItemMdoel.save();
  }

  async getMenuItems(): Promise<MenuItem[]> {
    return this.menuItemModel.find({});
  }

  async getMenusItemByMenuId(menuId: string): Promise<MenuItem[]> {
    try {
      const result = await this.menuItemModel.find({ menId: menuId });
      if (result) {
        return result;
      }
      throw new HttpException(
        "An Internal Error occurred ",
        HttpStatus.BAD_REQUEST
      );
    } catch (err) {
      throw new HttpException(
        "No menu itef found for " + menuId,
        HttpStatus.NOT_FOUND
      );
    }
  }

  async getActiveMenuItems(): Promise<MenuItem[]> {
    return await this.menuItemModel.find({ active: true });
  }

  // TODO ::: remove menu item
  async removeMenuItem(item: MenuItem): Promise<void> {
    // TODO ::: remove menu item
  }
}
