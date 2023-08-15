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

// env
import { Env } from "./env";

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
if (Env.NODE_ENV === "development") {
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

io.on("connection", (socket) => {
  console.log("We are live and connected");
  console.log(socket.id);
});

app.listen(Number(process.env.PORT), () => {
  consola.info(`Server spinning on port. ${process.env.PORT}`);
});
