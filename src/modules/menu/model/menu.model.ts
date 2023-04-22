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
    name: "title",
    type: mongoose.Schema.Types.String,
    unique: true,
    required: true,
  })
  @IsString()
  private _title: string;

  @Prop({
    name: "summary",
    type: mongoose.Schema.Types.String,
    required: true,
  })
  @IsString()
  private _summary: string;

  @Prop({
    name: "content",
    type: mongoose.Schema.Types.String,
    required: true,
  })
  @IsString()
  private _content: string;

  @Prop({
    name: "String",
    type: mongoose.Schema.Types.String,
    required: true,
  })
  @IsString()
  private _userId: string;

  // constructor
  constructor(title: string, summary: string, content: string, userId: string) {
    this.title = title;
    this.summary = summary;
    this.content = content;
    this.userId = userId;
  }

  public get title(): string {
    return this._title;
  }
  public set title(value: string) {
    this._title = value;
  }

  public get summary(): string {
    return this._summary;
  }

  public set summary(value: string) {
    this._summary = value;
  }

  public get content(): string {
    return this._content;
  }
  public set content(value: string) {
    this._content = value;
  }

  public get userId(): string {
    return this._userId;
  }
  public set userId(value: string) {
    this._userId = value;
  }
}

export type IMenu = {
  id: string;
  userId: string;
  title: string;
  summary: string;
  content: string;
};

export type MenuDocument = HydratedDocument<Menu>;
export const MenuSchema = SchemaFactory.createForClass(Menu);
