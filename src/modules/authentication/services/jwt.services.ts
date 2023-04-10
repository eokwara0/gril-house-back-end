import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class IJwtService extends JwtService {
  constructor(readonly expires: string) {
    super({
      secret: process.env.SECRET_KEY,
      signOptions: {
        expiresIn: expires,
      },
    });
  }
}

@Injectable()
export class LoginJwtService extends IJwtService {
  constructor() {
    super("1h");
  }
}

@Injectable()
export class resetJwtService extends IJwtService {
  constructor() {
    super("3000s");
  }
}
