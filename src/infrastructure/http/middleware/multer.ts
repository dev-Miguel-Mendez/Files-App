
import { NextFunction, Request, Response } from 'express';
import multer, { MulterError } from 'multer';
import { UnprocessableEntity } from '../../../entities/errors.js';

export const multerMemory = multer({
	storage: multer.memoryStorage(),
	limits: {
		fields: 1,
		files: 1,
		fileSize: 10e7, //$ 100 MB
	},
});








//% This would normally be passed to the route handler like:
// router.post('/put-object-single', multerMemory.single('myFieldKey'), putObjectSingleController)
//% But since Multer resolves errors with callbacks instead of with promises we cannot pass "uploadMemory" to validate()


//% that is why we need this call back that works with an error callback.
export const uploadSingleValidated = (req: Request, res: Response, next: NextFunction) => {
    //* multerMemory.<method> returns you a function for express to call with req and res
    multerMemory.single('my_field_name')(req, res, (err: any) => {
        if (err instanceof MulterError)  return next(new UnprocessableEntity(err.message)) 
        if (err) return next(err)
        next();
    });
};
