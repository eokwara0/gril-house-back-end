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
    return this.menuItemModel.find({ active: true });
  }

  async getMenusItemByMenuId(menuId: string): Promise<MenuItem[]> {
    try {
      const result = await this.menuItemModel.find({
        menuId: menuId,
        active: true,
      });
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

  async removeMenuItem(id: string): Promise<any> {
    const result = await this.menuItemModel.findByIdAndDelete(id, {});
    if (result === null) {
      throw new HttpException(
        "Invalid menuItem id, item does not exists",
        HttpStatus.BAD_REQUEST
      );
    }
    return result;
  }

  async menuItemWordSearch(searchPattern: string): Promise<MenuItem[]> {
    const regex = new RegExp(`.*${searchPattern}.*`, "ims");
    const result = await this.menuItemModel.find({
      $or: [
        { "item.title": { $regex: regex } },
        { "item.summary": { $regex: regex } },
      ],
      active: true,
    });
    return result;
  }

  async getRecommended(): Promise<MenuItem[]> {
    return await this.menuItemModel.aggregate([{ $sample: { size: 10 } }]);
  }

  async getMenuByItemId(itemId: string): Promise<MenuItem> {
    try {
      const result = await this.menuItemModel.findById(itemId);
      if (result === null) {
        throw new HttpException("Invalid item id ", HttpStatus.BAD_REQUEST);
      }
      return result;
    } catch (error) {
      throw new HttpException("Invalid itemId", HttpStatus.BAD_REQUEST);
    }
  }

  async updateMenuItemById(
    id: string,
    newValue: Record<any, any>
  ): Promise<MenuItem> {
    return this.menuItemModel.findByIdAndUpdate({ _id: id }, newValue, {
      returnDocument: "after",
    });
  }
}
