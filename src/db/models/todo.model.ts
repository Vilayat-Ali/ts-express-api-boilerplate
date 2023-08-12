// lib
import { Schema } from "mongoose";

// types
import type { Todo } from "../../interfaces/Todo";

export const TodoSchema = new Schema<Todo>({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: false,
        unique: true
    },
    isCompleted: {
        type: Boolean,
        required: true
    }
});