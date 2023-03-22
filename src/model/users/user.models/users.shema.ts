import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsEmpty, IsString } from "class-validator";
import mongoose, { HydratedDocument } from "mongoose";
import { ROLES } from "src/model/Role/roles.enum";

// User Interface 
export interface IUser{

       role : ROLES;
       email : string ;
       mobile : string ;
       username : string ;
       lastname : string ;
       password : string ;
       firstname : string ;

}


// User Interface concrete implementation
@Schema({
    id : true ,
    minimize : true, 
    versionKey : false,
    timestamps : true,
})
export class User implements IUser{

    @IsString()
    @Prop({
        name : 'ROLE',
        type : mongoose.Schema.Types.String,
        required : true,
        
    })
    role: ROLES;

    @IsString()
    @Prop({
        name : 'EMAIL',
        type : mongoose.Schema.Types.String,
        required : false,
        index : true , 
    })
    email: string;

    @IsString()
    @Prop({
        name : 'MOBILE NUMBER',
        type : mongoose.Schema.Types.String,
        required : false,

    })
    mobile: string;

    @IsString()
    @Prop({
        name : 'USERNAME',
        type : mongoose.Schema.Types.String,
        required : false,
        index : true 
    })
    username: string;


    @IsString()
    @Prop({
        name : 'Lastname',
        type : mongoose.Schema.Types.String,
        required : false,
        index : true,
    })
    lastname: string;

    @IsString()
    @Prop({
        name : "PASSWORD",
        type : mongoose.Schema.Types.String,
        required : false,
    })
    password: string;


    @IsString()
    @Prop({
        name : "FIRSTNAME",
        type : mongoose.Schema.Types.String,
        required : true,
        index : true 
    })
    firstname: string;

    // constructor
    constructor( 
        role : ROLES ,
        email : string , 
        mobile : string , 
        username : string , 
        lastname : string , 
        password : string,
        firstname : string ,
        ){

            this.role = role ;
            this.email = email ;
            this.mobile = mobile ;
            this.username = username ;
            this.firstname = firstname ;
            this.lastname = lastname ;
            this.password = password ;
    }

    getRole() : string {
        return this.role;
    }

    setRole(role : ROLES ) : void {
        this.role = role ;
    }

    getEmail() : string {
        return this.email;
    }

    setEmail(email : string) : void {
        this.email = email;
    }

    getMobile() : string {
        return this.email
    }

    setMobile(mobile : string) : void {
        this.mobile = mobile ;
    }

    getUsername() : string {
        return this.username;
    }

    setUserName( username : string ) : void {
        this.username = username;
    }

    getFirstName() : string {
        return this.firstname;
    }

    setFirstName( firstname : string ) : void {
        this.firstname = firstname;
    }

    setPassword( password : string ) : void {
        this.password = password;
    }

    getPassword() : string{
        return this.password;
    }

    getLastName() : string {
        return this.lastname;
    }

    setLastName( lastname : string ) : void {
        this.lastname = lastname;
    }
    
}

export type UserDocument = HydratedDocument<User>;
export const UserSchema = SchemaFactory.createForClass(User);