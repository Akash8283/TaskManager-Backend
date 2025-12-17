require("dotenv").config()
const express = require("express")
const cors = require('cors')
const router = require("./routes/routing")
require('./config/db')
// create expresee server
const taskManagerServer = express()
// enabling cors in express server
taskManagerServer.use(cors())
// add json parser to server
taskManagerServer.use(express.json())
// use router in server
taskManagerServer.use(router)
// create a port 
const PORT = process.env.PORT || 3000

taskManagerServer.listen(PORT,()=>{
    console.log("Server Started and waiting for client request");
})

taskManagerServer.get('/',(req,res)=>{
    res.status(200).send("<h1>Server Started and waiting for client request</h1>")
})