// deno-lint-ignore-file
import { Response } from "../deps.ts";
import usersModel from "../models/usersModel.ts"

import {Bson} from "https://deno.land/x/mongo@v0.31.1/mod.ts";

export const getAll = async ({ response }: { response: Response })=>{
    try{
        const res = await usersModel.find().toArray()
        console.log("GET: ", res)
        response.status = 200;
        response.body = res;
    }catch(e){
        console.log("Error getAll usersController:",e)
    }
}

export const getById = async (context:any, next:any)=>{
    const {response, params} = context;
    console.log("user id: ", params?.id)
    try{
        const res = await usersModel.findOne({_id:new Bson.ObjectId(params?.id)})
        console.log("GET: ", res)
        response.status = 200;
        response.body = res;
    }catch(e){
        console.log("Error getAll usersController:",e)
    }
}

export const create = async (context:any, next:any)=>{
    const {request, response} = context;
    const data = await request.body({type:"json"}).value
    const newUser = {
        name: data?.name,
        lastName: data?.lastName,
        age: data?.age
    }
    console.log("create:",newUser)
    try{
        const document = await usersModel.insertOne(newUser)
        console.log("POST: ", document)
        response.status = 201;
        response.body = document;
    }catch(e){
        console.log("Error getAll usersController:",e)
    }
}
