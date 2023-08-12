// lib
import type { Request, Response, NextFunction } from "express";
import { UserTokenPayload } from "../../interfaces/User";

// helpers
import jsonwebtoken from "jsonwebtoken";

export const middleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const authHeader: string | undefined = req.headers.authorization;

        if(!authHeader) {
            return res.sendStatus(401).json({success: false, message: 'Auth headers not set before sending request'});
        } else {
            const token: string = authHeader.split(' ')[1];
            const decodedData: string | jsonwebtoken.JwtPayload = jsonwebtoken.verify(token, String(process.env.JWT_SECRET));
            req.user = decodedData as UserTokenPayload;
            next();
        }
    } catch(err: any) {
        return res.sendStatus(403).json({success: false, message: 'Invalid token'});
    }

}