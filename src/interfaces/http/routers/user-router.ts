import {Router} from 'express'
import { signup } from '../controllers/users/signup'


export const router = Router()


router.post('/register/password', signup)