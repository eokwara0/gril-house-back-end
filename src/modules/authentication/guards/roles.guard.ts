import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { isEmpty, Observable } from "rxjs";
import { ROLES } from "src/modules/interfaces/roles.enum";
import { ROLES_KEY } from "../decorators/roles.decorator";


@Injectable()
export class RolesGuard implements CanActivate{
    constructor( private reflector : Reflector){}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const requiredRoles = this.reflector.getAllAndOverride<ROLES[]>(ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);

        if ( requiredRoles.length == 0 ){
            return true;
        }
        const {user} = context.switchToHttp().getRequest();
        return requiredRoles.indexOf(user.role) > -1;
    }
}