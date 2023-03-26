import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthenticationService {
    constructor( private userService : UsersService , private jwtService : JwtService){}


    async validateUser( username : string , pass : string ): Promise<any>{
        // searching for user in the database
        const user = await this.userService.findByUserName(username);
        
        // user validation
        if (user && user.password === pass ){

            const { password , ...result } = user["_doc"] ;
            return result ;
        }

        return null;
    }

    async login(user : any){
        const payload = { username : user.username, sub : user._id , role : user.role };
        return {
            access_token : this.jwtService.sign(payload),
        }
    }
}
