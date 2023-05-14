import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { TableService } from "../services/table.service";
import { Table, TableDocument } from "../model/table.model";
import { JwtAuthGuard } from "src/modules/authentication/guards/jwt.authentication.guard";
import { RolesGuard } from "src/modules/authentication/guards/roles.guard";
import { Roles } from "src/modules/authentication/decorators/roles.decorator";
import { ROLES } from "src/domain/interfaces/roles.enum";

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller("table")
export class TableController {
  constructor(private tableService: TableService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Roles(ROLES.ADMIN, ROLES.MANAGER)
  @UsePipes(
    new ValidationPipe({ transform: true, skipMissingProperties: true })
  )
  async add(@Body() table: Table): Promise<any> {
    return await this.tableService.create(table);
  }

  @Post("reservation/:id")
  @HttpCode(HttpStatus.ACCEPTED)
  @Roles(ROLES.ADMIN, ROLES.MANAGER)
  async updateReservation(
    @Param("id") id: string,
    @Body() options: Record<string, any>
  ): Promise<any> {
    console.log(id);
    console.log(options);
    return await this.tableService.updateTableReservationById(id, options);
  }

  @Get()
  @Roles()
  @HttpCode(HttpStatus.OK)
  async getAll(): Promise<TableDocument[]> {
    return await this.tableService.getAll();
  }

  @Get("table/:id")
  @HttpCode(HttpStatus.OK)
  @Roles(ROLES.ADMIN, ROLES.MANAGER)
  async getTableById(@Param("id") id: string): Promise<TableDocument> {
    return await this.tableService.getTableById(id);
  }

  @Get("available")
  @HttpCode(HttpStatus.OK)
  @Roles(ROLES.ADMIN, ROLES.MANAGER)
  async getAvailableTables(): Promise<any> {
    return await this.tableService.getAvailableTables();
  }

  @Get("reserved")
  @HttpCode(HttpStatus.OK)
  @Roles(ROLES.ADMIN, ROLES.MANAGER)
  async getReservedTables(): Promise<TableDocument[]> {
    return await this.tableService.getReservedTable();
  }
}
