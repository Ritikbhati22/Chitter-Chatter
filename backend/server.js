const express = require('express')
const dotenv = require('dotenv')
const { chats } = require("./data/data")
const connectDB = require('./config/db')
const colors = require('colors')
const userRoutes = require('./Routes/userRoutes')

const { notFound, errorHandler } = require('./middleware/error')
dotenv.config()
connectDB()
const app = express()
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Api run Sucessfully")
});
app.use('/api/user', userRoutes)
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`on port ${PORT}`.yellow.bold)) 