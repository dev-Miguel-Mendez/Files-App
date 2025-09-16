import { NextFunction, Request, Handler, Response } from "express"
import { ZodError, ZodObject } from "zod"
import { AppError, UnprocessableEntity } from "../../../entities/errors.js"

export const validate = (handler: Handler, zodSchema?: ZodObject)=>{

    return async (req: Request, res: Response, next: NextFunction)=>{

        try{
            if(zodSchema){
                zodSchema.parse(req)
            }

            await handler(req, res, next) //¡ Careful with this next() function


        }catch(e){
           let exception 

            console.error('Caught Error (validator.ts) : ', e);
            
            if(e instanceof AppError){
                exception = e
            } else if(e instanceof ZodError){
				//* Old version
				// const messages = Object.values(e.flatten().fieldErrors).flat();

				//* Jul-15-2025 - New, simpler, and apparently better one. Gives the same result, less code.
				const errorMessages = e.issues.map((issue) => issue.message);
				
				exception = new UnprocessableEntity(errorMessages.join(', '));
            }


            next(exception)


        }
    }
}