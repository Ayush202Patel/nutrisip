const userModel = require("../model/userModel");
const bcrypt = require("bcrypt")

const register=async (req,res)=>{
    try {
        const {name,email,password}=req.body;
        if(!name||!email||!password){
            return res.status(500).send({
                success:false,
                message:"All Fields are compulsory"
            })
        }
        const check=await userModel.findOne({email});
        if(check){
            return res.status(500).send({
                success:true,
                message:"User Already Exist Try Logging In"
            })
        }
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt);
        const user=await new userModel({name,email,password:hashedPassword});
        await user.save();
        res.status(200).send({
            success:true,
            message:"Registration Successful"
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:true,
            message:"Something Went Wrong"
        })
    }
}

const login = async (req,res)=>{
    try {
        const {email,password}=req.body;
        if(!email||!password){
            return res.status(500).send({
                success:false,
                message:"All fields are compulsory"
            })
        }
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(500).send({
                success:false,
                message:"Wrong email / New User Try Register"
            })  
        }
        const compare=await bcrypt.compare(password,user.password);
        if(!compare){
            return res.status(400).send({
                success:false,
                message:"Wrong password"
            })
        }
        res.status(200).send({
            success:true,
            message:"Login Successful"
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Something Went Wrong"
        })
    }
}

module.exports={register,login}