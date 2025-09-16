import { Request, Response } from 'express';
import { RegisterWithPasswordService } from '../../../../application/use-cases/register-with-password.js';
import { RegisterRequestBody } from '../../zod-schemas/users-schemas.js';
import { mongoUserRepository } from '../../../persistence/mongo-user-repository.js';


export const registerWithPasswordService = new RegisterWithPasswordService(mongoUserRepository)


export const register = async(req: Request<{}, {}, RegisterRequestBody>, res: Response)=>{
    
    const {email, password} = req.body
    
    const user = await registerWithPasswordService.execute(email, password)

    return res.status(201).send({message: 'User created with email: ' + user.toObj().email, success: true})
    
}