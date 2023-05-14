import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsDate, IsString } from "class-validator";
import mongoose, { HydratedDocument } from "mongoose";

export type IReservation = {
  firstname: string;
  lastname: string;
  mobile: string;
  email: string;
  startDate: Date;
  endDate: Date;
};

@Schema({
  id: false,
  _id: false,
  minimize: true,
  versionKey: false,
})
export class Reservation implements IReservation {
  @Prop({
    name: "firstname",
    type: mongoose.Schema.Types.String,
    index: true,
    required: false,
  })
  @IsString()
  firstname: string;
  @Prop({
    name: "lastname",
    type: mongoose.Schema.Types.String,
    index: true,
    required: false,
  })
  @IsString()
  lastname: string;
  @Prop({
    name: "mobile",
    type: mongoose.Schema.Types.String,
    index: true,
    required: false,
  })
  @IsString()
  mobile: string;
  @Prop({
    name: "email",
    type: mongoose.Schema.Types.String,
    index: true,
    required: false,
  })
  @IsString()
  email: string;
  @Prop({
    name: "date",
    type: mongoose.Schema.Types.String,
    index: true,
    required: false,
  })
  @IsDate()
  startDate: Date;
  @Prop({
    name: "date",
    type: mongoose.Schema.Types.String,
    index: true,
    required: false,
  })
  @IsDate()
  endDate: Date;
}

export type reservationDocument = HydratedDocument<Reservation>;
export const reservationSchema = SchemaFactory.createForClass(Reservation);
