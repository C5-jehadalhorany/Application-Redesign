const express = require("express");

const {userjop,getjopUser } = require("../controllers/JobUser");

const jopUserRotuer = express.Router();


jopUserRotuer.post("/",userjop);
jopUserRotuer.get("/",getjopUser)


module.exports=jopUserRotuer;