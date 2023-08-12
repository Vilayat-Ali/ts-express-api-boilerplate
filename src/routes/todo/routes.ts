// lib
import type { Request, Response } from "express";

// helpers
import { TodoHelper } from "./helpers";

export class TodoRoutes {

    public static async getAll(req: Request, res: Response) {
        try {
            return res.json({success: true, message: "Hello todo"});
        } catch(err: any) {
            return res.json({success: false, err})
        }
    }

    public static async getOne(req: Request, res: Response) {
        try {
            return res.json({success: true, message: "Hello Register"});
        } catch(err: any) {
            return res.json({success: false, err})
        }
    }

    public static async create(req: Request, res: Response) {
        try {
            return res.json({success: true, message: "Hello Register"});
        } catch(err: any) {
            return res.json({success: false, err})
        }
    }

    public static async delete(req: Request, res: Response) {
        try {
            return res.json({success: true, mesage: "Hello Login"});
        } catch(err: any) {
            return res.json({success: false, err}) 
        }
    }
}