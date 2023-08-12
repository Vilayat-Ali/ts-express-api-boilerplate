// lib

// db
import { Mongo } from "../../db";

// types
import { User } from "../../interfaces/User";

export class UserHelper {

    public static async getUser(payload: Partial<User>) {
        const db = new Mongo();
        const user = await db.userModel.findOne({...payload});
        return user;
    }

    public static async addUser(user: User) {
        const db = new Mongo();
        const userInstance = new db.userModel(user);
        return await userInstance.save();
    }
}