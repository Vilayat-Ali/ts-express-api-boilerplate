// lib
import type { Request, Response, NextFunction } from "express";

// helpers
import { AuthHelper } from "./helpers";
import { UserHelper } from "../user/helpers";

// types
import { User } from "../../interfaces/User";

export class AuthRoutes {

    public static async register(req: Request, res: Response) {
        try {
            const {username, email, password} = req.body;
            const hashedPassword: string = AuthHelper.hashPassword(password);

            const payload: User = {
                username, 
                email,
                password: hashedPassword
            };

            const token: string = AuthHelper.generateToken({username, email});
            await UserHelper.addUser(payload);
            return res.json({success: true, access_token: token});
        } catch(err: any) {
            console.log(err)
            return res.json({success: false, err})
        }
    }

    public static async login(req: Request, res: Response) {
        try {
            const {email, password}: {email: string, password: string} = req.body;
            const user = await UserHelper.getUser({ email });

            if(!user) {
                return res.json({success: false, message: 'User does not exists!'});
            }

            const userData = AuthHelper.verifyPassword(password, user.password);   
            
            if(!userData) {
                return res.json({success: false, message: 'Invalid password!'});
            }

            const token: string = AuthHelper.generateToken({username: user.username, email: user.email});
            return res.json({success: true, access_token: token});
        } catch(err: any) {
            console.log(err);
            return res.json({success: false, err}) 
        }
    }
}