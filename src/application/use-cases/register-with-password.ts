import { UserRepository } from "../interfaces/user-repository-interface";

export class RegisterWithPassword {

    constructor(
        private userRepository: UserRepository
    ){}


    async execute(userInfo: any){

        this.userRepository.saveToPersistence();
        

    }

}