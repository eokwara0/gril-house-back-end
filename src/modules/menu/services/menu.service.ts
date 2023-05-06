import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Menu, MenuDocument } from "../model/menu.model";
import { Model, Query } from "mongoose";
import { ObjectId } from "mongodb";

@Injectable()
export class MenuService {
  constructor(@InjectModel(Menu.name) private menuModel: Model<MenuDocument>) {}

  /**
   * Create a menu
   */
  async createMenu(menu: Menu): Promise<MenuDocument> {
    const _menu = new this.menuModel(menu);
    return _menu.save();
  }

  /**
   * get's a menu using the title
   * @param title
   * @returns Menu
   */
  async findMenuByTitle(title: string): Promise<Menu> {
    return this.menuModel.findOne({ _title: title });
  }

  /**
   * gets all the menus in the database
   * @returns a list of all menus
   */
  async findAllMenu(): Promise<Menu[]> {
    return this.menuModel.find();
  }

  async getMenuId(title: string): Promise<ObjectId> {
    try {
      const result = await this.menuModel.findOne({ _title: title });
      return result._id;
    } catch (err) {
      throw new HttpException("Menu not found", HttpStatus.NOT_FOUND);
    }
  }

  async updateMenuById(id: string, newValue: Record<any, any>): Promise<Menu> {
    return this.menuModel.findByIdAndUpdate({ _id: id }, newValue, {
      returnDocument: "after",
    });
  }

  /**
   * Deletes menu from the menu list
   * @param title
   * @returns list of Menu
   */
  async deletMenu(title: string): Promise<any> {
    const result = await this.menuModel.deleteOne({ _title: title });
    if (result.deletedCount > 0) {
      return this.menuModel.countDocuments();
    }
    throw new HttpException("Menu not found", HttpStatus.NOT_FOUND);
  }

  async getMenuById(id: string): Promise<any> {
    return await this.menuModel.findById(id);
  }
}
