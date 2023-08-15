// lib
import type { Request } from "express";

export interface AuthenticatedRequest extends Request {
  user: {
    username: string;
    email: string;
    role: "Admin" | "User";
  };
}
