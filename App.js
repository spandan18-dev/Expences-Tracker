import express from 'express'
import dotenv from 'dotenv'; dotenv.config()
import connectdb from './config/db.js'
import router from './routes/exp.route.js'

const app = express()

const port = process.env.PORT
const dburl = process.env.MONGODB_URL
connectdb(dburl)

app.use("/",router)

app.listen(port,()=>{
    console.log(`server up ! http://localhost:${port}`)
})
