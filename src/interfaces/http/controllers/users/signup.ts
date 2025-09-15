import { Request, Response } from 'express';
import { RegisterWithPassword } from '../../../../application/use-cases/register-with-password';
import { mongoUserRepository } from '../../../persistence/mongo-user-repository';
import { RegisterRequestBody } from '../../zod-schemas/users-schemas';


export const registerWithPassword = new RegisterWithPassword(mongoUserRepository)


export const signup = async(req: Request<{}, {}, RegisterRequestBody>, res: Response)=>{
    

    const {email, password} = req.body
    

    
    await registerWithPassword.execute(email, password)

}