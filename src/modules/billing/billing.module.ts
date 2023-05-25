import { Module } from "@nestjs/common";
import { BillingService } from "./billing.service";
import { BillingController } from "./billing.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Bill, BillSchema } from "./model/bill.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Bill.name,
        schema: BillSchema,
      },
    ]),
  ],
  providers: [BillingService],
  controllers: [BillingController],
})
export class BillingModule {}
