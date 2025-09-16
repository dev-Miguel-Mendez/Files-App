import { User } from "../../entities/user.js";
import { UserRepository } from "../interfaces/user-repository-interface.js";

export class RegisterWithPassword {

    constructor(
        private userRepository: UserRepository
    ){}


    async execute(email: string, password: string){

        const user = User.createUser(email, password)
        await this.userRepository.saveToPersistence(user)
        

        return user

    }

}