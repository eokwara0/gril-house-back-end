import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { TStatus, Table, TableDocument } from "../model/table.model";
import { Model } from "mongoose";

@Injectable()
export class TableService {
  constructor(
    @InjectModel(Table.name) private tableModel: Model<TableDocument>
  ) {}

  async create(table: Table): Promise<TableDocument> {
    const tab = new this.tableModel(table);
    return await tab.save();
  }

  async updateTableReservationById(
    id: string,
    options: Record<string, any>
  ): Promise<any> {
    const update = await this.tableModel.updateOne({ _id: id }, options);
    return update;
  }

  async getAll(): Promise<TableDocument[]> {
    return await this.tableModel.find({});
  }

  async getTableById(id: string): Promise<TableDocument> {
    const result = await this.tableModel.findOne({ _id: id });

    if (result != null) {
      return result;
    }
    throw new HttpException("Invalid Table Id", HttpStatus.BAD_REQUEST);
  }

  async getAvailableTables(): Promise<TableDocument[]> {
    return await this.tableModel.find({ status: TStatus.AVALIABLE });
  }

  async getReservedTable(): Promise<TableDocument[]> {
    return await this.tableModel.find({ status: TStatus.RESERVED });
  }
}
