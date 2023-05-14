import mongoose, { HydratedDocument } from "mongoose";
import { Order } from "./order.model";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsNumber, IsString } from "class-validator";

@Schema({
  timestamps: false,
  _id: false,
  id: false,
  versionKey: false,
  minimize: true,
})
export class OrderItem implements IItem {
  @Prop({ name: "MenuId", required: true, type: mongoose.Schema.Types.String })
  @IsString()
  menuId: string;
  @Prop({
    name: "Quantity",
    required: true,
    type: mongoose.Schema.Types.Number,
  })
  @IsNumber()
  quantity: number;
  @Prop({ name: "Price", required: true, type: mongoose.Schema.Types.Number })
  @IsNumber()
  price: number;
}

export interface IItem {
  menuId: string;
  quantity: number;
  price: number;
}

export type OrderItemDocument = HydratedDocument<OrderItem>;
export const OrderItemSchema = SchemaFactory.createForClass(OrderItem);
