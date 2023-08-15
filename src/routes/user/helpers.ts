// lib

// db

// types
import { UserTokenPayload, UserType } from "../../interfaces/User";

export class UserHelper {
  public static async getAllUsers(
    pageSize: number,
    limit: number,
    page: number
  ) {}

  public static async getUserById(id: string) {}

  public static async getUser(payload: Partial<UserTokenPayload>) {}

  public static async addUser(user: UserType) {}

  public static async editUser(payload: Partial<UserTokenPayload>) {}

  public static async deleteUser(id: string) {}
}
