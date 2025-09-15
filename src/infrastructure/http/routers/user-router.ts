import {Router} from 'express'
import { signup } from '../controllers/users/signup'
import { validate } from '../middleware/validator'


export const router = Router()


router.post('/register/password', validate(signup))