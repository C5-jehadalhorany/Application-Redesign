const express = require("express");

const { getalluser,
    getuserbyid,
    createuser } = require("../controllers/user")

const userRotuer = express.Router()


userRotuer.get("/",getalluser);
userRotuer.get("/:id",getuserbyid);
userRotuer.post("/",createuser);

module.exports=userRotuer;





