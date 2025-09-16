import './bootstrap'
import express, {Express} from 'express';
import { router } from './infrastructure/http/routers/main-router.js';
import { errorMiddleware } from './infrastructure/http/middleware/error-middleware.js';


const app: Express = express() 



app.use(express.json())

//? This will be logger middleware
app.use((req, _res, next)=>{ console.log('New request to: ' + req.url); next()})


//* TEST
app.get('/', (_req, res)=>{
    res.send('Test Completed')
})

app.use('/api', router)



app.use(errorMiddleware)


const PORT = process.env.PORT || 3001 

app.listen(3001, ()=>{
    console.log('Server is running on port: ' + PORT);
})