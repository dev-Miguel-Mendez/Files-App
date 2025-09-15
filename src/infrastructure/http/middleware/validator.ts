import { NextFunction, Request, Handler, Response } from "express"
import { ZodObject } from "zod"

export const validate = (handler: Handler, zodSchema?: ZodObject)=>{

    return async (req: Request, res: Response, next: NextFunction)=>{

        try{
            if(zodSchema){
                zodSchema.parse(req)
            }

            await handler(req, res, next) //¡ Careful with this next() function


        }catch(e){
            console.error(e);
            next(e)
        }
    }
}