import { NextFunction, Request, Response } from 'express';
import { AppError } from '../../../entities/errors.js';



export const errorMiddleware = async(error: Error, _req: Request, res: Response, _next: NextFunction)=>{
    
    if(error instanceof AppError){
        res.status(error.statusCode).send({message: error.message, success: false, error: error.InternalError})
        return
    }
    
    //* If a request doesn't go through the "validate()" middleware, it can throw a generic "Error" 
    res.status(500).send({message: error.message, success: false})


}