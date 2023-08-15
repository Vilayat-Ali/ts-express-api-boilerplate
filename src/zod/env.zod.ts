// lib
import { z } from "zod";

export const EnvSchema = z.object({
  NODE_ENV: z.enum(["development", "production"]).default("development"),
  PORT: z
    .string()
    .regex(/^\d{4}$/)
    .nonempty()
    .transform(Number),
  JWT_SECRET: z.string().min(64).max(256).nonempty(),
  DB_HOST: z.string().nonempty(),
  DB_PORT: z
    .string()
    .regex(/^\d{4}$/)
    .nonempty()
    .transform(Number),
  DB_USERNAME: z.string().nonempty(),
  DB_PASSWORD: z.string().nonempty(),
  DB_DATABASE_NAME: z.string().nonempty(),
});
