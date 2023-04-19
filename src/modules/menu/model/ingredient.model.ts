import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsNumber, IsString } from "class-validator";
import mongoose, { HydratedDocument } from "mongoose";

export type IIngredients = {
  Id: string;
  userId: string;
  vendorId: string;
  title: string;
  summary: string;
  type: string;
  quantity: number;
  unit: string;
  content: string;
};

@Schema({
  _id: true,
  versionKey: false,
  minimize: true,
  timestamps: true,
})
export default class Ingredient implements IIngredients {
  @IsString()
  Id: string;

  @IsString()
  @Prop({
    name: "UserId",
    type: mongoose.Schema.Types.String,
  })
  userId: string;

  @IsString()
  @Prop({
    name: "VendorId",
    type: mongoose.Schema.Types.String,
  })
  vendorId: string;

  @IsString()
  @Prop({
    name: "title",
    type: mongoose.Schema.Types.String,
  })
  title: string;

  @IsString()
  @Prop({
    name: "summary",
    type: mongoose.Schema.Types.String,
  })
  summary: string;

  @IsString()
  @Prop({
    name: "type",
    type: mongoose.Schema.Types.String,
  })
  type: string;

  @IsNumber()
  @Prop({
    name: "quantity",
    type: mongoose.Schema.Types.Number,
  })
  quantity: number;

  @IsString()
  @Prop({
    name: "unit",
    type: mongoose.Schema.Types.String,
  })
  unit: string;

  @IsString()
  @Prop({
    name: "content",
    type: mongoose.Schema.Types.String,
  })
  content: string;

  constructor(
    userId: string,
    vendorId: string,
    title: string,
    summary: string,
    type: string,
    quantity: number,
    unit: string,
    content: string
  ) {
    this.userId = userId;
    this.vendorId = vendorId;
    this.title = title;
    this.summary = summary;
    this.type = type;
    this.quantity = quantity;
    this.unit = unit;
    this.content = content;
  }
}

export type IngredientDocument = HydratedDocument<Ingredient>;
export const IngredientSchema = SchemaFactory.createForClass(Ingredient);
