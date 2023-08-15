// lib
import express from "express";
import type { Express } from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import consola from "consola";
import http from "http";
import https from "https";
import { Server } from "socket.io";
import dotenv from "dotenv";
import { exit } from "process";

// websockets
import { ServeWebSocket } from "./ws";

// zod types
import { EnvSchema } from "./zod/env.zod";

// envs
dotenv.config();
const zodParseError = EnvSchema.safeParse(process.env);
if (!zodParseError.success) {
  consola.fatal(zodParseError.error.format());
  exit(1);
}
export const ENV = zodParseError.data;
consola.success("ENV loaded successfully");

// db
import { Mongo } from "./db";

// routes
import { Api } from "./routes/api";

const app: Express = express();

app.use(express.json());
app.use(cors());
app.use(compression());
app.use(helmet());

// db connection establishment
new Mongo().connect();

app.get("/", async (req, res) => {
  return res.json({ message: "Hello" });
});

app.use("/api", new Api().getRouter());

// web sockets
let httpServer = null;
if (ENV.NODE_ENV === "development") {
  httpServer = http.createServer(app);
} else {
  httpServer = https.createServer(app);
}

const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  },
});

// extending web socket functionality
new ServeWebSocket(io);

// running server to listen to PORT
app.listen(Number(process.env.PORT), () => {
  consola.info(`Server spinning on port. ${process.env.PORT}`);
});
