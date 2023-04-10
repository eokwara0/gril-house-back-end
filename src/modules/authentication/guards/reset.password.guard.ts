import {
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from "@nestjs/common";
import { Request } from "express";
import { resetJwtService } from "../services/jwt.services";

export class ResetPasswordGuard implements CanActivate {
  constructor(private jwts: resetJwtService = new resetJwtService()) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromQueries(request);

    if (token === null || token === undefined) {
      throw new UnauthorizedException();
    }
    try {
      const payload = this.jwts.verify(token);
      request["user"] = payload;
    } catch {
      throw new UnauthorizedException();
    }
    return true;
  }

  private extractTokenFromQueries(request: Request): any {
    return request.query["jwt"];
  }
}
