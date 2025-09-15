import { UserRepository } from "../interfaces/user-repository-interface";

export class RegisterWithPassword {

    constructor(
        private userRepository: UserRepository
    ){}


    async execute(email: string, password: string){

        this.userRepository.saveToPersistence();
        

    }

}