// lib
import { z } from "zod";

export const EnvSchema = z.object({
  NODE_ENV: z.enum(["development", "production"]).default("development"),
  PORT: z
    .string()
    .regex(/^\d{4}$/)
    .nonempty(),
  MONGO_URI: z
    .string()
    .regex(
      /mongodb:\/\/(?:(?:[^:]+):(?:[^@]+)?@)?(?:(?:(?:[^\/]+)|(?:\/.+.sock?),?)+)(?:\/([^\/\.\ "*<>:\|\?]*))?(?:\?(?:(.+=.+)&?)+)*/
    )
    .nonempty(),
  JWT_SECRET: z.string().min(64).max(256).nonempty(),
});
