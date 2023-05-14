import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {
  IReservation,
  Reservation,
  reservationSchema,
} from "./reservation.model";
import { IsNumber, IsObject, IsString } from "class-validator";
import mongoose, { HydratedDocument } from "mongoose";

export enum TStatus {
  RESERVED = "RESERVED",
  AVALIABLE = "AVAILABLE",
}
export type ITable = {
  id: string;
  status: TStatus;
  capacity: number;
  reservation: IReservation;
};

@Schema({
  id: true,
  _id: true,
  minimize: true,
  versionKey: false,
  timestamps: true,
})
export class Table implements ITable {
  @IsString()
  id: string;

  @IsString()
  @Prop({
    name: "Table status",
    index: true,
    type: mongoose.Schema.Types.String,
    validate: (data: string) => {
      if (data == TStatus.AVALIABLE) {
        return true;
      } else if (data == TStatus.RESERVED) {
        return true;
      }
      return false;
    },
    uppercase: true,
    required: true,
    default: "AVAILABLE",
  })
  status: TStatus;
  @IsNumber()
  @Prop({
    name: "Table capacity",
    index: true,
    type: mongoose.Schema.Types.Number,
    default: 1,
    required: true,
  })
  capacity: number;

  @IsObject()
  @Prop({
    name: "Table reservation",
    index: true,
    type: reservationSchema,
    default: {},
    required: false,
  })
  reservation: Reservation;

  constructor(
    id: string,
    status: TStatus,
    capacity: number,
    reservation: Reservation
  ) {
    this.id = id;
    this.status = status;
    this.capacity = capacity;
    this.reservation = reservation;
  }
}

export type TableDocument = HydratedDocument<Table>;
export const TableSchema = SchemaFactory.createForClass(Table);
