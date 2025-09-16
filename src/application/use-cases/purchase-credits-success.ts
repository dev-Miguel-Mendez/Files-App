import { BadRequest } from "../../entities/errors.js"


//? This will be called after a success webhook

export class PurchaseCreditsSuccessService {
    
    purchaseTypes: Record<string, number> = {
        a: 100,
        b: 200,
        c: 300
    }

    execute(purchaseType: string){ //? String assuming zod has validated it
        if(!Object.keys(this.purchaseTypes).includes(purchaseType)){
            throw new BadRequest('Invalid purchase type')
        }
    }


    
}