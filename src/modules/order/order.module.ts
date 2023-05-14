import { Module } from "@nestjs/common";
import { OrderService } from "./service/order.service";
import { OrderController } from "./controller/order.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Order, OrderSchema } from "./model/order.model";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Order.name,
        schema: OrderSchema,
      },
    ]),
  ],
  providers: [OrderService],
  controllers: [OrderController],
})
export class OrderModule {}
