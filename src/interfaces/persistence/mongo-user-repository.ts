import { MongoClient } from "mongodb";
import { UserRepository } from "../../application/interfaces/user-repository-interface";

const userCollection = new MongoClient(process.env.MONGODB_CONNECTION_URL!).db('files-app').collection('users')


class MongoUserRepository implements UserRepository {
    async saveToPersistence (email: string, password: string){

        userCollection.insertOne({email, password})


        console.log('Saving to mongo');
        

    }
}


export const mongoUserRepository = new MongoUserRepository()