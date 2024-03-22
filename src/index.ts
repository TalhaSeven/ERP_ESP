import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import fs from "fs";
import path from "path";
import { notFound } from "./middlewares/not-found";
import { errorHandler } from "./middlewares/error-handler";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

const now = new Date();
const today = now.toISOString().split("T")[0];
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, `../logs/${today}.log`),
  { flags: "a+" }
);

app.use(morgan("combined", { stream: accessLogStream }));

app.get("/api/v1", (req: Request, res: Response) => {
  res.json("Express + TypeScript Server");
});

app.post("/api/v1", (req: Request, res: Response) => {
  res.json("Express + TypeScript Server");
});
app.post("/api/v1/login", (req: Request, res: Response) => {
  res.json("Express + TypeScript Server");
});

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
