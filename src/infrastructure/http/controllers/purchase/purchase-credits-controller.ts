import { Request, Response } from 'express';
import { BadRequest } from '../../../../entities/errors.js';



export const PurchaseCreditsService = async(req: Request, res: Response)=>{
    
    const purchaseType = req.url
    
    if(!Object.keys(purchaseTypes).includes(purchaseType)){
        throw new BadRequest('Invalid purchase type')
    }

    const purchaseAmount = purchaseTypes[purchaseType]



}