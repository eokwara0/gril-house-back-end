import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsArray, IsNumber, IsObject, IsString } from "class-validator";
import mongoose, { HydratedDocument } from "mongoose";
import { IItem, OrderItem, OrderItemSchema } from "./order.item.model";
import {
  Customer,
  OrderCustomer,
  OrderCustomerSchema,
} from "./order.customer.model";
import { HttpException, HttpStatus } from "@nestjs/common";

export enum OrderStatus {
  PREPARING = "PREPARING",
  READY = "READY",
  CANCELED = "CANCELED",
  CLOSED = "CLOSED",
}

export enum OrderType {
  EATIN = "EAT-IN",
  TAKEOUT = "TAKE-OUT",
}

type OrderJSON = {
  id: string;
  userId: string;
  type: string;
  status: string;
  grandTotal: number;
  items: IItem[];
  customer: Customer;
};

@Schema({
  timestamps: true,
  _id: true,
  id: true,
  versionKey: false,
  minimize: true,
})
export class Order implements OrderJSON {
  @IsString()
  id: string;

  @IsString()
  @Prop({
    name: "userId",
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  })
  userId: string;
  @IsString()
  @Prop({
    name: "Order Type",
    type: mongoose.Schema.Types.String,
    required: true,
    uppercase: true,
    validate: (value: string) => {
      const values = Object.values(OrderType);

      for (const x of values) {
        if (x == value) {
          return true;
        }
      }
      throw new HttpException("Invalid Order Type", HttpStatus.BAD_REQUEST);
    },
  })
  type: string;
  @IsString()
  @Prop({
    name: "Status",
    type: mongoose.Schema.Types.String,
    required: true,
    uppercase: true,
    validate: (value: string) => {
      const values = Object.values(OrderStatus);

      for (const x of values) {
        if (x == value) {
          return true;
        }
      }
      throw new HttpException("Invalid Status Type", HttpStatus.BAD_REQUEST);
    },
  })
  status: string;
  @IsNumber()
  @Prop({
    name: "Grand Total",
    type: mongoose.Schema.Types.Number,
    required: true,
  })
  grandTotal: number;
  @IsArray()
  @Prop({ name: "List of menuItems", required: true, type: [OrderItemSchema] })
  items: IItem[];

  @Prop({ name: "customer", required: true, type: OrderCustomerSchema })
  @IsObject()
  customer: OrderCustomer;

  constructor(
    userId: string,
    type: string,
    status: string,
    grandTotal: number,
    items: OrderItem[],
    customer: OrderCustomer
  ) {
    this.userId = userId;
    this.type = type;
    this.status = status;
    this.grandTotal = grandTotal;
    this.items = items;
    this.customer = customer;
  }
}

export type OrderDocument = HydratedDocument<Order>;
export const OrderSchema = SchemaFactory.createForClass(Order);
