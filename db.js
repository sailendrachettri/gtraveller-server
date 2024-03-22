const mongoose = require("mongoose")
const dotenv = require("dotenv");

dotenv.config();

const connect = mongoose.connect(process.env.REACT_APP_MONGODB_URL)

connect.then(()=>{
    console.log("Database connected successfully!");
}).catch(()=>{
    console.log("Database CANNOT be connected!");
})