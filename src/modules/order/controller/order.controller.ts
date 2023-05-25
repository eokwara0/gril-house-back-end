import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { OrderService } from "../service/order.service";
import { Order, OrderDocument } from "../model/order.model";
import { Roles } from "../..//authentication/decorators/roles.decorator";
import { JwtAuthGuard } from "../../authentication/guards/jwt.authentication.guard";
import { RolesGuard } from "../../authentication/guards/roles.guard";
import { ROLES } from "../../../domain/interfaces/roles.enum";

@Controller("order")
@UseGuards(JwtAuthGuard, RolesGuard)
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Roles()
  @UsePipes(
    new ValidationPipe({
      transform: true,
      skipMissingProperties: true,
      skipNullProperties: true,
    })
  )
  async add(@Body() order: Order): Promise<any> {
    return await this.orderService.create(order);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @Roles()
  async getAll(): Promise<OrderDocument[]> {
    return this.orderService.getAll();
  }

  @Get("preparing")
  @HttpCode(HttpStatus.OK)
  @Roles(ROLES.CHEF)
  async getPreparing(): Promise<OrderDocument[]> {
    return await this.getUnPreparedOrders();
  }

  @Get(":id")
  @HttpCode(HttpStatus.OK)
  @Roles()
  async getOrderById(@Param("id") id: string): Promise<OrderDocument> {
    return await this.orderService.getOrderById(id);
  }

  @Get("orders/:userId")
  @HttpCode(HttpStatus.OK)
  @Roles()
  async getOrdersByUser(
    @Param("userId") userId: string
  ): Promise<OrderDocument[]> {
    return await this.orderService.getOrdersByUserId(userId);
  }

  @Put("ready/:id")
  @Roles()
  @HttpCode(HttpStatus.ACCEPTED)
  async readOrder(@Param("id") orderId: string): Promise<any> {
    return await this.orderService.updateToReady(orderId);
  }

  @Put("cancel/:id")
  @Roles()
  @HttpCode(HttpStatus.ACCEPTED)
  async cancelOrder(@Param("id") orderId: string): Promise<any> {
    return await this.orderService.cancelOrderById(orderId);
  }

  @Get("/unprepared")
  @Roles()
  @HttpCode(HttpStatus.OK)
  async getUnPreparedOrders(): Promise<OrderDocument[]> {
    return await this.orderService.getUnPreparedOrders();
  }

  @Put("close/:id")
  @Roles()
  @HttpCode(HttpStatus.ACCEPTED)
  async closeOrder(@Param("id") orderId: string): Promise<any> {
    return await this.orderService.closeOrderById(orderId);
  }
}
