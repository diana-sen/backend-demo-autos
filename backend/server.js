const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

//create server and app

const app = express()
app.listen(port, () =>console.log(`server started on port ${port}`))

app.use('/api/autos',require('./routes/autosRoutes'))


//connect to db
const colors = require('colors')
const connectDB = require('./config/db')
connectDB()