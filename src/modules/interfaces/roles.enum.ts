import { IsString } from "class-validator";

/**
 * User roles
 */
export enum ROLES {

	ADMIN = 'ADMIN',
	MANAGER = 'MANAGER',
	CASHIER = 'CASHIER',
	WAITER = 'WAITER',
}

export class signInDto{
	@IsString()
	username : string ;
	@IsString()
	password : string ;
}
