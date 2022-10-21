import { Router } from "../deps.ts";
import {getAll, create, getById} from "../controllers/usersController.ts";

const userRouter = new Router();

userRouter.get("/users", getAll);
userRouter.post("/users", create);
userRouter.get("/users/user/:id", getById)

export default userRouter;