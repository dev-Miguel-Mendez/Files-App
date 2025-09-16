import { User } from "../../entities/user.js";
import { UserPersistence } from "./user-persistence.js";

export interface UserRepository {
    
    saveToPersistence: (user: UserPersistence, isNew: boolean)=> Promise<any> 


    findById: (id: string)=> Promise<User>



}