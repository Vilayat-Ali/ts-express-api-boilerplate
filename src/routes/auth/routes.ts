// lib
import type { Request, Response } from "express";

// helpers
import { AuthHelper } from "./helpers";
import { UserHelper } from "../user/helpers";

// types
import { UserType } from "../../interfaces/User";

export class AuthRoutes {

    public static async register(req: Request, res: Response) {
        try {
            const {username, email, password, role: userDefinedRole} = req.body;
            const hashedPassword: string = AuthHelper.hashPassword(password);
            const role: 'User' | 'Admin' = typeof userDefinedRole === "undefined" ? 'User' : 'Admin';

            const payload: UserType = {
                username, 
                email,
                password: hashedPassword,
                role
            };

            const token: string = AuthHelper.generateToken({username, email, role});
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

            const token: string = AuthHelper.generateToken({username: user.username, email: user.email, role: user.role});
            return res.json({success: true, access_token: token});
        } catch(err: any) {
            console.log(err);
            return res.json({success: false, err}) 
        }
    }
}