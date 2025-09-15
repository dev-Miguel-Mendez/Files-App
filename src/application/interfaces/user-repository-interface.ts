export interface UserRepository {
    
    saveToPersistence: ()=> Promise<any> 

}