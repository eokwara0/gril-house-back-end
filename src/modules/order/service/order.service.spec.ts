import { Test, TestingModule } from "@nestjs/testing";
import { OrderService } from "./order.service";
import mongoose from "mongoose";
import { Order, OrderSchema } from "../model/order.model";
import { getModelToken } from "@nestjs/mongoose";

describe("OrderService", () => {
  let service: OrderService;

  beforeEach(async () => {
    const model = mongoose.model("orderMockModel", OrderSchema);
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrderService,
        { provide: getModelToken(Order.name), useValue: model },
      ],
    }).compile();

    service = module.get<OrderService>(OrderService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
