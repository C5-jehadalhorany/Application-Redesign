const express = require("express");
require("dotenv").config();
const cors = require("cors");
require("./models/db");
const app = express();

const userRotuer = require("./routes/user");
const loginRotuer = require("./routes/login");
const gropRotuer = require("./routes/grop");



app.use(express.json());
app.use(cors());
app.use("/user", userRotuer);
app.use("/login", loginRotuer);
app.use("/grop", gropRotuer);

const PORT = process.env.PORT || 5000;


app.listen(PORT, (() => {
    console.log(`server on ${PORT}`);
}))