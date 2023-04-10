/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { IJwtService, LoginJwtService, resetJwtService } from "./jwt.services";
import { User } from "src/modules/users/user.models/users.shema";
import { UsersService } from "src/modules/users/users.service";
import { MailService } from "./email.service";

@Injectable()
export class AuthenticationService {
  // constructor function
  constructor(
    private userService: UsersService,
    private jwtService: LoginJwtService,
    private resetJwtService: resetJwtService,
    private emails: MailService
  ) {}

  /**
   *
   * @param username
   * @param pass
   * @returns Valid Record container user information
   */
  async validateUser(
    username: string,
    pass: string
  ): Promise<Record<string, unknown>> {
    const user: User = await this.userService.findByUserName(username);
    const strongPass: boolean = await this.validatePassword(pass);
    const validPass: boolean = pass === user.password;

    if (!user || !strongPass || !validPass) {
      throw new UnauthorizedException();
    }
    const result = await this.extractResult(user);
    return result;
  }

  /**
   *
   * @param user
   * @returns access token using the user information
   */
  async login(user: Record<string, unknown>): Promise<Record<string, unknown>> {
    const payload = {
      username: user.username,
      sub: user._id,
      role: user.role,
    };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  /**
   *
   * @param userId
   * @returns returns a users profile based on their access token information
   */
  async getUserProfile(userId: string): Promise<Record<string, unknown>> {
    const user = await this.userService.findUserById(userId);
    if (user) {
      const result = await this.extractResult(user);
      return result;
    }
    return null;
  }

  /**
   * Sends email to the provided email address
   * with the link to the reset password page.
   * @param email
   * @returns Object with boolean message
   */
  async sendVerificationEmail(email: string): Promise<Record<string, unknown>> {
    // validate email
    const valid = this.validateEmail(email);
    if (!valid) {
      throw new UnauthorizedException({ message: "Invalid email " });
    }
    // chek for user
    const user: User = await this.userService.checkUser({ email: email });

    // check was found
    if (!user) {
      // throw an error if user is not found
      throw new UnauthorizedException({
        message: "User does not exist in the system",
      });
    }

    // creating payload package and jwt access token.
    const payload: Record<string, any> = this.getPayload(user);
    const jwtToken = await this.resetJwtService.signAsync(payload);

    try {
      await this.emails.send_({
        text: `http://localhost:3000/auth/reset/${payload.id}?jwt=${jwtToken}&&`,
        to: user.email,
        html: "",
        subject: "RESET PASSWORD",
      });
      return { message: "success" };
    } catch {
      throw new HttpException("Unable to Send email", HttpStatus.BAD_GATEWAY);
    }
  }

  private getPayload(user: User): Record<string, any> {
    return {
      id: user?._id,
      username: user.username,
      password: user.password,
    };
  }

  /**
   * Checks whether the email provided is valid
   * Using regular expressions.
   * @param email
   * @returns {bool}
   */
  private async validateEmail(email: string): Promise<boolean> {
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regex.test(email);
  }

  private async validatePassword(password: string): Promise<boolean> {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    return regex.test(password);
  }

  /**
   * Returns a Record object
   * of the user without the user password
   * @param user
   * @returns Record<string, string>
   */
  private async extractResult(user: User): Promise<Record<string, unknown>> {
    return {
      _id: user._id,
      role: user.role,
      email: user.email,
      lastname: user.lastname,
      username: user.username,
      firstname: user.firstname,
    };
  }
}
