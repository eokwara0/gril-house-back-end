import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { ApiBearerAuth } from "@nestjs/swagger";
import { Roles } from "../../authentication/decorators/roles.decorator";
import { JwtAuthGuard } from "../../authentication/guards/jwt.authentication.guard";
import { Queries } from "../../../domain/interfaces/query.interface";
import { ROLES } from "../../../domain/interfaces/roles.enum";
import { User } from "../user.models/users.shema";
import { UsersService } from "../services/users.service";
import { RolesGuard } from "src/modules/authentication/guards/roles.guard";

@Controller("user")
@UseGuards(JwtAuthGuard, RolesGuard)
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @ApiBearerAuth()
  @UsePipes(
    new ValidationPipe({
      skipMissingProperties: true,
      forbidUnknownValues: true,
      forbidNonWhitelisted: true,
    })
  )
  @Roles()
  @Get()
  async findAll(@Query() queries: Queries): Promise<User[]> {
    return this.userService.findAll(queries);
  }

  @Roles(ROLES.ADMIN, ROLES.MANAGER)
  @ApiBearerAuth()
  @UsePipes(
    new ValidationPipe({
      transform: true,
      skipMissingProperties: true,
      skipNullProperties: true,
      skipUndefinedProperties: true,
    })
  )
  @Post()
  async addUser(@Body() user: User): Promise<User> {
    return this.userService.createUser(user);
  }

  @Get(":id")
  @Roles()
  @ApiBearerAuth()
  async findById(@Param("id") id: string): Promise<User> {
    return this.userService.findUserById(id);
  }

  @Delete(":id")
  @ApiBearerAuth()
  @Roles(ROLES.ADMIN, ROLES.MANAGER)
  async deleteById(@Param("id") id: string): Promise<Record<string, unknown>> {
    return this.userService.deleteUserById(id);
  }

  // TODO: add support for updating user password
}
