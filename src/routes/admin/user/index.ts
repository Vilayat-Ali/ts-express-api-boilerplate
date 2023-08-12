// lib
import express from "express";
import type { Router } from "express";

// routes
import { AdminUserRoutes } from "./routes";

export class AdminUser {
    private router: Router;

    constructor() {
        this.router = express.Router();

        // route mapping
    }

    public getRouter() {
        return this.router;
    }
}