import { MongoClient } from "mongodb";
import { UserRepository } from "../../application/interfaces/user-repository-interface.js";
import { BadRequest } from "../../entities/errors.js";



const mongoClient = new MongoClient(process.env.MONGODB_CONNECTION_URL!)

try{
    await mongoClient.connect()
}catch(e){
    console.error(e);	
}



class MongoUserRepository implements UserRepository {

    private userCollection = mongoClient.db('files-app').collection('users')

    async saveToPersistence (email: string, password: string){

        console.log('Saving to mongo...');

        const existing = await this.userCollection.findOne({email})


        if(existing){
            throw new BadRequest('User already exists (email)')
        }

        await this.userCollection.insertOne({email, password})
        

    }
}

export const mongoUserRepository = new MongoUserRepository()