import { IsEmpty, IsNotEmpty, IsString } from "class-validator";


export class Queries  {


    @IsString()
    firstname : string ;

    @IsString()
    lastname  : string ;

    @IsString()
    role : string;
    @IsString()
    username : string ;
    @IsString()
    email : string ;;

}