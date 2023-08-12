// lib
import express from "express";
import type { Router } from "express";

// routes
import { UserRoutes } from "./routes";

export class User {
    private router: Router;

    constructor() {
        this.router = express.Router();

        // route mapping
    }

    public getRouter() {
        return this.router;
    }

}