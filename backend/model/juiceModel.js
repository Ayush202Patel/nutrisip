const mongoose= require("mongoose");

const juiceSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    rating:{
        type:String,
        required:true
    },
},{timestamps:true})


const juiceModel=mongoose.model("juice",juiceSchema)

module.exports = juiceModel