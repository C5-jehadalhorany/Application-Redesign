const express = require("express");

const { login} = require("../controllers/user")

const loginRotuer = express.Router()


loginRotuer.post("/",login);

module.exports=loginRotuer;