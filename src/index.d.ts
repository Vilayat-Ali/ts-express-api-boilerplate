import { Request } from "express";
import { UserTokenPayload } from "./interfaces/User";

declare global {
  namespace Express {
    export interface Request {
      user?: UserTokenPayload;
    }
  }
}
