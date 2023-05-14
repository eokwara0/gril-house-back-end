import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

@Schema({
  timestamps: false,
  _id: false,
  id: false,
  versionKey: false,
  minimize: true,
})
export class OrderCustomer implements Customer {
  @Prop({
    name: "customer name",
    required: true,
    type: mongoose.Schema.Types.String,
  })
  name: string;
  @Prop({
    name: "customer email",
    required: true,
    type: mongoose.Schema.Types.String,
  })
  email: string;
}

export interface Customer {
  name: string;
  email: string;
}

export type OrderCustomerDocument = HydratedDocument<OrderCustomer>;
export const OrderCustomerSchema = SchemaFactory.createForClass(OrderCustomer);
