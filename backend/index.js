const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const tourRoute = require('./routes/tours.js')
const userRoute = require('./routes/users.js')

dotenv.config()
const app = express()
const port = process.env.PORT || 8000

// //for testing
// app.get("/",(req,res)=>{
//     res.send("api is working")
// })

//database connection

//for cloud if error encountered then:

//mongoose.set("strictQuery", false);

const connect = async()=>{
    try{
        await mongoose.connect("mongodb://0.0.0.0:27017/booking-system",{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })

        console.log("Database connected")
    }catch(err)
    {

    }
}



//middleware
app.use(express.json())
app.use(cors())
app.use(cookieParser());
app.use('/tours', tourRoute)
app.use('/users',userRoute)

app.listen(port,()=>{
    connect();
    console.log("server listening on port", port)
})


//in package.json if input: module is given then we can use import in the place of require and const 