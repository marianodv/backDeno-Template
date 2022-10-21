// deno-lint-ignore-file
import { Router } from "../deps.ts";

const userRouter = new Router();

userRouter.get("/", (context:any, next:any)=>{
    context.response.status = 200;
    context.response.body = "Welcome to back with Deno"
})

export default userRouter;