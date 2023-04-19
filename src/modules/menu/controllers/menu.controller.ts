import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { MenuService } from "../services/menu.service";
import { Menu, MenuDocument } from "../model/menu.model";
import { JwtAuthGuard } from "src/modules/authentication/guards/jwt.authentication.guard";
import { RolesGuard } from "src/modules/authentication/guards/roles.guard";
import { Roles } from "src/modules/authentication/decorators/roles.decorator";
import { ROLES } from "src/domain/interfaces/roles.enum";
import { ObjectId } from "mongodb";

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller("menu")
export class MenuController {
  constructor(private menuService: MenuService) {}

  @Get()
  @Roles(ROLES.ADMIN, ROLES.ADMIN)
  async getAll(): Promise<Menu[]> {
    return this.menuService.findAllMenu();
  }

  @Get(":title")
  async getByTitle(@Param("title") title: string): Promise<Menu> {
    return this.menuService.findMenuByTitle(title);
  }

  @Post("")
  @UsePipes(
    new ValidationPipe({
      transform: true,
    })
  )
  @Roles(ROLES.ADMIN, ROLES.MANAGER)
  async addMenu(@Body() body: Menu): Promise<MenuDocument> {
    return this.menuService.createMenu(body);
  }

  @Roles()
  @Get("id/:title")
  @HttpCode(HttpStatus.OK)
  async getMenuId(@Param("title") title: string): Promise<ObjectId> {
    return this.menuService.getMenuId(title);
  }
  @Delete(":title")
  @Roles(ROLES.ADMIN, ROLES.MANAGER)
  async deleteMenu(@Param("title") title: string): Promise<Menu[]> {
    return this.menuService.deletMenu(title);
  }
}
