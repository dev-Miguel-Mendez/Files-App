import { UserRepository } from "../../application/interfaces/user-repository-interface";

class MongoUserRepository implements UserRepository {
    async saveToPersistence (){

        


        console.log('Saving to mongo');
        

    }
}


export const mongoUserRepository = new MongoUserRepository()