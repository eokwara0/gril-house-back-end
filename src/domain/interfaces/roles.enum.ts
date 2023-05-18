import { IsString } from "class-validator";

/**
 * User roles
 */
export enum ROLES {
  ADMIN = "ADMIN",
  MANAGER = "MANAGER",
  CASHIER = "CASHIER",
  WAITER = "WAITER",
  CHEF = "CHEF",
}

export class signInDto {
  @IsString()
  username: string;
  @IsString()
  password: string;
}
