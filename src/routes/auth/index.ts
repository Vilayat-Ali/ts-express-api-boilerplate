// lib
import express from "express";
import type { Router } from "express";

// routes
import { AuthRoutes } from "./routes";

export class Auth {
    private router: Router;

    constructor() {
        this.router = express.Router();

        // route mapping
        this.router.post('/register', AuthRoutes.register);
        this.router.post('/login', AuthRoutes.login);
    }

    public getRouter() {
        return this.router;
    }

}