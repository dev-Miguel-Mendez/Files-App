import dotenv from 'dotenv'


dotenv.config({path: './config/shared.env'})


const requiredEnv = [
    'MONGODB_CONNECTION_URL'
]



requiredEnv.map((envVar)=>{

    if(!process.env[envVar]){
        throw new Error(`ENV "${envVar}" is not missing`)
    }

})