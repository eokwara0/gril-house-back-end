import {SetMetadata} from '@nestjs/common';
import {type ROLES} from 'src/modules/interfaces/roles.enum';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: ROLES[]) => SetMetadata(ROLES_KEY, roles);
