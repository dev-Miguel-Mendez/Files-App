import { Request, Response } from 'express';
import { paymentsSDK } from '../../../../lib/payments-sdk.js';




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