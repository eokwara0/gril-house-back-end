import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
  Render,
  Req,
  UnauthorizedException,
  UseGuards,
} from "@nestjs/common";
import { Roles } from "./decorators/roles.decorator";
import { JwtAuthGuard } from "./guards/jwt.authentication.guard";
import { LocalAuthGuard } from "./guards/local.authentication.guard";
import { ResetPasswordGuard } from "./guards/reset.password.guard";
import { AuthenticationService } from "./services/authentication.service";
import { RolesGuard } from "./guards/roles.guard";

@Controller("auth")
export class AuthenticationController {
  // AuthenticationController
  constructor(private readonly authservice: AuthenticationService) {}

  // Login endpoint a user has to provide a valid user
  @HttpCode(HttpStatus.OK)
  @Post("login")
  @UseGuards(LocalAuthGuard)
  async login(@Req() req): Promise<Record<string, any>> {
    return this.authservice.login(req.user);
  }

  @Roles()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get("profile")
  async getProfile(
    @Req() req: Record<string, any>
  ): Promise<Record<string, any>> {
    return this.authservice.getUserProfile(req.user.id);
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

  @Roles()
  @UseGuards(JwtAuthGuard)
  @Post("/password/:id")
  async updateUserPassword(
    @Param("id") id: string,
    @Query("newpassword") password: string
  ): Promise<Record<string, string>> {
    return this.authservice.reset({
      id: id,
      newpassword: password,
    });
  }
}
