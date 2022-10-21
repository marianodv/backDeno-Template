import mongo from "../config/mongo.ts"


interface UserSchema {
    name: string;
    lastName: string;
    age: number;
}


const usersModel = mongo.collection<UserSchema>("users");

export default usersModel