// lib

// db
import { Mongo } from "../../db";

// types
import { UserTokenPayload, UserType } from "../../interfaces/User";

export class UserHelper {

    public static async getAllUsers(pageSize: number, limit: number, page: number) {
        const db = new Mongo();
        const users = await db.userModel.find({});
        return users;
    }

    public static async getUserById(id: string) {
        const db = new Mongo();
        const user = await db.userModel.findById(id);
        return user;
    }

    public static async getUser(payload: Partial<UserTokenPayload>) {
        const db = new Mongo();
        const user = await db.userModel.findOne({...payload});
        return user;
    }

    public static async addUser(user: UserType) {
        const db = new Mongo();
        const userInstance = new db.userModel(user);
        return await userInstance.save();
    }

    public static async editUser(payload: Partial<UserTokenPayload>) {
        const db = new Mongo();
        return await db.userModel.findOneAndUpdate(payload);
    }

    public static async deleteUser(id: string) {
        const db = new Mongo();
        return await db.userModel.findByIdAndDelete(id);
    }
}