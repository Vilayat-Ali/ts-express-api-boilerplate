// lib
import express from "express";
import type { Router } from "express";

// middleware
import { AuthMiddleware } from "../../middleware";

// routes
import { AdminUser } from "./user";

export class Admin {
    private router: Router;

    constructor() {
        this.router = express.Router();

        // route mapping
        this.router.use("/user", AuthMiddleware.AdminAuthMiddleware, new AdminUser().getRouter());
    }

    public getRouter() {
        return this.router;
    }
}