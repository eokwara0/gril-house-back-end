import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Inject,
  UnauthorizedException,
} from "@nestjs/common";
import { Request } from "express";
import { resetJwtService } from "../services/jwt.services";
import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { Cache } from "cache-manager";
export class ResetPasswordGuard implements CanActivate {
  constructor(
    private jwts: resetJwtService = new resetJwtService(),
    @Inject(CACHE_MANAGER) private cacheManger: Cache
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromQueries(request);

    if (token === null || token === undefined) {
      throw new UnauthorizedException();
    }
    try {
      const payload = this.jwts.verify(token);
      const tokenKey = `reset.${payload.username}`;
      if (await this.cacheManger.get(tokenKey)) {
        request["user"] = payload;
      } else {
        throw new HttpException("Invalid jwt token ", HttpStatus.BAD_REQUEST);
      }
    } catch {
      throw new UnauthorizedException();
    }
    return true;
  }

  private extractTokenFromQueries(request: Request): any {
    return request.query["jwt"];
  }
}
