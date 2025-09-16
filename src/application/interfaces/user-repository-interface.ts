import { User } from "../../entities/user.js";

export interface UserRepository {
    
    saveToPersistence: (user: User, isNew: boolean)=> Promise<any> 

}