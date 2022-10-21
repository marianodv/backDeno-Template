import { Context } from "../deps.ts";

export default async (context:Context,next:any)=>{
    const {request, response} = context;
    await next();
    const rt = response.headers.get("X-Response-Time");
    console.log(request.method + " sobre " + request.url.pathname + " en " + rt);
    //console.log(´${request.method} sobre ${request.url.pathname} en ${rt}´);
}