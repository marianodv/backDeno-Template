import { Application } from "./deps.ts";
import headers from "./middlewares/headers.ts";
import logger from "./middlewares/logger.ts";
import errorHandler from "./middlewares/errorHandler.ts";
import notFound from "./middlewares/notFound.ts";
import userRouter from "./routes/usersRouter.ts"
import indexRouter from "./routes/indexRouter.ts"


const app = new Application();

app.use(logger);
app.use(headers);
app.use(errorHandler);

app.use(indexRouter.routes());
app.use(indexRouter.allowedMethods());

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());


console.log("Deno corriendo en http://localhost:8000");

app.use(notFound);

await app.listen({ port: 8000 });