import { User } from "../../entities/user.js";

export interface UserRepository {
    
    saveToPersistence: (user: User)=> Promise<any> 

}