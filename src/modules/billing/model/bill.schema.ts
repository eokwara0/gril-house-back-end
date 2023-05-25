import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsNumber, IsString } from "class-validator";
import mongoose, { HydratedDocument } from "mongoose";

export interface IBill {
  id: string;
  orderId: string;
  userId: string;
  grandTotal: number;
}

export @Schema({
  _id: true,
  id: true,
  minimize: true,
  versionKey: false,
  timestamps: true,
  validateBeforeSave: true,
})
class Bill implements IBill {
  @IsString()
  id: string;
  @IsString()
  @Prop({
    name: 'orderId',
    type: mongoose.Schema.Types.String,
    required: true,
  })
  orderId: string;
  @IsString()
   @Prop({
    name: "userId",
    type: mongoose.Schema.Types.String,
    required: true,
  })
  userId: string;
  @IsNumber()
   @Prop({
    name: "grandTotal",
    type: mongoose.Schema.Types.Number,
    required: true,
  })
  grandTotal: number;

  constructor(orderId: string, grandTotal: number, userId: string) {
    this.grandTotal = grandTotal;
    this.orderId = orderId;
    this.userId = userId;
  }
}

export type BillDocument = HydratedDocument<Bill>;
export const BillSchema = SchemaFactory.createForClass(Bill);
