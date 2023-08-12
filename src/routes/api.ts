// lib
import express from "express";
import type { Router } from "express";

// routes
import { Auth } from "./auth";
import { User } from "./user";

export class Api {
    private router: Router;

    constructor() {
        this.router = express.Router();
        
        // mapping routes
        this.router.use("/user", new User().getRouter());
        this.router.use("/auth", new Auth().getRouter());
    }

    public getRouter() {
        return this.router;
    }
}
