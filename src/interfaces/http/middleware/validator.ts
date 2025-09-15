import { NextFunction, Request, RequestHandler, Response } from "express"
import { AnyZodObject } from "zod/v3"

export const validate = (handler: RequestHandler, zodSchema?: AnyZodObject)=>{

    return (req: Request, res: Response, next: NextFunction)=>{

        try{
            if(zodSchema){
                zodSchema.parse(req)
            }

            next()
        }catch(e){
            console.error(e);
            
            next(e)

        }
    }
}