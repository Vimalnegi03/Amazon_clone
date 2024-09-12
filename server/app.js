import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
const app=express()
const port=8005
app.listen(8005,()=>{
    console.log('server is running on port 8005')
})