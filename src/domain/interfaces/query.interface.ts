import {ApiProperty} from '@nestjs/swagger';
import { IsString} from 'class-validator';

export class Queries {
	@ApiProperty({
		required: false,
	})
	@IsString()
		firstname: string;

	@IsString()
	@ApiProperty({
		required: false,
	})
		lastname: string;

	@IsString()
	@ApiProperty({
		required: false,
	})
		role: string;

	@IsString()
	@ApiProperty({
		required: false,
	})
		username: string;

	@IsString()
	@ApiProperty({
		required: false,
	})
		email: string;
}
