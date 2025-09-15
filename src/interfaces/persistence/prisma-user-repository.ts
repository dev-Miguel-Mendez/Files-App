import { UserRepository } from "../../application/interfaces/user-repository-interface";

class PrismaUserRepository implements UserRepository {
    async saveToPersistence (){

        console.log('Saving to prisma');
        

    }
}


export const prismaUserRepository = new PrismaUserRepository