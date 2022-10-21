import { Response } from "../deps.ts";

export default ({ response }: { response: Response })=>{
    response.status = 404;
    response.body = {
        success:false,
        msg:"404 Not found. No existe el recurso solicitado",
        body:{}
    };
}