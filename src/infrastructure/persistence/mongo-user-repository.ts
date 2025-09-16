import { UserRepository } from "../../application/interfaces/user-repository-interface.js";
import { BadRequest } from "../../entities/errors.js";
import { User } from "../../entities/user.js";
import { filesAppDB } from "../../lib/mongo-client.js";





class MongoUserRepository implements UserRepository {

    private userCollection = filesAppDB.collection('users')

    async saveToPersistence (user: User, isNew: boolean){


        const doc = user.toObj()
        

        console.log('Saving to mongo...');

        const existing = await this.userCollection.findOne({email: doc.email})


        if(existing){
            throw new BadRequest('User already exists (email)')
        }

        if(isNew){
            await this.userCollection.insertOne(doc)
        }
    }


    


}

export const mongoUserRepository = new MongoUserRepository()