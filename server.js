if (process.env.NODE_ENVIRONMENT === "production"){
    require('dotenv').config()
}
const express = require('express')
const mongoose = require('mongoose')
const user_routes = require('./routes/user')
const cors = require('cors')
const port = process.env.PORT || 3000
const app = express()
app.use(cors())
app.use('/user',user_routes)

app.listen(port,()=>{
    console.log(`Server listening to port ${port}`)
})