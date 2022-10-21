const express = require("express");

const { creategrop,createSubJob,getallsub} = require("../controllers/job");

const gropRotuer = express.Router();


gropRotuer.post("/grop",creategrop);
gropRotuer.post("/sub",createSubJob);
gropRotuer.get("/",getallsub);

module.exports=gropRotuer;