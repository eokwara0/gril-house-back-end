import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsBoolean, IsString } from "class-validator";
import mongoose, { HydratedDocument } from "mongoose";

export type IChef = {
  Id: string;
  itemId: string;
  chefId: string;
  active: boolean;
};

@Schema({
  id: true,
  minimize: true,
  versionKey: false,
  timestamps: true,
})

/**
 * Chef class
 */
export default class Chef implements IChef {
  @IsString()
  Id: string;

  @IsString()
  @Prop({
    name: "ItemId",
    type: mongoose.Schema.Types.String,
    isRequired: false,
  })
  private _itemId: string;

  @IsString()
  @Prop({
    name: "chefId",
    type: mongoose.Schema.Types.String,
    required: false,
  })
  private _chefId: string;

  @Prop({
    name: "active",
    type: mongoose.Schema.Types.Boolean,
    required: false,
  })
  @IsBoolean()
  private _active: boolean;

  constructor(itemId: string, chefId: string, active: boolean) {
    this.itemId = itemId;
    this.chefId = chefId;
    this.active = active;
  }

  public get itemId(): string {
    return this._itemId;
  }
  public set itemId(value: string) {
    this._itemId = value;
  }

  public get chefId(): string {
    return this._chefId;
  }
  public set chefId(value: string) {
    this._chefId = value;
  }

  public get active(): boolean {
    return this._active;
  }
  public set active(value: boolean) {
    this._active = value;
  }
}

export type chefDocument = HydratedDocument<Chef>;
export const chefSchema = SchemaFactory.createForClass(Chef);
