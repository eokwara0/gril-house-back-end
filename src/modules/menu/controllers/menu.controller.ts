import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
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
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { extname } from "path";

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller("menu")
export class MenuController {
  constructor(private menuService: MenuService) {}

  @Get()
  @Roles(ROLES.ADMIN, ROLES.ADMIN)
  async getAll(): Promise<Menu[]> {
    return this.menuService.findAllMenu();
  }

  @Roles()
  @Get(":title")
  async getByTitle(@Param("title") title: string): Promise<Menu> {
    return this.menuService.findMenuByTitle(title);
  }

  @Post("")
  @UsePipes(
    new ValidationPipe({
      transform: true,
      skipMissingProperties: true,
      skipNullProperties: true,
      skipUndefinedProperties: true,
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

  @Post("update/:id")
  @HttpCode(HttpStatus.ACCEPTED)
  @Roles(ROLES.ADMIN, ROLES.MANAGER)
  async updateMenuById(
    @Param("id") id: string,
    @Body() changes: Record<any, any>
  ): Promise<Menu> {
    return this.menuService.updateMenuById(id, changes);
  }

  @Get("menu/:id")
  @HttpCode(HttpStatus.OK)
  @Roles()
  async getMenuById(@Param("id") id: string): Promise<any> {
    return this.menuService.getMenuById(id);
  }

  @HttpCode(HttpStatus.ACCEPTED)
  @Roles(ROLES.ADMIN, ROLES.MANAGER)
  @Delete("delete/:id")
  async deleteMenuById(@Param("id") id: string): Promise<any> {
    return this.menuService.deleteMenuById(id);
  }

  @Post("upload/icon")
  @HttpCode(HttpStatus.ACCEPTED)
  @Roles(ROLES.ADMIN, ROLES.MANAGER)
  @UseInterceptors(
    FileInterceptor("file", {
      storage: diskStorage({
        destination: "./public/icons",
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + "-" + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          const newFilename = file.originalname.replace(ext, "");

          const filename = `${newFilename}-${uniqueSuffix}${ext}`;
          callback(null, filename);
        },
      }),
    })
  )
  async uploadImage(
    @UploadedFile() file: Express.Multer.File
  ): Promise<string> {
    console.log("file", file);
    return file.path;
  }
}
