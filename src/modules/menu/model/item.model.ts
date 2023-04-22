import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsBoolean, IsNumber, IsObject, IsString } from "class-validator";
import mongoose, { HydratedDocument } from "mongoose";
import { IRecipe, Recipe, RecipeDocument } from "./recipe.model";

export type IItem = {
  Id: string;
  vendorId: string;
  title: string;
  summary: string;
  cooking: boolean;
  price: number;
  quantity: number;
  unit: string;
  recipe: Recipe[];
  instructions: string;
  content: string;
};

@Schema({
  id: true,
  _id: true,
  minimize: true,
  versionKey: false,
})
export default class Item implements IItem {
  @IsString()
  Id: string;

  @IsString()
  vendorId: string;

  @IsString()
  @Prop({ name: "title", type: mongoose.Schema.Types.String })
  title: string;

  @IsString()
  @Prop({ name: "summary", type: mongoose.Schema.Types.String })
  summary: string;

  @IsBoolean()
  @Prop({ name: "cooking", type: mongoose.Schema.Types.Boolean })
  cooking: boolean;

  @IsNumber()
  @Prop({ name: "price", type: mongoose.Schema.Types.Number })
  price: number;

  @IsNumber()
  @Prop({ name: "quantity", type: mongoose.Schema.Types.Number })
  quantity: number;

  @IsString()
  @Prop({ name: "unit", type: mongoose.Schema.Types.String })
  unit: string;

  @IsObject()
  @Prop({ name: "Recipe", type: mongoose.Schema.Types.Mixed })
  recipe: Recipe[];

  @IsString()
  @Prop({ name: "Instructions", type: mongoose.Schema.Types.String })
  instructions: string;

  @IsString()
  @Prop({ name: "Recipe Content", type: mongoose.Schema.Types.String })
  content: string;

  constructor(
    vendorId: string,
    title: string,
    summary: string,
    cooking: boolean,
    price: number,
    quantity: number,
    unit: string,
    recipe: Recipe[],
    instructions: string,
    content: string
  ) {
    this.vendorId = vendorId;
    this.title = title;
    this.summary = summary;
    this.cooking = cooking;
    this.price = price;
    this.quantity = quantity;
    this.unit = unit;
    this.recipe = recipe;
    this.instructions = instructions;
    this.content = content;
  }
}

export type ItemDocument = HydratedDocument<Item>;
export const ItemSchema = SchemaFactory.createForClass(Item);
