// lib
import { Schema } from "mongoose";

// types
import type { User } from "../../interfaces/User";

export const UserSchema = new Schema<User>({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});