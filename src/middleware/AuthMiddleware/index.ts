// lib
import type { Request, Response, NextFunction } from "express";
import { UserTokenPayload } from "../../interfaces/User";

// helpers
import jsonwebtoken from "jsonwebtoken";

declare global {
  namespace Express {
    export interface Request {
      user?: UserTokenPayload;
    }
  }
}

export class AuthMiddleware {
  public static AdminAuthMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const authHeader: string | undefined = req.headers.authorization;

      if (!authHeader) {
        return res.sendStatus(401).json({
          success: false,
          message: "Auth headers not set before sending request",
        });
      } else {
        const token: string = authHeader.split(" ")[1];
        const decodedData: UserTokenPayload = jsonwebtoken.verify(
          token,
          String(process.env.JWT_SECRET)
        ) as UserTokenPayload;
        if (decodedData.role !== "Admin") {
          return res
            .sendStatus(401)
            .json({ success: false, message: "Admin only access!" });
        }
        req.user = decodedData;
        next();
      }
    } catch (err: any) {
      return res
        .sendStatus(403)
        .json({ success: false, message: "Invalid token" });
    }
  }

  public static UserAuthMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const authHeader: string | undefined = req.headers.authorization;

      if (!authHeader) {
        return res.sendStatus(401).json({
          success: false,
          message: "Auth headers not set before sending request",
        });
      } else {
        const token: string = authHeader.split(" ")[1];
        const decodedData: UserTokenPayload = jsonwebtoken.verify(
          token,
          String(process.env.JWT_SECRET)
        ) as UserTokenPayload;
        req.user = decodedData;
        next();
      }
    } catch (err: any) {
      return res
        .sendStatus(403)
        .json({ success: false, message: "Invalid token" });
    }
  }
}
