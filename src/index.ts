import express, {Express} from 'express';
import { RegisterWithPassword } from './application/use-cases/register-with-password';
import { router } from './interfaces/http/routers/user-router';



const app: Express = express() 



app.use(express.json())

//? This will be logger middleware
app.use((req, res, next)=>{ console.log('New request to: ' + req.url); next()})

app.use('/api', router)








app.listen(3001, ()=>{
    console.log('test');
})