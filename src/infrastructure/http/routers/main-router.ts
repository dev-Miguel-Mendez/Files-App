import {Router} from 'express'
import { register } from '../controllers/users/register.js'
import { validate } from '../middleware/validator.js'
import { registerRequestSchema } from '../zod-schemas/users-schemas.js'
import { uploadSingleValidated } from '../middleware/multer.js'


export const router = Router()


router.post('/register/password', validate(register, registerRequestSchema))

router.post('/upload-file', uploadSingleValidated, )