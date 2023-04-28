import { SchemaFactory, Schema, Prop } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import Item, { ItemDocument, ItemSchema } from "./item.model";
import { IsBoolean, IsObject, IsString } from "class-validator";

export type IMenuItem = {
  id: string;
  menuId: string;
  userId: string;
  active: boolean;
  item: Item;
  imageUrl: string;
};

/**
 * Menu Item class
 */

@Schema({
  _id: true,
  id: true,
  minimize: true,
  versionKey: false,
  timestamps: true,
  validateBeforeSave: true,
})
export class MenuItem implements IMenuItem {
  // properties
  @IsString()
  id: string;

  @IsString()
  @Prop({
    name: "UserId",
    type: mongoose.Schema.Types.String,
    required: true,
  })
  userId: string;

  @IsString()
  @Prop({
    name: "menuId",
    type: mongoose.Schema.Types.String,
    required: true,
  })
  menuId: string;

  @IsBoolean()
  @Prop({
    name: "active flag",
    type: mongoose.Schema.Types.Boolean,
    required: true,
  })
  active: boolean;

  @IsObject()
  @Prop({
    name: "Item",
    type: mongoose.Schema.Types.Mixed,
    unique: true,
    required: true,
  })
  item: ItemDocument; //

  @IsString()
  @Prop({
    name: "image url",
    required: false,
    default: "",
  })
  imageUrl: string;

  // constructor
  constructor(menuId: string, active: boolean, item: ItemDocument) {
    this.menuId = menuId;
    this.active = active;
    this.item = item;
  }
}

export type MenuItemDocument = HydratedDocument<MenuItem>;
export const MenuItemSchema = SchemaFactory.createForClass(MenuItem);
