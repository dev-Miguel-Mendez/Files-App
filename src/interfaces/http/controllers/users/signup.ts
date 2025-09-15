import { Request, Response } from 'express';
import { RegisterWithPassword } from '../../../../application/use-cases/register-with-password';
import { prismaUserRepository } from '../../../persistence/prisma-user-repository';


export const registerWithPassword = new RegisterWithPassword(prismaUserRepository)


export const signup = async(req: Request, res: Response)=>{
    

    const {body} = req
    
    if(!body){ //? To validate
        return res.status(400).send('No body')
    }

    
    await registerWithPassword.execute(body)

}