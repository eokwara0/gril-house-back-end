import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsString } from "class-validator";
import mongoose, { HydratedDocument } from "mongoose";

@Schema({
  minimize: true,
  id: true,
  _id: true,
  timestamps: true,
  versionKey: false,
})
export class Menu implements IMenu {
  @IsString()
  id: string;

  @Prop({
    name: "menu title",
    type: mongoose.Schema.Types.String,
    unique: true,
    required: true,
  })
  @IsString()
   title: string;

  @Prop({
    name: "summary",
    type: mongoose.Schema.Types.String,
    required: true,
  })
  @IsString()
   summary: string;

  @Prop({
    name: "content",
    type: mongoose.Schema.Types.String,
    required: true,
  })
  @IsString()
   content: string;

  @Prop({
    name: "String",
    type: mongoose.Schema.Types.String,
    required: true,
  })
  @IsString()
   userId: string;

  @IsString()
  @Prop({
    name: "imageUrl",
    type: mongoose.Schema.Types.String,
    required: false,
    default: "http://192.168.0.252:3000/items/ph/hot-pot.png",
  })
   imageUrl: string;

  // constructor
  constructor(
    title: string,
    summary: string,
    content: string,
    userId: string,
    imageUrl: string
  ) {
    this.title = title;
    this.summary = summary;
    this.content = content;
    this.userId = userId;
    this.imageUrl = imageUrl;
  }

  

  static empty(): Menu {
    return new Menu("", "", "", "23", "");
  }
}

export type IMenu = {
  id: string;
  userId: string;
  title: string;
  summary: string;
  content: string;
  imageUrl: string;
};

export type MenuDocument = HydratedDocument<Menu>;
export const MenuSchema = SchemaFactory.createForClass(Menu);
