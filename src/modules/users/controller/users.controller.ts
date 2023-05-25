import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  UseFilters,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { ApiBearerAuth } from "@nestjs/swagger";
import { Roles } from "../../authentication/decorators/roles.decorator";
import { JwtAuthGuard } from "../../authentication/guards/jwt.authentication.guard";
import { Queries } from "../../../domain/interfaces/query.interface";
import { ROLES } from "../../../domain/interfaces/roles.enum";
import { User, UserResult } from "../user.models/users.shema";
import { UsersService } from "../services/users.service";
import { AuthenticationService } from "../../authentication/services/authentication.service";
import { RolesGuard } from "../../authentication/guards/roles.guard";

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
  @Get()
  @Roles(ROLES.ADMIN, ROLES.MANAGER)
  async findAll(@Query() queries: Queries): Promise<UserResult[]> {
    const users = await this.userService.findAll(queries);
    const userResult = users.map((el) => {
      return AuthenticationService.extractResult(el);
    });
    return userResult;
  }

  @HttpCode(HttpStatus.ACCEPTED)
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
  async addUser(@Body() user: User): Promise<UserResult> {
    const user_: User = await this.userService.createUser(user);
    return AuthenticationService.extractResult(user_);
  }

  @Roles()
  @Get(":id")
  @Roles(ROLES.ADMIN, ROLES.MANAGER)
  @ApiBearerAuth()
  async findById(@Param("id") id: string): Promise<UserResult> {
    const user: User = await this.userService.findUserById(id);
    return AuthenticationService.extractResult(user);
  }

  @ApiBearerAuth()
  @Roles(ROLES.ADMIN, ROLES.MANAGER)
  @HttpCode(HttpStatus.ACCEPTED)
  @Put("grant/:id")
  async grantAccessById(@Param("id") id: string): Promise<any> {
    return await this.userService.grantAccess(id);
  }

  @ApiBearerAuth()
  @Roles(ROLES.ADMIN, ROLES.MANAGER)
  @HttpCode(HttpStatus.ACCEPTED)
  @Put("revoke/:id")
  async revokeAccessById(@Param("id") id: string): Promise<any> {
    return await this.userService.revokeAccess(id);
  }

  @ApiBearerAuth()
  @Roles(ROLES.ADMIN, ROLES.MANAGER, ROLES.CHEF, ROLES.WAITER, ROLES.CASHIER)
  @HttpCode(HttpStatus.ACCEPTED)
  @Put("change/password/:id")
  async updateUserPassword(
    @Param("id") id: string,
    @Body("password") password: string
  ): Promise<any> {
    return await this.userService.changePassword(id, password);
  }

  // delete
  @Delete(":id")
  @ApiBearerAuth()
  @Roles(ROLES.ADMIN, ROLES.MANAGER)
  async deleteById(@Param("id") id: string): Promise<Record<string, unknown>> {
    return this.userService.deleteUserById(id);
  }
}
