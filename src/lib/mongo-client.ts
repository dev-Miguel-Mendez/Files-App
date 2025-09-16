import { MongoClient } from "mongodb";

const mongoClient = new MongoClient(process.env.MONGODB_CONNECTION_URL!)

try{
    await mongoClient.connect()
}catch(e){
    console.error(e);	
}

export const filesAppDB = mongoClient.db('files-app')