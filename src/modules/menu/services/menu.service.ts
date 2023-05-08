import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Menu, MenuDocument } from "../model/menu.model";
import { Model, Query } from "mongoose";
import { ObjectId } from "mongodb";
import { existsSync, mkdir, mkdirSync, rm, rmdir } from "fs";
import { MenuItemService } from "./menu.item.service";
@Injectable()
export class MenuService {
  constructor(
    @InjectModel(Menu.name) private menuModel: Model<MenuDocument>,
    private menuItemService: MenuItemService
  ) {}

  /**
   * Create a menu
   */
  async createMenu(menu: Menu): Promise<MenuDocument> {
    if (!existsSync(`./public/items/${menu.title}`)) {
      mkdirSync(`./public/items/${menu.title}`.toLowerCase());
      const _menu = new this.menuModel(menu);
      const doc = await _menu.save();
      return doc;
    }
    throw new HttpException("Menu Already Exists", HttpStatus.BAD_REQUEST);
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

  async getMenuById(id: string): Promise<any> {
    return await this.menuModel.findById(id);
  }

  async deleteMenuById(id: string): Promise<any> {
    const menu_ = await this.menuModel.findOne({ _id: id });

    if (menu_ != null) {
      const deletedItems = await this.menuItemService.deleteAllItemsByMenuId(
        id
      );
      const result = await this.menuModel.findByIdAndDelete(id);
      rm(
        `./public/items/${menu_["_title"]}`.toLowerCase(),
        { recursive: true, force: true },
        (err) => {
          if (err) {
            throw new HttpException(
              "An Internal Error Occurred",
              HttpStatus.BAD_REQUEST
            );
          }
        }
      );
      return result;
    }

    throw new HttpException("Menu does not exist", HttpStatus.BAD_REQUEST);
  }
}
