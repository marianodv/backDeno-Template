import {MongoClient} from "https://deno.land/x/mongo@v0.31.1/mod.ts";

const client = new MongoClient();

try{
    await client.connect("mongodb://127.0.0.1:27017");

    console.log("Conectado a mongoDB...")
}catch(e){
    console.log("Error MongoDB:",e)
}

const mongo = client.database("test");

export default mongo