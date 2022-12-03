import {Router} from "hyper-express"
import {UserRoutes} from "./user.route"

let Routes = new Router

Routes.use("/users", UserRoutes)

export {Routes}