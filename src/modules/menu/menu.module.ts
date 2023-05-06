import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { MenuItem, MenuItemSchema } from "./model/menu.item.model";
import { Menu, MenuSchema } from "./model/menu.model";
import { MenuService } from "./services/menu.service";
import { MenuController } from "./controllers/menu.controller";
import { MenuItemService } from "./services/menu.item.service";
import MenuItemController from "./controllers/menu.item.controller";
import { MulterModule } from "@nestjs/platform-express";

@Module({
  imports: [
    MulterModule.register({ dest: "./public" }),
    MongooseModule.forFeature([
      {
        name: MenuItem.name,
        schema: MenuItemSchema,
      },
      {
        name: Menu.name,
        schema: MenuSchema,
      },
    ]),
  ],
  providers: [MenuService, MenuItemService],
  controllers: [MenuController, MenuItemController],
})
export class MenuModule {}
