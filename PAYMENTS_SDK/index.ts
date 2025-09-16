type GetCheckoutUrlOptions = {

    currency: 'usd' | 'mxn' | 'eur'
    amount: number
    metadata: Object

}


export class PaymentsSDK {

    constructor(public privateKey: string){}


    getCheckoutURL(data: GetCheckoutUrlOptions){
        return 'test-url'
    }

    hasPaid(id: string){
        return Math.random() > 0.5
    }

    isValidWebhook(paymentSignature: string){

        if(paymentSignature === this.privateKey + 'CRYPTOGRAPHY WORK'){
            return true
        } //? This would use cryptograghy to know if that payment signature was derived from the privateKey (or a similar system)


    }


}