const mongoose = require("mongoose");

const connectDB=async ()=>{
    try {
        const MONGO_URL=process.env.MONGO_URL;
        const conn=await mongoose.connect(MONGO_URL);
        console.log("Database Connected")
    } catch (error) {
        console.log(error)
    }
}

module.exports=connectDB