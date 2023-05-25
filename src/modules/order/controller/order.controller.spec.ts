import { Test, TestingModule } from "@nestjs/testing";
import { OrderController } from "./order.controller";
import { OrderService } from "../service/order.service";
import mongoose from "mongoose";
import { Order, OrderSchema } from "../model/order.model";
import { getModelToken } from "@nestjs/mongoose";

describe("OrderController", () => {
  let controller: OrderController;

  beforeEach(async () => {
    const model = mongoose.model("orderMockModel", OrderSchema);

    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderController],
      providers: [
        OrderService,
        { useValue: model, provide: getModelToken(Order.name) },
      ],
    }).compile();

    controller = module.get<OrderController>(OrderController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
