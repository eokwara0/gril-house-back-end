import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsNumber, IsString } from "class-validator";
import mongoose, { HydratedDocument } from "mongoose";

export type IRecipe = {
  title: string;
  summary: string;
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

  @IsString()
  @Prop({
    name: "Recipe title",
    type: mongoose.Schema.Types.String,
  })
  title: string;

  @IsString()
  @Prop({
    name: "Recipe description",
    type: mongoose.Schema.Types.String,
  })
  summary: string;

  constructor(
    quantity: number,
    unit: string,
    instructions: string,
    title: string,
    summary: string
  ) {
    this.quantity = quantity;
    this.unit = unit;
    this.instructions = instructions;
    this.title = title;
    this.summary = summary;
  }

  static empty(): Recipe {
    return new Recipe(2, "teaspoons", "", "", "");
  }
}

export type RecipeDocument = HydratedDocument<Recipe>;
export const RecipeSchema = SchemaFactory.createForClass(Recipe);
