import { Request, Response } from 'express';
import { RegisterWithPassword } from '../../../../application/use-cases/register-with-password.js';
import { RegisterRequestBody } from '../../zod-schemas/users-schemas.js';
import { mongoUserRepository } from '../../../persistence/mongo-user-repository.js';


export const registerWithPassword = new RegisterWithPassword(mongoUserRepository)


export const register = async(req: Request<{}, {}, RegisterRequestBody>, res: Response)=>{
    
    const {email, password} = req.body
    
    const user = await registerWithPassword.execute(email, password)

    return res.status(201).send({message: 'User created with email: ' + user.toObj().email, success: true})
    
}