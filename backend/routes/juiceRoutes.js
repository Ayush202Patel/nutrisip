const express = require('express')
const multer = require('multer')
const { addJuice, showAll, deleteOne } = require("../controller/juiceController");

const juiceRoutes=express.Router();


const storage=multer.diskStorage({
    destination:"uploads",
    filename:(req, file, cb)=>{
        return cb (null,`${Date.now()}${file.originalname}`)
    }
})

const upload=multer({storage:storage})

juiceRoutes.post("/add",upload.single("image"),addJuice)
juiceRoutes.get("/show",showAll)
juiceRoutes.post("/delete",deleteOne)
module.exports =  juiceRoutes;