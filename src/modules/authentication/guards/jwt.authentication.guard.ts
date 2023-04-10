import {type ExecutionContext, Injectable, UnauthorizedException} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';
import {type Observable} from 'rxjs';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
	canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
		return super.canActivate(context);
	}

	handleRequest<TUser = unknown>(err: unknown, user: TUser): TUser {
		if (err || !user) {
			throw err || new UnauthorizedException();
		}

		return user;
	}
}
