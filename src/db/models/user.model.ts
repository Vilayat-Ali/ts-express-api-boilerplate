// lib
import { Schema } from "mongoose";

// types
import type { UserType } from "../../interfaces/User";

export const UserSchema = new Schema<UserType>({
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
    },
    role: {
        type: String,
        enum: ['Admin', 'User'],
        default: 'User',
        required: true
    }
}, { timestamps: true });