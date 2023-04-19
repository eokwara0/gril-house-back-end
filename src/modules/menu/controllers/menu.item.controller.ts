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
import { MenuItemService } from "../services/menu.item.service";
import { MenuItem } from "../model/menu.item.model";
import { JwtAuthGuard } from "src/modules/authentication/guards/jwt.authentication.guard";
import { RolesGuard } from "src/modules/authentication/guards/roles.guard";
import { Roles } from "src/modules/authentication/decorators/roles.decorator";

@Controller("menuItem")
@UseGuards(JwtAuthGuard, RolesGuard)
export default class MenuItemController {
  constructor(private menuItemService: MenuItemService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  @Roles()
  async getMenuItems(): Promise<MenuItem[]> {
    return this.menuItemService.getMenuItems();
  }

  @Post()
  @Roles()
  @HttpCode(HttpStatus.OK)
  @UsePipes(
    new ValidationPipe({
      transform: true,
      skipNullProperties: true,
      skipUndefinedProperties: true,
      skipMissingProperties: true,
    })
  )
  async addMenuItem(@Body() item: MenuItem): Promise<any> {
    return this.menuItemService.createMenuItem(item);
  }

  @Get("menuId/:menuId")
  @Roles()
  @HttpCode(HttpStatus.OK)
  async getMenusByMeunItemsIds(
    @Param("menuId") menuId: string
  ): Promise<MenuItem[]> {
    return this.menuItemService.getMenusItemByMenuId(menuId);
  }

  @Get("active")
  @Roles()
  @HttpCode(HttpStatus.OK)
  async getActiveMenus(): Promise<MenuItem[]> {
    return this.menuItemService.getActiveMenuItems();
  }
}
