import { Router } from "hyper-express";
import { RouteAdapter } from "../Adapters/HyperExpressRouteAdapter";
import { createUserControllerFactory } from "../Factories/createUserControllerFactory";
import { GetAllUsersControllerFactory } from "../Factories/getAllUsersControllerFactory";

let UserRoutes = new Router();
UserRoutes.post("/", RouteAdapter(createUserControllerFactory()));
UserRoutes.get("/", RouteAdapter(GetAllUsersControllerFactory()));

export { UserRoutes };
