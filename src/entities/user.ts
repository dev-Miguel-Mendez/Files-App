import { randomUUID } from "node:crypto";

export class User {

    constructor(
        private id: string,
        private readonly email: string,
        private readonly password: string
    ){}

    static createUser(email: string, password: string): User{
        return new User(randomUUID(), email, password)
    }


    toObj(){
        return {
            id: this.id,
            email: this.email,
            password: this.password
        }
    }



}