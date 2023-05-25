import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { Bill, BillDocument } from "./model/bill.schema";
import { BillingService } from "./billing.service";
import { JwtAuthGuard } from "../authentication/guards/jwt.authentication.guard";
import { RolesGuard } from "../authentication/guards/roles.guard";
import { Roles } from "../authentication/decorators/roles.decorator";
import { ROLES } from "../../domain/interfaces/roles.enum";

@Controller("billing")
@UseGuards(JwtAuthGuard, RolesGuard)
export class BillingController {
  constructor(private billService: BillingService) {}
  @Post()
  @Roles(ROLES.MANAGER, ROLES.ADMIN)
  @UsePipes(
    new ValidationPipe({
      transform: true,
      skipNullProperties: true,
      skipUndefinedProperties: true,
      skipMissingProperties: true,
    })
  )
  async addBilling(@Body() billing: Bill): Promise<BillDocument> {
    return this.billService.addBill(billing);
  }

  @Get()
  @Roles(ROLES.MANAGER, ROLES.ADMIN)
  async getBills(): Promise<BillDocument[]> {
    return this.billService.getBills();
  }
}
