import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Order, OrderDocument, OrderStatus } from "../model/order.model";
import { Model } from "mongoose";

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>
  ) {}

  async create(order: Order): Promise<OrderDocument> {
    const order_ = new this.orderModel(order);
    return await order_.save();
  }

  async getOrderById(id: string): Promise<OrderDocument> {
    return await this.orderModel.findById(id);
  }

  async getOrdersByUserId(id: string): Promise<OrderDocument[]> {
    return await this.orderModel.find({ userId: id });
  }

  async getUnPreparedOrders(): Promise<OrderDocument[]> {
    return await this.orderModel.find({ status: OrderStatus.PREPARING });
  }

  async updateToReady(id: string): Promise<any> {
    return await this.orderModel.updateOne(
      { _id: id },
      { $set: { status: OrderStatus.READY } }
    );
  }
  async cancelOrderById(id: string): Promise<any> {
    return await this.orderModel.updateOne(
      { _id: id },
      { $set: { status: OrderStatus.CANCELED } }
    );
  }
}
