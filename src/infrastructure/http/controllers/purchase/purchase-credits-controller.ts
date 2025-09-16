import { Request, Response } from 'express';
import { BadRequest } from '../../../../entities/errors.js';
import { PurchaseCreditsService } from '../../../../application/use-cases/purchase-credits-success.js';
import { paymentsSDK } from '../../../../lib/payments-sdk.js';


const purchaseCreditsService = new PurchaseCreditsService()


export const PurchaseCreditsController = async(req: Request, res: Response)=>{
    
    const purchaseType = req.url
    

    const checkoutURL = paymentsSDK.getCheckoutURL({
        amount: 123,
        currency: 'usd',
        metadata: {
            purchaseType
        }
    })


    res.redirect(checkoutURL)

}