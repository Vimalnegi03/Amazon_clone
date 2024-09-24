import express, { urlencoded } from 'express'
import dotenv from 'dotenv'
dotenv.config()
import connectTodb from './db/conn.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
const app=express()
import DefaultData from './defaultdata.js'
import userRoutes from './routes/router.js'
app.use(express.json())
app.use(cookieParser(""))
app.use(cors({
    origin: 'http://localhost:5173',  // your frontend origin
    credentials: true  // allow credentials to be sent with requests
}));
app.use(userRoutes)
app.listen(process.env.PORT,()=>{
    connectTodb()
    console.log('server is running on port 8005')
})
DefaultData()
export default app;