import express from 'express'
import dotenv from 'dotenv'; dotenv.config()
import connectdb from './config/db.js'
import router from './routes/exp.route.js'
import { join } from 'path';

const app = express()

const port = process.env.PORT
connectdb()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set("view engine","ejs")
app.set(join(process.cwd(),"views"))

app.use("/",router)

app.listen(port,()=>{
    console.log(`server up ! http://localhost:${port}`)
})
