import { Response } from "../deps.ts";

export default async ({ response }: { response: Response }, next:any) =>{
    try{
        await next()
    }catch (error)
    {
        response.status = 500
        response.body = {
            success:false,
            msj:error.message,
            body:error
        }
        console.log("errorHandler: ", error.message)
    }   
}