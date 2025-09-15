import { UserRepository } from "../../application/interfaces/user-repository-interface";

class mongoUserRepository implements UserRepository {
    async saveToPersistence (){

        console.log('Saving to mongo');
        

    }
}


export const mongoUserRepository = new mongoUserRepository