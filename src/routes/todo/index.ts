// lib
import express from "express";
import type { Router } from "express";

// routes
import { TodoRoutes } from "./routes";

export class Todo {
    private router: Router;

    constructor() {
        this.router = express.Router();

        // route mapping
        this.router.post("/", TodoRoutes.create);
        this.router.get("/", TodoRoutes.getAll);
        this.router.get("/:id", TodoRoutes.getOne);
        this.router.delete("/:id", TodoRoutes.delete);
    }

    public getRouter() {
        return this.router;
    }

}