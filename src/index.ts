import './bootstrap'
import express, {Express} from 'express';
import { router } from './infrastructure/http/routers/user-router.js';


const app: Express = express() 



app.use(express.json())

//? This will be logger middleware
app.use((req, _res, next)=>{ console.log('New request to: ' + req.url); next()})

app.use('/api', router)






const PORT = process.env.PORT || 3001 

app.listen(3001, ()=>{
    console.log('Server is running on port: ' + PORT);
})