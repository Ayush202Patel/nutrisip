const juiceModel = require("../model/juiceModel");
const fs=require("fs")
const addJuice=async (req,res)=>{
    try {
        let {name,price,description,image,rating}=req.body;
        image=req.file.filename;
        if(!name || !price || !description || !image || !rating){
            return res.status(500).send({
                success:false,
                message:"All fields are compulsory ",
            })    
        }
        const juice=await juiceModel({name,price,description,image,rating});
        await juice.save();
        res.status(200).send({
            message:"Data Added Successfully ",
            success:true
        })
    } catch (error) {
        console.log(error)
    }
}
const deleteByName=async (req,res)=>{
    try{
        let {name}=req.body;
        if(!name){
            return res.statud(200).send({
                success:false,
                message:"All Fields are compulsory"
            })
        }
        const find=await juiceModel.findOne({name});
        if(find){
            await juiceModel.findOneAndDelete(find._id);
            res.status(200).send({
                message:"Deleted Successfully",
                success:true
            })
        }
    }catch(error){
        console.log(error)
    }

}
const showAll=async (req,res)=>{
    try{
        const juices=await juiceModel.find({});
        res.status(200).send({
        success:true,
        juices:juices
        })
    }catch(error){
        console.log(error)
    }
}

const deleteOne=async(req,res)=>{
    try {
        const {_id}=req.body;
        const juice = await juiceModel.findOne({_id});
        fs.unlink(`./uploads/${juice.image}`,()=>{});
        await juiceModel.findByIdAndDelete({_id});
        res.status(200).send({
            success:true,
            message:"Item Deletd Successfully"
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success:false,
            message:"Not successful"
        })
    }    
}
module.exports={addJuice,showAll,deleteOne,deleteByName}
