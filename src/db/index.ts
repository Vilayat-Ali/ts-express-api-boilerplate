// lib
import mongoose from "mongoose";
import consola from "consola";
import { exit } from "process";

// models
import { UserSchema } from "./models/user.model";

// types
import { UserType } from "../interfaces/User";

export class Mongo {
    public userModel: mongoose.Model<UserType>;

    constructor() {
        this.userModel = mongoose.model("user", UserSchema);
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