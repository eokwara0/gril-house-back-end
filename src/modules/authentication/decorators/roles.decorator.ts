import { SetMetadata } from "@nestjs/common";
import { type ROLES } from "src/domain/interfaces/roles.enum";

export const ROLES_KEY = "roles";
export const Roles = (...roles: ROLES[]) => SetMetadata(ROLES_KEY, roles);
