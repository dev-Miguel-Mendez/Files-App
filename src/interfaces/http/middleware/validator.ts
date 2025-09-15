import { NextFunction, Request, RequestHandler, Response } from "express"
import { ZodObject } from "zod"

export const validate = (handler: RequestHandler, zodSchema?: ZodObject)=>{

    return (req: Request, res: Response, next: NextFunction)=>{

        try{
            if(zodSchema){
                zodSchema.parse(req)
            }

            handler(req, res, next)


            next()
        }catch(e){
            console.error(e);
            
            next(e)

        }
    }
}