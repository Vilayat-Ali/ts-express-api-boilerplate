// lib
import jsonwebtoken from "jsonwebtoken";
import bcrypt from "bcryptjs";

// types
import { User } from "../../interfaces/User";

export class AuthHelper {

    public static generateToken(payload: {username: string, email: string}): string {
        return jsonwebtoken.sign(payload, String(process.env.JWT_SECRET), { expiresIn: '6d'});
    }

    public static hashPassword(password: string): string {
        return bcrypt.hashSync(password);
    }

    public static verifyPassword(password: string, hashedPassword: string) {
        return bcrypt.compareSync(password, hashedPassword);
    }

}