import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsNumber, IsString } from "class-validator";
import mongoose, { HydratedDocument } from "mongoose";

export type IRecipe = {
  id: string;
  quantity: number;
  unit: string;
  instructions: string;
};

@Schema({
  id: true,
  _id: true,
  minimize: true,
  timestamps: true,
  versionKey: false,
})
export class Recipe implements IRecipe {
  @IsString()
  id: string;

  @Prop({
    name: "quantity",
    type: mongoose.Schema.Types.Number,
    index: true,
  })
  @IsNumber()
  quantity: number;

  @Prop({
    name: "unit",
    type: mongoose.Schema.Types.String,
  })
  @IsString()
  unit: string;

  @Prop({
    name: "instructions",
    type: mongoose.Schema.Types.String,
  })
  @IsString()
  instructions: string;

  constructor(quantity: number, unit: string, instructions: string) {
    this.quantity = quantity;
    this.unit = unit;
    this.instructions = instructions;
  }
}

export type RecipeDocument = HydratedDocument<Recipe>;
export const RecipeSchema = SchemaFactory.createForClass(Recipe);
