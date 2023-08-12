// lib
import mongoose from "mongoose";
import consola from "consola";
import { exit } from "process";

// models
import { UserSchema } from "./models/user.model";
import { TodoSchema } from "./models/todo.model";

// types
import { User } from "../interfaces/User";
import { Todo } from "../interfaces/Todo";

export class Mongo {
    public userModel: mongoose.Model<User>;
    public todoModel: mongoose.Model<Todo>;

    constructor() {
        this.userModel = mongoose.model("user", UserSchema);
        this.todoModel = mongoose.model("todo", TodoSchema);
    }

    public async connect() {
        try {
            if(!mongoose.connections[0].readyState) {
                await mongoose.connect(String(process.env.MONGO_URI));
                consola.success("Connected to DB");
            }
        } catch (err: any) {
            consola.error("Cannot connect to DB");
            exit(1);
        }
    }

    public async disconnect() {
        try {
            if(mongoose.connections[0].readyState) {
                await mongoose.disconnect();
                consola.info("Disconnected to DB");
            }
        } catch (err: any) {
            consola.error("Cannot connect to DB");
            exit(1);
        }
    }
}