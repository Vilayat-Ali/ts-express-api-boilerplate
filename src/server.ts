// lib
import express from "express";
import type { Express } from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import dotenv from "dotenv";
import consola from "consola";

// db
import { Mongo } from "./db";

// routes
import {Api} from "./routes/api";

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());
app.use(compression());
app.use(helmet());

// db connection establishment
new Mongo().connect();

app.get("/", async(req, res) => {
    return res.json({message: "Hello"});
});

app.use("/api", new Api().getRouter());

app.listen(Number(process.env.PORT), () => {
    consola.info(`Server spinning on port. ${process.env.PORT}`)
})