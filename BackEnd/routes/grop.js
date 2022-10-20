const express = require("express");

const { creategrop,createSubJob} = require("../controllers/job");

const gropRotuer = express.Router();


gropRotuer.post("/grop",creategrop);
gropRotuer.post("/sub",createSubJob);

module.exports=gropRotuer;