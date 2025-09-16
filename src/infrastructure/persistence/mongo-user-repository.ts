import { UserPersistence } from "../../application/interfaces/user-persistence.js";
import { UserRepository } from "../../application/interfaces/user-repository-interface.js";
import { BadRequest } from "../../entities/errors.js";
import { User } from "../../entities/user.js";
import { filesAppDB } from "../../lib/mongo-client.js";





class MongoUserRepository implements UserRepository {

    private userCollection = filesAppDB.collection<UserPersistence>('users')

    
    async findById (id: string){
        
        const userDoc = await this.userCollection.findOne({id})
        
        if(!userDoc){
            throw new BadRequest('User not found')
        }
        
        return new User(userDoc.id, userDoc.email, userDoc.password, userDoc.credits)
        
    }

    async saveToPersistence (doc: UserPersistence, isNew: boolean){
        const existing = await this.userCollection.findOne({email: doc.email})

        if(existing){
            throw new BadRequest('User already exists (email)')
        }

        if(isNew){
            await this.userCollection.insertOne(doc)
        }

        //? Add "replaceOne" to update.

        console.log('SAVED TO MONGO: ', doc);
    }

}

export const mongoUserRepository = new MongoUserRepository()