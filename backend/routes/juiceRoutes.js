const express = require('express')
const multer = require('multer')
const { addJuice, showAll, deleteOne, deleteByName } = require("../controller/juiceController");
const { register, login } = require('../controller/userController');

const juiceRoutes=express.Router();


const storage=multer.diskStorage({
    destination:"uploads",
    filename:(req, file, cb)=>{
        return cb (null,`${Date.now()}${file.originalname}`)
    }
})

const upload=multer({storage:storage})
//Admin Product Management
juiceRoutes.post("/add",upload.single("image"),addJuice)
juiceRoutes.get("/show",showAll)
juiceRoutes.post("/delete",deleteOne)
juiceRoutes.post("/deleteByName",deleteByName)

// User Management
juiceRoutes.post("/registerUser",register)
juiceRoutes.post("/loginUser",login)

module.exports =  juiceRoutes;