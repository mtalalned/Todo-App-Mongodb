// const express = require('express')
import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import connectDB from "./src/db/index.js"
import todoRoutes from "./src/routes/todo.routes.js"


const app = express()
dotenv.config()
app.use (express())
app.use (cors())
app.use ('/api/v1' , todoRoutes)

app.get('/', (req, res) => {
  res.send('Hello World!')
})


connectDB()
.then(()=> {
    app.listen(process.env.PORT, () => {
      console.log(`Example app listening on port ${process.env.PORT}`)
    })
}) .catch ((error)=>{
    console.log("MONGO DB connection failed !!! ", error);
})
