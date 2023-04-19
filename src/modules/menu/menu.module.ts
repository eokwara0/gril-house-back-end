import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import Chef, { chefSchema } from "./model/chef.model";
import Ingredient, { IngredientSchema } from "./model/ingredient.model";
import { MenuItem, MenuItemSchema } from "./model/menu.item.model";
import { Menu, MenuSchema } from "./model/menu.model";
import { MenuService } from "./services/menu.service";
import { MenuController } from "./controllers/menu.controller";
import { MenuItemService } from "./services/menu.item.service";
import MenuItemController from "./controllers/menu.item.controller";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Chef.name,
        schema: chefSchema,
      },
      {
        name: Ingredient.name,
        schema: IngredientSchema,
      },

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
