import { UserRepository } from "../interfaces/user-repository-interface.js";

export class RegisterWithPassword {

    constructor(
        private userRepository: UserRepository
    ){}


    async execute(email: string, password: string){

        await this.userRepository.saveToPersistence(email, password);
        

    }

}