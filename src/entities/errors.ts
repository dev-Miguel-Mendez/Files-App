export class AppError extends Error {
    constructor(message: string, public statusCode: number, public InternalError: any){
        super(message)
    }
}




export class BadRequest extends AppError {
    constructor(message: string){
        super(message, 400, null)
    }
}



export class UnprocessableEntity extends AppError {
    constructor(message: string) {
        super(message, 422, null);
        this.message = message;
    }
}




export class InternalException extends AppError {
    constructor(error: any) {
        super('Internal exception', 500, error);
    }
}