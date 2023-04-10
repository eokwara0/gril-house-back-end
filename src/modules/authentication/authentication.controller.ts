import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Render,
  Req,
  UnauthorizedException,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { ROLES } from "../interfaces/roles.enum";
import { Roles } from "./decorators/roles.decorator";
import { JwtAuthGuard } from "./guards/jwt.authentication.guard";
import { LocalAuthGuard } from "./guards/local.authentication.guard";
import { RolesGuard } from "./guards/roles.guard";
import { ResetPasswordGuard } from "./guards/reset.password.guard";
import { AuthenticationService } from "./services/authentication.service";

@Controller("auth")
export class AuthenticationController {
  // AuthenticationController
  constructor(private readonly authservice: AuthenticationService) {}

  // Login endpoint a user has to provide a valid user
  @HttpCode(HttpStatus.OK)
  @Post("login")
  @UseGuards(LocalAuthGuard)
  async login(
    @Body(ValidationPipe) signinDto: Record<string, unknown>
  ): Promise<Record<string, unknown>> {
    return this.authservice.login(signinDto);
  }

  @Roles(ROLES.ADMIN, ROLES.MANAGER)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @UsePipes(
    new ValidationPipe({
      skipMissingProperties: true,
      skipNullProperties: true,
      skipUndefinedProperties: true,
    })
  )

  // Profile endpoint
  @Roles()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get("profile")
  async getProfile(@Req() req): Promise<Record<string, unknown>> {
    return this.authservice.getUserProfile(req.user._id);
  }

  @Roles()
  @Post("forgot/:email")
  async forgotPassword(
    @Param("email") email: string
  ): Promise<Record<string, unknown>> {
    return this.authservice.sendVerificationEmail(email);
  }

  @UseGuards(ResetPasswordGuard)
  @Render("index")
  @Get("reset/:id")
  resetPassword(@Param("id") id: string, @Req() req) {
    if (id === req.user.id) {
      return {
        person: { first: "emmanuel", last: "awesome" },
        message: "Hello World!",
      };
    }
    throw new UnauthorizedException({
      message: "You do not have permission to this page.",
    });
  }
}
