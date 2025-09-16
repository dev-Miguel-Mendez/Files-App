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



export class InternalException extends AppError {
    constructor(public error: any) {
        super('Internal exception', 500, error);
    }
}