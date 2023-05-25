import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Bill, BillDocument } from "./model/bill.schema";
import { Model } from "mongoose";

@Injectable()
export class BillingService {
  constructor(@InjectModel(Bill.name) private billModel: Model<BillDocument>) {}

  async addBill(bill: Bill): Promise<BillDocument> {
    try {
      const bill_ = new this.billModel(bill);
      const data = bill_.save();
      return data;
    } catch (err) {
      const key = Object.keys(err.keyPattern)[0];
      throw new HttpException(
        `${key} exsists in the system , Please pick a different ${key}`,
        HttpStatus.BAD_REQUEST,
        {
          cause: err,
        }
      );
    }
  }

  async getBills(): Promise<BillDocument[]> {
    return this.billModel.find({});
  }
}
