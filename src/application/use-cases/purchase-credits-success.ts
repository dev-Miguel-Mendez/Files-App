import { BadRequest } from "../../entities/errors.js"
import { mongoUserRepository } from "../../infrastructure/persistence/mongo-user-repository.js"


//? This will be called after a success webhook

export class PurchaseCreditsSuccessService {
    
    purchaseTypes: Record<string, number> = {
        a: 100,
        b: 200,
        c: 300
    }

    async execute(purchaseType: string){ //? String assuming zod has validated it
        if(!Object.keys(this.purchaseTypes).includes(purchaseType)){
            throw new BadRequest('Invalid purchase type')
        }

        const user = await mongoUserRepository.findById('TEST_ID')

        user.addCredits(this.purchaseTypes[purchaseType])

        await mongoUserRepository.saveToPersistence(user.toObj(), false)


    }


    
}