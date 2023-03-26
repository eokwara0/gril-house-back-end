import { ApiProperty } from "@nestjs/swagger";
import { IsEmpty, IsNotEmpty, IsObject, IsString } from "class-validator";


export class Queries  {


    @ApiProperty()
    @IsString()
    firstname : string ;

    @IsString()
    @ApiProperty()
    lastname  : string ;

    @IsString()
    @ApiProperty()
    role : string;


    @IsString()
    @ApiProperty()
    username : string ;


    @IsString()
    @ApiProperty()
    email : string ;;

}