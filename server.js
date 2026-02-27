import express from 'express'
import connectDb from './utils/db.js'
import 'dotenv/config.js'
import productRoute from './routes/productRoute.js'
import proposalRoute from './routes/proposalRoute.js'

const app = express()
const port = 5000 || process.env.PORT

// middelware 
app.use(express.json())

//db connect 
connectDb()

app.get('/',(req,res)=>{
    res.send('hello')
})

app.use('/api/product',productRoute)
app.use('/api/proposal',proposalRoute)

app.listen(port,()=>{
    console.log(`server is running at ${port}`)
})