export interface UserRepository {
    
    saveToPersistence: (email: string, password: string)=> Promise<any> 

}