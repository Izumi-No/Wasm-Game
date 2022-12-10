import { Server } from "hyper-express";
import { Routes } from "./routes";

const server = new Server();

server.use("/", Routes)

export { server };
